import React from "react";
import OutlinedTextInput from "./OutlinedTextInput";
import FilledTextInput from "./FilledTextInput";

const TextInput: React.FC<Partial<TextInputProps>> = ({
  variant,
  name,
  label,
  value,
  onFocus,
  onBlur,
  onChange,
  ...props
}) => {
  const [focused, setFocused] = React.useState(!!value);

  const handleFocus: React.FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setFocused(true);
    onFocus && onFocus(e);
  };

  const handleBlur: React.FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setFocused(!!value);
    onBlur && onBlur(e);
  };

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    onChange && onChange(e);
  };

  switch (variant) {
    case "OUTLINED":
      return (
        <OutlinedTextInput
          name={name}
          label={label}
          value={value}
          focused={focused}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
      );
    default:
      return (
        <FilledTextInput
          name={name}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
      );
  }
};

export default TextInput;
