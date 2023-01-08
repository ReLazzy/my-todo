import React from "react";
import cs from "./Palette.module.css";

const Palette = ({ color, todo }) => {
  return (
    <a
      href="#"
      onClick={() => (todo.color = color)}
      className={[cs[color], cs.circle].join(" ")}
    ></a>
  );
};

export default Palette;
