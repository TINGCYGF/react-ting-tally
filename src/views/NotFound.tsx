import React from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  > p{
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #333333;
  }
  > a{
    padding: 20px 5px 2px 50x;
    font-size: 18px;
    font-weight: bold;
    color: #333333;
    border-bottom: 1px solid #333333;
  }
`

const NotFound = ()=>{
  return (
    <Wrapper>
      <p>404 页面不存在，请检查输入路径</p>
      <br/>
      <Link to='/account'>返回主页</Link>
    </Wrapper>
  )
};

export default NotFound
