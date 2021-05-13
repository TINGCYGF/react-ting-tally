import React, {useState} from 'react'
import Layout from "../components/Layout";
import {CategorySection} from "./Account/CategorySection";
import {RecordsItem, useRecords} from "./Bus/useRecords";
import useTage from "./Bus/useTage";
import styled from "styled-components";
import day from "dayjs";


const Wrapper = styled.div`
  background: #eee;

  .date {
    text-align: center;
    font-size: 14px;
    padding-top: 2px;
  }

  .item {
    > div {
      background: #f3f6fa;
      margin: 6px;
      border-radius: 8px;
    }

    .upside {
      display: flex;
      align-items: center;
      padding: 6px 12px 2px;

      > .tag-font {
        font-weight: bold;
        font-size: 16px;
        white-space: nowrap;
        align-items: center;
      }

      > ul {
        display: flex;
        align-items: center;

        > li {
          white-space: nowrap;
          background: #2f3542;
          border-radius: 18px;
          padding: 2px 8px;
          font-size: 12px;
          margin: 8px 6px;
          color: #e5e4e4;
        }
      }
    }

    .bom-part {
      display: flex;
      justify-content: space-between;
      padding: 2px 12px 6px;

      .bom-mou {
        font-weight: bold;
        font-size: 18px;
      }

      .bom-time {
        font-size: 14px;
        color: #737070;
      }
    }

    .remark {
      padding: 0 12px 6px;
      font-size: 12px;
      color: #696868;
    }
  }
`


const Detail = () => {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const {records} = useRecords()
  const {getName} = useTage()
  const hash: { [K: string]: RecordsItem[] } = {}
  const selectedRecords = records.filter(r => r.category === category)

  //将相同日期放入hash
  selectedRecords.forEach(r => {
    const key = day(r.createAt).format('YYYY-MM')
    if (!(key in hash)) {
      hash[key] = []
    }
    hash[key].push(r)
  })
  //转为数组排序
  const arr = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0
    if (a[0] > b[0]) return -1
    if (a[0] < b[0]) return 1
    return 0
  })

  return (
    <Layout name="detail">
      <Wrapper>
        <CategorySection
          value={category}
          onChange={value => setCategory(value)}
        />
        {arr.map(([date, records]) => <div key={date}>
          <h4 className="date">{date}</h4>
          <div className="item">
            {
              records.map(r => <div key={r.createAt}>
                <div className="upside">
                  <span className="tag-font">标签: </span>
                  <ul>{r.tagIds.map(tagId => <li key={tagId}>{getName(tagId)}</li>)}</ul>
                </div>
                <div className="bom-part">
                  <span className="bom-mou">金额 ￥{r.amount}</span>
                  <span className="bom-time">{day(r.createAt).format('YYYY年MM月DD日')}</span>
                </div>
                {r.note !== '' && <div className="remark">
                    <span>备注: </span>
                    <span>{r.note}</span>
                  </div>}
              </div>)}
          </div>
        </div>)}
      </Wrapper>
    </Layout>
  )
};

export default Detail