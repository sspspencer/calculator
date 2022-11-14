interface ValProps {
  currentVal: Array<string>;
  setCurrentVal: Function;
}

function Buttons(props: ValProps) {
  return (
    <div className=" h-2/3 py-5 px-5 grid grid-cols-4 ">
      <button
        onClick={() => props.setCurrentVal(["0"])}
        className="rounded-full  h-4/5 w-11/12 bg-slate-400 text-3xl font-semibold"
      >
        AC
      </button>
      <button
        onClick={() => props.setCurrentVal(["-", props.currentVal])}
        className="rounded-full h-4/5 w-11/12 bg-slate-400 text-3xl font-semibold"
      >
        +/-
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-slate-400 text-3xl font-semibold">
        %
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-orange-400 text-3xl font-semibold text-white">
        /
      </button>
      <button
        onClick={() => props.setCurrentVal([...props.currentVal, "7"])}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        7
      </button>
      <button
        onClick={() => props.setCurrentVal([...props.currentVal, "8"])}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        8
      </button>
      <button
        onClick={() => props.setCurrentVal([...props.currentVal, "9"])}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        9
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-orange-400 text-3xl font-semibold text-white">
        x
      </button>
      <button
        onClick={() => props.setCurrentVal([...props.currentVal, "4"])}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        4
      </button>
      <button
        onClick={() => props.setCurrentVal([...props.currentVal, "5"])}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        5
      </button>
      <button
        onClick={() => props.setCurrentVal([...props.currentVal, "6"])}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        6
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-orange-400 text-3xl font-semibold text-white">
        -
      </button>
      <button
        onClick={() => props.setCurrentVal([...props.currentVal, "1"])}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        1
      </button>
      <button
        onClick={() => props.setCurrentVal([...props.currentVal, "2"])}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        2
      </button>
      <button
        onClick={() => props.setCurrentVal([...props.currentVal, "3"])}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        3
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-orange-400 text-3xl font-semibold text-white">
        +
      </button>
      <button
        onClick={() => props.setCurrentVal([...props.currentVal, "0"])}
        className="col-span-2 rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white text-left pl-6"
      >
        0
      </button>
      <button
        onClick={() => props.setCurrentVal([props.currentVal, "."])}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        .
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-orange-400 text-4xl font-semibold text-white">
        =
      </button>
    </div>
  );
}
export default Buttons;
