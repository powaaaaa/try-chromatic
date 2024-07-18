import { ComponentPropsWithRef, FC } from "react";
import "./input.css";

type Props = {
  label: string;
} & ComponentPropsWithRef<"input">;

export const Input: FC<Props> = ({ label, ...props }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input id={label} {...props} />
    </>
  );
};
