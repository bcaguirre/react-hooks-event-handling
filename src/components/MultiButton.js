import React from "react";

function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      {/*By writing out arrow functions,
       we're providing each of our buttons onClick handlers,
       a function definition that will only be invoked when the button is clicked*/}
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
    </div>
  );
}

export default MultiButton;
