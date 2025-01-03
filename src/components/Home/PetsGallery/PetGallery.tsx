import { Grid, Container, Typography, Box } from '@mui/material';
import PetCard from './PetCard';
import { useGetAllPetsQuery } from '@/redux/api/petApi';

const PetsGallery = () => {
  const {data: pets} = useGetAllPetsQuery({});
  return (
    <Container maxWidth="lg" sx={{ my: 5 }}>
      <Typography variant="h4" align="center" gutterBottom  component="h2"
                fontWeight={600} color={"primary.main"}>
       Pets Gallery
      </Typography>
      <Grid 
        container
        spacing={4}
        pt={3}
        sx={{
          animation: 'fade-in 1s ease-in-out',
          '@keyframes fade-in': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        }}
      >
        {pets?.map((pet:any) => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={pet.id}>
            <PetCard pet={pet}/>
          </Grid>
        ))}
      </Grid>
    </Container>
   
  );
};

export default PetsGallery;
