import React, { useState } from "react";

// const IncNum = () => {
//    const state = useState();

//    const [count] = useState(0);

// console.log("Clicked " + count++);

const App = () => {
  /* const state = useState();
  const [count , setCount] = useState(0);
  
  const IncNum = () => {
   setCount(count + 1);  
  //  console.log("Clicked " + count++);
 }; */

  // Getting time on button click

  //   let newDate = new Date().toLocaleTimeString();
  //   const [cTime, setcTime] = useState(newDate);

  //  const updateTime = () => {
  //    let newCTime = new Date().toLocaleTimeString();
  //    setcTime(newCTime);
  //  }

  //   return (
  //     <>
  //       {/* <h1> {count} </h1>
  //       <button onClick = {IncNum}>Click Me</button> */}
  // <h1>TIME is {cTime}</h1>
  // <button onClick = { updateTime }>Get Time</button>

  //  Gettting time digitally

  let time = new Date().toLocaleTimeString();
  const [cTime, setTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <h1> {cTime} </h1>
    </>
  );
};

export default App;