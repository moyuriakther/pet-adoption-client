import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Controller, useFormContext } from "react-hook-form";
import { SxProps, TextField } from "@mui/material";

interface IInputProps {
  items: string[];
  name: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  required?: boolean;
}

export default function PASelect({
  items,
  name,
  label,
  size = "small",
  fullWidth = true,
  sx,
  required,
}: IInputProps) {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <TextField
            {...field}
            label={label}
            variant="outlined"
            size={size}
            fullWidth={fullWidth}
            sx={{ ...sx }}
            select
            placeholder={label}
            required={required}
            error={isError}
            helperText={
              isError ? (formState.errors[name]?.message as string) : ""
            }
          >
            {items?.map((item: any) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        );
      }}
    />
  );
}
