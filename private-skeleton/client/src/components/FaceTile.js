import React from "react";
import { Redirect, NavLink, Route } from 'react-router-dom';

const FaceTile = ({ person, reset})=> {
  const [showX, setShowX] = React.useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    if (!showX){
    setShowX(true);
    }
    else {
      setShowX(false)
    }
  }
  let pic = require(`../images/${person}.PNG`);
  let x_pic = require('../images/X.png');
  const X_picture = (
    <img className={'x'} src ={x_pic} width ='70' height = '70'/>
    )
  return (
    <>
      <div className={'face-tile'} onClick={handleClick}>
        <img className={'face-pic'} src={pic} width = '100' height='100px'/>
        {showX && reset ? (reset = false, setShowX(false)): null};
        {showX ? X_picture:null}
      </div>
    </>
  )
};



export default FaceTile;
