import React from "react";

//onChange
//The onChange attribute is useful for handling changes to input values. 
//This event listener is often used with -
//<input>, <select>, and <textarea> inputs (basically, anywhere you need to capture a user's input).

function ChangeItUp() {
  function handleChange(event) {
    console.log(`${event.target.name}: ${event.target.value}`);
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        onChange={handleChange}
        placeholder="Enter search term..."
      />

      <select name="filter" onChange={handleChange}>
        <option value="all">Select a filter...</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
}

export default ChangeItUp;
