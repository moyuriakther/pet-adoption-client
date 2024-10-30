"use client"
import { Box, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/landing_page/facebook.png";
import instagram from "@/assets/landing_page/instagram.png";
import linkedin from "@/assets/landing_page/linkedin.png";
import twitter from "@/assets/landing_page/twitter.png";

const FooterPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  

  return (
    <Box bgcolor="rgba(103,84,68,255)" py={5}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={4}>
          <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "center", md: "flex-start" }}
              textAlign={{ xs: "center", md: "left" }}
              spacing={4}
            >
              <Box letterSpacing={4}>
              <Typography
                  variant="h5"
                  component={Link}
                  href="/"
                  fontWeight={600}
                  color="#ffffff"
                >
                  <Box component="span" color="black">
                    {" "}
                    Pet{" "}
                  </Box>
                  Adoption
                </Typography>
                <Typography color="lightGray">Find your perfect pet companion. Our platform connects you with local shelters and rescues for easy, secure pet adoption.</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "center", md: "flex-start" }}
              textAlign={{ xs: "center", md: "left" }}
              pl={!isMobile && !isTablet ? 12 : 0} 
              spacing={2}
            >
              <Box>
                <Typography color="#ffffff" variant="h6" component="h6" fontWeight={600}>
                  Useful Links
                </Typography>
                <Stack direction="column">
                  <Typography color="#ffffff" component={Link} href="/">Home</Typography>
                  <Typography color="#ffffff" component={Link} href="/about-us">About Us</Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
          <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "center", md: "flex-start" }}
              textAlign={{ xs: "center", md: "left" }}
              spacing={4}
            >
              <Box letterSpacing={4}>
              <Typography color="#ffffff" variant="h6" component="h6" fontWeight={600} id="contact">
                Contact Us
                </Typography>
                <Typography color="#ffffff">Email:akthermoyuri@gmail.com</Typography>
                <Typography color="#ffffff">Phone:01794844000</Typography>
              </Box>
            </Stack>
            {/* <Stack
              direction="row" spacing={3} justifyContent={isMobile ? "center": "start"} pt={1}>
              <Image src={facebook} alt="facebook" height={30} width={30} />
              <Image src={instagram} alt="instagram" height={30} width={30} />
              <Image src={linkedin} alt="linkedin" height={30} width={30} />
              <Image src={twitter} alt="twitter" height={30} width={30} />
            </Stack> */}
          </Grid>
        </Grid>
        <hr style={{ border: "1px solid #ddd", margin: "20px 0" }} />
      <Box>
        <Typography variant="body2" align="center" color="#ffffff">
           © 2024 PET ADOPTION. ALL RIGHTS RESERVED
        </Typography>
      </Box>
      </Container>
    </Box>
  );
};

export default FooterPage;
