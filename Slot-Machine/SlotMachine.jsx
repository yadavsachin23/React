import React from "react";

const SlotM = (props) => {

    // THIS IS SIMPLE WAY
  // let x = "😄";
  // let y = "😄";
  // let z = "🎅";


//  THIS IS USING PROPS
//   let x = props.x;
//   let y = props.y;
//   let z = props.z;

  let { x ,y ,z } = props;  // USING OBJECT DESTRUCTURING

  if (props.x === props.y && props.y === props.z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is Matching</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <div className="slot-inner">
        <h1>
          {x} {y} {z}
        </h1>
        <h1>They are not Matching</h1>
        <hr />
      </div>
    );
  }
};

export default SlotM;
