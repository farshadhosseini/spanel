import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IModalProps } from "../../../interfaces/components";

export const Modal: React.FC<IModalProps> = ({ title, onClose, buttonText, body, buttonAction }): JSX.Element => {
    return (
        <div className="fixed left-0 right-0 flex justify-center items-center h-screen bg-black z-40 bg-opacity-30">
            <div className="bg-white p-4 rounded-xl lg:w-1/2 w-11/12 flex flex-col gap-4">
                <div className="flex justify-between border-b text-xl items-center pb-2">
                    <h3>{title}</h3>
                    <FontAwesomeIcon icon={faClose} onClick={onClose} />
                </div>
                <div className="">
                    {body}
                </div>
                <div className="flex justify-end gap-2 border-t pt-2">
                    <button className="bg-orange-600 py-2 px-4 rounded-lg text-white text-sm" onClick={buttonAction}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}