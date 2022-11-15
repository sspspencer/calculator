import { useState } from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";

function App() {
  const [currentVal, setCurrentVal] = useState<string>("0");
  return (
    <div className="bg-black rounded-xl  h-screen py-5 flex  items-center justify-center ">
      <div className=" h-3/4 w-1/2 flex flex-col items-center justify-center">
        <Screen currentVal={currentVal} setCurrentVal={setCurrentVal} />
        <Buttons currentVal={currentVal} setCurrentVal={setCurrentVal} />
      </div>
    </div>
  );
}

export default App;
