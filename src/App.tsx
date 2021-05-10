import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Nav from "./components/Nav";
import styled from "styled-components";

const Wrapper = styled.div`
  height:100vh;
  display: flex;
  flex-direction: column;
  background: #eee;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route path="/home">home</Route>
          <Route path="/detail">Detail</Route>
          <Route path="/account">Account</Route>
          <Route path="/label">Label</Route>
          <Route path="/statistics">statistics</Route>
          <Redirect exact from="/" to="/home"/>
          <Route path="*">NotFound</Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
