import React from "react";
import { Redirect, NavLink, Route } from 'react-router-dom';

const FaceTile = ({ person})=> {
  const [showX, setShowX] = React.useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowX(true);
  }
  let pic = require(`../images/${person}.PNG`);
  let x_pic = require('../images/X.png');
  const X_picture = (
    <div id={`x-${person}`}>
    <img className={'x'} src ={x_pic} width ='100' height = '100'/>
    </div>
    )
  return (
    <>
      <div id={'face-tile'} onClick={handleClick}>
        <img className={'face-pic'} src={pic} width = '100' height='100px'/>
        {/* <div className={'face-name'}>
          {person}
        </div> */}
        {showX ? X_picture:null}
      </div>
    </>
  )
};



export default FaceTile;
