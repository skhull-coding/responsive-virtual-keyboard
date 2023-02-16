import { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Textarea from "./components/Textarea";

function App() {
  const [textVal, setTextVal] = useState("");
  const addInTextVal = (letter, position1, position2) => {
    let firstText = textVal.slice(0, position1),
      lastText = textVal.slice(position2);
    setTextVal(firstText + letter + lastText);
  };
  const deleteInTextVal = (position1, position2) => {
    let firstText;
    if (position1 === position2) {
      firstText = textVal.slice(0, position1 - 1);
    } else {
      firstText = textVal.slice(0, position1);
    }
    let lastText = textVal.slice(position2);

    setTextVal(firstText + lastText);
  };
  return (
    <div className="flex w-full h-screen justify-center items-center bg-slate-900 overflow-hidden">
      <Textarea value={textVal} changeVal={setTextVal} />
      <Keyboard value={textVal} changeVal={setTextVal} addVal={addInTextVal} delVal={deleteInTextVal} />
    </div>
  );
}

export default App;
