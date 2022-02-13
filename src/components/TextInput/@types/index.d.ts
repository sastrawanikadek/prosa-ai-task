interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  variant: "FILLED" | "OUTLINED";
  label: string;
  maxWidth: string | number;
  startAdornment: React.ReactNode;
  endAdornment: React.ReactNode;
  fieldsetProps: React.FieldsetHTMLAttributes<HTMLFieldSetElement>;
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
  containerProps: React.HTMLAttributes<HTMLDivElement>;
  startAdornmentProps: Partial<ExcludedTextInputAdornmentProps>;
  endAdornmentProps: Partial<ExcludedTextInputAdornmentProps>;
  getContainer: (container: HTMLFieldSetElement | HTMLDivElement) => void;
  fullWidth: boolean;
  focused: boolean;
  multiline: boolean;
}

interface TextInputAdornmentProps extends React.HTMLAttributes<HTMLDivElement> {
  position: "START" | "END";
  padding: boolean;
  password: boolean;
  showPassword: boolean;
  onTogglePassword: () => void;
}

type OutlinedTextInputProps = Omit<
  TextInputProps,
  "variant" | "validator" | "validation" | "containerProps"
>;
type FilledTextInputProps = Omit<
  TextInputProps,
  | "variant"
  | "validator"
  | "validation"
  | "label"
  | "fieldsetProps"
  | "labelProps"
  | "focused"
>;

type ExcludedTextInputAdornmentProps = Omit<
  TextInputAdornmentProps,
  "password" | "showPassword" | "onTogglePassword"
>;
