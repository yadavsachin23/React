import React from 'react';

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
}

export default App;