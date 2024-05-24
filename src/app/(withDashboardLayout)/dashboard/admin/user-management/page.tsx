"use client";
import { Box, Chip, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useUpdateUserStatusMutation,
} from "@/redux/api/profileApi";
import { Tag } from "@mui/icons-material";
import { MouseEvent, useState } from "react";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  status: string;
  role: string;
}

const UserManagementPage = () => {
  const { data, isLoading } = useGetAllUsersQuery({});
  const [updateUserSTatus, { isError, isSuccess }] =
    useUpdateUserStatusMutation({});
  const [updateUserRole, { isSuccess: isRoleSuccess, isError: isRoleError }] =
    useUpdateUserRoleMutation({});

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleOpenMenu = (event: any, user: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  const handleUpdateStatus = async (status: string) => {
    if (selectedUser) {
      await updateUserSTatus({ id: selectedUser?.id, body: { status } });
      handleCloseMenu();
    }
  };

  const handleUpdateRole = async (role: string) => {
    if (selectedUser) {
      await updateUserRole({ id: selectedUser?.id, body: { role } });
      handleCloseMenu();
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "username", headerName: "User Name", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params: any) => {
        let color: "default" | "success" | "error" = "default";
        let label = params.value;
        if (params.value === "Activate") {
          color = "success";
          label = "Activate";
        } else if (params.value === "deactivate") {
          color = "error";
          label = "Deactivate";
        }
        return <Chip label={label} color={color} />;
      },
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      renderCell: (params: any) => {
        let color: "default" | "primary" | "secondary" = "default";
        let label = params.value;
        if (params.value === "admin") {
          color = "primary";
          label = "Admin";
        } else if (params.value === "user") {
          color = "secondary";
          label = "User";
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
              onClick={(e) => handleOpenMenu(e, row)}
            >
              <EditIcon sx={{ color: "primary.main" }} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  if (isError || isRoleError) {
    toast.error("error having..");
  }
  if (isSuccess) {
    toast.success(" User Status Changed Successfully");
  }
  if (isRoleSuccess) {
    toast.success(" User Role Changed Successfully");
  }

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" component="h4" sx={{ color: "primary.main" }}>
          {" "}
          User Management
        </Typography>
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data || []} columns={columns} hideFooterPagination />
        </Box>
      ) : (
        <h1>Loading</h1>
      )}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => handleUpdateStatus("Activate")}>
          Set Status to Activate
        </MenuItem>
        <MenuItem onClick={() => handleUpdateStatus("deactivate")}>
          Set Status to Deactivate
        </MenuItem>
        <MenuItem onClick={() => handleUpdateRole("admin")}>
          Set Role to ADMIN
        </MenuItem>
        <MenuItem onClick={() => handleUpdateRole("user")}>
          Set Role to USER
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserManagementPage;
