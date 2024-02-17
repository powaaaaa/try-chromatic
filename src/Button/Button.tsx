import { ReactNode, ComponentPropsWithoutRef, FC } from "react";
import "./button.css";

type Props = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export const Button: FC<Props> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
