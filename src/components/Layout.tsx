import Nav from "./Nav";
import React, {useEffect, useRef, useState} from "react";
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
  scrollTop?: number;
}

const Layout: React.FC<Props> = (props) => {
  const [text] = useState(window.localStorage.getItem("title")||'账 单')
  const mainRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setTimeout(() => {
      if(mainRef.current){
      mainRef.current.scrollTop = props.scrollTop as number;
      }
    }, 0)
  }, [props.scrollTop])
  return (
    <LayoutWrapper>
      <div className="topNav">{text}</div>
      <main ref={mainRef} className={props.className}>
        {props.children}
      </main>
      <Nav/>
    </LayoutWrapper>
  )
}

Layout.defaultProps = {
  scrollTop: 0
}

export default Layout