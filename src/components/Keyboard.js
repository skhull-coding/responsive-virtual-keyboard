import React, { useState } from "react";
import ButtonAlphabets from "./ButtonAlphabets";
import ButtonBackspace from "./ButtonBackspace";
import ButtonNumber from "./ButtonNumber";
import ButtonSymbol from "./ButtonSymbol";

// make the add Val function good

export default function Keyboard(props) {
  const [keyType, setKeyType] = useState("abc");
  const [symbolsPage, setSymbolsPage] = useState(1);
  const [capsLock, setCapsLock] = useState(1);
  const [keyMove, setKeyMove] = useState(false);
  const [offsets, setOffsets] = useState([0, 0]);
  const [keyVis, setKeyVis] = useState(false);
  const buttonFunc = (e) => {
    let textarea = document.getElementById("textarea"),
      val = e.target.dataset.value;
    textarea.focus();
    let pos1 = textarea.selectionStart,
      pos2 = textarea.selectionEnd;
    if (val === "\b") {
      props.delVal(pos1, pos2);
    } else {
      props.addVal(val, pos1, pos2);
    }
  };
  return (
    <>
      <button
        className="w-10 h-10 material-symbols-rounded text-white absolute z-10 top-1 right-1 outline-none active:ring-1 rounded-md p-0.5"
        onClick={() => {
          setKeyVis(!keyVis);
        }}
      >
        keyboard
      </button>
      <div
        id="keyboard"
        className={`rounded-md w-full max-w-fit top-10 right-6 absolute z-50 bg-slate-700 text-white flex flex-col gap-2 p-2 text-sm md:text-base ${
          keyVis ? "block" : "hidden"
        } select-none max-top-0 ${
          keyMove ? "cursor-grabbing" : "cursor-default"
        }`}
        onMouseDown={(e) => {
          let keyboard = document.getElementById("keyboard");
          setKeyMove(true);
          setOffsets([
            keyboard.offsetLeft - e.clientX,
            keyboard.offsetTop - e.clientY,
          ]);
        }}
        onMouseMove={(e) => {
          let keyboard = document.getElementById("keyboard");
          if (keyMove) {
            keyboard.style.top = offsets[1] + e.clientY + "px";
            keyboard.style.left = offsets[0] + e.clientX + "px";
          }
        }}
        onMouseUp={() => {
          setKeyMove(false);
        }}
        onMouseLeave={() => {
          setKeyMove(false);
        }}
      >
        {layer1(props, buttonFunc)}
        {keyType === "abc"
          ? layer2word(capsLock, setCapsLock, buttonFunc)
          : layer2symbol(symbolsPage, buttonFunc)}
        {keyType === "abc"
          ? layer3word(capsLock, setCapsLock, buttonFunc)
          : layer3symbol(symbolsPage, buttonFunc)}
        {keyType === "abc"
          ? layer4word(capsLock, setCapsLock, buttonFunc)
          : layer4symbol(symbolsPage, setSymbolsPage, buttonFunc)}
        {layer5(keyType, setKeyType, setCapsLock, setSymbolsPage, buttonFunc)}
      </div>
    </>
  );
}

function layer1(props, buttonFunc) {
  return (
    <div id="layer-1" className="flex gap-2 justify-between mx-auto">
      <ButtonNumber number="1" buttonFunc={buttonFunc} />
      <ButtonNumber number="2" buttonFunc={buttonFunc} />
      <ButtonNumber number="3" buttonFunc={buttonFunc} />
      <ButtonNumber number="4" buttonFunc={buttonFunc} />
      <ButtonNumber number="5" buttonFunc={buttonFunc} />
      <ButtonNumber number="6" buttonFunc={buttonFunc} />
      <ButtonNumber number="7" buttonFunc={buttonFunc} />
      <ButtonNumber number="8" buttonFunc={buttonFunc} />
      <ButtonNumber number="9" buttonFunc={buttonFunc} />
      <ButtonNumber number="0" buttonFunc={buttonFunc} />
    </div>
  );
}

function layer2word(capsLock, setCapsLock, buttonFunc) {
  return (
    <div id="layer-2" className=" flex gap-2 justify-between mx-auto">
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="q"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="w"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="e"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="r"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="t"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="y"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="u"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="i"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="o"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="p"
        buttonFunc={buttonFunc}
      />
    </div>
  );
}

function layer2symbol(symbolsPage, buttonFunc) {
  return (
    <div id="layer-2" className=" flex gap-2 justify-between mx-auto">
      <ButtonSymbol
        sP={symbolsPage}
        symbol1="+"
        symbol2="`"
        buttonFunc={buttonFunc}
      />
      <ButtonSymbol
        sP={symbolsPage}
        symbol1="×"
        symbol2="~"
        buttonFunc={buttonFunc}
      />
      <ButtonSymbol
        sP={symbolsPage}
        symbol1="÷"
        symbol2="\"
        buttonFunc={buttonFunc}
      />
      <ButtonSymbol
        sP={symbolsPage}
        symbol1="="
        symbol2="|"
        buttonFunc={buttonFunc}
      />
      <ButtonSymbol
        sP={symbolsPage}
        symbol1="/"
        symbol2="{"
        buttonFunc={buttonFunc}
      />
      <ButtonSymbol
        sP={symbolsPage}
        symbol1="_"
        symbol2="}"
        buttonFunc={buttonFunc}
      />
      <ButtonSymbol
        sP={symbolsPage}
        symbol1="<"
        symbol2="€"
        buttonFunc={buttonFunc}
      />
      <ButtonSymbol
        sP={symbolsPage}
        symbol1=">"
        symbol2="£"
        buttonFunc={buttonFunc}
      />
      <ButtonSymbol
        sP={symbolsPage}
        symbol1="["
        symbol2="¥"
        buttonFunc={buttonFunc}
      />
      <ButtonSymbol
        sP={symbolsPage}
        symbol1="]"
        symbol2="₩"
        buttonFunc={buttonFunc}
      />
    </div>
  );
}

