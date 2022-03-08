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

function Saved({
  trails,
  currentUser,
  savedTrails,
  setSavedTrails,
  trailIds,
}) {
  function renderSavedTrails() {
    return trails.map((trail) =>
      trailIds.includes(trail.id) ? (
        <Trail_card
          trailIds={trailIds}
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
