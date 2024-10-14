"use client"
import Achievement from "@/components/Home/Achievement/Achievement";
import PetCardContainer from "@/components/Home/Cards/PetCardContainer";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import PetTakingCare from "@/components/Home/PetTakingCare/PetTakingCare";
import PetAdoptionProcess from "@/components/Home/Process/PetAdoptionProcess";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const HomePage = () => {
  const petsSectionRef = useRef<HTMLDivElement>(null); 
  const router = useRouter(); 
  
  const scrollToPetsSection = () => {
    if (petsSectionRef.current) {
      petsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToFooter = async() => {
   await router.push("/#contact");
  };
  return (
    <>
      {" "}
      <HeroSection onAdoptNowClick={scrollToPetsSection} onContactUsClick={scrollToFooter} />
      <Achievement/>
      <PetAdoptionProcess/>
      <PetTakingCare/>
      <div ref={petsSectionRef}>
         <PetCardContainer />
      </div>
      <Testimonial/>
    </>
  );
};

export default HomePage;
