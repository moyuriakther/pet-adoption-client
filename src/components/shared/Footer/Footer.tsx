import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/landing_page/facebook.png";
import instagram from "@/assets/landing_page/instagram.png";
import linkedin from "@/assets/landing_page/linkedin.png";
import twitter from "@/assets/landing_page/twitter.png";

const FooterPage = () => {
  return (
    <Box bgcolor="rgba(238, 146, 9, 1)" py={5}>
      <Container>
        <Stack
          direction="row"
          gap={3}
          justifyContent="center"
          alignItems="center"
          py={2}
        >
          <Image src={facebook} alt="facebook" height={30} width={30} />
          <Image src={instagram} alt="instagram" height={30} width={30} />
          <Image src={linkedin} alt="linkedin" height={30} width={30} />
          <Image src={twitter} alt="twitter" height={30} width={30} />
        </Stack>
        <Box sx={{ border: "1px dashed lightGray" }}></Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography color="#ffffff">
            &copy; 2024 Pet Adoption. All Rights Reserved.
          </Typography>
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

          <Typography color="#ffffff">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterPage;
