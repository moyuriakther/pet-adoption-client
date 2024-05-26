// "use client";
// import { Box, Button, Input, SvgIconProps, SxProps } from "@mui/material";
// import { ReactElement } from "react";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// interface IFileUploadButton {
//   name: string;
//   label?: string;
//   accept?: string;
//   sx?: SxProps;
//   icon?: ReactElement<SvgIconProps>;
//   variant?: "contained" | "text";
//   onFileUpload: (file: File) => void;
// }

// const PAAutoFileUploader = ({
//   name,
//   accept,
//   sx,
//   label,
//   icon,
//   variant = "contained",
//   onFileUpload,
// }: IFileUploadButton) => {
//   return (
//     <Box>
//       <Button
//         fullWidth={true}
//         component="label"
//         role={undefined}
//         variant="outlined"
//         tabIndex={-1}
//         startIcon={icon ? icon : <CloudUploadIcon />}
//         sx={{ ...sx }}
//       >
//         {label || " Upload file"}
//         <Input
//           type="file"
//           inputProps={{ accept: accept }}
//           style={{ display: "none" }}
//           onChange={(e) => {
//             console.log(e, "e from auto file uploader ");
//             const fileInput = e.target as HTMLInputElement;
//             const file = fileInput.files?.[0];
//             if (file) {
//               onFileUpload(file);
//             }
//           }}
//         />
//       </Button>
//     </Box>
//   );
// };

// export default PAAutoFileUploader;
