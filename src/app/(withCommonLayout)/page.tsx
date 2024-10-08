import Achievement from "@/components/Home/Achievement/Achievement";
import PetCardContainer from "@/components/Home/Cards/PetCardContainer";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import PetTakingCare from "@/components/Home/PetTakingCare/PetTakingCare";
import PetAdoptionProcess from "@/components/Home/Process/PetAdoptionProcess";
import Testimonial from "@/components/Home/Testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      {" "}
      <HeroSection />
      <Achievement/>
      <PetAdoptionProcess/>
      <PetTakingCare/>
      <PetCardContainer />
      <Testimonial/>
    </>
  );
};

export default HomePage;
