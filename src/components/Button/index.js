import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Button = ({ route, text }) => {
  return (
    <div className="btn">
      <Link to={route}>{text}</Link>
    </div>
  );
};

export default Button;
