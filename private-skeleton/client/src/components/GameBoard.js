import React from "react";
import FaceTile from "./FaceTile.js";

const GameBoard = (people) => {
  return (
    <>
      <div id="gameboard-div">
        <h1 className='gameboard-title'>Guess Who?</h1>
        <ul id="gameboard">
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
