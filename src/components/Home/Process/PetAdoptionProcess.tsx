import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Process1 from "@/assets/images/p1.jpg"
import Process2 from "@/assets/images/p2.jpg"
import Process3 from "@/assets/images/p3.jpg"


export default function PetAdoptionProcess() {
  return (
    <Container sx={{mb:8}}>

      <Stack direction="column" spacing={2}>
        <Typography textAlign="center" variant="h6"
                    component="p"
                    fontWeight={300} 
                    >- How We Work
        </Typography>
        <Typography textAlign="center" variant="h4"
                    component="h2"
                    fontWeight={600} 
                    color={"primary.main"}>Pet Adoption Process
        </Typography>
      </Stack>
       <Stack sx={{  alignItems:"center", justifyContent:"center", pt:4}}>
       <Grid container spacing={2} mb={4}>
             <Grid item xs={12} sm={4} md={4}> 
                <Stack sx={{width: "80%",maxWidth: 850,  height: "auto",}}>
                    <Image src={Process1} alt="banner" layout="responsive" style={{ borderRadius: "30%" }} />
                    <Typography textAlign="center" variant="h6"
                            component="h6"
                            fontWeight={600} 
                            >Find your pet
                    </Typography>
                </Stack>
            </Grid>
             <Grid item xs={12} sm={4} md={4}> 
                <Stack sx={{width: "80%",maxWidth: 850,  height: "auto",}}>
                    <Image src={Process2} alt="banner" layout="responsive" style={{ borderRadius: "30%" }} />
                    <Typography textAlign="center" variant="h6"
                             component="h6"
                            fontWeight={600} 
                            >Know your pet
                    </Typography>
                </Stack>
            </Grid>
             <Grid item xs={12} sm={4} md={4}> 
                <Stack sx={{width: "80%",maxWidth: 850,  height: "auto",}}>
                    <Image src={Process3} alt="banner" layout="responsive" style={{ borderRadius: "30%" }} />
                    <Typography textAlign="center" variant="h6"
                            component="h6"
                            fontWeight={600} 
                            >Take your pet home
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
           
        </Stack>
    </Container>
  )
}
