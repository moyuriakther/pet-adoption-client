"use client";
import PAForm from "@/components/UI/Form/PAForm";
import PAInput from "@/components/UI/Form/PAInput";
import PASelect from "@/components/UI/Form/PASelect";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import { PetSpecies } from "@/types";
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
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const PetCardContainer = () => {
  const [searchParams, setSearchParams] = useState<Record<string, any>>({});

  const { data, isLoading, isSuccess } = useGetAllPetsQuery({
    ...Object.fromEntries(
      Object.entries(searchParams).filter(([_, value]) => value !== "")
    ),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { species, breed, age, location } = data;
    setSearchParams({
      species: species || "",
      breed: breed || "",
      age: age || "",
      location: location || "",
    });
  };

  return (
    <Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            padding: 2,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "background.default",
          }}
        >
          <PAForm onSubmit={onSubmit}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md>
                <PASelect
                  name="species"
                  label="Species"
                  items={PetSpecies}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md>
                <PAInput name="breed" label="Breed" type="text" fullWidth />
              </Grid>
              <Grid item xs={12} md>
                <PAInput name="age" label="Age" type="number" fullWidth />
              </Grid>
              <Grid item xs={12} md>
                <PAInput
                  name="location"
                  label="Location"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md>
                <Button type="submit" fullWidth>
                  Search
                </Button>
              </Grid>
            </Grid>
          </PAForm>
        </Box>
      </Container>
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
                        <Link href={`/pet-details/${pet.id}`} passHref>
                          <Button size="small">Details</Button>
                        </Link>
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
