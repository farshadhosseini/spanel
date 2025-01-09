import React from "react";
import { ITextProps } from "../../../../interfaces/components";

export const Text: React.FC<ITextProps> = ({
  type,
  placeholder,
  classes,
}): JSX.Element => {
  return (
    <input
      type={type}
      className={`text-sm rounded-lg p-2 outline-none text-black font-light ${classes}`}
      placeholder={placeholder}
    />
  );
};
