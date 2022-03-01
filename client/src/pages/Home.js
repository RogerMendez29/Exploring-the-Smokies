import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonSearchbar,
} from "@ionic/react";
import "../css/home.css";

import Trail_card from "../components/trail_card";

function Home({ currentUser }) {
  const [currentHour, setCurrentHour] = useState("");

  const [trails, setTrails] = useState([]);

  useEffect(() => {
    let hours = new Date().getHours();
    setCurrentHour(hours);
  }, []);

  useEffect(() => {
    fetch("/trails")
      .then((res) => res.json())
      .then((trails) => setTrails(trails));
  }, []);

  function renderTrails(trails) {
    const trail_cards = trails.map((trail) => {
      return <Trail_card trail={trail} />;
    });
    return trail_cards;
  }
  function welcomeMsg(currentUser) {
    if (currentHour > 12 && currentHour < 18) {
      return `Good Afternoon ${
        currentUser.profile?.first_name
          ? currentUser.profile.first_name
          : currentUser.username
      }`;
    }
    if (currentHour > 18) {
      return `Good Evening ${
        currentUser.profile?.first_name
          ? currentUser.profile.first_name
          : currentUser.username
      }`;
    } else {
      return `Good Morning ${
        currentUser.profile?.first_name
          ? currentUser.profile.first_name
          : currentUser.username
      }`;
    }
  }

  return (
    <IonPage className="home-page">
      <div className="container">
        <h1 className="welcome-msg">{welcomeMsg(currentUser)}</h1>
      </div>
      <IonContent>
        <IonTitle>Top Trails In The Great Smokey Mountains</IonTitle>
        <div className="trail-container">{renderTrails(trails)}</div>
      </IonContent>
    </IonPage>
  );
}

export default Home;
