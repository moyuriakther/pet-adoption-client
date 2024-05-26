import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MyAdoptedCard({ pet }: any) {
  console.log(pet);
  console.log(pet?.pet?.photos[0]);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={pet?.pet?.photos[0]}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pet?.pet?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pet?.updatedAt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go Detail Page</Button>
      </CardActions>
    </Card>
  );
}
