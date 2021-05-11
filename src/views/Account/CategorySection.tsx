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

type Props = {
  value: '-' | '+';
  onChange: (value: '-' | '+') => {}
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'}
  const [categoryList] = useState<(keyof typeof categoryMap)[]>(['-', '+'])
  const selected =props.value

  return (
    <CategorySectionStyle>
      <ul>
        {
          categoryList.map(category =>
            <li onClick={() => props.onChange(category)}
                className={selected===category ? "selected": ''}
                key={category}
            >{categoryMap[category]}
            </li>
          )
        }
      </ul>
    </CategorySectionStyle>
  )
}

export { CategorySection }