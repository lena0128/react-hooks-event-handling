import React from "react";

function MultiButton() {


  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  // we always need to provide a function definition, not a function invocation to out event handler
  return (
    <div>
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
    </div>
  );
}

export default MultiButton;
