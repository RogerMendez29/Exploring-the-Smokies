import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonPopover,
  IonContent,
  IonButton,
  IonList,
  IonItem,
} from "@ionic/react";

function NavBar({ logout }) {
  return (
    <IonHeader>
      <IonToolbar>
        <div className="nav-links" slot="start">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/saved">Saved</NavLink>
          <NavLink to="/explore">Explore</NavLink>
        </div>
        <IonTitle>Exploring The Smokies</IonTitle>

        <IonAvatar className="avatar" slot="end" id="trigger-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Person</title>
            <path
              d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path
              d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
          </svg>
        </IonAvatar>

        <IonPopover trigger="trigger-button">
          <IonContent>
            <IonList>
              <IonItem>
                <NavLink to="/profile">Profile</NavLink>
              </IonItem>
              <IonItem>
                <NavLink to="/Reviews">Reviews</NavLink>
              </IonItem>
              <IonItem>
                <IonButton onClick={() => logout()}>Log Out</IonButton>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPopover>
        <IonButton slot="end" onClick={() => logout()}>
          Log Out
        </IonButton>
      </IonToolbar>
    </IonHeader>
  );
}

export default NavBar;
