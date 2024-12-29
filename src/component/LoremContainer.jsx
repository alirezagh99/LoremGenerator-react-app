import React, { useState } from "react";
import text from "../data";
function LoremContainer() {
  const [count, setCount] = useState(1);
  const [lorem, setLorem] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = text.slice(0, count);
    setLorem(newArray);
  };
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  return (
    <div className="lg:w-1/2 m-auto mt-20 flex flex-col items-center p-5 gap-10">
      <h2 className="text-gray-700 text-xl font-semibold">
        TIRED OF BORING LOREM IPSUM?
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="num" className="text-gray-700">
          Paragraphs:
        </label>
        <input
          className="bg-gray-300 text-sm py-1 rounded px-2 outline-none mx-2"
          id="num"
          type="number"
          defaultValue={1}
          min={1}
          max={8}
          step={1}
          onChange={handleChange}
        />
        <button className="bg-green-600 text-sm text-white hover:bg-green-800 transition-all duration-300 hover:shadow-lg rounded py-1 px-2">
          Generate
        </button>
      </form>
      <p className="text-sm text-gray-700">{lorem}</p>
    </div>
  );
}

export default LoremContainer;
