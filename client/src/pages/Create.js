import React, { useState } from "react";
import "../css/trail_form.css";

import { IonContent, IonPage } from "@ionic/react";

import TrailForm from "../components/trail_form";

function Create() {

    
  return (
    <IonPage className="create-page">
      <IonContent className="content">
        <div className="page-contents">
          <div className="trail-form">
            <TrailForm />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Create;
