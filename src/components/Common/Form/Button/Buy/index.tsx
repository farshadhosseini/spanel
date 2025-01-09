import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Button: React.FC = (): JSX.Element => {
  return (
    <button className="flex items-center justify-center gap-2 bg-sky-500 text-white py-2 px-4 rounded-lg w-40">
      توضیحات بیشتر
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};
