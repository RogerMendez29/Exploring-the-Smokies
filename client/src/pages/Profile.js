import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CloudinaryUpload from "../components/CloudinaryUpload";
import ProfileForm from "../components/profile_form";

import "../css/profile.css";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSubtitle,
  IonItem,
  IonItemDivider,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

function Profile({ currentUser, setCurrentUser, renderTrails, trails }) {
  const [editProfile, setEditProfile] = useState(false);
  const [userProfile, setUserProfile] = useState(currentUser.profile);

  function handleUpload(result) {
    const body = {
      profile_picture_url: result.info.secure_url,
      profile_picture_thumbnail_url: result.info.eager[0].secure_url,
    };
    fetch("/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((user) => {
        setCurrentUser(user);
      });
  }

  const SavedAndCompleted = currentUser.saved_trails.filter((trail) => {
    return trail.completed === true;
  });
  const completedTrailIds = SavedAndCompleted.map((trail) => {
    return trail.trail_id;
  });
  const trailsCompleted = trails.filter((trail) => {
    return completedTrailIds.includes(trail.id);
  });

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
                <div className="profile-content">
                  <div className="profile-image-container">
                    <img
                      className="profile-image"
                      src={
                        currentUser.profile?.profile_picture_url ||
                        "https://res.cloudinary.com/dpkrqs9rs/image/upload/v1637085098/Profile_avatar_placeholder_large_ky4gfw.png"
                      }
                    />
                    <CloudinaryUpload
                      preset="knszebkj"
                      buttonText="Upload"
                      handleUpload={handleUpload}
                    />
                  </div>
                  <div className="profile-data">
                    <ion-button
                      color="success"
                      onClick={() => setEditProfile(!editProfile)}
                    >
                      {editProfile ? "View Profile" : "Update Profile"}
                    </ion-button>

                    {editProfile ? (
                      <div className="">
                        <ProfileForm
                          userProfile={userProfile}
                          setUserProfile={setUserProfile}
                          currentUser={currentUser}
                          setEditProfile={setEditProfile}
                        />
                      </div>
                    ) : (
                      <div className="">
                        <IonCardHeader>
                          <IonCardTitle>
                            {userProfile?.first_name
                              ? `${userProfile.first_name}`
                              : "First"}{" "}
                            {userProfile?.last_name
                              ? `${userProfile.last_name}`
                              : "Last Name"}
                          </IonCardTitle>
                          <IonCardSubtitle>
                            {userProfile?.email
                              ? ` email: ${userProfile.email}`
                              : "Email"}
                          </IonCardSubtitle>

                          <IonCardSubtitle>
                            {userProfile?.city ? `${userProfile.city}` : "City"}
                            ,{" "}
                            {userProfile?.state
                              ? `${userProfile.state}`
                              : "State"}
                          </IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardTitle>Bio</IonCardTitle>

                        <IonCardContent>
                          {userProfile?.bio
                            ? userProfile.bio
                            : "No bio available"}
                        </IonCardContent>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="trails-container">
                <div className="profile-title-container">
                  <h2 className="section-title">Completed Trails</h2>
                </div>
                <div className="trail-container">
                  {renderTrails(trailsCompleted)}
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
