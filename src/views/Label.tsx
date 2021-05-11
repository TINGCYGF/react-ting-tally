import React from 'react'
import Layout from "../components/Layout";
import useTage from "./Bus/useTage";
import styled from "styled-components";
import Icon from "../components/Icon";

const TagList = styled.ul`
  font-size: 16px;
  background: white;
  margin: 30px 5px;

  > li{
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    > div{display: flex;}
  }
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > button{
    font-size: 18px;
    padding: 8px;
    border: none;
    background: aquamarine;
    border-radius: 4px;
    color: white;
  }
`

const Label = () => {
  // @ts-ignore
  const {tags, editLabel, deleteLabel} = useTage();

  return (
    <Layout name="label">
      <TagList>
        {
          tags.map((tag) =>
          <li key={tag.id}>
            <span className="oneLine">{tag.name}</span>
            <div className='icons'>
              <Icon name='edit' className='edit' edit={() => {
                editLabel(tag);
              }}/>
              <Icon name='delete' className='delete' edit={() => {
                deleteLabel(tag);
              }}/>
            </div>
          </li>
          )
        }
      </TagList>

      <Center>
        <button>添加标签</button>
      </Center>
    </Layout>
  )
};

export  {Label}