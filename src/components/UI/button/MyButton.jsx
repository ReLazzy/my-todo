import React from "react";
import c from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <a {...props} className={c.btn}>
      {children}
    </a>
  );
};

export default MyButton;
