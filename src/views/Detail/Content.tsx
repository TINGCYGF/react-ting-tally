import {RecordsItem} from "../Bus/useRecords";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import React, { useState} from "react";
import styled from "styled-components";
import {CategorySection} from "../Account/CategorySection";
import {TagsSection} from "../Account/TagsSection";
import {useRecords} from "../Bus/useRecords"

const Center = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 20px 3px;
  > button {
    margin: 8px;
  }
`;

const InputWrapper = styled.div`
  background:white;
  padding: 2px 16px;
`;

type Props = {
  record: RecordsItem
}
const Content: React.FC<Props> = (props) => {
  const {deleteRecord, updateRecord} = useRecords()
  const [selected, steSelected] = useState(props.record)
  const [money, seyMoney] = useState(JSON.stringify(props.record.amount))
  const onChange = (obj: Partial<typeof selected>) => {
    steSelected({...selected, ...obj})
  }
  return (
    <div>
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({tagIds})}
      />
      <CategorySection
        value={selected.category}
        onChange={category => onChange({category})}
      />
      <InputWrapper>
        <Input label="金额：" type="text" placeholder="标签名"
               value={money}
               onChange={(e) => {
                 seyMoney(e.target.value)
               }}
        />
        <Input label="备注：" type="text" placeholder="标签名"
               value={selected.note}
               onChange={(e) => {
                 onChange( {note: e.target.value});
               }}
        />
      </InputWrapper>

      <Center>
        <Button onClick={() => {
          deleteRecord(props.record.createAt);
        }}>删除账单</Button>
        <Button onClick={() => {
             updateRecord(props.record.createAt, {...selected, amount: parseFloat(money)});
        }}>修改账单</Button>
      </Center>
    </div>
  )
}

export {Content}