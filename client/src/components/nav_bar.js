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
  IonLabel,
  IonMenu,
  IonPage,
  IonMenuToggle,
  IonNavLink,
} from "@ionic/react";

function NavBar({ logout }) {
  function initPopover(e) {
    const popover = e.target;
    const logoutBtn = popover.querySelector("#logout-btn");

    logoutBtn.addEventListener("click", () => {
      logout();
      popover.dismiss();
    });
  }

  return (
    <IonHeader>
      <IonToolbar>
        <div className="nav-links" slot="start">
          <NavLink to="/home" activeClassName="active" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/saved" activeClassName="active" className="nav-link">
            Saved
          </NavLink>
          <NavLink to="/explore" activeClassName="active" className="nav-link">
            Explore
          </NavLink>
        </div>
        <IonTitle>
          <NavLink to="/home" className="app-title">Exploring The Smokies</NavLink>
        </IonTitle>

        <IonAvatar className="avatar" slot="end" id="trigger-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Person Circle</title>
            <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93zM256 432a175.49 175.49 0 01-126-53.22 122.91 122.91 0 0135.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.87 122.87 0 01382 378.78 175.45 175.45 0 01256 432z" />
          </svg>
        </IonAvatar>

        <IonPopover
          onDidPresent={initPopover}
          trigger="trigger-button"
          triggerAction="hover"
        >
          <IonContent>
            <IonList>
              <IonItem>
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/profile"
                >
                  Profile
                </NavLink>
              </IonItem>
              <IonItem>
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/reviews"
                >
                  Reviews
                </NavLink>
              </IonItem>
              <IonItem button id="logout-btn">
                <IonButton> Log Out</IonButton>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPopover>
      </IonToolbar>
    </IonHeader>
  );
}

export default NavBar;
