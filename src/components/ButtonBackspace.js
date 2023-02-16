import React from "react";

export default function ButtonBackspace(props) {
  return (
    <button
      id="backspace"
      className="w-10 h-10 material-symbols-rounded rounded-md hover:bg-black/20 border border-slate-600"
      onClick={(e)=>{
        props.buttonFunc(e)
      }}
      data-value={"\b"}
    >
      backspace
    </button>
  );
}
