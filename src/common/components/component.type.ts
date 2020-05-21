export interface ButtonProps {
  text: string;
  loading?: boolean;
  disabled?: boolean;
}

export interface InputType {
  name: string;
  type?: string;
  title: string;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  handleChange: (e: string | any) => void;
  handleOnBlur?: (e: string | any) => void;
}
