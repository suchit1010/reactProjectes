import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>

      <div
        className="fixed flex flex-wrap justify-center
    bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center gap-4 shadow-lg
         bg-white px-3 py-2 rounded-3xl"
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full 
      shadow-lg  text-white font-semibold "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full 
      shadow-lg text-white font-semibold"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full 
      shadow-lg text-white font-semibold"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("violet")}
            className="outline-none px-4 py-1 rounded-full 
      shadow-lg text-white font-semibold"
            style={{ backgroundColor: "violet" }}
          >
            violet
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full 
      shadow-lg text-white font-semibold"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full 
      shadow-lg text-white font-semibold"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full 
      shadow-lg text-white font-semibold"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full 
      shadow-lg text-white font-semibold"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
