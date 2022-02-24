import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

function AuthApp({ setCurrentUser }) {
  function handleLogOut() {
    fetch(`/logout`, {
      method: "DELETE",
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
      }

    })
  }

  return (
    <div>
      <button onClick={handleLogOut} type="button">
        Log out
      </button>
    </div>
  );
}

export default AuthApp;
