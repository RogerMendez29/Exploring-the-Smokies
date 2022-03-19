import { Switch, Route } from "react-router-dom";
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

function AuthApp({
  setCurrentUser,
  currentUser,
  savedTrails,
  setSavedTrails,
  setLoggedIn,
}) {
  const [currentHour, setCurrentHour] = useState("");
  const [allReviews, setAllReviews] = useState([]);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    let hours = new Date().getHours();
    setCurrentHour(hours);
    setAllReviews(currentUser.reviews);
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
  const trailIds = savedTrails.map((trail) => {
    return trail.trail_id;
  });

  function renderTrails(trails) {
    const trail_cards = trails?.map((trail) => (
      <Trail_card
      allSetTrails={setTrails}
        allTrails={trails}
        setAllTrailIds={setTrails}
        trailIds={trailIds}
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
            renderTrails={renderTrails}
            trailIds={trailIds}
            currentUser={currentUser}
            trails={trails}
            setSavedTrails={setSavedTrails}
            savedTrails={savedTrails}
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
            trails={trails}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            renderTrails={renderTrails}
          />
        </Route>
        <Route path="/reviews">
          <Reviews allReviews={allReviews} currentUser={currentUser} />
        </Route>
        <Route path="/create">
          <Create trails={trails} setTrails={setTrails} />
        </Route>
        <Route path="/">
          <Home
            renderTrails={renderTrails}
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
