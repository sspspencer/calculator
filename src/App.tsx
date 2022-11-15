import { useState } from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";

function App() {
  const [currentVal, setCurrentVal] = useState<string>("0");
  return (
    <div className="bg-black rounded-xl  h-screen py-5 ">
      <Screen currentVal={currentVal} setCurrentVal={setCurrentVal} />
      <Buttons currentVal={currentVal} setCurrentVal={setCurrentVal} />
    </div>
  );
}

export default App;
