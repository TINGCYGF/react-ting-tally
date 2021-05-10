import Nav from "./Nav";
import React from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  height:100vh;
  min-height: 620px;
  flex-direction: column;
  >main{
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
  return (
    <LayoutWrapper>
      <main className={props.className}>
        {props.children}
      </main>
      <Nav />
    </LayoutWrapper>
  )

}

export default Layout