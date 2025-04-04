"use client";
import React, { useEffect, useState } from "react";

function page() {
  let [bgColor, setBgColor] = useState("");
  let [bgColorName, setBgColorName] = useState("");
  let [color, setColor] = useState("");

  let [msg1, setMsg1] = useState("Colour name empty!");
  let [msg2, setMsg2] = useState("Colour name must be under 10 letters!");
  let [msg3, setMsg3] = useState("Invalid Colour name");

  function colorHandler(e) {
    e.preventDefault();
    if (color.length === 0) {
      setBgColorName(msg1);
    } else if (color.length > 10) {
      setBgColorName(msg2);
    } else {
      setBgColor(color);
      setBgColorName(color.trim().toUpperCase());
    }
  }

  useEffect(() => {
    if (color.length === 0) {
      setBgColorName("");
      setColor("");
    }
    setBgColorName(color.toUpperCase());
  }, [color]);

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="m-0 p-0 box-border w-full h-screen flex justify-center items-center transition-[700ms]"
    >
      <div className="w-full text-center">
        <h1 className="text-lg font-bold">{bgColorName}</h1>
      </div>
      <div className="w-full h-20 fixed bottom-5 flex justify-center items-center gap-12 flex-row max-sm:flex-col max-sm:h-auto max-sm:gap-2">
        <form
          onSubmit={colorHandler}
          className="w-1/3 max-sm:w-3/4 flex justify-center items-center flow-row"
        >
          <input
            type="text"
            placeholder="Add Your Color"
            className="w-full py-2 px-4 rounded-l bg-zinc-700 placeholder:text-white caret-white shadow-md outline-none shadow-white text-white"
            autoComplete="on"
            autoCorrect="on"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            list="colors"
          />
          <datalist id="colors">
            <option value="RED"></option>
            <option value="GREEN"></option>
            <option value="BLUE"></option>
            <option value="PINK"></option>
          </datalist>
          <button
            type="submit"
            title="Click to Change Background Color"
            className="py-2 px-4 rounded-r bg-zinc-700 text-white text-base font-semibold border-l-2 border-zinc-500 shadow-md outline-none shadow-white"
          >
            ADD
          </button>
        </form>
        <div className="w-1/4 flex justify-center items-center gap-4 flex-row max-sm:w-3/4 max-sm:justify-between">
          <button
            onClick={() => {
              setBgColor("red");
              setBgColorName("RED");
            }}
            className="py-2 px-7 rounded font-bold bg-red-700 outline-none text-white max-sm:py-1 max-sm:px-5 shadow-lg shadow-red-300"
          >
            RED
          </button>
          <button
            onClick={() => {
              setBgColor("blue");
              setBgColorName("BLUE");
            }}
            className="py-2 px-6 rounded font-bold bg-blue-700 outline-none text-white max-sm:py-1 max-sm:px-4 shadow-lg shadow-blue-300"
          >
            BLUE
          </button>
          <button
            onClick={() => {
              setBgColor("green");
              setBgColorName("GREEN");
            }}
            className="py-2 px-2 rounded font-bold bg-green-700 outline-none text-white max-sm:py-1 max-sm:px-1 shadow-lg shadow-green-300"
          >
            GREEEN
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
