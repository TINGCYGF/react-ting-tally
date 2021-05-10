import React from 'react'
import Layout from "../../components/Layout";
import styled from "styled-components";
import TagsSection from "./TagsSection";



const NotesSection = styled.div`
  background: #f5f5f5;
  padding: 10px 16px;
  font-size: 14px;
  > label{
    display: flex;
    align-items: center;
    > span{ margin-right: 16px; white-space: nowrap; line-height: 46px;}
    > input{ display: block; width: 100%; background: none; line-height: 46px;}
  }

`

const CategorySection = styled.div`
  font-size: 24px;
  > ul{
    display: flex;
    background: #c4c4c4;
    > li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
    }
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
`

const NumberPadSection = styled.div`
  display: flex;
  flex-direction: column;
  > .output{
    display: flex;
    flex-direction: row;
    background: white;
    font-size: 36px;
    line-height: 76px;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25);
    > .text{
      font-weight: bold;
      white-space: nowrap;
    }
    > .number{
      flex-grow:1;
      text-align: right;
      margin-right: 25px;
    }
  }
  > .pad{
    > button{
      border: none;
      float:left;
      width:25%;
      height:52px;
      text-align: center;
      line-height: 52px;
      &.ok{
        height: 104px;
        line-height: 104px;
        float:right;
      }
      &.zero{
        width:50%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2), &:nth-child(5) {
        background: #E8E8E8;
      }
      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: #DEDEDE;
      }
      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: #D3D3D3
      }
      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: #C9C9C9
      }
      &:nth-child(14) {
        background: #BFBFBF
      }
      &:nth-child(12) {
        background: #B5B5B5;
      }
    }
  }

`

const AccountLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const Account = ()=>{
  return (
    <AccountLayout name="Account">
      <TagsSection />

      <NotesSection>
        <label>
          <span>备注: </span>
          <input type="text" placeholder="添加备注"/>
        </label>
      </NotesSection>

      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>

      <NumberPadSection>
        <div className="output">
          <div className="text">金额: </div>
          <div className="number">100</div>
        </div>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">确认</button>
          <button className="zero">0</button>
          <button>.</button>

        </div>

      </NumberPadSection>
    </AccountLayout>
  )
};

export default Account