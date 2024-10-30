import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { useState } from 'react';

const PetCard = ({ pet }:any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 3,
        transition: 'transform 0.3s ease-in-out',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardMedia
        component="img"
        height="150"
        image={pet.photos[0] || '/placeholder.jpg'}
        alt={pet.name}
        sx={{ objectFit: 'cover' }}
      />
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pet.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pet.breed} - {pet.species}
        </Typography>
        <Box mt={1}>
          <Typography variant="caption" display="block">
            {pet.location}
          </Typography>
        </Box>
      </CardContent> */}
    </Card>
  );
};

export default PetCard;
