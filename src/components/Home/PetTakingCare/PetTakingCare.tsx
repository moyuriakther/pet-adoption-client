import Image from "next/image";
import services from "@/assets/images/taking care.png"
import { Box, Stack, Typography } from "@mui/material";


export default function PetTakingCare() {
  return (
    <div style={{backgroundColor: "#F1F1F1", padding: "90px 10px"}} >

      <Stack direction="column" spacing={2}>
        <Typography textAlign="center" variant="h6"
                    component="p"
                    fontWeight={300} 
                    >- PET SERVICES
        </Typography>
        <Typography textAlign="center" variant="h4"
                    component="h2"
                    fontWeight={600} 
                    color={"primary.main"}>Taking Care of Pets
        </Typography>
      </Stack>
        <Stack sx={{  alignItems:"center", justifyContent:"center"}}>
            <Stack sx={{width: "80%",maxWidth: 850,  height: "auto",}}>
            <Image src={services} alt="banner" layout="responsive"  />
            </Stack>
        </Stack>
    </div>
  )
}
