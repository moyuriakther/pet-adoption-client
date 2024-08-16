"use client";
import Image from "next/image";
import services from "@/assets/images/taking care.png"
import { Box, Stack, Typography, useMediaQuery,useTheme } from "@mui/material";
import { styled, keyframes } from '@mui/material/styles';

// Keyframe animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Box for animated background
const AnimatedBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#F1F1F1",
  padding: theme.spacing(12, 2),
  animation: `${fadeIn} 2s ease-in`
}));



export default function PetTakingCare() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
<AnimatedBox>
      <Stack direction="column" spacing={2} sx={{ animation: `${slideUp} 1.5s ease-out` }}>
        <Typography textAlign="center" variant="h6"
                    component="p"
                    fontWeight={300} 
                    >- PET SERVICES
        </Typography>
        <Typography textAlign="center" variant={isMobile ? "h5" : "h4"} component="h2" fontWeight={600} color="primary.main">
          Taking Care of Pets
        </Typography>
      </Stack>
      <Stack sx={{ alignItems: "center", justifyContent: "center", pt: 4 }}>
        <Stack sx={{ width: "90%", maxWidth: 850, height: "auto", position: "relative" }}>
          <Image src={services} alt="Taking care of pets" layout="responsive" style={{ borderRadius: "10px" }} />
        </Stack>
      </Stack>
    </AnimatedBox>
  )
}
