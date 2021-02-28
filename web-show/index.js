import ReactDom from "react-dom";
import React from "react";
import Card from "./Cards";
import sdata from "./Sdata";
import "./index.css";

console.log(sdata[0]);


  // WE CAN PASS THIS FUNCTION IN {sdata.map(HERE)}
function ncard(val){
  console.log(val);
  return(
    <Card
    imgsrc={val.imglink}
    title={val.title}
    sname={val.Name}
    link={val.link}
  />
  )  

  
}

ReactDom.render(
  <>
    <h1 className="heading_style">Best Web Series In India</h1>

    {sdata.map(ncard)}
  </>,
  document.getElementById("root")
);
 