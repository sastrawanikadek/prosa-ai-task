import React from "react";
import clsx from "clsx";
import { stylex } from "helpers/functions";
import styles from "./Button.module.css";

const ContainedButton: React.FC<Partial<ContainedButtonProps>> = ({
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
        styles.btnPulse,
        "relative uppercase font-bold bg-primary-700 rounded-sm p-3 text-white",
        buttonProps?.className,
        floating && "shadow-lg",
        fullWidth && "w-full"
      )}
      style={stylex(rounded && { borderRadius: rounded }, buttonProps?.style)}
    >
      {children}
    </button>
  );
};

export default ContainedButton;
