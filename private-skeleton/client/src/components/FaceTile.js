import React from "react";
import { Redirect, NavLink, Route } from 'react-router-dom';

const FaceTile = ({ person})=> {
  // function handleClick() {
  //   return (<Redirect to={`/persons/${person}`}></Redirect>)
  // }
  let pic = require(`../images/${person}.PNG`);
  return (
    <>
      <div id={'face-tile'}>
        <img className={'face-pic'} src={pic} width = '100' height='100px'/>
        <div className={'face-name'}>
          {person}
        </div>
      </div>
    </>
  )
};


export default FaceTile;
