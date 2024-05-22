"use server";

import { FieldValues } from "react-hook-form";

export const registerUser = async (formData: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
    cache: "no-store",
  });

  const userInfo = await res.json();
  return userInfo;
};
