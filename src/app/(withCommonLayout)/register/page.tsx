"use client";
import PAForm from "@/components/UI/Form/PAForm";
import PAInput from "@/components/UI/Form/PAInput";
import { userLogin } from "@/services/actions/loginUser";
import { registerUser } from "@/services/actions/registerUser";
import { storeUserInfo } from "@/services/authServices";
import { registerValidationSchema } from "@/zodValidations/zodValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import loginImage from "../../../assets/images/loginBackground.jpg"

const RegistrationPage = () => {
  const router = useRouter();
  const [error, setError] = useState(""); 


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
      }else{
        setError(res?.message);
      }
    } catch (err: any) {
      console.error(err.message);
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
        <Container maxWidth="md">
        <Box
          sx={{
            maxWidth: "600px",
            width: { xs: "100%", sm: "80%", md: "60%" },
            boxShadow: 5,
            borderRadius: 5,
            p: { xs: 3, sm: 4 },
            // textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)", 
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center " }}>
            {/* <Box> */}
              <Typography variant="body1" fontWeight={600}>
                Registration With Pet Adoption
              </Typography>
              <Typography variant="h6" component="h6" fontWeight={600}>
                Registration
              </Typography>
            {/* </Box> */}
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
          {/* <Box> */}
            <PAForm
              onSubmit={onSubmit}
              resolver={zodResolver(registerValidationSchema as any)}
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
          {/* </Box> */}
        </Box>
    </Container>
      </Box>
  );
};

export default RegistrationPage;
