import React, { useState } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import {
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonItem,
  IonLabel,
} from "@ionic/react";

function Signup({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  return (
    <div className="signup-card">
      {/* <Redirect to="/login" /> */}
      <IonCard class="signup-form">
        <form onSubmit={handleSubmit}>
          <IonCardHeader>
            <IonCardTitle>Sign Up</IonCardTitle>
          </IonCardHeader>
          <IonInput
            class="signup-input"
            type="text"
            placeholder="username"
            value={username}
            onIonChange={(e) => setUsername(e.target.value)}
            required
          ></IonInput>
          <IonInput
            class="signup-input"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={(e) => setPassword(e.target.value)}
            required
          ></IonInput>
          <IonInput
            class="signup-input"
            type="password"
            placeholder="Password Confirmation"
            value={passwordConfirmation}
            onIonChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          ></IonInput>
          <IonButton expand="block" class="signup-btn" type="submit">
            Sign Up
          </IonButton>
          <IonItem href="/login" className="ion-activated">
            <IonLabel>Already have a account? Login</IonLabel>
          </IonItem>
        </form>
      </IonCard>
    </div>
  );
}

export default Signup;