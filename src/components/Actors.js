import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors page</h1>

      <div>
        <ul>
          {actors.map((actor, index) => (
            <li key={index}>
              {actor.name}
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Actors;
