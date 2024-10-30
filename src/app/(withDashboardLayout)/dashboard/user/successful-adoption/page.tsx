"use client";
import {
  useMyAdoptedPetsQuery,
} from "@/redux/api/adoptionApi";
import {
  Box,
  Chip,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const AdoptionSuccessPage = () => {
  const { data: myPets, isLoading } =
  useMyAdoptedPetsQuery(undefined);

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
  ];

  if (isLoading) {
    return <>Loading...</>;
  }
  if (myPets.length <= 0) {
    return <>No pets Successfully Adopted Yet</>;
  }
  return (
    <Box>
      <Box sx={{ my: 3 }}>
        <Typography variant="h4" color="primary.main">
         Successfully adopted pets
        </Typography>
        {!isLoading ? (
          <Box my={2}>
            <DataGrid
              rows={myPets || []}
              columns={columns}
              hideFooterPagination
            />
          </Box>
        ) : (
          <h1>Loading</h1>
        )}
      </Box>
    </Box>
  );
};

export default AdoptionSuccessPage;
