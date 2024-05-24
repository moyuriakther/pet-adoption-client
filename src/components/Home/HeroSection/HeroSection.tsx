import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import HeaderBanner from "@/assets/images/banner.png";

const HeroSection = () => {
  return (
    <Container sx={{ display: "flex", direction: "row", my: 16 }}>
      <Box sx={{ flex: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "640px",
            top: "-90px",
            left: "-120px",
          }}
        >
          {/* <Image src={assets.svgs.grid} alt="grid" /> */}
          {/* <ImageComponent src={assets.svgs.grid} alt="grid" /> */}
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Adopt a shelter
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          cat or dog
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          color="primary.main"
          fontWeight={600}
        >
          Pet Adoption
        </Typography>
        <Typography my={4} width={530}>
          There are likely hundreds of adoptable cats and dogs in your local
          animal shelters or rescues right now who would love to join your
          family.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Adopt Now</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          mt: 0,
          width: "100%",
        }}
      >
        <Box>
          <Image
            src={HeaderBanner}
            alt="banner"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
