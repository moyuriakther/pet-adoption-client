"use client";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
// import PetCard from "./PetCard";

const PetCardContainer = () => {
  const { data, isLoading, isSuccess } = useGetAllPetsQuery({});
  // console.log(data);
  return (
    <Box>
      <Box></Box>
      <Stack>
        <Box></Box>
        <Container sx={{ textAlign: "center", margin: "30px auto" }}>
          <Grid container spacing={2} mb={4}>
            {isLoading
              ? "Loading.."
              : data?.map((pet: any) => (
                  <Grid item xs={6} md={4} key={pet.id}>
                    <Card sx={{ maxWidth: 345, padding: 2 }}>
                      <CardMedia
                        sx={{ height: 140, borderRadius: 5 }}
                        image={pet?.photos[0]}
                        title={pet?.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {pet?.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {pet?.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Details</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
};

export default PetCardContainer;
