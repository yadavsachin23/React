import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

/* 
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/seed/picsum/200/300";
const img2 = "https://picsum.photos/seed/picsum/200/300";
// const link = "http://getbootstrap.com/";

// WRITING STYLES FOR INTERNAL CSS
const style = {
color:"blue",
fontWeight:"bolder",
fontFamily: 'Franklin Gothic Medium', 'Arial Narrow' : 'Arial sans-serif',
textShadow: '2px 2px 2px black',
marginTop:'30px',
textAlign:'center',
}
*/

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

ReactDOM.render(
  <> 
    <div>
      <h1>Hello,<span className="span" style={cssStyle}> {greeting} </span> </h1>
    </div>
  </>,


  /*<>
    <h1 className="heading">Hello, My Name is Sachin</h1>
    <div className="divClass">
      <h2><strong>Current Date is = {currentDate} </strong></h2>
      <h2><strong>Current Time is = {currentTime} </strong></h2>
      <h1 contentEditable="true">MY Name Is Wrong.</h1>
    </div>
    <div className="img-div">
      <img src="https://picsum.photos/id/237/200/300" alt="puppy" />
      <img src={img1} alt="RandomImage" />
      //  <a href={link} target="_blank"> 
      <img src={img2} alt="RandomImage2" />
      // {/* </a>  
    </div>

    // {/* INLINE CSS EXAMPLE 
    <h1 style={{ color: "red", textTransform: "capitalize", textAlign: "center" }}>What is Lorem Ipsum?</h1>
    <p style={{ color: "lime", textTransform: "capitalize", textAlign: "justify" }}><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
 
    // {/* INTERNAL CSS EXAMPLE 
    <h2 style={style}>This is Internal CSS Example</h2>
  </>, 
  */
  document.getElementById('root')
)