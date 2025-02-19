"use client";
import React, { useState } from "react";

function page() {
  let [color, setcolor] = useState("");
  return (
    <div
      className="m-0 p-0 box-border w-full h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="box w-full h-12 flex justify-center gap-5 items-center fixed bottom-10 flex-wrap">
        <button
          onClick={() => setcolor("red")}
          className="py-1 px-4 rounded font-bold outline-none bg-red-700 text-white"
        >
          RED
        </button>
        <button
          onClick={() => setcolor("green")}
          className="p-1 rounded font-bold outline-none bg-green-700 text-white"
        >
          GREEEN
        </button>
        <button
          onClick={() => setcolor("black")}
          className="p-1 rounded font-bold outline-none bg-black text-white"
        >
          BLACK
        </button>
        <button
          onClick={() => setcolor("white")}
          className="p-1 rounded font-bold outline-none bg-white text-black"
        >
          WHITE
        </button>
        <button
          onClick={() => setcolor("pink")}
          className="py-1 px-4 rounded font-bold outline-none bg-pink-700 text-white"
        >
          PINK
        </button>
        <button
          onClick={() => setcolor("blue")}
          className="py-1 px-4 rounded font-bold outline-none bg-blue-700 text-white"
        >
          BLUE
        </button>
        <br />
      </div>
    </div>
  );
}

export default page;
