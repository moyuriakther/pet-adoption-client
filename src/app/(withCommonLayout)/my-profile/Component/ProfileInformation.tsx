import { useMyAdoptedPetsQuery } from "@/redux/api/adoptionApi";
import { Box, Stack, styled, Typography } from "@mui/material";
import MyAdoptedCard from "./MyAdoptedCard";

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  width: "45%",
  padding: "8px 16px",
  "& p": {
    fontWeight: 600,
  },
}));

const ProfileInformation = ({ data, isLoading }: any) => {
  const { data: myAdoptedPets } = useMyAdoptedPetsQuery(undefined);
  console.log({ myAdoptedPets });

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <>
      <Typography variant="h5" color="primary.main" mb={2}>
        Profile Information
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} gap={2} flexWrap={"wrap"}>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Role
          </Typography>
          <Typography>{data?.role}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Name
          </Typography>
          <Typography>{data?.name}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Email
          </Typography>
          <Typography>{data?.email}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            UserName
          </Typography>
          <Typography>{data?.username}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Address
          </Typography>
          <Typography>{data?.address}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Phone Number
          </Typography>
          <Typography>{data?.phoneNumber}</Typography>
        </StyledInformationBox>
      </Stack>
      <Box sx={{ my: 3 }}>
        <Typography variant="h5" color="primary.main">
          My Adopted Pets
        </Typography>
        {myAdoptedPets?.length > 0 &&
          myAdoptedPets?.map((pet: any) => (
            <MyAdoptedCard key={pet?.id} pet={pet} />
          ))}
      </Box>
    </>
  );
};

export default ProfileInformation;
