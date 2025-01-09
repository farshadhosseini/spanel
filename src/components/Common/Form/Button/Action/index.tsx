import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IButtonProps } from "../../../../../interfaces/components";

export const Button: React.FC<IButtonProps> = ({ text, icon }): JSX.Element => {
  return (
    <button className="flex bg-orange-500 hover:bg-orange-600 items-center gap-2 backdrop-blur-sm text-right font-light transition-all p-3 w-full rounded-lg">
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
      {text}
    </button>
  );
};
