import React from 'react';
import Login from "./pages/login/Login";
import {BrowserRouter, Route, Switch} from 'react-router-dom'


const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" name="login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
};


export default Root;