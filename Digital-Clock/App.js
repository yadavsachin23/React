import React, { useState } from 'react';

const App = () => {
  const colorR = '#8e44ad';
  const [bg , setBg] = useState(colorR);
  // const click = 'Click Me'
  const [name , setName] = useState('Click Me');


  const bgchange = () =>{
    // console.log("Clicked");
    let newBg = "#34495e";
    setBg(newBg);
    // let newName = "Go to Hell 😄 "
    setName("Go to Hell 😄 ");
  }

  const bgName = () => {
    setBg(colorR);
    setName("Welcome Back 🤗")
  }

  return(
    <>
      <div style = {{backgroundColor : bg}}>
        <button onClick = { bgchange } onDoubleClick = { bgName }> { name } </button>
      </div>
    </>
  )
}

export default App;