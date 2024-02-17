import { FC } from "react";
import "./tag.css";

type Props = {
  label: string;
};

export const Tag: FC<Props> = ({ label }) => {
  return <div id="tag">{label}</div>;
};
