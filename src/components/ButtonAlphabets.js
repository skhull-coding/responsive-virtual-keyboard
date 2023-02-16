import React from "react";

export default function ButtonAlphabets(props) {
  return (
    <button
      className="w-10 h-10 words-1 border border-slate-600 rounded-md hover:bg-black/20"
      onClick={(e) => {
        if (props.cL === 2) {
          props.scL(1);
        }
        props.buttonFunc(e)
      }}
      data-value={props.cL === 2 || props.cL === 3
        ? props.word.toUpperCase()
        : props.word.toLowerCase()}
    >
      {props.cL === 2 || props.cL === 3
        ? props.word.toUpperCase()
        : props.word.toLowerCase()}
    </button>
  );
}
