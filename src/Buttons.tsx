import { Dispatch, FC } from "react";

interface ButtonProps {
  currentVal: string;
  setCurrentVal: Dispatch<React.SetStateAction<string>>;
}

const Buttons: FC<ButtonProps> = (props) => {
  const boolean = props.currentVal === "0";
  const operator = ["/", "x", "-", "+", ".", "%"];
  const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const currentValueHandler = (i: string) => {
    if (digit.includes(i) && !boolean) {
      props.setCurrentVal(props.currentVal + i);
    } else if (digit.includes(i) && boolean) {
      props.setCurrentVal(i);
    }

    if (
      (operator.includes(i) && props.currentVal === "") ||
      (operator.includes(i) && operator.includes(props.currentVal.slice(-1))) ||
      props.currentVal.includes(i)
    ) {
      return;
    } else if (operator.includes(i) && i !== "%") {
      props.setCurrentVal(props.currentVal + i);
    } else if (i === "%") {
      const current = parseFloat(props.currentVal);
      const percent = current / 100;

      props.setCurrentVal(percent.toString());
    }
  };
  return (
    <div className=" h-2/3 py-5 px-5 grid grid-cols-4 ">
      <button
        onClick={() => props.setCurrentVal("0")}
        className="rounded-full  h-4/5 w-11/12 bg-slate-400 text-3xl font-semibold"
      >
        AC
      </button>
      <button
        onClick={() => currentValueHandler("+/-")}
        className="rounded-full h-4/5 w-11/12 bg-slate-400 text-3xl font-semibold"
      >
        +/-
      </button>
      <button
        onClick={() => currentValueHandler("%")}
        className="rounded-full h-4/5 w-11/12 bg-slate-400 text-3xl font-semibold"
      >
        %
      </button>
      <button
        onClick={() => currentValueHandler("/")}
        className="rounded-full h-4/5 w-11/12 bg-orange-400 text-3xl font-semibold text-white"
      >
        /
      </button>
      <button
        onClick={() => currentValueHandler("7")}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        7
      </button>
      <button
        onClick={() => currentValueHandler("8")}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        8
      </button>
      <button
        onClick={() => currentValueHandler("9")}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        9
      </button>
      <button
        onClick={() => currentValueHandler("x")}
        className="rounded-full h-4/5 w-11/12 bg-orange-400 text-3xl font-semibold text-white"
      >
        x
      </button>
      <button
        onClick={() => currentValueHandler("4")}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        4
      </button>
      <button
        onClick={() => currentValueHandler("5")}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        5
      </button>
      <button
        onClick={() => currentValueHandler("6")}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        6
      </button>
      <button
        onClick={() => currentValueHandler("-")}
        className="rounded-full h-4/5 w-11/12 bg-orange-400 text-3xl font-semibold text-white"
      >
        -
      </button>
      <button
        onClick={() => currentValueHandler("1")}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        1
      </button>
      <button
        onClick={() => currentValueHandler("2")}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        2
      </button>
      <button
        onClick={() => currentValueHandler("3")}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        3
      </button>
      <button
        onClick={() => currentValueHandler("+")}
        className="rounded-full h-4/5 w-11/12 bg-orange-400 text-3xl font-semibold text-white"
      >
        +
      </button>
      <button
        onClick={() => currentValueHandler("0")}
        className="col-span-2 rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white text-left pl-6"
      >
        0
      </button>
      <button
        onClick={() => currentValueHandler(".")}
        className="rounded-full h-4/5 w-11/12 bg-gray-600 text-3xl font-semibold text-white"
      >
        .
      </button>
      <button className="rounded-full h-4/5 w-11/12 bg-orange-400 text-4xl font-semibold text-white">
        =
      </button>
    </div>
  );
};
export default Buttons;
