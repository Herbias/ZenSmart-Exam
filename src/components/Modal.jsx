import cn from "classnames";
import { useState } from "react";

const Modal = ({ open, children, onClose }) => {
  return (
    <div className={cn("fixed inset-0 z-50", !open ? "hidden" : "block")}>
      <div className="absolute inset-0 z-10 bg-gray-100 bg-opacity-30"></div>
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const hide = () => setOpen(false);
  const show = () => setOpen(true);
  const toggle = open ? hide : show;

  return { open, hide, show, onClose: hide, toggle };
};

export default Modal;
