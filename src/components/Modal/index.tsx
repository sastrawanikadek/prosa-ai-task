import clsx from "clsx";
import React from "react";
import ReactDOM from "react-dom";

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  footer,
  show,
  onClose,
}) => {
  return (
    show &&
    ReactDOM.createPortal(
      <div
        className={clsx(
          "fixed w-full h-full top-0 left-0 flex items-center justify-center z-50 transition-opacity duration-300"
        )}
      >
        <div
          className="absolute w-full h-full top-0 left-0 bg-black opacity-40"
          onClick={onClose}
        />
        <div className="relative flex flex-col bg-white max-w-2xl max-h-[calc(100%-96px)] w-full overflow-y-auto shadow-md rounded-sm">
          <div className="m-0 mx-6 my-4 flex">
            <h6 className="text-xl font-bold font-poppins capitalize">
              {title}
            </h6>
          </div>
          <div className="flex-1 px-6 my-4 overflow-y-auto flex">
            {children}
          </div>
          <div className="flex px-6 my-4 items-center justify-center">
            {footer}
          </div>
        </div>
      </div>,
      document.getElementsByTagName("body")[0]
    )
  );
};

export default Modal;
