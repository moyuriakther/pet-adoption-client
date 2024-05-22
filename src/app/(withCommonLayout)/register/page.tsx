"use client";
import PAForm from "@/components/UI/Form/PAForm";
import PAInput from "@/components/UI/Form/PAInput";
import { userLogin } from "@/services/actions/loginUser";
import { registerUser } from "@/services/actions/registerUser";
import { storeUserInfo } from "@/services/authServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const registerValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  username: z.string().min(1, "Please enter your username!"),
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Please enter your password!"),
});

const RegistrationPage = () => {
  const router = useRouter();

  const onSubmit = async (values: FieldValues) => {
    try {
      const res = await registerUser(values);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          email: values.email,
          password: values.password,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
        }
      }
    } catch (err: any) {
      console.error(err.message);
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
                Registration With Pet Adoption
              </Typography>
              <Typography variant="h6" component="h6" fontWeight={600}>
                Registration
              </Typography>
            </Box>
          </Stack>
          {/* {error && (
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
              )} */}
          <Box>
            <PAForm
              onSubmit={onSubmit}
              resolver={zodResolver(registerValidationSchema)}
              defaultValues={{
                email: "",
                password: "",
                username: "",
                name: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12} xs={12}>
                  <PAInput
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <PAInput
                    name="username"
                    label="User Name"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
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
              {/* <Box sx={{ textAlign: "end" }}>
                    <Typography component="p" mb={1} fontWeight={300}>
                      Forgot Password?
                    </Typography>
                  </Box> */}
              <Button
                fullWidth={true}
                sx={{ margin: "10px 0px" }}
                type="submit"
              >
                Registration
              </Button>
              <Typography component="p" fontWeight={300}>
                {`Already have an account. `}
                <Link href="/login" style={{ color: "black" }}>
                  Sign in
                </Link>
              </Typography>
            </PAForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegistrationPage;
