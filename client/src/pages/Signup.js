import React, { useState } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignupForm from "../components/signup_form"
import { IonContent, IonPage } from "@ionic/react";
import "../css/signup.css";





function Signup({ setCurrentUser }) {
    return (
        <IonPage className="signup-page">
            <SignupForm setCurrentUser={setCurrentUser}/>
        </IonPage>
      );
  
}

export default Signup;
