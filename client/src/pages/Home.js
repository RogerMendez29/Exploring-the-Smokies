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

function Home({ renderTrails, currentUser, currentHour, trails }) {
  console.log(trails);

  let popularTrails = trails?.filter((trail) => {
    if (trail.popular) {
      return trail;
    }
  });

  console.log(popularTrails);

  function welcomeMsg(currentUser) {
    if (currentHour > 12 && currentHour < 18) {
      return `Good Afternoon ${
        currentUser.profile?.first_name
          ? currentUser.profile.first_name
          : currentUser.username
      }`;
    }
    if (currentHour > 18 || currentHour === 18) {
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
      <IonContent>
        <div className="page-contents">
          <div className="container">
            <h1 className="welcome-msg">{welcomeMsg(currentUser)}</h1>
          </div>
          <IonTitle>Top Trails In The Great Smokey Mountains</IonTitle>

          <div className="trail-container">{renderTrails(popularTrails)}</div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Home;
