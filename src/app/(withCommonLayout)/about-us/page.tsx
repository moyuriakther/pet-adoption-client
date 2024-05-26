import AboutUsHeroSection from "@/components/AboutUs/AboutUsHero";
import { Box, Container, Stack, Typography } from "@mui/material";
import Banner from "@/assets/images/bann2.jpg";
import Image from "next/image";
import AboutUsBreadcrumb from "@/components/AboutUs/AboutUsBreadcrumb";

const AboutUsPage = () => {
  return (
    <Container>
      <Box sx={{ mt: 2 }}>
        <Box sx={{ my: 2 }}>
          {" "}
          <AboutUsBreadcrumb />
        </Box>
        <Container>
          <Box>
            {" "}
            <Image
              src={Banner}
              alt="banner"
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Container>
        <AboutUsHeroSection />
        <Stack gap={3} direction="column" my={2}>
          <Box>
            <Typography
              variant="h5"
              component="h4"
              fontWeight={400}
              color="primary.main"
            >
              Our Mission
            </Typography>
            <Typography>
              To stop puppy farming in Ireland by simplifying adopting rather
              than shopping so that adopting is the go-to option for everyone in
              need of a pet.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h5"
              component="h4"
              fontWeight={400}
              color="primary.main"
            >
              About the Pet Adoption Group
            </Typography>
            <Typography>
              The public-facing portion of the PAW organization is the Pet
              Adoption Website. In order to help animal rescues manage their
              animals and simplify administrative tasks, we also offer a
              comprehensive solution.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              component="h4"
              fontWeight={400}
              color="primary.main"
            >
              The Team
            </Typography>
            <Typography>
              Experienced foster parents who personally witnessed the strain the
              rescues were under comprise the team behind PAW. In addition to
              helping rescues, PAW was founded to assist the general public in
              locating the ideal animal, hence lowering the demand on puppy
              farms and breeders.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default AboutUsPage;
