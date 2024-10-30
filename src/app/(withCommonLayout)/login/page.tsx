"use client";
import PAForm from "@/components/UI/Form/PAForm";
import PAInput from "@/components/UI/Form/PAInput";
import { userLogin } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/authServices";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/zodValidations/zodValidations";
import loginImage from "../../../assets/images/loginBackground.jpg"

const LoginPage = () => {
  const router = useRouter();
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
    <Box
    sx={{
      height: "100vh",
      width: "100%",
      backgroundImage: `url(${loginImage.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: { xs: "center", md: "flex-start" },
      alignItems: "center",
    }}
  >
    <Container maxWidth="md" >
      <Box
        sx={{
          maxWidth: "600px",
          width: { xs: "100%", sm: "80%", md: "60%" },
          boxShadow: 5,
          borderRadius: 5,
          p: { xs: 3, sm: 4 },
          backgroundColor: "rgba(255, 255, 255, 0.8)", 
        }}
      >
        <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h5" fontWeight={600} mb={1}>
            Login With Pet Adoption
          </Typography>
          <Typography variant="h6" component="h6" fontWeight={600}>
            Login
          </Typography>
        </Stack>

        {error && (
          <Box sx={{ mt: 2 }}>
            <Typography
              sx={{
                backgroundColor: "red",
                padding: "5px",
                borderRadius: "4px",
                color: "white",
              }}
            >
              {error}
            </Typography>
          </Box>
        )}

        <PAForm
          onSubmit={onSubmit}
          resolver={zodResolver(loginValidationSchema as any)}
          defaultValues={{ email: "admin@gmail.com", password: "admin12345" }}
        >
          <Grid container spacing={2} my={2}>
            <Grid item xs={12}>
              <PAInput
                name="email"
                label="Email"
                type="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <PAInput
                name="password"
                label="Password"
                type="password"
                fullWidth
              />
            </Grid>
          </Grid>

          <Button
            fullWidth
            sx={{ mt: 2, mb: 1 }}
            type="submit"
            variant="contained"
          >
            Login
          </Button>

          <Typography component="p" fontWeight={300}>
            Dont have an account?{" "}
            <Link href="/register" style={{ color: "black" }}>
              Sign Up
            </Link>
          </Typography>
        </PAForm>
      </Box>
    </Container>
  </Box>
  );
};

export default LoginPage;
