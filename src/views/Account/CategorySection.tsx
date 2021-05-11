import React, {useState} from "react";
import styled from "styled-components";

const CategorySectionStyle = styled.div`
  font-size: 24px;
  > ul{
    display: flex;
    background: #c4c4c4;
    > li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        height: 3px;
        width: 100%;
        background: #333333;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`


const CategorySection: React.FC = () => {
  const categoryMap = {'-': '支出', '+': '收入'}
  const [categoryList] = useState<(keyof typeof categoryMap)[]>(['-', '+'])
  const [selected, setSelected] = useState<string>('-')

  return (
    <CategorySectionStyle>
      <ul>
        {
          categoryList.map(category =>
            <li onClick={() => setSelected(category)}
                className={selected===category ? "selected": ''}
            >{categoryMap[category]}
            </li>
          )
        }
      </ul>
    </CategorySectionStyle>
  )
}

export { CategorySection }