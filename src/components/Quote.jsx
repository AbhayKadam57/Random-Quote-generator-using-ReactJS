import React from "react";

const Quote = ({ quote, author }) => {
  return (
    <div className="Quote">
      <h3>{quote}</h3>
      <p>-{author}</p>
    </div>
  );
};

export default Quote;
