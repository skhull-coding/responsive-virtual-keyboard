import React from "react";

export default function Textarea(props) {
  return (
    <textarea
      id="textarea"
      className="w-full max-w-md m-2 bg-slate-900 bg-opacity-40 text-white py-2 px-3 rounded-md outline-none ring-1 ring-slate-700 focus:ring focus:ring-slate-500 h-52 max-h-96 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-rounded-md scrollbar-thumb-rounded-md text-sm md:text-base"
      value={props.value}
      onChange={(e) => {
        props.changeVal(e.target.value);
      }}
    ></textarea>
  );
}
