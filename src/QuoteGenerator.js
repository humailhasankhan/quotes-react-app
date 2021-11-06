import React from "react";

function QuoteGenerator(props) {
  function handleClick(event) {
    props.buttonClicked(event.target.value);
  }
  return (
    <div>
      <button onClick={handleClick}>Generate Quote!</button>
    </div>
  );
}

export default QuoteGenerator;
