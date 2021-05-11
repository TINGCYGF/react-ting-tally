import React from 'react'
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
  return (
    <AccountLayout name="Account">
      <TagsSection />

      <NotesSection />

      <CategorySection />

      <NumberPadSection />

    </AccountLayout>
  )
};

export default Account