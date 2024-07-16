import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

export const ModalPortal = (props: PropsWithChildren) => {
  if (typeof window === "undefined") return null;
  const el = document.getElementById("modal_container");
  if (el === null) return null;
  return ReactDOM.createPortal(<>{props.children}</>, el);
};
