import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../css/trail_card.css";

function Trail_card({
  trail,
  currentUser,
  savedTrails,
  setSavedTrails,
  trailIds,
}) {
  const [isSaved, setisSaved] = useState(false);
  let history = useHistory();

  function navToPage() {
    history.push(`/trail_page/${trail.id}`);
  }

  

  useEffect(() => {
    if (trailIds.includes(trail.id)) {
      setisSaved(true);
    }
  }, []);

  function handleBookmark() {
    const savedTrailIds = savedTrails.filter(
      (savedTrail) => savedTrail.trail_id === trail.id
    );

    if (trailIds.includes(trail.id)) {
      fetch(`/saved_trails/${savedTrailIds[0]?.id}`, {
        method: "DELETE",
        credentials: "include",
      })
        .then((res) => {
          if (res.ok) {
            console.log("Deleted");
            setisSaved(false);
          }
        })
        .then(() => {
          fetch("/me")
            .then((res) => res.json())
            .then((user) => {
              console.log(user.saved_trails);
              setSavedTrails(user.saved_trails);
            });
        });
    } else {
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
      })
        .then((res) => {
          if (res.ok) {
            console.log("Saved");
            setisSaved(true);
          }
        })
        .then(() => {
          fetch("/me")
            .then((res) => res.json())
            .then((user) => {
              console.log(user.saved_trails);
              setSavedTrails(user.saved_trails);
            });
        });
    }
  }

  return (
    <div className="container-card">
      <ion-card className="trail-card">
        <img className="trail-image" src={trail.image_url} />
        <svg
          id="bookmark"
          onClick={handleBookmark}
          xmlns="http://www.w3.org/2000/svg"
          className={`ionicon ${isSaved ? "saved-bookmark" : "bookmark"}`}
          viewBox="0 0 512 512"
        >
          <title>Bookmark</title>
          <path
            d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>

        <div className="header-container">
          <ion-card-header>
            <div onClick={navToPage} className="">
              <div className="card-title">
                <ion-card-title color="none">{trail.trail_name}</ion-card-title>
              </div>
            </div>

            <ion-card-subtitle>
              Difficulty: {trail.difficulty} • Roundtrip: {trail.roundtrip}{" "}
              Miles
            </ion-card-subtitle>
          </ion-card-header>
        </div>
      </ion-card>
    </div>
  );
}

export default Trail_card;
