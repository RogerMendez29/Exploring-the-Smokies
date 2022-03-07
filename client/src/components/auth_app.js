import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./nav_bar";
import Home from "../pages/Home";
import Saved from "../pages/Saved";
import Explore from "../pages/Explore";
import TrailPage from "../components/trail_page";
import Profile from "../pages/Profile";
import Reviews from "../pages/Reviews";

function AuthApp({
  setCurrentUser,
  currentUser,
  savedTrails,
  setSavedTrails,
  setLoggedIn,
}) {
  const [currentHour, setCurrentHour] = useState("");

  const [trails, setTrails] = useState([]);

  useEffect(() => {
    let hours = new Date().getHours();
    setCurrentHour(hours);
    setLoggedIn(true);
    fetch("/trails")
      .then((res) => res.json())
      .then((trails) => setTrails(trails));
  }, []);

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
  let trailIds = savedTrails.map((trail) => {
    return trail.trail_id;
  });

  return (
    <div>
      <NavBar logout={handleLogOut} />
      <Switch>
        <Route path="/saved">
          <Saved
            trailIds={trailIds}
            currentUser={currentUser}
            trails={trails}
            setSavedTrails={setSavedTrails}
            savedTrails={savedTrails}
          />
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
        <Route path="/">
          <Home
            trailIds={trailIds}
            currentUser={currentUser}
            currentHour={currentHour}
            trails={trails}
            setSavedTrails={setSavedTrails}
            savedTrails={savedTrails}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default AuthApp;
