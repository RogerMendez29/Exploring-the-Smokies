import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonSearchbar,
} from "@ionic/react";

import "../css/explore.css";

function Explore({ renderTrails, trails }) {
  return (
    <IonPage className="home-page">
      <IonContent>
        <div className="page-contents">
          <IonSearchbar  className="search-bar"placeholder="Search by trail Name"  ></IonSearchbar>

          <div className="trail-container">{renderTrails(trails)}</div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Explore;
