import React, {useEffect, useState} from 'react';
import GameBoard from '../components/GameBoard'
import { useDispatch } from 'react-redux'
export default function HomePage() {
  const peopleArray = ["Alex", "Alfred", "Anita", "Anne", "Bernard", "Bill", "Charles", "Claire", "David", "Eric", "Frans", "George", "Herman", "Joe", "Maria", "Max", "Paul", "Peter", "Philip", "Richard", "Robert", "Sam", "Susan", "Tom"];
  return (
    <>
    <div id={'gameboard'}>
      <GameBoard people = {peopleArray}></GameBoard>
    </div>

    </>
  )
}
