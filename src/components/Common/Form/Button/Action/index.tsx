import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IButtonProps } from "../../../../../interfaces/components";

export const Button: React.FC<IButtonProps> = ({ text, icon, handleClock, isLoading }): JSX.Element => {
  return (
    <button onClick={handleClock} className={`flex bg-orange-500 hover:bg-orange-600 items-center gap-2 backdrop-blur-sm text-right font-light transition-all p-3 rounded-lg ${isLoading ? 'cursor-not-allowed' : ''}`}>
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
      {isLoading ? 'منتظر بمانید ...' : text}
    </button>
  );
};
