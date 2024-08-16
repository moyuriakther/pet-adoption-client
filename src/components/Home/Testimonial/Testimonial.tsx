"use client"
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import testimodal1 from "@/assets/images/t1.jpg";
import testimodal2 from "@/assets/images/t2.jpg";
import testimodal3 from "@/assets/images/t3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation } from "swiper/modules";
import { keyframes } from "@mui/system"; 

// Keyframe animations
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

const testimonials = [
  {
    name: "Emily Johnson",
    image: testimodal1.src,
    feedback: "Adopting my cat through this platform was a seamless experience. The site is user-friendly, and the support team was very helpful.",
  },
  {
    name: "Caily Jeffer",
    image: testimodal2.src,
    feedback: "This website made it so easy to find my new best friend! The detailed profiles helped me choose the perfect pet.",
  },
  {
    name: "John Smith",
    image: testimodal3.src,
    feedback: "I loved how straightforward the adoption process was. I would highly recommend this site to anyone looking to adopt.",
  },
];

export default function Testimonial() {
  return (
    <div style={{ backgroundColor: "#F1F1F1", paddingTop: "90px 10px" }}>
      <Box sx={{  py: 8 }}>
        <Container maxWidth="md">
          <Stack direction="column" spacing={2} mb={4}>
            <Typography
              textAlign="center"
              variant="h6"
              component="p"
              fontWeight={300}
              sx={{ animation: `${fadeInUp} 1s ease-out` }} 
            >
              - TESTIMONIALS
            </Typography>
            <Typography
              textAlign="center"
              variant="h4"
              component="h2"
              fontWeight={600}
              color={"primary.main"}
              sx={{ animation: `${fadeInUp} 1s ease-out`, animationDelay: "0.5s", animationFillMode: "backwards" }}
            >
              WHAT PEOPLE SAY ABOUT US
            </Typography>
          </Stack>
         <Box>
         <Swiper   spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Navigation]}>
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Box    sx={{
                    textAlign: "center",
                    px: 2,
                    py: 4,
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    border: `2px solid #EE9209`,
                    animation: `${fadeInUp} 1s ease-out`, // Animating each card
                    animationDelay: `${index * 0.3}s`, // Staggered animation for each slide
                    animationFillMode: "backwards",
                  }}>
                  <Avatar
                    alt={testimonial.name}
                    src={testimonial.image}
                    sx={{
                        width: 80,
                        height: 80,
                        mx: "auto",
                        mb: 2,
                        animation: `${fadeInUp} 1s ease-out`, // Animating avatar
                        animationDelay: `${index * 0.3 + 0.5}s`, // Delayed animation for the avatar
                        animationFillMode: "backwards",
                      }}
                  />
                  <Typography variant="h6" component="h3" gutterBottom   sx={{ animation: `${fadeInUp} 1s ease-out`, animationDelay: `${index * 0.3 + 0.7}s`, animationFillMode: "backwards" }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary"  sx={{ animation: `${fadeInUp} 1s ease-out`, animationDelay: `${index * 0.3 + 0.9}s`, animationFillMode: "backwards" }}>
                    {testimonial.feedback}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
         </Box>
        </Container>
      </Box>
    </div>
  );
}
