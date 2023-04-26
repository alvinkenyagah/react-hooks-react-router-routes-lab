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
              <h2>Title: {items.title}</h2>

             <h3> Time: {items.time}</h3>
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
