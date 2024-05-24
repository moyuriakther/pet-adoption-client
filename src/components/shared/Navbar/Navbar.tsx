"use client";
import Image from "next/image";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/assets/images/logo3.png";
import useUserInfo from "@/hooks/userInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import { USER_ROLE } from "@/constants/userRoles";

const Navbar = () => {
  const userInfo = useUserInfo();

  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
  };

  return (
    <Box sx={{ bgcolor: "primary.main" }}>
      <Container>
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          color="white"
        >
          <Box>
            <Link href="/">
              <Image src={logo} alt="logo" height={70} width={70} />
            </Link>
          </Box>
          <Stack direction="row" justifyContent="space-between" gap={4}>
            <Typography component={Link} href="/">
              Home
            </Typography>
            <Typography component={Link} href="/about-us">
              About Us
            </Typography>

            {userInfo?.role === USER_ROLE.ADMIN ? (
              <Typography component={Link} href="/dashboard" color="black">
                Dashboard
              </Typography>
            ) : null}

            {userInfo.email && (
              <Typography component={Link} href="/my-profile">
                My Profile
              </Typography>
            )}
          </Stack>

          {userInfo.email ? (
            <Button
              onClick={handleLogOut}
              sx={{
                backgroundColor: "info.light",
                color: "info.dark",
              }}
            >
              Sign Out
            </Button>
          ) : (
            <Stack gap={2} direction="row">
              <Button
                component={Link}
                href="/login"
                sx={{
                  backgroundColor: "info.light",
                  color: "info.dark",
                }}
              >
                Sign In
              </Button>
              <Button
                component={Link}
                href="/register"
                sx={{
                  backgroundColor: "info.dark",
                  color: "info.light",
                }}
              >
                Sign Up
              </Button>
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
