"use client";

import PAForm from "@/components/UI/Form/PAForm";
import PAInput from "@/components/UI/Form/PAInput";
import PASelect from "@/components/UI/Form/PASelect";
import { useGetPetQuery, useUpdatePetMutation } from "@/redux/api/petApi";
import { PetSize, PetSpecies } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const EditPetPage = ({ params }: any) => {
  const petId = params?.petId;
  const router = useRouter();

  const { data, isLoading, isError, isSuccess } = useGetPetQuery(petId);
  const [updatePet] = useUpdatePetMutation();
  const defaultValues = {
    name: data?.name || "",
    species: data?.species || "",
    breed: data?.breed || "",
    photos: data?.photos[0] || "",
    age: data?.age || 0,
    size: data?.size || "",
    location: data?.location || "",
    description: data?.description || "",
    temperament: data?.temperament || "",
    medicalHistory: data?.medicalHistory || "",
    adoptionRequirements: data?.adoptionRequirements || "",
  };

  const handleSubmit = async (values: FieldValues) => {
    // values.id = id;
    values.age = Number(values.age);
    // console.log(values);
    values.photos = [values.photos];
    try {
      const res = await updatePet({ id: petId, body: values }).unwrap();
      if (res?.id) {
        toast.success("Pet Updated Successfully!!!");
        router.push("/dashboard/admin/pet-management");
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Something is wrong....");
    }
  };

  return (
    <Box>
      <Typography
        sx={{ mb: 3, textAlign: "center", color: "primary.main" }}
        variant="h6"
        component="h6"
      >
        Update Pet Information
      </Typography>
      {isLoading ? (
        "Loading..."
      ) : (
        <PAForm onSubmit={handleSubmit} defaultValues={defaultValues}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <PAInput
                fullWidth={true}
                sx={{ mb: 2 }}
                type="text"
                name="name"
                placeholder="Name"
                label="Name"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PAInput
                type="text"
                name="location"
                placeholder="Location"
                label="Location"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PAInput
                type="number"
                name="age"
                placeholder="Age"
                label="Age"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PAInput
                type="text"
                name="photos"
                placeholder="Photos"
                label="Photos"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            {/* <Grid item xs={12} sm={12} md={4}>
              <PASelect
                name="photos"
                label="Photos"
                items={data?.photos}
                sx={{ mb: 2 }}
              />
            </Grid> */}
            <Grid item xs={12} sm={12} md={4}>
              <PAInput
                type="text"
                name="breed"
                placeholder="Breed"
                label="Breed"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PASelect
                name="species"
                label="Species"
                items={PetSpecies}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PASelect
                name="size"
                label="Size"
                items={PetSize}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PAInput
                type="text"
                name="description"
                placeholder="Description"
                label="Description"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PAInput
                type="text"
                name="medicalHistory"
                placeholder="Medical History"
                label="Medical History"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PAInput
                type="text"
                name="adoptionRequirements"
                placeholder="Adoption Requirements"
                label="Adoption Requirements"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PAInput
                type="text"
                name="temperament"
                placeholder="Temperament"
                label="Temperament"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>
          <Button sx={{ mt: 1 }} type="submit">
            Update
          </Button>
        </PAForm>
      )}
    </Box>
  );
};

export default EditPetPage;
