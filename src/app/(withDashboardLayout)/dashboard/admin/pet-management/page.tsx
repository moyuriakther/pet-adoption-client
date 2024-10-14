"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";

import { toast } from "sonner";
import {
  useGetAllPetsQuery,
  useSoftDeletePetMutation,
} from "@/redux/api/petApi";

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  status: string;
  role: string;
}

const PetManagementPage = () => {
  const { data, isLoading } = useGetAllPetsQuery({});
  const [softDeletePet, { isSuccess, isError }] = useSoftDeletePetMutation();

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "species", headerName: "Species", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    { field: "breed", headerName: "Breed", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "medicalHistory", headerName: "medicalHistory", flex: 1 },
    { field: "description", headerName: "Detailed description", flex: 1 },

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
              onClick={() => softDeletePet(row?.id)}
            >
              <DeleteIcon sx={{ color: "secondary.dark" }} />
            </IconButton>
            <Link href={`/dashboard/admin/pet-management/edit/${row.id}`}>
              <IconButton aria-label="delete" size="large">
                <EditIcon sx={{ color: "primary.main" }} />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];

  if (isError) {
    toast.error("error having..");
  }
  if (isSuccess) {
    toast.success(" Pet Deleted Successfully");
  }

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" component="h4" sx={{ color: "primary.main" }}>
          Pets Management
        </Typography>
      </Stack>
      <Link href={`/dashboard/admin/pet-management/add-pet`}>
        <Button sx={{ my: 3 }}>Create New Pet</Button>
      </Link>
      {isLoading ? (
        <Typography variant="h4" color="secondary.dark">
          Loading...
        </Typography>
      ) : !data.length ? (
        <Typography variant="h4">Pet not available</Typography>
      ) : (
        <Box my={2} sx={{ height: 400, width: "100%" }}>
          <DataGrid rows={data || []} columns={columns} hideFooterPagination />
        </Box>
      )}
    </Box>
  );
};

export default PetManagementPage;
