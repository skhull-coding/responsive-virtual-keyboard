import React from "react";

export default function ButtonNumber(props) {
  return (
    <button
      className="w-10 h-10 numbers border border-slate-600 rounded-md hover:bg-black/20"
      onClick={(e) => {
        props.buttonFunc(e);
      }}
      data-value={props.number}
    >
      {props.number}
    </button>
  );
}
