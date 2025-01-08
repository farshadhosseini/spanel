import React from "react";

interface IText {
  type: "text" | "number" | "password";
  placeholder: string;
  classes?: string;
}

export const Text: React.FC<IText> = ({
  type,
  placeholder,
  classes,
}): JSX.Element => {
  return (
    <input
      type={type}
      className={`w-full rounded-lg p-2 outline-none text-black font-light ${classes}`}
      placeholder={placeholder}
    />
  );
};
