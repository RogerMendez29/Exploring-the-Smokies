import React, { useState, useEffect } from "react";
import Trail_card from "../components/trail_card";
import {
  IonContent,
  IonPage,
  IonTitle,
} from "@ionic/react";
import "../css/home.css";

function Saved({
  trails,
  currentUser,
  savedTrails,
  setSavedTrails,
  savedTrailIds,
  completedTrailIds,
  completedTrails,
  setCompletedTrails
}) {
  
  function renderSavedTrails() {
    return trails.map((trail) =>
      savedTrailIds?.includes(trail.id) ? (
        <Trail_card
         setCompletedTrails={setCompletedTrails}
         completedTrails={completedTrails}
         completedTrailIds={completedTrailIds}
          savedTrailIds={savedTrailIds}
          savedTrails={savedTrails}
          setSavedTrails={setSavedTrails}
          currentUser={currentUser}
          trail={trail}
          key={trail.id}
        />
      ) : null
    );
  }
  return (
    <IonPage className="home-page">
      <IonContent>
        <div className="page-contents">
        <div className="saved_container"></div>
        <IonTitle></IonTitle>
        <div className="trail-container">{renderSavedTrails()}</div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Saved;
