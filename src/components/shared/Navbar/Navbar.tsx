"use client";
import Image from "next/image";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/assets/images/logo3.png";
import useUserInfo from "@/hooks/userInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import { USER_ROLE } from "@/constants/userRoles";
import AccountMenu from "@/app/(withCommonLayout)/my-profile/Component/AccountMenu";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Navbar = () => {
  const userInfo = useUserInfo();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openMenu, setOpenMenu] = useState(false);

  const handleLogOut = () => {
    logoutUser(router);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Grid container alignItems="center">
            <Grid item xs={6} sm={4}>
              <Box display="flex" alignItems="center">
                <Link href="/">
                  <Image src={logo} alt="logo" height={70} width={70} />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} sm={8}>
              <Stack direction="row" justifyContent="flex-end" spacing={2}>
                {isMobile ? (
                  <>
                    <IconButton onClick={toggleMenu} color="inherit">
                      {openMenu ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                    {openMenu && (
                      <Box
                        position="absolute"
                        top={0}
                        right={0}
                        bgcolor="background.paper"
                        width="100%"
                        zIndex={1300} // Ensure the menu is above other elements
                      >
                        <Stack spacing={2} p={2}  alignItems="center">
                          <Typography component={Link} href="/" onClick={toggleMenu} variant="h6" sx={{ textAlign: 'center', width: '100%' }}>
                            Home
                          </Typography>
                          <Typography component={Link} href="/about-us" onClick={toggleMenu} variant="h6" sx={{ textAlign: 'center', width: '100%' }}>
                            About Us
                          </Typography>
                          {userInfo?.role === USER_ROLE.ADMIN && (
                            <Typography
                              component={Link}
                              href="/dashboard/admin"
                              color="black"
                              onClick={toggleMenu}
                              variant="h6" sx={{ textAlign: 'center', width: '100%' }}
                            >
                              Dashboard
                            </Typography>
                          )}
                          {userInfo.email ? (
                            <>
                              <AccountMenu />
                              <Button
                                onClick={handleLogOut}
                                sx={{
                                  backgroundColor: "info.light",
                                  color: "info.dark",
                                  width: '100%',
                                  borderRadius: 1,
                                }}
                              >
                                Sign Out
                              </Button>
                            </>
                          ) : (
                            <Stack direction="column" spacing={2}>
                              <Button
                                component={Link}
                                href="/login"
                                sx={{
                                  backgroundColor: "info.light",
                                  color: "info.dark",
                                  width: '100%',
                                  borderRadius: 1,
                                }}
                                onClick={toggleMenu}
                              >
                                Sign In
                              </Button>
                              <Button
                                component={Link}
                                href="/register"
                                sx={{
                                  backgroundColor: "info.dark",
                                  color: "info.light",
                                  width: '100%',
                                  borderRadius: 1,
                                }}
                                onClick={toggleMenu}
                              >
                                Sign Up
                              </Button>
                            </Stack>
                          )}
                        </Stack>
                      </Box>
                    )}
                  </>
                ) : (
                  <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}  sx={{ width: '100%' }}>
                    <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
                      <Typography component={Link} href="/" sx={{ color: "text.primary", textDecoration: 'none', "&:hover": { textDecoration: 'underline' } }}>
                        Home
                      </Typography>
                      <Typography component={Link} href="/about-us" sx={{ color: "text.primary", textDecoration: 'none', "&:hover": { textDecoration: 'underline' } }}>
                        About Us
                      </Typography>
                      {userInfo?.role === USER_ROLE.ADMIN && (
                        <Typography
                          component={Link}
                          href="/dashboard/admin"
                          color="black"
                          sx={{ color: "text.primary", textDecoration: 'none', "&:hover": { textDecoration: 'underline' } }}
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
                )}
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
