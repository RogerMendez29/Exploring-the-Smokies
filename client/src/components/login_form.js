import React, { useState } from "react";
import "../css/login.css";

import { Redirect, useHistory, Link } from "react-router-dom";
import {
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonItem,
  IonLabel,
} from "@ionic/react";

function LoginForm({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
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
      console.log(username);
    });
  }

  return (
    <div className="login-card">
      <Redirect to="/" />

      <IonCard class="login-form">
        <form onSubmit={handleSubmit}>
          <IonCardHeader>
            <IonCardTitle>Exploring The Smokies</IonCardTitle>
          </IonCardHeader>
          <IonInput
            class="login-input"
            type="text"
            placeholder="username"
            value={username}
            onIonChange={(e) => setUsername(e.target.value)}
            required
          ></IonInput>
          <IonInput
            class="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={(e) => setPassword(e.target.value)}
            required
          ></IonInput>
          <IonButton expand="block" class="login-btn" type="submit">
            Login
          </IonButton>
          <IonItem href="/signup" className="ion-activated">
            <IonLabel>Need an account? Sign Up</IonLabel>
          </IonItem>
        </form>
      </IonCard>
    </div>
  );
}

export default LoginForm;
