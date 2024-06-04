"use client";

import PAForm from "@/components/UI/Form/PAForm";
import PAInput from "@/components/UI/Form/PAInput";
import PASelect from "@/components/UI/Form/PASelect";
import { useCreatePetMutation } from "@/redux/api/petApi";
import { PetGender, PetSize, PetSpecies } from "@/types";
import { CreatePetValidationSchema } from "@/zodValidations/zodValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AddNewPetPage = () => {
  const router = useRouter();

  const [createPet, { isLoading, isError }] = useCreatePetMutation();

  const handleSubmit = async (values: FieldValues) => {
    // values.id = id;
    // console.log(values);
    values.age = Math.round(values.age);
    // console.log(values);
    values.photos = [values.photos];
    try {
      const res = await createPet(values).unwrap();
      if (res?.id) {
        toast.success("Pet Created Successfully!!!");
        router.push("/dashboard/admin/pet-management");
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Something is wrong....");
    }
  };
  if (isError) {
    toast.error(" Something is Wrong");
  }
  return (
    <Box>
      <Typography
        sx={{ mb: 3, textAlign: "center", color: "primary.main" }}
        variant="h4"
        component="h4"
      >
        Create New Pet
      </Typography>
      {isLoading ? (
        "Loading..."
      ) : (
        <PAForm
          onSubmit={handleSubmit}
          resolver={zodResolver(CreatePetValidationSchema as any)}
        >
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
            <Grid item xs={12} sm={12} md={4}>
              <PASelect
                name="gender"
                label="Gender"
                items={PetGender}
                sx={{ mb: 2 }}
              />
            </Grid>
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
            Create
          </Button>
        </PAForm>
      )}
    </Box>
  );
};

export default AddNewPetPage;
