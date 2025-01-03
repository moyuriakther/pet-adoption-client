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
import PARInput from "@/components/UI/Form/PARInput";


  const predefinedUsers = [
  {
    email: "admin@gmail.com",
    password: "admin12345",
    role: "admin",
  },
  {
    email: "mou@gmail.com",
    password: "user12345",
    role: "user",
  },
];

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const redirect = searchParams.get("redirect") || "/";
  const [redirect, setRedirect] = useState("/");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const redirectParam = searchParams.get("redirect") || "/";
    setRedirect(redirectParam);
  }, []);


  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const data = { email, password };
    try {
      const res = await userLogin(data);
      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast.success(res.message || "Login successful!");
        router.replace(redirect);
      } else {
        setError(res?.message);
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong. Please try again.");
    }
  };

 const handleAutofill = (user: (typeof predefinedUsers)[0]) => {
    setEmail(user.email);
    setPassword(user.password);
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
          defaultValues={{ email, password }}
        >
          <Grid container spacing={2} my={2}>
            <Grid item xs={12}>
              <PARInput
                name="email"
                label="Email"
                type="email"
                onChange={(e:any) => setEmail(e.target.value)}
                value={email}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <PARInput
                name="password"
                label="Password"
                type="password"
                onChange={(e:any) => setPassword(e.target.value)}
                value={password}
                fullWidth
              />
            </Grid>
          </Grid>
         <div className="mt-5">
          <table className="w-full border border-gray-200 bg-gray-50">
            <thead>
              <tr className="border-b ">
                <th className="p-2 border-r">Email</th>
                <th className="p-2 border-r">Password</th>
                <th className="p-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {predefinedUsers?.map((user, index) => (
                <tr
                  key={index}
                  className="cursor-pointer hover:bg-gray-100 text-sm text-center"
                  onClick={() => handleAutofill(user)}
                >
                  <td className="p-2 border-b border-r">{user.email}</td>
                  <td className="p-2 border-b border-r">{user.password}</td>
                  <td className="p-2 border-b ">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
