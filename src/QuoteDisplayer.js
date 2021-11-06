import React, { useState, useEffect } from "react";
import QuoteGenerator from "./QuoteGenerator";

function QuoteDisplayer() {
  const [quote, setQuote] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);
  function buttonClicked(click) {
    setButtonClick(click);
  }

  useEffect(() => {
    fetch("https://humailhasankhan-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setQuote(data);
        } else {
          setHasError(true);
        }
      })
      .catch((error) => console.log(error));
    setButtonClick(false);
  }, [buttonClick]);
  return (
    <div>
      <h1>Quote Generator</h1>
      {hasError ? (
        <span>Something went wrong!</span>
      ) : (
        <p>
          Quote: {quote.quote} by {quote.author}
        </p>
      )}
      <QuoteGenerator buttonClicked={buttonClicked} buttonClick={buttonClick} />
    </div>
  );
}

export default QuoteDisplayer;
