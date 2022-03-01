import React, { useState } from "react";
import { IonSearchbar } from "@ionic/react";

import "../css/explore.css";

function Explore() {
  return (
    <IonSearchbar
      placeholder="Search By Trail Name"
      className="search-bar"
      showCancelButton="always"
    ></IonSearchbar>
  );
}

export default Explore;
