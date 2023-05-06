import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";
import "./Button.css";
// export class OutlinePrimaryButton extends React.Component {
//   render() {
//     return <div id="outlinePrimaryButton">{this.props.text}</div>;
//   }
// }
// export class StandardPrimaryButton extends React.Component {
//   render() {
//     return <div id="standardPrimaryButton"></div>;
//   }
// }
// export class FilledButton extends React.Component {
//   render() {
//     return <div id="filledPrimaryButton"></div>;
//   }
// }
interface Props {
  type: "warning" | "secondary" | "primary" | "danger" | "success";
  borderColor?: string;
  children: ReactNode;
  onClick: any;
}
// const returnType: string = (type: string) => {
// if(type===)

// };
// type props = Props & HTMLButtonElement;
export const Button: React.FC<Props> = ({ children, onClick, type }) => (
  <button onClick={onClick} className={type}>
    {children}
  </button>
);
