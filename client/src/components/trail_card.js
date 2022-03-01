import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../css/trail_card.css";

function Trail_card({ trail }) {
  let history = useHistory();
  function handleFetch() {
    history.push(`/trail_page/${trail.id}`);
  }

  return (
    <ion-card onClick={handleFetch} className="trail_card">
      <img className="trail-image" src={trail.image_url} />
      <ion-card-header>
        <ion-card-title>{trail.trail_name}</ion-card-title>

        <ion-card-subtitle>
          Difficulty: {trail.difficulty} • Roundtrip: {trail.roundtrip}
        </ion-card-subtitle>
      </ion-card-header>
    </ion-card>
  );
}

export default Trail_card;
