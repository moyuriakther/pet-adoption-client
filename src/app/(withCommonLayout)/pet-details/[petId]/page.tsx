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

const PetDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false); 
  const router = useRouter();
  const user = useUserInfo();
  const params = useParams();
  const id = params.petId;
  const { data, isLoading, isSuccess } = useGetPetQuery(id);

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
        </div>
        {/* Product Details Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <Typography variant="body2" color="text.secondary">
           {/* {data?.breed} */}
          </Typography>
          <Typography variant="h4" component="h1" className="font-bold">
           {data?.name}
          </Typography>

          <div className="flex items-center">
          <Typography variant="h6" className="font-bold">
            Age: {data?.age}
          </Typography>
            
            {/* <Typography variant="body1" color="success.main">
              In Stock
            </Typography>
            <Rating value={4.5} precision={0.5} readOnly />
            <Typography variant="body2" color="text.secondary">
              (6 Reviews)
            </Typography> */}
          </div>
          <Typography variant="body1" color="success.main">
              Location: {data?.location}
            </Typography> 
          <Typography variant="body1" color="text.secondary">
            Description: {data?.description}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Breed: {data?.breed}
          </Typography>
          {/* Wishlist and Questions */}
          {/* <div className="flex items-center gap-4">
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <Typography>Add to Wishlist</Typography>
            <IconButton>
              <QuestionMarkIcon />
            </IconButton>
            <Typography>Ask a Question</Typography>
          </div> */}
          <div className="text-sm text-gray-500">
            <div>Gender: {data?.gender}</div>
            <div>Size: {data?.size}</div>
          </div>
          <div className="flex items-center gap-4">
            <Button
                sx={{ my: 2 }}
                variant="contained"
                color="primary"
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
          {/* Social Media Share */}
          {/* <div className="flex gap-4 mt-4">
            <IconButton color="primary">
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary">
              <TwitterIcon />
            </IconButton>
            <IconButton color="primary">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="primary">
              <TelegramIcon />
            </IconButton>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PetDetailsPage;
