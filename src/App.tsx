import { useState } from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";

function App() {
  const [currentVal, setCurrentVal] = useState<string>("0");
  return (
    <div className="bg-black   h-screen py-5 flex  items-center justify-center ">
      <div className=" h-full w-full flex flex-col items-center justify-center sm:h-5/6  sm:w-80">
        <Screen currentVal={currentVal} setCurrentVal={setCurrentVal} />
        <Buttons currentVal={currentVal} setCurrentVal={setCurrentVal} />
      </div>
    </div>
  );
}

export default App;
