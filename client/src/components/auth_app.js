import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./nav_bar";
import Home from "../pages/Home";
import Saved from "../pages/Saved";
import Explore from "../pages/Explore";
import TrailPage from "../components/trail_page";
import Profile from "../pages/Profile";
import Reviews from "../pages/Profile";

function AuthApp({ setCurrentUser, currentUser }) {
  function handleLogOut() {
    fetch(`/logout`, {
      method: "DELETE",
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
      }
    });
  }

  return (
    <div>
      <Redirect to="/home" />
      <NavBar logout={handleLogOut} />
      <Switch>
        <Route path="/home">
          <Home currentUser={currentUser} />
        </Route>
        <Route path="/saved">
          <Saved />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/trail_page/:id">
          <TrailPage />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
      </Switch>
    </div>
  );
}

export default AuthApp;
