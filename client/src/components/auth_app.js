import { Switch, Route, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./nav_bar";
import Home from "../pages/Home";
import Saved from "../pages/Saved";
import Explore from "../pages/Explore";
import TrailPage from "../components/trail_page";
import Profile from "../pages/Profile";
import Reviews from "../pages/Reviews";
import Trail_card from "../components/trail_card";
import Create from "../pages/Create";
import { LocationHistory } from "@ionic/react";

// import { Navigate } from "react-router-dom";


function AuthApp({
  setCurrentUser,
  currentUser,
  savedTrails,
  setSavedTrails,
  completedTrails,
  setCompletedTrails,
  setLoggedIn,
}) {
  const [trails, setTrails] = useState([]);
  const histroy = useHistory();

  useEffect(() => {
    setSavedTrails(currentUser.saved_trails);
    setCompletedTrails(currentUser.completed_trails);

    setLoggedIn(true);
    fetch("/api/trails")
      .then((res) => res.json())
      .then((trails) => setTrails(trails));
  }, []);

  function handleLogOut() {
    fetch(`/api/logout`, {
      method: "DELETE",
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
        histroy.push("/")
      }
    });
  }

  const savedTrailIds = savedTrails?.map((trail) => {
    return trail.trail_id;
  });

  const completedTrailIds = completedTrails?.map((trail) => {
    return trail.trail_id;
  });

  function renderTrails(trails) {
    const trail_cards = trails?.map((trail) => (
      <Trail_card
        completedTrailIds={completedTrailIds}
        setCompletedTrails={setCompletedTrails}
        completedTrails={completedTrails}
        allSetTrails={setTrails}
        allTrails={trails}
        setAllTrailIds={setTrails}
        savedTrailIds={savedTrailIds}
        savedTrails={savedTrails}
        currentUser={currentUser}
        trail={trail}
        key={trail.id}
        setSavedTrails={setSavedTrails}
      />
    ));
    return trail_cards;
  }
  return (
    <div>
      <NavBar logout={handleLogOut} currentUser={currentUser} />
      <Switch>
        <Route path="/saved">
          <Saved
            savedTrailIds={savedTrailIds}
            currentUser={currentUser}
            trails={trails}
            setSavedTrails={setSavedTrails}
            savedTrails={savedTrails}
            completedTrailIds={completedTrailIds}
            setCompletedTrails={setCompletedTrails}
            completedTrails={completedTrails}
          />
        </Route>
        <Route path="/explore">
          <Explore renderTrails={renderTrails} trails={trails} />
        </Route>
        <Route path="/trail_page/:id">
          <TrailPage currentUser={currentUser} />
        </Route>
        <Route path="/profile">
          <Profile
            setCompletedTrails={setCompletedTrails}
            completedTrailIds={completedTrailIds}
            completedTrails={completedTrails}
            trails={trails}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </Route>
        <Route path="/reviews">
          <Reviews currentUser={currentUser} />
        </Route>
        {currentUser.user_can_modify ? (
          <Route path="/create">
            <Create trails={trails} setTrails={setTrails} />
          </Route>
        ) : null}

        <Route path="/">
          <Home
            renderTrails={renderTrails}
            currentUser={currentUser}
            trails={trails}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default AuthApp;
