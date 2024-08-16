"use client"
import { Container, Grid, Stack, Typography,  } from "@mui/material";
import Image from "next/image";
import Process1 from "@/assets/images/p1.jpg"
import Process2 from "@/assets/images/p2.jpg"
import Process3 from "@/assets/images/p3.jpg"
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
const AnimatedStack = styled(Stack)(({ theme }) => ({
  animation: `${fadeIn} 1s ease-in`,
}));


export default function PetAdoptionProcess() {

  return (
    <Container sx={{ my: 8 }}>
      <AnimatedStack direction="column" spacing={2}>
        <Typography textAlign="center" variant="h6" component="p" fontWeight={300}>
          - How We Work
        </Typography>
        <Typography textAlign="center" variant="h4" component="h2" fontWeight={600} color={"primary.main"}>
          Pet Adoption Process
        </Typography>
      </AnimatedStack>
      <Stack sx={{ alignItems: "center", justifyContent: "center", pt: 4 }}>
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} sm={4} md={4}>
            <AnimatedStack sx={{ width: "90%", maxWidth: 350, height: "auto", mx: "auto" }}>
              <Image src={Process1} alt="Find your pet" layout="responsive" style={{ borderRadius: "30%" }} />
              <Typography textAlign="center" variant="h6" component="h6" fontWeight={600}>
                Find your pet
              </Typography>
            </AnimatedStack>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <AnimatedStack sx={{ width: "90%", maxWidth: 350, height: "auto", mx: "auto" }}>
              <Image src={Process2} alt="Know your pet" layout="responsive" style={{ borderRadius: "30%" }} />
              <Typography textAlign="center" variant="h6" component="h6" fontWeight={600}>
                Know your pet
              </Typography>
            </AnimatedStack>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <AnimatedStack sx={{ width: "90%", maxWidth: 350, height: "auto", mx: "auto" }}>
              <Image src={Process3} alt="Take your pet home" layout="responsive" style={{ borderRadius: "30%" }} />
              <Typography textAlign="center" variant="h6" component="h6" fontWeight={600}>
                Take your pet home
              </Typography>
            </AnimatedStack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  )
}
