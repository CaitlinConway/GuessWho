import React from "react";
import { Redirect, NavLink, Route } from 'react-router-dom';

const FaceTile = ({ person})=> {
  // function handleClick() {
  //   return (<Redirect to={`/persons/${person}`}></Redirect>)
  // }
  return (
    <>
      <div id={'person-links'}>
        <NavLink id={'person-name'} to={`/persons/${person}`}>{person}
        </NavLink>
        {/* <NavLink to={{
          pathname:`/persons/${person}`,
          aboutProps: {games:games}
        }}>{person}</NavLink> */}
      </div>
    </>
  )
};


export default FaceTile;
