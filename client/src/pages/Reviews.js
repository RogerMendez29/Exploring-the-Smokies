import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../css/profile.css";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonItemDivider,
} from "@ionic/react";

function Reviews() {
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
                <h2 className="section-title">Reviews</h2>
              </div>
            </div>
          </div>
        </IonContent>
      </div>
    </IonPage>
  );
}

export default Reviews;
