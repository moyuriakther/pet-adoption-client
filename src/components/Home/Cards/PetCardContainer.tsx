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
import Link from "next/link"
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { keyframes, styled } from "@mui/material/styles";

// Keyframe animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled components for animation
const AnimatedBox = styled(Box)(({ theme }) => ({
  animation: `${fadeIn} 2s ease-in`,
}));

const AnimatedCard = styled(Card)(({ theme }) => ({
  animation: `${slideIn} 1s ease-out`,
}));

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
  };
  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
    console.log(gender);
  };

  return (
    <Box sx={{my:8}}>
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
        <AnimatedBox
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
              <FormControl
          size="small"
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
          </Grid>
          <Grid item xs={12} md>
          <FormControl
          size="small"
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
              <Grid item xs={12} md>
                <Button type="submit" fullWidth>
                  Search
                </Button>
              </Grid>
            </Grid>
          </PAForm>    
        </AnimatedBox>
      </Container>
    <Container>
          <Box sx={{ textAlign: "center", margin: "30px auto" }}>
            <Grid container spacing={2} mb={4}>
              {isLoading
                ? "Loading.."
                : data?.map((pet: any) => (
                    <Grid item xs={12} sm={6} md={3} key={pet.id}>
                      <Card sx={{ maxWidth: 345, mx:"auto", mb: 3, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", borderRadius: 2,}}>
                      <Link href={`/pet-details/${pet.id}`} passHref>
                        <CardMedia
                          sx={{ height: { xs: 180, sm: 220, md: 240 }, objectFit: "cover",}}
                          image={pet?.photos[0]}
                          title={pet?.title}
                        />
                        <CardContent sx={{ textAlign: "center" }}>
                          <Typography gutterBottom variant="h6" component="div">
                          <span className="font-bold">Name: </span>{pet?.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          <span className="font-bold">Age: </span> {pet?.age}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          <span className="font-bold"> Breed: </span> {pet?.breed}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          <span className="font-bold">Species: </span> {pet?.species}
                          </Typography>
                        </CardContent> 
                        <CardActions sx={{p:2}} className="flex justify-center">
                          <Link href={`/pet-details/${pet.id}`} passHref>
                          <Button size="small">View Details</Button>
                          </Link>
                        </CardActions>
                        </Link>
                      </Card>
                    </Grid>
                  ))}
            </Grid>
          </Box>
    </Container>
    </Box>
  );
};

export default PetCardContainer;
