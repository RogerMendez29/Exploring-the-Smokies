import React, { useState } from "react";
import "../css/trail_form.css";
import {
  IonInput,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonItem,
  IonLabel,
  IonRange,
  IonTextarea,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

function TrailForm({ setTrails, setTrail, trails, trail }) {
  const [trailName, setTrailName] = useState(trail ? trail.trail_name : "");
  const [features, setFeatures] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [roundtrip, setRoundTrip] = useState();
  const [elevation, setElevation] = useState();
  const [difficulty, setDifficulty] = useState(trail ? trail.difficulty : "");
  const [popular, setPopular] = useState(false);
  const [description, setDescription] = useState(
    trail ? trail.description : ""
  );
  const [success, setSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (trail) {
      fetch(`/trails/${trail.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trail_name: trailName,
          features: features,
          image_url: imageUrl,
          roundtrip: roundtrip,
          elevation_gain: elevation,
          difficulty: difficulty,
          popular: popular,
          description: description,
        }),
      }).then((res) => {
        if (res.ok) {
          setSuccess(true);
          setTimeout(function () {
            setSuccess(false);
          }, 2000); 
          res.json().then((updatedTrail) => {
            setTrail(updatedTrail);
          });
        }
      });
    } else {
      fetch("/trails", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trail_name: trailName,
          features: features,
          image_url: imageUrl,
          roundtrip: roundtrip,
          elevation_gain: elevation,
          difficulty: difficulty,
          popular: popular,
          description: description,
        }),
      }).then((res) => {
        if (res.ok) {
          setSuccess(true);
          setTimeout(function () {
            setSuccess(false);
          }, 2000);

          res.json().then((trail) => setTrails([...trails, trail]));
        }
      });
    }
  }
  return (
    <div className={trail ? "" : "create-trail-container"}>
      <form
        onSubmit={handleSubmit}
        className={trail ? "edit-form" : "create-form"}
      >
        {trail ? null : (
          <IonCardHeader color="light">
            <IonCardTitle>
              {trail ? "Update Trail" : "Create A Trail"}
            </IonCardTitle>
          </IonCardHeader>
        )}

        <IonItem>
          <IonLabel position="stacked"></IonLabel>
          <IonInput
            onIonChange={(e) => setTrailName(e.target.value)}
            placeholder="Trail Name"
            value={trailName}
          ></IonInput>
          <IonInput
            onIonChange={(e) => setFeatures(e.target.value)}
            placeholder="Features"
            value={features}
          ></IonInput>
          <IonInput
            onIonChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image Url"
            value={imageUrl}
          ></IonInput>

          <IonInput
            onIonChange={(e) => setRoundTrip(e.target.value)}
            placeholder="Roundtrip"
            value={roundtrip}
          ></IonInput>
          <IonInput
            onIonChange={(e) => setElevation(e.target.value)}
            placeholder="Elevation Gain"
            value={elevation}
          ></IonInput>
          <IonSelect
            value={popular}
            okText="Okay"
            cancelText="Dismiss"
            placeholder="Popular?"
            onIonChange={(e) => setPopular(e.detail.value)}
          >
            <IonSelectOption value="true">true</IonSelectOption>
            <IonSelectOption value="false">false</IonSelectOption>
          </IonSelect>
        </IonItem>
        <ion-item>
          <ion-label>Difficulty:</ion-label>
          <IonRange
            onIonChange={(e) => setDifficulty(e.target.value)}
            min="0"
            max="10"
            step="1"
            value={difficulty}
            snaps
            color="danger"
            pin
          ></IonRange>
        </ion-item>
        <IonItem>
          <IonTextarea
            onIonChange={(e) => setDescription(e.target.value)}
            value={description}
            className="description-box"
            placeholder="Description:"
          ></IonTextarea>
        </IonItem>

        <IonButton type="submit" color="primary" className="">
          Save
        </IonButton>
        <div className={success ? "label-on" : "label-off"}>Success!</div>
      </form>
    </div>
  );
}
export default TrailForm;
