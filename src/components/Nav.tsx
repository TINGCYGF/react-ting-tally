import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const NavWrapper = styled.div`
  background: #e5e5e5;
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
  }
`

const Nav = () => {
  return (
    <NavWrapper>
      <NavLink className='item' activeClassName="selected" to="/home"><Icon name='home'/>首页</NavLink>
      <NavLink className='item' activeClassName="selected" to="/detail"><Icon name='detail'/>明细</NavLink>
      <NavLink className='item' activeClassName="selected" to="/account"><Icon name='account'/>记账</NavLink>
      <NavLink className='item' activeClassName="selected" to="/label"><Icon name='label'/>标签</NavLink>
      <NavLink className='item' activeClassName="selected" to="/statistics"><Icon name='statistics'/>统计</NavLink>
    </NavWrapper>
  )
}

export default Nav