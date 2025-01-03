/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import PAModal from "@/components/UI/Form/PAModal";
import PAForm from "@/components/UI/Form/PAForm";
import PAInput from "@/components/UI/Form/PAInput";
import { toast } from "sonner";
import { logoutUser } from "@/services/actions/logoutUser";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChangePassModal = ({ open, setOpen }: TProps) => {
  const [changePassword, {isLoading} ] = useChangePasswordMutation();
  const router = useRouter();
  const [error, setError] = useState("");

const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await changePassword({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      });
      toast.success(res?.data?.message);
      logoutUser(router);
    } catch (err: any) {
      toast.success("Incorrect Old Password");
    }
  };

  return (
    <PAModal open={open} setOpen={setOpen} title="Change Password">
      <PAForm onSubmit={onSubmit}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={6}>
           <PAInput
            name="oldPassword"
            label="oldPassword"
            type="password"
            fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PAInput
            name="newPassword"
            label="newPassword"
            type="password"
            fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
        <PAInput
            name="confirmNewPassword"
            label="Confirm newPassword"
            type="password"
            fullWidth={true}
            />
          </Grid>
        </Grid>

        <Button type="submit" disabled={isLoading}>
          Save
        </Button>
      </PAForm>
    </PAModal>
  );
};

export default ChangePassModal;
