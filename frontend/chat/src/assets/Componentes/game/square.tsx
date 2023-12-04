import React from "react";

type Props = {
  value: string;
  onClick: () => void;
};
const Square: React.FC<Props> = props => {
  return (
    <button className="float-left border backdrop-blur bg-opacity-75 xl:h-[10rem] lg:h-[9rem] md:h-[8rem] sm:h-[7rem] sm-360px:h-[2rem] sm-280px:h-[2rem] xl:w-[10rem] lg:w-[9rem] md:w-[8rem] sm:w-[7rem] sm-360px:w-[2rem] sm-280px:w-[2rem] text-2xl font-bold leading-8 h-8 -mr-px -mt-px p-0 text-center w-8" 
    onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
