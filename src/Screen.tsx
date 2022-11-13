import { useState } from "react";

function Screen() {
  const [count, setCount] = useState(0);

  return (
    <div className=" h-1/3 flex  justify-end items-end">
      <span className="text-white text-7xl py-4 px-8 ">0</span>
    </div>
  );
}

export default Screen;
