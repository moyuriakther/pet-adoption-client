import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { setAccessToken } from "./setAccessToken";

export const userLogin = async (formData: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
    credentials: "include",
  });
  const userInfo = await res.json();
  // console.log(userInfo?.data?.accessToken);

  if (userInfo?.data?.accessToken) {
    setAccessToken(userInfo?.data?.accessToken, {
      redirect: "/",
    });
  }
  return userInfo;
};
