import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IButtonProps } from "../../../../../interfaces/components";

export const Button: React.FC<IButtonProps> = ({
  text,
  icon,
  isAcive = false,
  classes,
}): JSX.Element => {
  return (
    <button
      className={`flex items-center gap-2 backdrop-blur-sm text-right font-light ${
        isAcive ? "bg-white/30" : "bg-white/10"
      } hover:bg-white/30 transition-all p-3 w-full rounded-lg ${classes}`}
    >
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
      {text}
    </button>
  );
};
