import React from "react";

const Header = ({ handleClick, tags, tag }) => {
  return (
    <div className="header">
      <div>
        {tags.map((tag) => (
          <button onClick={() => handleClick(tag)}>{tag}</button>
        ))}
      </div>
      <div>{tag}</div>
    </div>
  );
};

export default Header;
