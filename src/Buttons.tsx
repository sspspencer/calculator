import { useState } from "react";

function Buttons() {
  const [count, setCount] = useState(0);

  return (
    <div className=" h-2/3 py-5 px-5 grid grid-cols-4 ">
      <button className="rounded-full  h-4/5 w-11/12 bg-slate-400 text-3xl font-semibold">
        AC
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-slate-400 text-3xl font-semibold">
        +/-
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-slate-400 text-3xl font-semibold">
        %
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-orange-400 text-3xl font-semibold text-white">
        /
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white">
        7
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white">
        8
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white">
        9
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-orange-400 text-3xl font-semibold text-white">
        x
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white">
        4
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white">
        5
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white">
        6
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-orange-400 text-3xl font-semibold text-white">
        -
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white">
        1
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white">
        2
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white">
        3
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-orange-400 text-3xl font-semibold text-white">
        +
      </button>
      <button className="col-span-2 rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white text-left pl-6">
        0
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white">
        .
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-orange-400 text-4xl font-semibold text-white">
        =
      </button>
    </div>
  );
}
export default Buttons;
