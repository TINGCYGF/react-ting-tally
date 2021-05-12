import React, {useState} from 'react'
import Layout from "../../components/Layout";
import styled from "styled-components";
import { TagsSection } from "./TagsSection";
import { NotesSection } from "./NotesSection";
import { CategorySection } from "./CategorySection";
import { NumberPadSection } from "./NumberPadSection";
import {useRecords} from "../Bus/useRecords";

const AccountLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const defaultDate = {
  tagIds: [] as number[],
    note: '',
  category: '-' as('-' | '+'),
  amount: 0
}

const Account = () => {
  const [selected, steSelected] = useState(defaultDate)
  const {addRecords} = useRecords()

  const onChange = (obj: Partial<typeof selected>) => {
    steSelected({...selected, ...obj})
  }
  const submit = () => {
    addRecords(selected)
    alert("保存成功")
    steSelected(defaultDate)
  }

  return (
    <AccountLayout name="Account">

      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({tagIds})}
      />

      <NotesSection
        node={selected.note}
        onChange={(note) => onChange({note})}
      />

      <CategorySection
        value={selected.category}

        onChange={async (category) => onChange({category})}
      />

      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({amount})}
        onOk={submit}
      />

    </AccountLayout>
  )
};

export default Account