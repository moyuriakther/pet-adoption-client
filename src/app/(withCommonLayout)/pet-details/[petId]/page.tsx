"use client";
import useUserInfo from "@/hooks/userInfo";
import { useGetPetQuery } from "@/redux/api/petApi";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import AdoptionRequestModal from "./component/AdoptionRequestModal";
import { useState } from "react";

const PetDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const params = useParams();
  const id = params.petId;
  const { data, isLoading, isSuccess } = useGetPetQuery(id);
  console.log(data, isLoading, isSuccess);
  //   const router = useRouter();
  const user = useUserInfo();
  if (!user?.email) {
    // router.push("/login");
    return (
      <Box sx={{ justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h4" color="secondary.dark">
          You are Unauthorized to access
        </Typography>
      </Box>
    );
  }
  if (isLoading) {
    <p>Loading...</p>;
  }
  return (
    <Container sx={{ my: 3 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", my: 3, color: "primary.main" }}
      >
        {" "}
        Pet Details Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={2}>
            <Box sx={{ height: "300", width: "300" }}>
              {data?.photos?.map((photo: string, index: number) => (
                <CardMedia
                  sx={{ borderRadius: "10px" }}
                  key={index}
                  component="img"
                  // height="500"
                  // width="500"
                  image={photo}
                  alt={data?.name}
                />
              ))}
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h6">
                Name: {data?.name}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Species: {data?.species}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Age: {data?.age}
              </Typography>
              <Typography variant="h6" component="div" color="text.secondary">
                Breed: {data?.breed}
              </Typography>

              <Typography variant="h6" color="text.secondary">
                Location: {data?.location}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Medical History: {data?.medicalHistory}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Temperament: {data?.temperament}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Gender: {data?.gender}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Description: {data?.description}
              </Typography>
              <Button
                sx={{ my: 2 }}
                variant="contained"
                color="primary"
                onClick={() => setIsModalOpen(true)}
                // onClick={() => router.push(`/adoption-request/${pet.id}`)}
              >
                Make Adoption Request
              </Button>
              <AdoptionRequestModal
                petId={id}
                open={isModalOpen}
                setOpen={setIsModalOpen}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PetDetailsPage;
