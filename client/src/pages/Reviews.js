import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ReviewForm from "../components/review_form";
import "../css/profile.css";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonToolbar,
  IonRange,
  IonTextarea,
} from "@ionic/react";

function Reviews({ currentUser }) {
  const [editableReview, setEditableReview] = useState(new Set());
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    setAllReviews(currentUser.reviews);
  }, []);

  function handleDelete(currentReview) {
    fetch(`/reviews/${currentReview.id}`, {
      method: "DELETE",
      credentials: "include",
    }).then(() => {
      setAllReviews((oldReviews) =>
        oldReviews.filter((review) => {
          return review.id !== currentReview.id;
        })
      );
    });
  }

  function handleEdit(id) {
    if (editableReview.has(id)) {
      editableReview.delete(id);
      // const foundIndex = editableReview.findIndex((index) => {
      //   return index === id;
      // });
      // editableReview.splice(foundIndex, 1);
    } else {
      editableReview.add(id);
    }
    setEditableReview(new Set([...editableReview]));
    // setEditableReview([...editableReview]);
  }
  function updatingReview(updatedReview) {
    const updatedReviews = allReviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else {
        return review;
      }
    });
    setAllReviews(updatedReviews);
  }

  function handleUpdate(e, id) {
    const rangeValue = document.querySelector(`#range-${id}`).value;
    const textAreaValue = document.querySelector(`#textArea-${id}`).value;

    e.preventDefault();
    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        comment: textAreaValue,
        difficulty_rating: rangeValue,
      }),
    })
      .then((res) => res.json())
      .then((updatedReview) => updatingReview(updatedReview));
  }

  function renderReviewCards(reviews) {
    const reviewCard = reviews?.map((review) => {
      return (
        <ion-card key={review.id}>
          <IonButton color="success" onClick={(e) => handleEdit(review.id)}>
            {editableReview.has(review.id) ? "Done" : "Edit"}
          </IonButton>

          <IonButton onClick={() => handleDelete(review)} color="danger">
            Delete
          </IonButton>

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
          {editableReview.has(review.id) && (
            <form
              onSubmit={(event) => {
                handleUpdate(event, review.id);
              }}
            >
              <ion-item>
                <ion-label>Difficulty:</ion-label>
                <IonRange
                  id={`range-${review.id}`}
                  min="0"
                  max="10"
                  step="1"
                  value={review.difficulty_rating}
                  snaps
                  color="danger"
                  pin
                ></IonRange>
              </ion-item>
              <ion-item>
                <IonTextarea
                  id={`textArea-${review.id}`}
                  className="comment-box"
                  placeholder="comments:"
                ></IonTextarea>
              </ion-item>
              <IonButton type="submit">update</IonButton>
            </form>
          )}
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
            <div className="toolbar">
              <IonHeader>
                <IonToolbar>
                  <div className="nav-links" slot="start">
                    <NavLink
                      to="/profile"
                      activeClassName="profile-active"
                      className="profile-nav-link"
                    >
                      Profile
                    </NavLink>
                    <NavLink
                      to="/reviews"
                      activeClassName="profile-active"
                      className="profile-nav-link"
                    >
                      Reviews
                    </NavLink>
                  </div>
                </IonToolbar>
              </IonHeader>
            </div>

            <div className="review-container">
              <div className="profile-title-container">
                <h2 className="section-title">My Reviews</h2>
              </div>
              <div className="review-card-container">
                {renderReviewCards(allReviews)}
              </div>
            </div>
          </div>
        </IonContent>
      </div>
    </IonPage>
  );
}

export default Reviews;
