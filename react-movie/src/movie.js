import { useState } from "react";
import { Counter } from "./counter.js";

export function Movie({ name, rating, img, story }) {
  const [show, setshow] = useState("true");
  const styles = { display: show ? "block" : "none" };
  return (
    <div className="movie">
      <img className="poster" src={img} alt="#" />
      <div className="movie-name">
        <h4>{name}</h4>
        <h4>⭐ {rating}</h4>
      </div>
      <button
        onClick={(hide) => setshow(!show)}
        style={{ marginBottom: "5px" }}
      >
        {show ? "hide" : "show"} content
      </button>
      <p style={styles} className="movie-story">
        {story}
      </p>
      <Counter />
    </div>
  );
}
