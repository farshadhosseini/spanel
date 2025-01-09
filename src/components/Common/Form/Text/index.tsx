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
      className={`text-sm w-full rounded-lg p-3 outline-none text-black font-light ${classes}`}
      placeholder={placeholder}
    />
  );
};
