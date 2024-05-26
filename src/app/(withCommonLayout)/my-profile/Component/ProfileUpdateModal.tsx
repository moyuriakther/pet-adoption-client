/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";

import { FieldValues } from "react-hook-form";
import { Button, Grid } from "@mui/material";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PAModal from "@/components/UI/Form/PAModal";
import PAForm from "@/components/UI/Form/PAForm";
import PAInput from "@/components/UI/Form/PAInput";
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/profileApi";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProfileUpdateModal = ({ open, setOpen }: TProps) => {
  const [updateProfile, { isLoading: updating }] = useUpdateMyProfileMutation();
  const { data, isLoading } = useGetMyProfileQuery(undefined);
  const submitHandler = async (values: FieldValues) => {
    try {
      const res = await updateProfile(values).unwrap();
      if (res) {
        toast.success("updated Profile successfully");
      }
      //   await refetch();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PAModal open={open} setOpen={setOpen} title="Update Profile">
      <PAForm onSubmit={submitHandler} defaultValues={data}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={6}>
            <PAInput name="name" label="Name" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PAInput
              name="email"
              type="email"
              label="Email"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PAInput
              name="username"
              label="User Name"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PAInput name="address" label="Address" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PAInput
              name="phoneNumber"
              label="Phone Number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PAInput
              name="photo"
              label="Profile Image Link"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
        </Grid>

        <Button type="submit" disabled={updating}>
          Save
        </Button>
      </PAForm>
    </PAModal>
  );
};

export default ProfileUpdateModal;
