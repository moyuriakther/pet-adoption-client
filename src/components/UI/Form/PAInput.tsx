import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PAInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
  sx,
  placeholder,
  required,
  value,
  onChange,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <TextField
            {...field}
            label={label}
            type={type}
            variant="outlined"
            size={size}
            fullWidth={fullWidth}
            value={value}
            onChange={onChange}
            sx={{ ...sx }}
            placeholder={label}
            required={required}
            error={!!error?.message}
            helperText={error?.message}
          />
        );
      }}
    />
  );
};

export default PAInput;
