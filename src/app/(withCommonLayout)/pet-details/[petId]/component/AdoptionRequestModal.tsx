import PAForm from "@/components/UI/Form/PAForm";
import PAInput from "@/components/UI/Form/PAInput";
import PAModal from "@/components/UI/Form/PAModal";
import { useCreateAdoptionRequestMutation } from "@/redux/api/adoptionApi";
import { useGetMyProfileQuery } from "@/redux/api/profileApi";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  petId: string | string[];
}

const AdoptionRequestModal = ({ open, setOpen, petId }: IProps) => {
  const [createAdoption] = useCreateAdoptionRequestMutation();
  const { data, isLoading } = useGetMyProfileQuery({});
  const defaultValues = {
    name: data?.name || "",
    email: data?.email || "",
    username: data?.username || "",
    phoneNumber: data?.phoneNumber || "",
  };

  console.log(data);
  const handleSubmit = async (values: FieldValues) => {
    values.petId = petId;
    try {
      const res = await createAdoption(values).unwrap();
      if (res.id) {
        toast.success("Adoption Request Done Successfully");
        setOpen(false);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    <p>Loading..</p>;
  }

  return (
    <PAModal open={open} setOpen={setOpen} title="Create Adoption Request">
      <PAForm onSubmit={handleSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ width: "400px" }}>
          <Grid item md={12}>
            <PAInput name="name" label="Name" fullWidth={true} />
          </Grid>
          <Grid item md={12}>
            <PAInput name="email" label="Email" fullWidth={true} />
          </Grid>
          <Grid item md={12}>
            <PAInput name="username" label="UserName" fullWidth={true} />
          </Grid>
          <Grid item md={12}>
            <PAInput name="phoneNumber" label="Phone Number" fullWidth={true} />
          </Grid>
          <Grid item md={12}>
            <PAInput
              name="petOwnershipExperience"
              label="Pet Ownership Experience"
              fullWidth={true}
            />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }} fullWidth={true}>
          Request
        </Button>
      </PAForm>
    </PAModal>
  );
};

export default AdoptionRequestModal;
