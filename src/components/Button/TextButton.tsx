import React from "react";
import clsx from "clsx";
import Ripple from "components/Ripple";

const TextButton: React.FC<TextButtonProps> = ({
  children,
  fullWidth,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={clsx(
        "relative overflow-hidden capitalize p-2 rounded-sm text-primary-500",
        fullWidth && "w-full",
        buttonProps?.className
      )}
    >
      <Ripple />
      {children}
    </button>
  );
};

export default TextButton;
