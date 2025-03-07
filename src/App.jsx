import React, { useState } from "react";

function App() {
  let [color, setColor] = useState("white");
  let [textColor, setTextColor] = useState("black");

  let bgChanger = () => {
    if (color === "white") {
      setColor("black");
      setTextColor("white");
    } else {
      setColor("white");
      setTextColor("black");
    }
  }; 

  return (
    <>
      <div
        className="h-screen flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <button
          className="bg-cyan-500 p-3 rounded-full font-bold cursor-pointer"
          style={{ color: textColor }}
          onClick={bgChanger}
        >
          Change Background
        </button>
      </div>
    </>
  );
}

export default App;
