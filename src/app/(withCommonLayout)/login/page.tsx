"use client";
import PAForm from "@/components/UI/Form/PAForm";
import PAInput from "@/components/UI/Form/PAInput";
import { userLogin } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/authServices";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/zodValidations/zodValidations";

const LoginPage = () => {
  const router = useRouter();
  // const searchParams = useSearchParams();
  const [error, setError] = useState(""); 
  // const redirect = searchParams.get("redirect") || "/";
  const [redirect, setRedirect] = useState("/");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const redirectParam = searchParams.get("redirect") || "/";
    setRedirect(redirectParam);
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await userLogin(data);
      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast.success(res.message);
        router.replace(redirect);
      } else {
        setError(res?.message);
      }
    } catch (err: any) {
      toast.error(err.message);
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
              <Typography variant="body1" fontWeight={600}>
                Login With Pet Adoption
              </Typography>
              <Typography variant="h6" component="h6" fontWeight={600}>
                Login
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
              resolver={zodResolver(loginValidationSchema as any)}
              defaultValues={{ email: "admin@gmail.com", password: "admin111" }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12} xs={12}>
                  <PAInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <PAInput
                    name="password"
                    label="Password"
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
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                {`Don't have any account. `}
                <Link href="/register" style={{ color: "black" }}>
                  Sign Up
                </Link>
              </Typography>
            </PAForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
