import React from "react";
import Person from "./FaceTile.js";

const PersonFeed = (person) => {
  return (
    <>
      <div id="personFeed-div">
        <h1 className='personFeed-title'>Guess Who?</h1>
        <ul id="personFeed">
          {person.person.map((person) => (
            <li key={person} id={'person-li'}>
              <Person person={person}></Person>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


export default PersonFeed;
