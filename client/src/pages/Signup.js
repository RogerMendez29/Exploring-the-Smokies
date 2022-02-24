import React, { useState } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignupForm from "../components/signup_form"
import { IonContent, IonPage } from "@ionic/react";
import "../css/signup.css";



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
    return (
        <IonPage>
          <IonContent class="signup-content">
            <SignupForm setCurrentUser={setCurrentUser}/>
          </IonContent>
        </IonPage>
      );
  
}

export default Signup;