function layer3word(capsLock, setCapsLock, buttonFunc) {
  return (
    <div id="layer-3" className="flex gap-2 justify-between mx-auto">
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="a"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="s"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="d"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="f"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="g"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="h"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="j"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="k"
        buttonFunc={buttonFunc}
      />
      <ButtonAlphabets
        cL={capsLock}
        scL={setCapsLock}
        word="l"
        buttonFunc={buttonFunc}
      />
    </div>
  );
}

function layer3symbol(symbolsPage, buttonFunc) {
  return (
    <div id="layer-2" className=" flex gap-2 justify-between mx-auto">
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1="!"
        symbol2="°"
      />
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1="@"
        symbol2="•"
      />
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1="#"
        symbol2="○"
      />
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1="$"
        symbol2="⚪"
      />
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1="%"
        symbol2="▢"
      />
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1="^"
        symbol2="■"
      />
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1="&"
        symbol2="♠️"
      />
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1="*"
        symbol2="♡"
      />
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1="("
        symbol2="◊"
      />
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1=")"
        symbol2="♣"
      />
    </div>
  );
}

function layer4word(capsLock, setCapsLock, buttonFunc) {
  return (
    <div id="layer-4" className="flex gap-2 justify-between mx-auto">
      <button
        id="shift"
        className={`w-10 h-10 material-symbols-rounded rounded-md hover:bg-black/20 border border-slate-600 ${
          capsLock === 3 ? "text-sky-300" : "text-white"
        }`}
        onClick={() => {
          capsLock === 1
            ? setCapsLock(2)
            : capsLock === 2
            ? setCapsLock(3)
            : setCapsLock(1);
        }}
      >
        {capsLock === 1 ? "shift" : "shift_lock"}
      </button>
      <ButtonAlphabets
        cL={capsLock}
        buttonFunc={buttonFunc}
        scL={setCapsLock}
        word="z"
      />
      <ButtonAlphabets
        cL={capsLock}
        buttonFunc={buttonFunc}
        scL={setCapsLock}
        word="x"
      />
      <ButtonAlphabets
        cL={capsLock}
        buttonFunc={buttonFunc}
        scL={setCapsLock}
        word="c"
      />
      <ButtonAlphabets
        cL={capsLock}
        buttonFunc={buttonFunc}
        scL={setCapsLock}
        word="v"
      />
      <ButtonAlphabets
        cL={capsLock}
        buttonFunc={buttonFunc}
        scL={setCapsLock}
        word="b"
      />
      <ButtonAlphabets
        cL={capsLock}
        buttonFunc={buttonFunc}
        scL={setCapsLock}
        word="n"
      />
      <ButtonAlphabets
        cL={capsLock}
        buttonFunc={buttonFunc}
        scL={setCapsLock}
        word="m"
      />
      <ButtonBackspace buttonFunc={buttonFunc} />
    </div>
  );
}

function layer4symbol(symbolsPage, setSymbolsPage, buttonFunc) {
  return (
    <div id="layer-2" className=" flex gap-2 justify-between mx-auto">
      <button
        id="symbols-page"
        className="w-10 h-10 rounded-md hover:bg-black/20 border border-slate-600"
        onClick={() => {
          symbolsPage === 1 ? setSymbolsPage(2) : setSymbolsPage(1);
        }}
      >
        {symbolsPage}/2
      </button>
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1="-"
        symbol2="☆"
      />
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1="'"
        symbol2="▣"
      />
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1='"'
        symbol2="¤"
      />
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1=":"
        symbol2="⇐"
      />
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1=";"
        symbol2="⇒"
      />
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1=","
        symbol2="¡"
      />
      <ButtonSymbol
        sP={symbolsPage}
        buttonFunc={buttonFunc}
        symbol1="?"
        symbol2="¿"
      />
      <ButtonBackspace buttonFunc={buttonFunc} />
    </div>
  );
}

function layer5(keyType, setKeyType, setCapsLock, setSymbolsPage, buttonFunc) {
  return (
    <div id="layer-5" className=" w-full flex gap-2 justify-between mx-auto">
      <button
        id="keyTypes"
        className="min-w-[2.5rem] h-10 material-symbols-rounded rounded-md hover:bg-black/20 border border-slate-600"
        onClick={() => {
          keyType === "abc" ? setKeyType("emoji_symbols") : setKeyType("abc");
          setSymbolsPage(1);
        }}
      >
        {keyType === "abc" ? "abc" : "emoji_symbols"}
      </button>
      <button
        id="comma"
        className="min-w-[2.5rem] min-h-10 words-3 border border-slate-600 rounded-md hover:bg-black/20"
        onClick={(e) => {
          buttonFunc(e);
        }}
        data-value=","
      >
        ,
      </button>
      <button
        id="space-bar"
        className="w-full h-10 words-3 border border-slate-600 rounded-md hover:bg-black/20"
        onClick={(e) => {
          buttonFunc(e);
        }}
        data-value=" "
      ></button>
      <button
        id="dot"
        className="min-w-[2.5rem] min-h-10 words-3 border border-slate-600 rounded-md hover:bg-black/20"
        onClick={(e) => {
          buttonFunc(e);
        }}
        data-value="."
      >
        .
      </button>
      <button
        id="enter"
        className="min-w-[2.5rem] min-h-10 words-3 border border-slate-600 rounded-md hover:bg-black/20 material-symbols-rounded"
        onClick={(e) => {
          buttonFunc(e);
        }}
        data-value={"\n"}
      >
        keyboard_return
      </button>
    </div>
  );
}
