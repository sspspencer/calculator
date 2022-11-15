import { Dispatch, FC } from "react";

interface ScreenProps {
  currentVal: string;
  setCurrentVal: Dispatch<React.SetStateAction<string>>;
}

const Screen: FC<ScreenProps> = (props) => {
  return (
    <div className=" h-1/3 flex  justify-end items-end">
      <span className="text-white text-7xl py-4 px-8 ">{props.currentVal}</span>
    </div>
  );
};

export default Screen;
