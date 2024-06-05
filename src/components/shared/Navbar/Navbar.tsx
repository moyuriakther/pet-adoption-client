"use client";
import Image from "next/image";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/assets/images/logo3.png";
import useUserInfo from "@/hooks/userInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import { USER_ROLE } from "@/constants/userRoles";
import AccountMenu from "@/app/(withCommonLayout)/my-profile/Component/AccountMenu";

const Navbar = () => {
  const userInfo = useUserInfo();

  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={4}>
              <Box display={{ xs: "none", sm: "flex" }}>
                <Link href="/">
                  <Image src={logo} alt="logo" height={70} width={70} />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
                  <Typography component={Link} href="/">
                    Home
                  </Typography>
                  <Typography component={Link} href="/about-us">
                    About Us
                  </Typography>
                  {userInfo?.role === USER_ROLE.ADMIN && (
                    <Typography
                      component={Link}
                      href="/dashboard/admin"
                      color="black"
                    >
                      Dashboard
                    </Typography>
                  )}
                </Stack>
                <Stack direction="row" spacing={2}>
                  {userInfo.email ? (
                    <>
                      <AccountMenu />
                      <Button
                        onClick={handleLogOut}
                        sx={{
                          backgroundColor: "info.light",
                          color: "info.dark",
                        }}
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
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
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
