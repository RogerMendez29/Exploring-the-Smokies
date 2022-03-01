import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Trail_page() {
  let { id } = useParams();

  return `${id}`;
}

export default Trail_page;
