import React from "react";
import FaceTile from "./FaceTile.js";

const GameBoard = (people) => {
  const [reset, setReset] = React.useState(false)
  const onClick = (e)=> {
    e.preventDefault();
    setReset(true)
  }
  return (
    <>
      <div id="gameboard-div">
        {/* <button onClick={onClick}>
          Reset
        </button> */}
        <h1 className='gameboard-title'>Guess Who?</h1>
        <ul id="gameboard">
          {people.people.map((person) => (
            <li key={person} className={'facetile-li'}>
              <FaceTile person={person} reset={reset}></FaceTile>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


export default GameBoard;
