import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>

      <div>
        <ul>
          {directors.map((director, index) => (
            <li key={index}>
              Name: {director.name}
              <ul>
                {director.movies.map((movie, index) => (
                  <li key={index}>Movie: {movie}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Directors;
