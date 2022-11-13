import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Screen from "./Screen";
import Buttons from "./Buttons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black rounded-xl  h-screen py-5 ">
      <Screen />
      <Buttons />
    </div>
  );
}

export default App;
