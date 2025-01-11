import React from "react";
import { ITextAreaProps } from "../../../../interfaces/components";

export const TextArea: React.FC<ITextAreaProps> = ({
  id,
  name,
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
      <textarea
        name={name}
        rows={5}
        id={id}
        value={value}
        onChange={onChange}
        className={`text-sm rounded-lg p-3 outline-none text-black font-light border ${classes}`}
        placeholder={placeholder}
      /></>
  );
};
