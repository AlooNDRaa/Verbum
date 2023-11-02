import React from "react";

type Props = {
  value: string;
  onClick: () => void;
};
const Square: React.FC<Props> = props => {
  return (
    <button className="float-left rounded border bg-[#000] h-[10rem] w-[10rem] text-white text-2xl font-bold leading-8 h-8 -mr-px -mt-px p-0 text-center w-8" 
    onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
