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

function Profile() {
  return (
    <IonPage className="trail-page">
      <div className="page-container">
        <IonContent>
          <div className="page-contents">
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
            <div className="page-data">
              <div className="profile-container">
                <div className="profile-title-container">
                  <h2 className="section-title">Profile</h2>
                </div>
              </div>
              <div className="trails-container">
                <div className="profile-title-container">
                  <h2 className="section-title">Saved Trails</h2>
                </div>
              </div>
              <div className="trails-container">
                <div className="profile-title-container">
                  <h2 className="section-title">Completed Trails</h2>
                </div>
              </div>
            </div>
          </div>
        </IonContent>
      </div>
    </IonPage>
  );
}

export default Profile;
