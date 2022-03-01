import React, { useState } from "react";
import "../css/login.css";
import LoginForm from "../components/login_form"
import { IonContent, IonPage } from "@ionic/react";



function Login({ setCurrentUser }) {
    return (
        <IonPage className="login-page">
          {/* <IonContent class="login-content"> */}
            <LoginForm setCurrentUser={setCurrentUser}/>
          {/* </IonContent> */}
        </IonPage>
      );
  
}

export default Login;
