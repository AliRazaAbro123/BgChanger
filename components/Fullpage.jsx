"use client";
import React, { useEffect, useState } from "react";

function page() {
  const [bgColor, setBgColor] = useState("");
  const [bgColorName, setBgColorName] = useState("");
  const [color, setColor] = useState("");

  const msg1 = "Color name is empty!";
  const msg2 = "Color name must be under 18 letters!";
  const msg3 = "Invalid color name!";

  function isValidColor(input) {
    const isNamedColor = CSS.supports("color", input);
    const isHexColor = /^#([0-9A-Fa-f]{3}){1,2}$/.test(input);
    return isNamedColor || isHexColor;
  }

  function colorHandler(e) {
    e.preventDefault();
    const trimmedColor = color.trim();

    if (trimmedColor.length === 0) {
      setBgColorName(msg1);
    } else if (trimmedColor.length > 18) {
      setBgColorName(msg2);
    } else if (!isValidColor(trimmedColor)) {
      setBgColorName(msg3);
    } else {
      setBgColor(trimmedColor);
      setBgColorName(trimmedColor.toUpperCase());
    }
  }

  useEffect(() => {
    const trimmedColor = color.trim();

    if (trimmedColor.length === 0) {
      setBgColorName("");
    } else {
      setBgColorName(trimmedColor.toUpperCase());
    }
  }, [color]);

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="m-0 p-0 box-border w-full h-screen flex justify-center items-center transition-[700ms]"
    >
      <div className="w-full text-center">
        <h1 className="text-lg font-bold">{bgColorName}</h1>
      </div>
      <div className="w-full h-20 fixed bottom-5 flex justify-center items-center gap-12 flex-row max-sm:flex-col-reverse max-sm:h-auto max-sm:gap-4 max-sm:bottom-[30dvh]">
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
            <option value="YELLOW"></option>
            <option value="ORANGE"></option>
            <option value="PURPLE"></option>
            <option value="CYAN"></option>
            <option value="MAGENTA"></option>
            <option value="LIME"></option>
            <option value="TEAL"></option>
            <option value="BROWN"></option>
            <option value="MAROON"></option>
            <option value="NAVY"></option>
            <option value="OLIVE"></option>
            <option value="AQUA"></option>
            <option value="VIOLET"></option>
            <option value="TURQUOISE"></option>
            <option value="GOLD"></option>
            <option value="SILVER"></option>
            <option value="BEIGE"></option>
            <option value="CORAL"></option>
            <option value="SALMON"></option>
            <option value="PLUM"></option>
            <option value="INDIGO"></option>
            <option value="KHAKI"></option>
            <option value="LAVENDER"></option>
            <option value="PEACH"></option>
            <option value="TAN"></option>
            <option value="MINT"></option>
            <option value="CHOCOLATE"></option>
            <option value="CRIMSON"></option>
            <option value="IVORY"></option>
            <option value="PERU"></option>
            <option value="SEAGREEN"></option>
            <option value="DEEPPINK"></option>
            <option value="MIDNIGHTBLUE"></option>
            <option value="SLATEGRAY"></option>
            <option value="STEELBLUE"></option>
            <option value="FIREBRICK"></option>
            <option value="DARKOLIVEGREEN"></option>
            <option value="DARKCYAN"></option>
            <option value="DARKGOLDENROD"></option>
            <option value="DARKMAGENTA"></option>
            <option value="DARKORANGE"></option>
            <option value="DARKORCHID"></option>
            <option value="DARKRED"></option>
            <option value="DARKSALMON"></option>
            <option value="DARKSEAGREEN"></option>
            <option value="DARKSLATEGRAY"></option>
            <option value="DARKTURQUOISE"></option>
            <option value="DARKVIOLET"></option>
            <option value="DEEPPURPLE"></option>
            <option value="DODGERBLUE"></option>
            <option value="FORESTGREEN"></option>
            <option value="GOLDENROD"></option>
            <option value="HOTPINK"></option>
            <option value="LIGHTBLUE"></option>
            <option value="LIGHTCORAL"></option>
            <option value="LIGHTCYAN"></option>
            <option value="LIGHTGOLDENRODYELLOW"></option>
            <option value="LIGHTGRAY"></option>
            <option value="LIGHTGREEN"></option>
            <option value="LIGHTPINK"></option>
            <option value="LIGHTSALMON"></option>
            <option value="LIGHTSEAGREEN"></option>
            <option value="LIGHTSKYBLUE"></option>
            <option value="LIGHTSLATEGRAY"></option>
            <option value="LIGHTSTEELBLUE"></option>
            <option value="LIGHTYELLOW"></option>
            <option value="LIMEGREEN"></option>
            <option value="MEDIUMAQUAMARINE"></option>
            <option value="MEDIUMBLUE"></option>
            <option value="MEDIUMORCHID"></option>
            <option value="MEDIUMPURPLE"></option>
            <option value="MEDIUMSEAGREEN"></option>
            <option value="MEDIUMSLATEBLUE"></option>
            <option value="MEDIUMSPRINGGREEN"></option>
            <option value="MEDIUMTURQUOISE"></option>
            <option value="MEDIUMVIOLETRED"></option>
            <option value="MISTYROSE"></option>
            <option value="MOCCASIN"></option>
            <option value="NAVAJOWHITE"></option>
            <option value="OLDLACE"></option>
            <option value="PALEGOLDENROD"></option>
            <option value="PALEGREEN"></option>
            <option value="PALETURQUOISE"></option>
            <option value="PALEVIOLETRED"></option>
            <option value="PAPAYAWHIP"></option>
            <option value="POWDERBLUE"></option>
            <option value="ROSYBROWN"></option>
            <option value="ROYALBLUE"></option>
            <option value="SANDYBROWN"></option>
            <option value="SEASHELL"></option>
            <option value="SKYBLUE"></option>
            <option value="SNOW"></option>
            <option value="SPRINGGREEN"></option>
            <option value="THISTLE"></option>
            <option value="TOMATO"></option>
            <option value="WHEAT"></option>
            <option value="WHITESMOKE"></option>
            <option value="ALICEBLUE"></option>
            <option value="ANTIQUEWHITE"></option>
            <option value="AZURE"></option>
            <option value="BLANCHEDALMOND"></option>
            <option value="BLUEVIOLET"></option>
            <option value="CADETBLUE"></option>
            <option value="CHARTREUSE"></option>
            <option value="CORNFLOWERBLUE"></option>
            <option value="CORNSILK"></option>
            <option value="DARKBLUE"></option>
            <option value="DARKGREEN"></option>
            <option value="DARKKHAKI"></option>
            <option value="DARKSLATEBLUE"></option>
            <option value="DIMGRAY"></option>
            <option value="FELDSPAR"></option>
            <option value="FLORALWHITE"></option>
            <option value="GAINSBORO"></option>
            <option value="GHOSTWHITE"></option>
            <option value="HONEYDEW"></option>
            <option value="JASMINE"></option>
            <option value="JUNGLEGREEN"></option>
            <option value="LASERLEMON"></option>
            <option value="LEMONCHIFFON"></option>
            <option value="LINEN"></option>
            <option value="LUST"></option>
            <option value="MALACHITE"></option>
            <option value="MELON"></option>
            <option value="MOCHA"></option>
            <option value="MOUNTBATTENPINK"></option>
            <option value="NEONBLUE"></option>
            <option value="NEONCARROT"></option>
            <option value="NEONGREEN"></option>
            <option value="ONYX"></option>
            <option value="OUTERSPACE"></option>
            <option value="PAYNESGRAY"></option>
            <option value="PEAR"></option>
            <option value="PERSIANBLUE"></option>
            <option value="PERSIANGREEN"></option>
            <option value="PERSIMMON"></option>
            <option value="PHLOX"></option>
            <option value="PINEGREEN"></option>
            <option value="RAJAH"></option>
            <option value="RAZZMATAZZ"></option>
            <option value="RUBY"></option>
            <option value="SAPPHIRE"></option>
            <option value="SUNGLOW"></option>
            <option value="TANGERINE"></option>
            <option value="VERMILION"></option>
            <option value="WISTERIA"></option>
            <option value="ZINNWALDITE"></option>
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
