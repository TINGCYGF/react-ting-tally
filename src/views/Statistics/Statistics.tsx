import React from 'react';
import Layout from 'components/Layout';
import {getDate} from '../Bus/getDate';
import {LineChart} from './LineChart';
import styled from 'styled-components';
import {useRecords} from '../Bus/useRecords';
import dayjs from 'dayjs';


const Wrapper = styled.div`
  .show{
    text-align: center;
    > p{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f3f6fa;
      border-radius: 4px;
      padding:12px;
      margin: 2px 10px;
      .mou{
        font-weight: bold;
        font-size: 18px;
      }
      .time{
        font-size: 14px;
        color: #737070;
      }
    }
  }
`

const Statistics = () => {
  const {records} = useRecords();
  const {year} = getDate();
  const {month} = getDate();
  const monthLastDay = dayjs().endOf('month').format('DD');
  const filterRecords = records.filter((record) => {
    const recordYear = dayjs(record.createAt).format('YYYY');
    const recordMonth = dayjs(record.createAt).format('MM');
    return recordYear === year && recordMonth === month;
  });
  const expenseRecords = filterRecords.filter((record) => record.category === '-');
  const incomeRecords = filterRecords.filter((record) => record.category === '+');
  const accountTotal = () => {
    let expense = 0;
    let income = 0;
    for (let i = 0; i < expenseRecords.length; i++) {
      expense += expenseRecords[i].amount;
    }
    for (let i = 0; i < incomeRecords.length; i++) {
      income += incomeRecords[i].amount;
    }
    return {expense,income}
  };
  const array = () => {
    const expenseArray = [];
    const incomeArray = [];
    const xArray = [];
    for (let i = 0; i < parseInt(monthLastDay); i++) {
      expenseArray[i] = 0;
      incomeArray[i] = 0;
      xArray[i] = i + 1;
    }
    for (let i = 0; i < expenseRecords.length; i++) {
      const index = parseInt(dayjs(expenseRecords[i].createAt).format('MM'));
      expenseArray[index + 1] += expenseRecords[i].amount;
    }
    for (let i = 0; i < incomeRecords.length; i++) {
      const index = parseInt(dayjs(incomeRecords[i].createAt).format('MM'));
      incomeArray[index + 1] += incomeRecords[i].amount;
    }
    return {expenseArray, incomeArray, xArray};
  };
  return (
    <Layout name='统计'>
      <Wrapper>
        <div className="topBar">
        </div>
        <LineChart value={array()}/>
        <div className="show">
          <p><span className="mou">支出: ￥{accountTotal().expense}</span><span className="time">{getDate().year}年{getDate().month}月</span></p>
          <p><span className="mou">收入: ￥{accountTotal().income}</span><span className="time">{getDate().year}年{getDate().month}月</span></p>
        </div>
      </Wrapper>
    </Layout>
  );
};

export {Statistics};