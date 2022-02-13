import React from "react";
import clsx from "clsx";
import { stylex } from "helpers/functions";
import Ripple from "components/Ripple";

const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  rounded,
  floating,
  fullWidth,
  children,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={clsx(
        "relative overflow-hidden uppercase font-bold border border-solid border-primary-500 rounded-sm px-4 py-2 text-primary-500",
        buttonProps?.className,
        floating && "shadow-lg",
        fullWidth && "w-full"
      )}
      style={stylex(rounded && { borderRadius: rounded }, buttonProps?.style)}
    >
      <Ripple />
      {children}
    </button>
  );
};

export default OutlinedButton;
