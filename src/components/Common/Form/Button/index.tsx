import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IButton {
  text: string;
  icon: IconProp;
  isAcive?: boolean;
  classes?: string;
}

export const Button: React.FC<IButton> = ({
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
      <FontAwesomeIcon icon={icon} />
      {text}
    </button>
  );
};
