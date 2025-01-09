import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ILayoutProps extends React.PropsWithChildren {}

export interface IButtonProps {
  text: string;
  icon?: IconProp;
  isAcive?: boolean;
  classes?: string;
}

export interface ITextProps {
  type: "text" | "number" | "password";
  placeholder: string;
  classes?: string;
}
