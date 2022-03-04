import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../css/trail_card.css";

function Trail_card({ trail, currentUser, setSavedTrails,}) {

  let history = useHistory();
  function navToPage() {
    history.push(`/trail_page/${trail.id}`);
  }

  function handleBookmark() {
    fetch("/saved_trails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify({
        user_id: currentUser.id,
        trail_id: trail.id,
      }),
    });

    fetch("/me")
      .then((res) => res.json())
      .then((user) => {
        setSavedTrails(user.saved_trails)
        
      });
  }

  return (
    <ion-card className="trail_card">
      <img className="trail-image" src={trail.image_url} />
      <svg
        onClick={handleBookmark}
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon bookmark"
        viewBox="0 0 512 512"
      >
        <title>Bookmark</title>
        <path
          d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
      <ion-card-header>
        <ion-card-title className="card-title" onClick={navToPage}>
          {trail.trail_name}
        </ion-card-title>

        <ion-card-subtitle>
          Difficulty: {trail.difficulty} • Roundtrip: {trail.roundtrip}
        </ion-card-subtitle>
      </ion-card-header>
    </ion-card>
  );
}

export default Trail_card;
