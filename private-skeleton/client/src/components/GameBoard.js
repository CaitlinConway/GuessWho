import React from "react";
import FaceTile from "./FaceTile.js";

const GameBoard = (people) => {
  return (
    <>
      <div id="personFeed-div">
        <h1 className='personFeed-title'>Guess Who?</h1>
        <ul id="personFeed">
          {people.people.map((person) => (
            <li key={person} className={'facetile-li'}>
              <FaceTile person={person}></FaceTile>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


export default GameBoard;
