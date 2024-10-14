"use client";
import { Avatar,Rating, Box, Container, Stack, Typography, useTheme, useMediaQuery, keyframes } from "@mui/material";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";


const reviews = [
  {
    id: 1,
    name: 'Suel Mari',
    role: 'SEO Expert',
    rating: 5,
    message:
      "The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making our work very easy for us.",
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg', // Example avatar
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'Product Manager',
    rating: 4,
    message:
      "This product has saved us countless hours of work. Highly recommend it!",
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  // Add more reviews as needed
];
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function Testimonial() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
  <Container maxWidth="lg">
    <Box className="mx-auto bg-white rounded-lg shadow-lg mb-16 p-16 border-5"   sx={{
    border: '1px solid', 
    borderColor: theme => theme.palette.primary.main,
    animation: `${fadeInUp} 1s ease-out`,
    animationFillMode: "forwards",
  }}>
     <Box className="flex flex-col items-center mb-6">
       <Box className="flex flex-col items-start">
          <h4 className="text-green-600 text-sm font-semibold mb-2">Customer Reviews</h4>
          <Typography  variant={isMobile ? "h5" : "h4"}
                component="h2"
                fontWeight={600} color={"primary.main"}>
              Our Happy Customers
          </Typography>
       </Box>
      </Box>
      <Swiper spaceBetween={30} slidesPerView={1}>
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <Box className="flex items-start" 
            sx={{
              animation: `${fadeInUp} 1s ease-out`,
              animationDelay: "0.5s",
              animationFillMode: "forwards",
            }}
            >
              <Image
              alt="review slider img"
                src={review.avatar}
                width = "80"
                height = "80"
                style={{ borderRadius: "50%" }}
                className="mr-4"
              />
              <Box className="flex flex-col">
                <Rating value={review.rating} readOnly className="mb-2" />
                <p className="text-lg text-gray-700 italic mb-2">“{review.message}”</p>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.role}</p>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  </Container>
  );
};
