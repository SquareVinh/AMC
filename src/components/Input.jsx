import React from "react";

import { useStateContext } from "../contexts/ContextProvider";

const Input = ({
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
  border,
}) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <input
      type="text"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {text}
    </input>
  );
};

export default Input;
