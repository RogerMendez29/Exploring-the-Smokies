import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../css/trail_card.css";

function Trail_card({ trail, currentUser, setSavedTrails, trailIds }) {
  const [isSaved, setisSaved] = useState(false);
  let history = useHistory();
  function navToPage() {
    history.push(`/trail_page/${trail.id}`);
  }

  useEffect(() => {
    if (trailIds.includes(trail.id)) {
      setisSaved(!isSaved);
    }
  }, []);

  function handleBookmark() {
    const savedTrailIds = currentUser.saved_trails.map((savedTrail) => {
      if (savedTrail.trail_id === trail.id) {
        return savedTrail.id;
      } else {
        return false;
      }
    });
    const savedTrailId = savedTrailIds.filter((id) => {
      return id > 1;
    });
    // console.log(currentUser);
    // console.log(currentUser.saved_trails);

    // console.log(savedTrailIds);
    // console.log(savedTrailId);

    if (trailIds.includes(trail.id)) {
      fetch(`/saved_trails/${savedTrailId}`, {
        method: "DELETE",
        credentials: "include",
      }).then((res) => {
        if (res.ok) {
          setisSaved(!isSaved);
        }
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
      }).then((res) => {
        if (res.ok) {
          setisSaved(!isSaved);
        }
      });
    }
    fetch("/me")
      .then((res) => res.json())
      .then((user) => {
        setSavedTrails(user.saved_trails);
      });
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
            <div onClick={navToPage} className="title-container">
              <ion-card-title>{trail.trail_name}</ion-card-title>
            </div>

            <ion-card-subtitle>
              Difficulty: {trail.difficulty}  •  Roundtrip: {trail.roundtrip} Miles
            </ion-card-subtitle>
          </ion-card-header>
        </div>
      </ion-card>
    </div>
  );
}

export default Trail_card;
