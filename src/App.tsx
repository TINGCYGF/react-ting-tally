import React from 'react';
import styled from "styled-components";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import {Label} from './views/Label';
import Details from 'views/Detail/Details';
import Account from 'views/Account/Account';
import {Statistics} from 'views/Statistics/Statistics';
import NotFound from 'views/NotFound';
import { Detail } from 'views/Detail/Detail';



const Wrapper = styled.div`
  height:100vh;
  display: flex;
  flex-direction: column;
  background: #eee;
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/details"><Details/></Route>
          <Route exact path="/detail/:id"><Detail/></Route>
          <Route path="/account"><Account/></Route>
          <Route path="/label"><Label/></Route>
          <Route path="/statistics"><Statistics/></Route>
          <Redirect exact from="/" to="/account"/>
          <Route path="*"><NotFound/></Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
