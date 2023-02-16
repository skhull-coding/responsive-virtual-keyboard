import React from "react";

export default function ButtonSymbol(props) {
  return (
    <button
      className="w-10 h-10 numbers border border-slate-600 rounded-md hover:bg-black/20"
      onClick={(e) => {
        props.buttonFunc(e);
      }}
      data-value={props.sP === 1 ? props.symbol1 : props.symbol2}
    >
      {props.sP === 1 ? props.symbol1 : props.symbol2}
    </button>
  );
}
