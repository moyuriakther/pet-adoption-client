import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string({ required_error: "Email is required" }),
  password: z.string({ required_error: "Password must be 6 character" }).min(6),
});

export const ChangePasswordValidationSchema = z
  .object({
    oldPassword: z
      .string()
      .min(6, "Old password must be at least 6 characters"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters"),
    confirmNewPassword: z
      .string()
      .min(6, "Confirm new password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
  });

export const registerValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  username: z.string().min(1, "Please enter your username!"),
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Please enter your password!"),
});

export const CreatePetValidationSchema = z.object({
  name: z.string({ required_error: "Name is Required" }),
  species: z.string({ required_error: "Species is Required" }),
  breed: z.string({ required_error: "Breed is Required" }),
  gender: z.string({ required_error: "Breed is Required" }),
  photos: z.string(),
  age: z.string({
    required_error: "Age is Required and Age must be Integer Number",
  }),
  size: z.string({ required_error: "Pet Size is Required" }),
  location: z.string({ required_error: "Location is Required" }),
  description: z.string({ required_error: "Description is Required" }),
  medicalHistory: z.string({ required_error: "Medical History is Required" }),
  adoptionRequirements: z.string({
    required_error: "Adoption Requirements is Required",
  }),
  temperament: z.string({ required_error: "Temperament is Required" }),
});
