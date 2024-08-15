import Achievement from "@/components/Home/Achievement/Achievement";
import PetCardContainer from "@/components/Home/Cards/PetCardContainer";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import PetTakingCare from "@/components/Home/PetTakingCare/PetTakingCare";
import PetAdoptionProcess from "@/components/Home/Process/PetAdoptionProcess";

const HomePage = () => {
  return (
    <>
      {" "}
      <HeroSection />
      <Achievement/>
      <PetAdoptionProcess/>
      <PetTakingCare/>
      <PetCardContainer />
    </>
  );
};

export default HomePage;
