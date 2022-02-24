import React, { useState, useEffect } from "react";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter as router } from "@ionic/react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function UnauthApp({ setCurrentUser }) {
  return (
    <Switch>
      <Route exact path="/">
        <Login setCurrentUser={setCurrentUser}  className="login_page"/>
      </Route>
      <Route exact path="/signup">
        <Signup setCurrentUser={setCurrentUser} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default UnauthApp;