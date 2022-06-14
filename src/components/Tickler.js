import React from "react";

//ARROW FUNCTIONS 
//are a good choice if the event handler dosent need to handle much logic
//If we have more than one line of code to run in the event handler, 
//it's a good idea to create a seperate callback function (ex. "tickle")


//function Tickler() {
//  return <button onClick={() => console.log("Teehee!")}>
    //Tickle me!
    //</button>;
//}

function Tickler() {
  function tickle(event) {
    console.log(event);
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
