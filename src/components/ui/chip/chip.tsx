import React from "react";
import { Dropdown } from "../icon/dropdown";

type IProps = {
  textNumber?: string;
  textSctring?: string;
};



const Chip: React.FC<IProps> = ({ textNumber, textSctring }) => {
  return (
    <div>
      {textNumber && <span>{textNumber}</span>}
      {textSctring && <span>{textSctring}</span>}
      {<Dropdown />}
    </div>
  );
};

export default Chip;
