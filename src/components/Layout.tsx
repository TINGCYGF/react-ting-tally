import Nav from "./Nav";
import React, {useEffect, useState} from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  height:100vh;
  min-height: 620px;
  flex-direction: column;
  > .topNav{
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: #2f3542;
  }
  > main{
    flex-grow: 1;
    overflow: auto;
  }
`

type Props = {
  name: string;
  className?: string;
  children: any
}

const Layout = (props: Props) => {
  const [text] = useState(window.localStorage.getItem("title")||'账 单')

  useEffect(() => {}, [text])
  return (
    <LayoutWrapper>
      <div className="topNav">{text}</div>
      <main className={props.className}>
        {props.children}
      </main>
      <Nav/>
    </LayoutWrapper>
  )

}

export default Layout