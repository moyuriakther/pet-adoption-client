"use client";
import {
  useGetAllAdoptionRequestQuery,
  useMyAdoptedPetsQuery,
  useUpdateAdoptionRequestMutation,
} from "@/redux/api/adoptionApi";
import {
  Box,
  Chip,
  Grid,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import MyAdoptedCard from "./MyAdoptedCard";
import useUserInfo from "@/hooks/userInfo";
import { USER_ROLE } from "@/constants/userRoles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const userInfo = useUserInfo();

  const { data: myAdoptedPets } = useMyAdoptedPetsQuery(undefined);
  const { data: allAdoptionRequests, isLoading: adoptionRequestLoading } =
    useGetAllAdoptionRequestQuery(undefined);
  const [updateAdoptionRequest, { isSuccess }] =
    useUpdateAdoptionRequestMutation();

  const handleOpenMenu = (event: any, request: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedRequest(request);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedRequest(null);
  };

  // console.log(allAdoptionRequests);

  const handleUpdateAdoption = async (status: any) => {
    // console.log({ status }, selectedRequest);
    if (selectedRequest) {
      await updateAdoptionRequest({ id: selectedRequest, body: { status } });
      handleCloseMenu();
    }
  };

  const columns: GridColDef[] = [
    {
      field: "[pet.name]",
      headerName: "Pet Name",
      flex: 1,
      valueGetter: (params: any) => params.row.pet.name,
    },
    {
      field: "[user.email]",
      headerName: "Email",
      flex: 1,
      valueGetter: (params: any) => params.row.user.email,
    },
    {
      field: "user.username",
      headerName: "User Name",
      flex: 1,
      valueGetter: (params: any) => params.row.user.username,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params: any) => {
        let color: "default" | "success" | "error" | "warning" = "default";
        let label = params.value;
        if (params.value === "APPROVED") {
          color = "success";
          label = "APPROVED";
        } else if (params.value === "PENDING") {
          color = "warning";
          label = "PENDING";
        } else if (params.value === "REJECTED") {
          color = "error";
          label = "REJECTED";
        }
        return <Chip label={label} color={color} />;
      },
    },
    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              aria-label="delete"
              size="large"
              onClick={(e) => handleOpenMenu(e, row.id)}
            >
              <EditIcon sx={{ color: "primary.main" }} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

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
      {userInfo?.role === USER_ROLE.USER ? (
        <Box sx={{ my: 3 }}>
          <Typography variant="h5" color="primary.main">
            My Adopted Pets
          </Typography>
          <Box sx={{ my: 2 }}>
            <Grid container spacing={2} mb={4}>
              {myAdoptedPets?.length > 0 &&
                myAdoptedPets?.map((pet: any) => (
                  <Grid item xs={6} md={6} key={pet?.id}>
                    <MyAdoptedCard key={pet?.id} pet={pet} />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      ) : (
        <Box sx={{ my: 3 }}>
          <Typography variant="h5" color="primary.main">
            Pet Adoption Requests
          </Typography>
          {!adoptionRequestLoading ? (
            <Box my={2}>
              <DataGrid
                rows={allAdoptionRequests || []}
                columns={columns}
                hideFooterPagination
              />
            </Box>
          ) : (
            <h1>Loading</h1>
          )}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={() => handleUpdateAdoption("APPROVED")}>
              Set Status to APPROVED
            </MenuItem>
            <MenuItem onClick={() => handleUpdateAdoption("PENDING")}>
              Set Status to PENDING
            </MenuItem>
            <MenuItem onClick={() => handleUpdateAdoption("REJECTED")}>
              Set Status to REJECTED
            </MenuItem>
          </Menu>
        </Box>
      )}
    </>
  );
};

export default ProfileInformation;
