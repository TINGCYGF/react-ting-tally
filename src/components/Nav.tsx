import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const NavWrapper = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
  .item{
    display: flex;
    flex-grow: 1;
    padding: 6px 0;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    .icon {
      width: 24px;
      height: 24px;
    }
    &.selected{
      color: #f1f2f6;
      background: #747d8c;
      .icon{
        fill: #f1f2f6;
        background: #747d8c;
      }
    }
  }
`


const Nav: React.FC = () => {
  const setText = (text:string) => {
    window.localStorage.setItem("title", text)
  }
  return (
    <NavWrapper>

      <NavLink className='item'
               activeClassName="selected"
               to="/detail"
               onClick={() => setText("账 单")}
      ><Icon name='detail'/>账单</NavLink>

      <NavLink className='item'
               activeClassName="selected"
               to="/account"
               onClick={() => setText("记 账")}
      ><Icon name='account'/>记账</NavLink>

      <NavLink className='item'
               activeClassName="selected"
               to="/label"
               onClick={() => setText("标 签")}
      ><Icon name='label'/>标签</NavLink>

      <NavLink className='item'
               activeClassName="selected"
               to="/statistics"
               onClick={() => setText("统 计")}
      ><Icon name='statistics'/>统计</NavLink>

    </NavWrapper>
  )
}

export default Nav