import React from "react";
import FaceTile from "./FaceTile.js";

const PersonFeed = (person) => {
  return (
    <>
      <div id="personFeed-div">
        <h1 className='personFeed-title'>Guess Who?</h1>
        <ul id="personFeed">
          {person.person.map((person) => (
            <li key={person.name} className={'facetile-li'}>
              <FaceTile person={person}></FaceTile>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


export default PersonFeed;
