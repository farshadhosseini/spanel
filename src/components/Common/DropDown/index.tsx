import {
  faEdit,
  faEllipsisV,  
  faPaperclip,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { actionTypes } from "../../../reducers/modal";
import { IDropDownProps } from "../../../interfaces/components";

export const DropDown: React.FC<IDropDownProps> = ({ onAction }): JSX.Element => {
  const [toggle, setToggle] = useState<Boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleAction = (action: string) => {
    onAction(action);
    setToggle(false);
  };

  return (
    <button
      className="self-end absolute left-4 top-4 cursor-pointer bg-slate-200 rounded-md p-2 px-3 flex items-center"
      onClick={handleToggle}
    >
      <FontAwesomeIcon icon={faEllipsisV} size="sm" />
      {toggle ? (
        <div className="bg-white absolute left-0 p-3 rounded-md shadow-xl w-40 z-10 self-start top-8 border">
          <ul className="text-right text-sm font-light text-gray-500">
            <li className="hover:bg-slate-100 p-2 rounded-md flex gap-2" onClick={() => handleAction(actionTypes.details)}>
              <FontAwesomeIcon icon={faPaperclip} />
              جزییات بیشتر
            </li>
            <li className="hover:bg-slate-100 p-2 rounded-md flex gap-2" onClick={() => handleAction(actionTypes.update)}>
              <FontAwesomeIcon icon={faEdit} />
              ویرایش
            </li>
            <li className="hover:bg-rose-100 p-2 rounded-md flex gap-2 text-rose-700" onClick={() => handleAction(actionTypes.remove)}>
              <FontAwesomeIcon icon={faTrash} />
              حذف
            </li>
          </ul>
        </div>
      ) : null}
    </button>
  );
};
