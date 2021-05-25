import React from "react";

const Button = ({ title, link }) => {
  return (
    <button className="button">
      <a
        style={{ textDecoration: "none", color: "black" }}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
    </button>
  );
};

export default Button;
