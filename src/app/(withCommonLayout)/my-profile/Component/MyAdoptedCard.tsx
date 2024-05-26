import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";
import Link from "next/link";

export default function MyAdoptedCard({ pet }: any) {
  // console.log(pet);
  // console.log(pet?.pet?.photos[0]);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={pet?.pet?.photos[0]}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {pet?.pet?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Adopted Date: {moment(pet?.updatedAt).format("DD-MM-YYYY")}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/pet-details/${pet.petId}`} passHref>
          <Button size="small">Go Detail Page</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
