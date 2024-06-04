"use client";
import PAForm from "@/components/UI/Form/PAForm";
import PAInput from "@/components/UI/Form/PAInput";
import { userLogin } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/authServices";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
// import { ZodEffects, ZodObject, ZodString, ZodTypeAny, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { logoutUser } from "@/services/actions/logoutUser";
import { ChangePasswordValidationSchema } from "@/zodValidations/zodValidations";

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const res = await changePassword({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      });
      toast.success(res?.data?.message);
      logoutUser(router);
      console.log({ res });
    } catch (err: any) {
      toast.success("Incorrect Old Password");
      console.log(error);
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "600px",
            width: "100%",
            // boxShadow: 1,
            borderRadius: 5,
            p: 4,
            textAlign: "center",
            backgroundColor: "background.default",
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center " }}>
            <Box>{/* <Image src={Logo} alt="logo" width={50} /> */}</Box>
            <Box>
              <Typography variant="h6" component="h6" fontWeight={600}>
                Change Current Password
              </Typography>
            </Box>
          </Stack>
          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}
          <Box>
            <PAForm
              onSubmit={onSubmit}
              resolver={zodResolver(ChangePasswordValidationSchema as any)}
              defaultValues={{
                oldPassword: "",
                newPassword: "",
                confirmNewPassword: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12} xs={12}>
                  <PAInput
                    name="oldPassword"
                    label="oldPassword"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <PAInput
                    name="newPassword"
                    label="newPassword"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <PAInput
                    name="confirmNewPassword"
                    label="Confirm newPassword"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth={true}
                sx={{ margin: "10px 0px" }}
                type="submit"
              >
                Change Password
              </Button>
            </PAForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ChangePassword;
