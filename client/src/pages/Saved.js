import React, { useState, useEffect } from "react";
import Trail_card from "../components/trail_card";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonSearchbar,
} from "@ionic/react";
import "../css/home.css";

function Saved({ savedTrails, trails, currentUser, setSavedTrails }) {
  function renderSavedTrails() {
    const trailIds = savedTrails.map((trail) => {
      return trail.trail_id;
    });
    const trail_cards = trails.map((trail) => {
      if (trailIds.includes(trail.id)) {
        return (
          <Trail_card
            setSavedTrails={setSavedTrails}
            currentUser={currentUser}
            trail={trail}
            key={trail.id}
          />
        );
      } else {
        return null;
      }
    });
    return trail_cards;
  }

  return (
    <IonPage className="home-page">
      <div className="saved_container"></div>
      <IonContent>
        <IonTitle></IonTitle>
        <div className="trail-container">{renderSavedTrails()}</div>
      </IonContent>
    </IonPage>
  );
}

export default Saved;
