import React, {useState} from 'react'
import Layout from "../../components/Layout";
import styled from "styled-components";
import { TagsSection } from "./TagsSection";
import { NotesSection } from "./NotesSection";
import { CategorySection } from "./CategorySection";
import { NumberPadSection } from "./NumberPadSection";



const AccountLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const Account = ()=>{
  const [selected, steSelected] = useState({
    tabs: [] as number[],
    note: '',
    category: '-' as('-' | '+'),
    amount: 0
  })

  const onChange = (obj: Partial<typeof selected>) => {
    steSelected({...selected, ...obj})
  }

  return (
    <AccountLayout name="Account">

      <TagsSection value={selected.tabs}
                   onChange={(tabs) => onChange({tabs})}/>

      <NotesSection  node={selected.note}
                     onChange={(note) => onChange({note})}/>

      <CategorySection  value={selected.category}
                        onChange={async (category) => onChange({category})}/>

      <NumberPadSection  value={selected.amount}
                         onChange={(amount) => onChange({amount})}
                         onOk={ () => console.log("ok") }/>

    </AccountLayout>
  )
};

export default Account