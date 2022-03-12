import React, { useState } from "react";
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

function Profile({ currentUser, setCurrentUser }) {
  const [editProfile, setEditProfile] = useState(false);

  function handleUpload(result) {
    const body = {
      profile_picture_url: result.info.secure_url,
      profile_picture_thumbnail_url: result.info.eager[0].secure_url,
      // cloudinary_public_id: "fill me in",
    };
    fetch("/profiles", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        setCurrentUser(user);
      });
  }

  console.log(editProfile);

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
                      {editProfile ? "Done" : "Update Profile"}
                    </ion-button>

                    {editProfile ? (
                      <div className="">
                        <ProfileForm />
                      </div>
                    ) : (
                      <div className="">
                        <IonCardHeader>
                          <IonCardTitle>
                            {currentUser.profile?.first_name
                              ? `${currentUser.profile.first_name}`
                              : "First"}
                            {" & "}
                            {currentUser.profile?.last_name
                              ? `${currentUser.profile.last_name}`
                              : "Last Name"}
                          </IonCardTitle>
                          <IonCardSubtitle>
                            {currentUser.profile?.email
                              ? ` email: ${currentUser.profile.email}`
                              : "Email"}
                          </IonCardSubtitle>

                          <IonCardSubtitle>
                            {currentUser.profile?.city
                              ? `${currentUser.profile.city}`
                              : "City"}
                            ,{" "}
                            {currentUser.profile?.state
                              ? `${currentUser.profile.city}`
                              : "State"}
                          </IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardTitle>Bio</IonCardTitle>

                        <IonCardContent>
                          {currentUser.profile?.bio
                            ? currentUser.profile.bio
                            : "No bio available"}
                        </IonCardContent>
                      </div>
                    )}
                  </div>
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
