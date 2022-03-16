import React, { useState } from "react";
import "../css/profile_form.css";
import {
  IonInput,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonItem,
  IonLabel,
  IonTextarea,
} from "@ionic/react";

function ProfileForm({
  currentUser,
  setEditProfile,
  setUserProfile,
  userProfile,
}) {
  const [firstName, setFirstName] = useState(userProfile.first_name);
  const [lastName, setLastName] = useState(userProfile.last_name);
  const [city, setCity] = useState(userProfile.city);
  const [state, setState] = useState(userProfile.state);
  const [email, setEmail] = useState(userProfile.email);
  const [bio, setBio] = useState(userProfile.bio);

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`profiles/${currentUser.profile.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        city: city,
        state: state,

        email: email,
        bio: bio,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => setUserProfile(data));
        setEditProfile(false);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <IonCardHeader>
        <IonCardTitle>Profile Updates</IonCardTitle>
      </IonCardHeader>

      <IonItem>
        <IonLabel position="stacked">Multiple Inputs</IonLabel>
        <IonInput
          onIonChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          value={firstName}
        ></IonInput>
        <IonInput
          onIonChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          value={lastName}
        ></IonInput>
        <IonInput
          onIonChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
        ></IonInput>

        <IonInput
          onIonChange={(e) => setCity(e.target.value)}
          placeholder="City"
          value={city}
        ></IonInput>
        <IonInput
          onIonChange={(e) => setState(e.target.value)}
          placeholder="State"
          value={state}
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonTextarea
          value={bio}
          className="bio-box"
          placeholder="Bio:"
          onIonChange={(e) => setBio(e.target.value)}
        ></IonTextarea>
      </IonItem>

      <IonButton type="submit" color="success" className="">
        Save
      </IonButton>
    </form>
  );
}

export default ProfileForm;
