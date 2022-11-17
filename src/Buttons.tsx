import { Dispatch, FC } from "react";

interface ButtonProps {
  currentVal: string;
  setCurrentVal: Dispatch<React.SetStateAction<string>>;
}
let evalNumberIsTrue = false;
let currentOp = "";

const Buttons: FC<ButtonProps> = (props) => {
  const currentValZeroIsTrue = props.currentVal === "0";

  const equal = () => {
    if (operatorChecker() === true && currentOp !== ".") {
      let equation = eval(props.currentVal);
      console.log(equation);
      let result = equation.toString();
      evalNumberIsTrue = true;
      return props.setCurrentVal(result);
    }
    console.log("you suck");
  };

  const operator = ["/", "*", "-", "+"];

  const operatorChecker = () => {
    for (let i = 0; i < operator.length; i++) {
      if (props.currentVal.includes(operator[i])) {
        currentOp = operator[i];
        return true;
      }
    }
  };

  const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const currentValueHandler = (i: string) => {
    if (digit.includes(i) && !currentValZeroIsTrue) {
      props.setCurrentVal(props.currentVal + i);
    } else if (digit.includes(i) && currentValZeroIsTrue) {
      props.setCurrentVal(i);
    }

    if (
      (operator.includes(i) && props.currentVal === "") ||
      (operator.includes(i) && operator.includes(props.currentVal.slice(-1))) ||
      (props.currentVal.includes(i) && i === ".") ||
      operatorChecker() === true
    ) {
      return;
    } else if ((operator.includes(i) && i !== "%") || i === ".") {
      props.setCurrentVal(props.currentVal + i);
    } else if (i === "%") {
      const current = parseFloat(props.currentVal);
      const percent = current / 100;
      props.setCurrentVal(percent.toString());
    }
    if (i === "DEL" && !currentValZeroIsTrue && props.currentVal.length === 1) {
      props.setCurrentVal("0");
    } else if (i === "DEL" && !currentValZeroIsTrue) {
      const cButton = props.currentVal.slice(0, -1);
      props.setCurrentVal(cButton);
    }

    if (evalNumberIsTrue && i !== "." && i !== "%" && !operator.includes(i)) {
      props.setCurrentVal(i);
    }

    evalNumberIsTrue = false;
  };
  return (
    <div className=" h-3/4 w-96 py-5 px-5 grid grid-cols-4 sm:w-72">
      <button
        onClick={() => props.setCurrentVal("0")}
        className="rounded-full  h-4/5 w-11/12 bg-slate-400 text-3xl font-semibold"
      >
        AC
      </button>
      <button
        onClick={() => currentValueHandler("DEL")}
        className="rounded-full h-4/5 w-11/12 bg-slate-400 text-3xl font-semibold"
      >
        DEL
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
        onClick={() => currentValueHandler("*")}
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
      <button
        onClick={() => equal()}
        className="rounded-full h-4/5 w-11/12 bg-orange-400 text-4xl font-semibold text-white"
      >
        =
      </button>
    </div>
  );
};
export default Buttons;
