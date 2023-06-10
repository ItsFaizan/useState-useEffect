import { useEffect, useState } from "react";
import React from 'react';


export default function FirstComponent() {
 
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  function handleClick() {
    setCounter(counter+1);
  }

  function handleClick1() {
    setCounter2(counter2+1);
  }


  useEffect(()=>{
    console.log("inside useeffect")


    return ()=>{
          // for time out etc
    }
  }, [counter])


    return (
      <>
        <button onClick={handleClick}>Click me1!</button>
        <h1>{counter}</h1>
        <button onClick={handleClick1}>Click me2!</button>
        <h1>{counter2}</h1>
        </>
    );
  }