import React, { useState, useEffect } from "react";
import { useIonModal } from "@ionic/react";
import { useParams } from "react-router-dom";
import "../css/trail_page.css";
import ReviewForm from "./review_form";
import { IonContent, IonPage, IonItemDivider, IonButton } from "@ionic/react";
import TrailForm from "./trail_form";

function Trail_page({ currentUser }) {
  let { id } = useParams();

  const [showReview, setShowReview] = useState(false);
  const [trail, setTrail] = useState([]);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetch(`/trails/${id}`)
      .then((res) => res.json())
      .then((trail) => setTrail(trail));
  }, [showReview]);

  function renderReviewCards(reviews) {
    const reviewCard = reviews?.map((review) => {
      return (
        <ion-card key={review.id}>
          <ion-card-header>
            <ion-card-title>{review.name}</ion-card-title>
          </ion-card-header>
          <ion-card-subtitle>
            <h4 className="card-subtitle">
              Difficulty: {review.difficulty_rating}/10
            </h4>
          </ion-card-subtitle>
          <ion-card-content>
            <h3 className="comment-title">Comment:</h3> {review.comment}
          </ion-card-content>
        </ion-card>
      );
    });
    return reviewCard;
  }

  return (
    <IonPage className="trail-page">
      <div className="page-container">
        <IonContent>
          <div className="page-contents">
            <div
              className="image-container"
              style={
                trail.image_url
                  ? { backgroundImage: `url(${trail.image_url})` }
                  : null
              }
            >
              <h1 className="trail-name">{trail.trail_name}</h1>
              <div className="directions-icon">
                <a
                  href={`https://maps.google.com/?q=${trail.trail_name}+Great Smoky Mountain Trail`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon directions-icon"
                    viewBox="0 0 512 512"
                  >
                    <title>Navigate</title>
                    <path
                      d="M448 64L64 240.14h200a8 8 0 018 8V448z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="description-container">
              <div className="title-container">
                <h2 className="section-title">Description</h2>

                {currentUser.user_can_modify ? (
                  <IonButton
                    onClick={() => setEdit(!edit)}
                    className="edit-btn"
                    color="success"
                  >
                    {edit ? "done" : "Make an Edit"}
                  </IonButton>
                ) : null}
              </div>

              {edit ? <TrailForm trail={trail} setTrail={setTrail}/> : null}
              <div className="d-paragraph">
                <p className="description">{edit?null:trail.description}</p>
              </div>
              <IonItemDivider></IonItemDivider>

              <div className="subtitle-container">
                <h3 className="subtitle">
                  {edit?null:`Difficulty: ${trail.difficulty} • Roundtrip: ${trail.roundtrip}
                  Miles`}
                </h3>
              </div>
            </div>
            <div className="Reviews-container">
              <div className="title-container">
                <div className="review-btn">
                  <IonButton
                    onClick={() => setShowReview(!showReview)}
                    className="review-btn"
                    color="success"
                  >
                    {showReview ? "done" : "write A Review"}
                  </IonButton>
                </div>

                <h1 className="section-title">Reviews</h1>
              </div>

              {showReview ? (
                <div className="review-card-container">
                  <ReviewForm
                    showReview={showReview}
                    setShowReview={setShowReview}
                    currentUser={currentUser}
                    trail={trail}
                  />
                  {renderReviewCards(trail.reviews)}
                </div>
              ) : (
                <div className="review-card-container">
                  {renderReviewCards(trail.reviews)}
                </div>
              )}
            </div>
          </div>
        </IonContent>
      </div>
    </IonPage>
  );
}

export default Trail_page;
