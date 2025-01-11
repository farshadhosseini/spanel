import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { PropsWithChildren } from "react";
import { IPost } from "./posts";

export interface ILayoutProps extends React.PropsWithChildren { }

export interface IButtonProps {
  text: string;
  icon?: IconProp;
  isAcive?: boolean;
  classes?: string;
  handleClock?: () => void,
  isLoading?: boolean
}

export interface ITextProps {
  id?: string,
  name: string,
  type: "text" | "number" | "password";
  placeholder?: string;
  classes?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  hasLabel?: boolean,
  label?: string
}

export interface ITextAreaProps {
  id?: string,
  name: string,
  placeholder?: string;
  classes?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  hasLabel?: boolean,
  label?: string
}

export interface IPageOptionsProps {
  title: string,
  toggleMenu: () => void;
}

export interface IModalProps extends PropsWithChildren {
  title: string,
  onClose: (type: string) => void,
  buttonText?: string,
  buttonAction?: () => void
  type: string,
  isLoading?: boolean
}

export interface IDropDownProps {
  onAction: (type: string) => void
}

export interface IItem {
  updateList: (action: string, id: number, post?: IPost) => void
}