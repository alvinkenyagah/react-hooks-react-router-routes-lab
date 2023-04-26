import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>

      <div>
        <ul>
          {movies.map((items, index) => (
            <li key={index}>
              Title: {items.title}
              <br />
              Time: {items.time}
              <ul>
                {items.genres.map((items, index) => (
                  <li key={index}>{items}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Movies;
