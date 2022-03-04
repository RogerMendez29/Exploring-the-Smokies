import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Trail_page() {
  const [trail, setTrail] = useState("");
  let { id } = useParams();

  useEffect(() => {
    fetch(`/trails/${id}`)
      .then((res) => res.json())
      .then((trail) => setTrail(trail));
  }, []);

  console.log(trail.trail_name);

  return ` trail name is :${trail.trail_name}`;
}

export default Trail_page;
