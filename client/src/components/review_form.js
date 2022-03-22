import React, { useState, useEffect } from "react";
import "../css/review_form.css";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonRange,
  IonTextarea,
} from "@ionic/react";

function ReviewForm({ currentUser, trail, setShowReview}) {

  

  const [difficulty, setDifficulty] = useState();
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        user_id: currentUser.id,
        trail_id: trail.id,
        name: currentUser.username,
        difficulty_rating: difficulty,
        comment: comment,
      }),
    }).then((res) => {
      if (res.ok) {
        setShowReview(false);
      }
    });
  }

  return (
    <IonCard class="review-card">
      <form onSubmit={handleSubmit} className="review-form">
        <IonCardHeader>
          <IonCardTitle>Trail Review</IonCardTitle>
        </IonCardHeader>

        <ion-item>
          <ion-label className="difficulty-label">Difficulty:</ion-label>

          <IonRange
            onIonChange={(e) => setDifficulty(e.target.value)}
            min="0"
            max="10"
            step="1"
            value={difficulty}
            snaps
            color="danger"
            pin
          ></IonRange>
        </ion-item>
        <ion-item>
          <IonTextarea
            value={comment}
            className="comment-box"
            placeholder="comments:"
            onIonChange={(e) => setComment(e.target.value)}
          ></IonTextarea>
        </ion-item>

        <IonButton type="submit" color="success" className="">
          Add Review
        </IonButton>
      </form>
    </IonCard>
  );
}

export default ReviewForm;
