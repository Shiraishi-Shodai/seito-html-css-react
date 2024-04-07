import React, { FC } from "react";
import { GridProps } from "../types/grid";
import "../assets/css/grid.css";
export const Grid: FC<GridProps> = ({ itemCol, children }) => {
  return (
    <>
      <ul className={`grid grid-col${itemCol}`}>
        {children.map((value, key) => (
          <li className="grid-item" key={key}>
            {value}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Grid;
