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
  const [search, setSearch] = useState("");

  const searchResults = trails.filter((trail) => {
    return trail.trail_name.toLowerCase().includes(search.toLowerCase());
  });

  console.log(searchResults);

  function handleSearch(event) {
    setSearch(event.detail.value);
  }

  return (
    <IonPage className="home-page">
      <IonContent>
        <div className="page-contents">
          <IonSearchbar
            value={search}
            className="search-bar"
            placeholder="Search by trail Name"
            onIonChange={handleSearch}
          ></IonSearchbar>

          <div className="trail-container">{renderTrails(searchResults)}</div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Explore;
