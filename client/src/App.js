import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AuthApp from "./components/auth_app";
import UnauthApp from "./components/unauth_app";
import "./css/app.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

setupIonicReact();

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [savedTrails, setSavedTrails] = useState([]);
  const [completedTrails, setCompletedTrails] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setSavedTrails(user.saved_trails);
          setCompletedTrails(user.completed_trails);
          setLoading(true);
        })
      }
      else{
      setLoading(true);

      }
    });
  }, []);

  if (!loading) {
    return <div></div>;
  } else {
    return (
      <BrowserRouter>
        {currentUser ? (
          <AuthApp
            completedTrails={completedTrails}
            setCompletedTrails={setCompletedTrails}
            setLoggedIn={setLoggedIn}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            savedTrails={savedTrails}
            setSavedTrails={setSavedTrails}
          />
        ) : (
          <UnauthApp
            setCurrentUser={setCurrentUser}
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
          />
        )}
      </BrowserRouter>
    );
  }
}

export default App;
