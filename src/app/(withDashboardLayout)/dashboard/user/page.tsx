"use client";
import { Box, Button, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useGetMyProfileQuery } from "@/redux/api/profileApi";
import { useGetAllAdoptionRequestQuery, useMyAdoptedPetsQuery } from "@/redux/api/adoptionApi";
import ProfileUpdateModal from "@/app/(withCommonLayout)/my-profile/Component/ProfileUpdateModal";
import ProfileInformation from "@/app/(withCommonLayout)/my-profile/Component/ProfileInformation";
import StatCard from "@/components/Others/StatCard";
import { Group, Pets } from "@mui/icons-material";
import AdoptionTable from "@/components/Others/AdoptionsTable";
import PieChart from "@/components/Others/PieChart";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetMyProfileQuery(undefined);
  const { data: myAdoptedPets, isLoading: myPetsLoading } = useMyAdoptedPetsQuery(undefined);
  const {data: allAdoptionRequests, isLoading: adoptionLoading} = useGetAllAdoptionRequestQuery(undefined);
  const myAdoptionRequest = allAdoptionRequests?.filter((adoption:any) => adoption?.userId === data?.id);
  const mySuccessfullAdoptionRequest = myAdoptionRequest?.filter((adoption:any) => adoption.status === "PENDING");
console.log(myAdoptionRequest)
 
  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <Box>
      <div className="p-4">
            <Typography
                variant="h6"
                noWrap
                component="div"
                color="primary.main"
              >
                Welcome to dashboard
            </Typography>
      </div>
      <div className="p-4">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <StatCard
              title="My Total Adopted Pets"
              value={!myPetsLoading && myAdoptedPets?.length}
              percentage="30.6%"
              icon={<Group className="text-orange-500" />}
              color="#3b82f6"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <StatCard
              title="Total Requested Pets"
              value={(!isLoading || !adoptionLoading) && myAdoptionRequest?.length}
              percentage="30.6%"
              icon={<Pets className="text-blue-500" />}
              color="#f97316"
            />
          </Grid>
        </Grid>
      </div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          padding: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: { xs: '100%', md: '50%' },
          }}>
          {/* {!isLoading && <PieChart title="Total Pets by Species" data={petData} />} */}
        </Box>
        <Box
          sx={{
            flex: 1,
            width: { xs: '100%', md: '50%' },
          }}>
              {!adoptionLoading && <PieChart title="All Adoption Requests" data={myAdoptionRequest} />}
        </Box>
      </Box>
      <div className="p-4">
        {
          !myPetsLoading && <AdoptionTable adoptionSuccess={myAdoptedPets}/>
        }
      </div>
    </Box>
  );
};

export default Profile;
