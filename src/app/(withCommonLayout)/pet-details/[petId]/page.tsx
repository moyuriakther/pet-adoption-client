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
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import AdoptionRequestModal from "./component/AdoptionRequestModal";
import { useState } from "react";
import Link from "next/link";
import ReviewPage from "./component/Review";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useGetUserQuery } from "@/redux/api/profileApi";

const PetDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false); 
  const router = useRouter();
  const user = useUserInfo();
  const params = useParams();
  const id = params.petId;
  const { data, isLoading, isSuccess } = useGetPetQuery(id);
  const {data: userInfo} = useGetUserQuery(user.userId)
console.log(userInfo)
  const handleAdoptionRequest = () => {
    if (user?.email) {
      setIsModalOpen(true); 
    } else {
      setShowLoginPrompt(true); 
      setTimeout(() => {
      router.push(`/login?redirect=/pet-details/${id}`);
      }, 1000); 
    }
  };
  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
  <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
        {data?.photos?.map((photo: string, index: number) => (
        <CardMedia
          key={index}
          component="img"
          image={photo}
          alt={data?.name}
          sx={{
            height: { xs: 300, sm: 400, md: 500 }, 
            width: '100%',
            borderRadius: '10px',
            objectFit: 'cover',  
            boxShadow: 2,
          }}
        />
      ))}
  <Box sx={{ maxWidth: 800, margin: 'auto', padding: '2rem' }}>
    <Typography variant="h4" gutterBottom align="center">
    Reviews
    </Typography>
        <Grid container spacing={3}>
          {data?.reviews?.map((review: any) => (
            <Grid item xs={12} md={12} key={review.id}>
              <Card sx={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
              <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" color="text.secondary text-bold" gutterBottom>
                    {userInfo?.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary text-bold">
                    {userInfo?.email}
                  </Typography>
                </Box>
                <Box sx={{ flex: 2 }}>
                  <Rating value={review.rating} precision={0.5} readOnly sx={{ marginBottom: 1 }} />
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {review.comment}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
        </div>
        {/* Product Details Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <Typography variant="body2" color="text.secondary">
           {/* {data?.breed} */}
          </Typography>
          <Typography variant="h4" component="h1" className="font-bold">
           Meet {data?.name}
          </Typography>

          <div className="flex items-center">
          <Typography variant="h6" className="font-bold">
            Age: {data?.age}
          </Typography>
            
            {/* <Typography variant="body1" color="success.main">
              In Stock
            </Typography> */}
           
          </div>
          <Typography variant="body1" color="success.main">
              Location: {data?.location}
          </Typography> 
          <Typography variant="body1" color="text.secondary">
            Breed: {data?.breed}
          </Typography>
          <Typography variant="body1" color="text.secondary">
          Gender: {data?.gender}
          </Typography>
          <Typography variant="body1" color="text.secondary">
          Size: {data?.size}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Description: {data?.description}
          </Typography>
          <div className="flex items-center gap-4">
            <Button
                sx={{ my: 2 }}
                variant="contained"
                color="primary"
                disabled={!user}
                onClick={handleAdoptionRequest}
              >
                Make Adoption Request
              </Button>
              {
              user?.email ?
                <AdoptionRequestModal
                petId={id}
                open={isModalOpen}
                setOpen={setIsModalOpen}
              />
               :  
               (
                showLoginPrompt && ( 
                  <Typography variant="body1" color="error">
                    Please Login to make adoption request
                  </Typography>
                )
              ) }
              
          </div>
       
          <ReviewPage petId={id}/>
        </div>
      </div>
    </div>
  );
};

export default PetDetailsPage;
