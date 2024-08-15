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
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Image from "next/image";
import achievement from "@/assets/images/achievements.jpg"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function Achievement() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ bgcolor: "background.paper", pb:8}}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
            <Box sx={{ width: 500, height: 450, position: "relative", }}>
              <Image src={achievement} alt="banner" layout="responsive" style={{ borderRadius: "5%" }}/>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="column" spacing={2}>
              <Typography
                variant="h6"
                component="p"
                fontWeight={300}
              >
               ACHIEVEMENTS
              </Typography>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                component="h2"
                fontWeight={600}
                color="primary.main"
              >
               A LOT OF ANIMALS NEED OUR PROTECTION
              </Typography>
              {/* <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}> */}
              {isMobile ? (
                "There are likely hundreds of adoptable cats"
              ) : (
                <Typography variant="body1" my={4}>
                  Our platform has assisted in matching lots of pets with their new families, ensuring each animal finds a loving home. With an intuitive design and user-friendly features, we've attracted a growing community of pet lovers and adopters.
                </Typography>
              )}
              {/* </Box> */}
              <Typography
                variant={isMobile ? "body2" : isTablet ? "body1" : "h6"}
                my={4}
              ></Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: isMobile ? "column" : "row",
                }}
              >
            <Stack
                direction="row"
                 justifyContent="center"
                alignItems="center"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
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
    </Box>
  )
}
