import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [fullName, setfullName] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameNew, setLastNameNew] = useState("");

  const inputevent = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };

  const inputeventTwo = (event) => {
    setLastName(event.target.value);
  };

  const onsubmits = (event) => {
    event.preventDefault();
    setfullName(name);
    setLastNameNew(lastName);
  };

  return (
    <>
      <form onSubmit={onsubmits}>
        <div>
          <h1>  
            Hello 😄 {fullName} {lastNameNew}
          </h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={inputevent}
            value={name}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Last Your Name"
            onChange={inputeventTwo}
            value={lastName}
          />
          <button type="submit">Submit 🥳</button>
        </div>
      </form>
    </>
  );
};

export default App;
