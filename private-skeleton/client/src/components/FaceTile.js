import React from "react";
import { Redirect, NavLink, Route } from 'react-router-dom';

const FaceTile = ({ person})=> {
  // function handleClick() {
  //   return (<Redirect to={`/persons/${person}`}></Redirect>)
  // }
  return (
    <>
      <div id={'face-tile'}>
        <div className={'face-pic'}>
          {person.pic}
        </div>
        <div className={'face-name'}>
          {person}
        </div>
      </div>
    </>
  )
};


export default FaceTile;
