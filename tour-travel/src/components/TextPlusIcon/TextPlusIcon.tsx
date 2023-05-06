import React, { ReactNode } from "react";
interface Props {
  iconName: string;
  children: ReactNode;
}
const TextPlusIcon: React.FC<Props> = ({ children, iconName }) => {
  return <div>{iconName}</div>;
};
