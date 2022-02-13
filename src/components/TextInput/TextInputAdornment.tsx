import React from "react";
import clsx from "clsx";
import Button from "../Button";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const TextInputAdornment: React.FC<Partial<TextInputAdornmentProps>> = ({
  children,
  className,
  position,
  onTogglePassword,
  padding = true,
  showPassword = false,
  password = false,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        !password && padding && "py-3 px-3",
        className
      )}
      {...props}
    >
      {position === "END" && password ? (
        <Button
          variant="ICON"
          icon={showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          onClick={onTogglePassword}
        />
      ) : (
        children
      )}
    </div>
  );
};

export default TextInputAdornment;
