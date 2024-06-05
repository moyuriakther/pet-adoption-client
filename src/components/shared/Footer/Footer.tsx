import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/landing_page/facebook.png";
import instagram from "@/assets/landing_page/instagram.png";
import linkedin from "@/assets/landing_page/linkedin.png";
import twitter from "@/assets/landing_page/twitter.png";

const FooterPage = () => {
  return (
    <Box bgcolor="rgba(238, 146, 9, 1)" py={5}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Image src={facebook} alt="facebook" height={30} width={30} />
              <Image src={instagram} alt="instagram" height={30} width={30} />
              <Image src={linkedin} alt="linkedin" height={30} width={30} />
              <Image src={twitter} alt="twitter" height={30} width={30} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Box>
                <Typography color="#ffffff">
                  &copy; {new Date().getFullYear()} Pet Adoption.
                </Typography>
                <Typography color="#ffffff">All Rights Reserved.</Typography>
                <Typography color="#ffffff">akthermoyuri@gmail.com</Typography>
                <Typography color="#ffffff">01794844000</Typography>
              </Box>
              <Box>
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
                <Typography color="#ffffff">Privacy Policy!</Typography>
                <Typography color="#ffffff">Terms & Conditions</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterPage;
