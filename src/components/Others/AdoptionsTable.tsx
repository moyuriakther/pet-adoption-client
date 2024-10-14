import { 
    Box, Typography, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow, Paper, Grid 
  } from '@mui/material';

const AdoptionTable = ({adoptionSuccess}: any) => {


  return (
    <Box sx={{ padding: 3, backgroundColor: '#f9fafb', borderRadius: 2, boxShadow: 2, marginTop: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 2, color: '#1f2937' }}>
            Most Recent Adopted Pets
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.main' }}>
              <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Pet Name</TableCell>
              <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Species</TableCell>
              <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Adopter Name</TableCell>
              <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Adopter Email</TableCell>
              <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Adoption Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adoptionSuccess?.map((adoption: any) => (
              <TableRow
                key={adoption.id}
                sx={{
                  '&:nth-of-type(odd)': { backgroundColor: '#f1f5f9' },
                  '&:hover': { backgroundColor: '#e0f2fe' },
                  transition: 'background-color 0.3s',
                }}
              >
                <TableCell>{adoption.pet.name}</TableCell>
                <TableCell>{adoption.pet.species}</TableCell>
                <TableCell>{adoption.user.name}</TableCell>
                <TableCell>{adoption.user.email}</TableCell>
                <TableCell>{new Date(adoption.updatedAt).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdoptionTable;
