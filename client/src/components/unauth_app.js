import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function UnauthApp({ setCurrentUser, setLoggedIn, loggedIn }) {
  return (
    <div>
      <Switch>
        <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/">
          <Login
            setCurrentUser={setCurrentUser}
            setLoggedIn={setLoggedIn}
            className="login_page"
          />
        </Route>
      </Switch>
    </div>
  );
}

export default UnauthApp;
