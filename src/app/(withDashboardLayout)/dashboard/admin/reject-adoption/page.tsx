"use client";
import {
  useGetAllAdoptionRequestQuery,
  useUpdateAdoptionRequestMutation,
} from "@/redux/api/adoptionApi";
import { getUserInfo } from "@/services/authServices";
import {
  Box,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

const AdoptionRejectPage = () => {
  // const userInfo = getUserInfo();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const { data: allAdoptionRequests, isLoading } =
    useGetAllAdoptionRequestQuery(undefined);
  const adoptionRejects = allAdoptionRequests?.filter((adoption:any) => adoption.status === 'REJECTED')
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
    <Box>
      <Box sx={{ my: 3 }}>
        <Typography variant="h4" color="primary.main">
         Rejected Pet Adoptions
        </Typography>
        {!isLoading ? (
          <Box my={2}>
            <DataGrid
              rows={adoptionRejects || []}
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
    </Box>
  );
};

export default AdoptionRejectPage;
