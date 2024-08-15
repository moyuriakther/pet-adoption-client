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
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const PetCardContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [searchParams, setSearchParams] = useState<Record<string, any>>({});
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");

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
      size: size || "",
      gender: gender || "",
    });
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value);
    // setSearchParams({ size: size || "" });
  };
  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
    console.log(gender);
  };

  return (
    <Box sx={{mt:8}}>
      <Container>
        <Stack direction="column" spacing={2} mb={4}>
            <Typography textAlign="center" variant="h6"
                        component="p"
                        fontWeight={300} 
                        >- Available Pets
            </Typography>
            <Typography textAlign="center" variant="h4"
                        component="h2"
                        fontWeight={600} 
                        color={"primary.main"}>Featured Pets
            </Typography>
          </Stack>
        <Box
          sx={{
            display: "flex",
            padding: 2,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "background.default",
            flexDirection: isMobile ? "column" : "row",
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
      <Grid
        container
        spacing={2}
        mt={2}
        sx={{
          flexDirection: isMobileOrTablet ? "column" : "row",
          justifyContent: isMobileOrTablet ? "center" : "",
          alignItems: isMobileOrTablet ? "center" : "",
        }}
      >
        <Grid item xs={2} md={2}>
          <FormControl
            sx={{
              m: 1,
              p: 1,
              borderRadius: 3,
              backgroundColor: "background.default",
            }}
            fullWidth={true}
          >
            <InputLabel id="demo-customized-select-label">Size</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={size}
              onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
              fullWidth={true}
            >
              <MenuItem value="">none</MenuItem>
              <MenuItem value={"small"}>small</MenuItem>
              <MenuItem value={"medium"}>medium</MenuItem>
              <MenuItem value={"large"}>large</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              m: 1,
              p: 1,
              borderRadius: 3,
              backgroundColor: "background.default",
            }}
            fullWidth={true}
          >
            <InputLabel id="demo-customized-select-gender">Gender</InputLabel>
            <Select
              fullWidth={true}
              labelId="demo-customized-select-gender"
              id="demo-customized-select"
              value={gender}
              onChange={handleGenderChange}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">none</MenuItem>
              <MenuItem value={"male"}>male</MenuItem>
              <MenuItem value={"female"}>female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={10} md={10}>
          <Box sx={{ textAlign: "center", margin: "30px auto" }}>
            <Grid container spacing={2} mb={4}>
              {isLoading
                ? "Loading.."
                : data?.map((pet: any) => (
                    <Grid item xs={12} sm={6} md={4} key={pet.id}>
                      <Card sx={{ maxWidth: 345, padding: 2 }}>
                        <CardMedia
                          sx={{ height: 140, borderRadius: 5 }}
                          image={pet?.photos[0]}
                          title={pet?.title}
                        />
                        <CardContent sx={{ textAlign: "start" }}>
                          <Typography gutterBottom variant="h5" component="div">
                            Name: {pet?.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Age: {pet?.age}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Breed: {pet?.breed}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Location: {pet?.location}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Description: {pet?.description}
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PetCardContainer;
