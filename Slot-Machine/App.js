import React from "react";
import SlotM from './SlotMachine'



const App = () => {
  return (
    <>
      <h1 className="heading_style">
        {" "}
        🎰 WELCOME TO{" "}
        <span style={{ fontWeight: "bold" }}> SLOT MACHINE GAME </span> 🎰
      </h1>
      <div className="slotMachine">
        <SlotM x = " 😠 " y = " 😠 " z = " 😠 "/>
        <SlotM x = " 🍎 " y = " 🍎 " z = " 🍊 "/>
        <SlotM x = " 😠 " y = " 😏 " z = " 😏 "/>
        <SlotM x = " 🐵 " y = " 🐵 " z = " 🐵 "/>
      </div>
    </>
  );
};

export default App;
