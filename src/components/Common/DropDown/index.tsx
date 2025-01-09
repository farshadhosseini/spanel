import {
  faEdit,
  faEllipsisV,
  faPaperclip,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const DropDown = () => {
  const [toggle, setToggle] = useState<Boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <button
      className="self-end absolute left-4 top-4 cursor-pointer"
      onClick={handleToggle}
    >
      <FontAwesomeIcon icon={faEllipsisV} size="xl" />
      {toggle ? (
        <div className="bg-white absolute left-0 p-3 rounded-md shadow-xl w-40 z-10">
          <ul className="text-right text-sm font-light text-gray-500">
            <li className="hover:bg-slate-100 p-2 rounded-md flex gap-2">
              <FontAwesomeIcon icon={faPaperclip} />
              جزییات بیشتر
            </li>
            <li className="hover:bg-slate-100 p-2 rounded-md flex gap-2">
              <FontAwesomeIcon icon={faEdit} />
              ویرایش
            </li>
            <li className="hover:bg-rose-100 p-2 rounded-md flex gap-2 text-rose-700">
              <FontAwesomeIcon icon={faTrash} />
              حذف
            </li>
          </ul>
        </div>
      ) : null}
    </button>
  );
};
