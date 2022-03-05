import React, { useState } from "react";
import "../css/login.css";
import LoginForm from "../components/login_form";
import { IonContent, IonPage } from "@ionic/react";

function Login({ setCurrentUser, setLoggedIn }) {
  return (
    <IonPage className="login-page">
      <LoginForm setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn} />
    </IonPage>
  );
}

export default Login;
