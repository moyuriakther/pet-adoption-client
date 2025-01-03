"use client";

import { Box, Button, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import React, { useState } from "react";

import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useGetMyProfileQuery } from "@/redux/api/profileApi";
import ProfileInformation from "./Component/ProfileInformation";
import ProfileUpdateModal from "./Component/ProfileUpdateModal";
import { useMyAdoptedPetsQuery } from "@/redux/api/adoptionApi";
import Link from "next/link";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useGetMyProfileQuery(undefined);
  const { data: myAdoptedPets } = useMyAdoptedPetsQuery(undefined);
  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <>
      <ProfileUpdateModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {
            <Grid xs={12} md={4}>
              <Box
                sx={{
                  height: 300,
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: 1,
                }}
              >
                <Image
                  height={300}
                  width={400}
                  src={
                    data?.photo ||
                    "data:image/png;base64,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"
                  }
                  alt="User Photo"
                />
              </Box>
              <Stack direction="column" spacing={1} mt={2}>
               <Button
                sx={{ my: 1 }}
                fullWidth
                endIcon={<ModeEditIcon />}
                onClick={() => setIsModalOpen(true)}
              >
                Edit Profile
              </Button>
              <Link href={`/my-profile/change-password`}>
              <Button
                sx={{ my: 0 }}
                fullWidth
                endIcon={<ModeEditIcon />}
                onClick={() => setIsModalOpen(true)}
              >
                 Change Password
              </Button>
            </Link>
          </Stack>
        </Grid>
          }
          <Grid xs={12} md={8}>
            <ProfileInformation data={data} isLoading={isLoading} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
