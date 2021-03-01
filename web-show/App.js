import React from 'react';
import Card from "./Cards";
import sdata from "./Sdata";
import "./index.css";

/*
function App(params) {

  let curDate = new Date();
  let currDate = curDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (currDate >= 1 && currDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "limegreen";
  } else if (currDate >= 12 && currDate < 16) {
    greeting = "Good AfterNoon";
    cssStyle.color = "yellow"
  } else if (currDate >= 16 && currDate < 21) {
    greeting = "Good Evening";
    cssStyle.color = "orange"
  } else {
    greeting = "Good Night";
    cssStyle.color = "black"
  }


  return (<>
    <div>
      <h1>Hello,<span className="span" style={cssStyle}> {greeting} </span> </h1>
    </div>
  </>)
  */

  
  console.log(sdata[0]);
  
  
    // WE CAN PASS THIS FUNCTION IN {sdata.map(HERE)}
  function ncard(val){
    console.log(val);
    return(
      <Card
      key={val.id}
      imgsrc={val.imglink}
      title={val.title}
      sname={val.Name}
      link={val.link}
    />
    )   
  };
  
  // let a = 14;
  // let b = 14;
  
  // let sum = a + b;
  // console.log(sum)
  
  let App = () => (
    <>
      <h1 className="heading_style">Best Web Series In India</h1>
  
      {sdata.map(ncard)}
  
  
    {/* WE CAN GET VALUE BY USING THIS ARROW FUNCTION */}
      {/* {sdata.map((val) => {
        return(
      <Card
      imgsrc={val.imglink}
      title={val.title}
      sname={val.Name}
      link={val.link}
    />
    );
      })
      } */}
  
    </>
  );
   

export default App;