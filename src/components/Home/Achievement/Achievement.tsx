"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {  keyframes } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Image from "next/image";
import achievement from "@/assets/images/achievements.jpg"
import { styled } from "@mui/system";

// Keyframe animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
// Background animation keyframes
const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

const AnimatedBackgroundBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(-45deg, #EE9209, #F1F1F1, #EE9209)',
  backgroundSize: '400% 400%',
  animation: `${backgroundAnimation} 10s ease infinite`,
}));

export default function Achievement() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AnimatedBackgroundBox  sx={{ py:4}}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}  sx={{ 
              animation: `${slideInLeft} 1s ease-out`,
              position: "relative",
              display: 'flex',
              justifyContent: isMobile ? "center" : "flex-start",
            }}>
            <Box sx={{ 
                width: isMobile ? "100%" : 500, 
                height: isMobile ? 300 : 450, 
                position: "relative" 
              }}>
              <Image src={achievement} alt="banner" layout="responsive" style={{ 
                  borderRadius: "5%", 
                  animation: `${fadeIn} 2s ease-in` 
                }}/>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ 
              animation: `${slideInRight} 1s ease-out`,
              textAlign: isMobile ? "center" : "left",
            }}>
            <Stack direction="column" spacing={2}>
              <Typography
                variant="h6"
                component="p"
                fontWeight={300}
                sx={{ animation: `${fadeIn} 1s ease-in` }}
              >
               ACHIEVEMENTS
              </Typography>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                component="h2"
                fontWeight={600}
                color="primary.main"
                sx={{ animation: `${fadeIn} 1.5s ease-in` }}
              >
               A LOT OF ANIMALS NEED OUR PROTECTION
              </Typography>
           
              {isMobile ? (
               <Typography
               variant="body2"
               sx={{ animation: `${fadeIn} 2s ease-in` }}
             >
               There are likely hundreds of adoptable cats
             </Typography>
              ) : (
                <Typography variant="body1" my={4} sx={{ animation: `${fadeIn} 2s ease-in` }}>
                {`  Our platform has assisted in matching lots of pets with their new families, ensuring each animal finds a loving home. With an intuitive design and user-friendly features, we've attracted a growing community of pet lovers and adopters.`}
                </Typography>
              )}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: isMobile ? "column" : "row",
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
            <Stack
                direction="row"
                 justifyContent="center"
                alignItems="center"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                sx={{ animation: `${fadeIn} 2.5s ease-in` }}
            >
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center">
            <Typography variant="h4"
                component="h2"
                color="primary.main"
                fontWeight={600}>850</Typography>
            <Typography>Rescued animals</Typography>
            </Stack>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center">
            <Typography variant="h4"
                component="h2"
                color="primary.main"
                fontWeight={600}>150</Typography>
            <Typography>Adoption</Typography>
            </Stack>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center">
            <Typography variant="h4"
                component="h2"
                color="primary.main"
                fontWeight={600}>50</Typography>
            <Typography>Volunteers</Typography>
            </Stack>
            </Stack>
              </Box>
            </Stack>
          </Grid>      
        </Grid>
      </Container>
    </AnimatedBackgroundBox>
  )
}
