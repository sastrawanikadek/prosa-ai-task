import React from "react";
import clsx from "clsx";
import Ripple from "components/Ripple";

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 24,
  floating,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={clsx(
        "relative p-3 overflow-hidden bg-transparent rounded-full outline-none",
        buttonProps?.className,
        floating && "shadow-lg"
      )}
    >
      {React.isValidElement(icon) && React.cloneElement(icon, { size })}
      <Ripple />
    </button>
  );
};

export default IconButton;
