import React from "react";
import { ITextProps } from "../../../../interfaces/components";

export const Text: React.FC<ITextProps> = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  classes,
  hasLabel,
  label,
}): JSX.Element => {
  return (
    <>
      {hasLabel ? <label htmlFor={id}>{label}</label> : null}
      <input
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className={`text-sm rounded-lg p-3 outline-none text-black font-light border ${classes}`}
        placeholder={placeholder}
      /></>
  );
};
