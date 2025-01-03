"use client";
import { Box, Grid, Typography } from '@mui/material';
import {Group, Pets, ListAlt, ThumbUp} from '@mui/icons-material';
import StatCard from '@/components/Others/StatCard';
import PieChart from '@/components/Others/PieChart';
import { useGetAllPetsQuery } from '@/redux/api/petApi';
import { useGetAllUsersQuery } from '@/redux/api/profileApi';
import { useGetAllAdoptionRequestQuery } from '@/redux/api/adoptionApi';
import AdoptionTable from '@/components/Others/AdoptionsTable';

interface ChartData {
  id: string;
  label: string;
  value: number;
  color: string;
}

const DashboardPage = () => {
  const {data: users, isLoading: userLoading} = useGetAllUsersQuery({})
  const {data:pets, isLoading} = useGetAllPetsQuery({});
  const {data: adoptionRequests, isLoading: adoptionLoading} = useGetAllAdoptionRequestQuery({})
  const adoptionSuccess = adoptionRequests?.filter((adop:any) => adop.status === 'APPROVED')

  const petData:ChartData[] = pets
  ? Object.values(
      pets.reduce(
        (acc: any, pet: any) => {
          if (pet.species === 'cat') {
            acc.cat.value += 1;
          } else if (pet.species === 'dog') {
            acc.dog.value += 1;
          }
          return acc;
        },
        {
          cat: { id: 'cat', label: 'Cat', value: 0, color: '#3b82f6' },
          dog: { id: 'dog', label: 'Dog', value: 0, color: '#10b981' },
        }
      )
    )
  : [];

// Calculate adoption requests by status
const adoptionData:ChartData[] = adoptionRequests
  ? Object.values(
      adoptionRequests.reduce(
        (acc: any, request: any) => {
          acc[request.status] = acc[request.status] || {
            id: request.status,
            label: request.status,
            value: 0,
            color:
              request.status === 'APPROVED'
                ? '#10b981'
                : request.status === 'PENDING'
                ? '#f97316'
                : '#ef4444', 
          };
          acc[request.status].value += 1;
          return acc;
        },
        {}
      )
    )
  : [];

    // console.log(petData)
  if(isLoading){
    <Typography variant="h4" color="secondary.dark">
      Loading...
    </Typography>
 }
  return (
    <Box>
      <div className="p-4">
            <Typography
                variant="h6"
                noWrap
                component="div"
                color="primary.main"
              >
                Welcome Admin to dashboard
            </Typography>
      </div>
      <div className="p-4">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <StatCard
              title="Total Users"
              value={!userLoading && users?.length}
              percentage="30.6%"
              icon={<Group className="text-orange-500" />}
              color="#3b82f6"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <StatCard
              title="Total Pets"
              value={!isLoading && pets?.length}
              percentage="30.6%"
              icon={<Pets className="text-blue-500" />}
              color="#f97316"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <StatCard
              title="Adoption Requests"
              value={!adoptionLoading && adoptionRequests.length}
              percentage="30.6%"
              icon={<ListAlt className="text-green-500" />}
              color="#ef4444"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <StatCard
              title="Total Adoption"
              value={!adoptionLoading && adoptionSuccess?.length}
              percentage="30.6%"
              icon={<ThumbUp className="text-red-500" />}
              color="#10b981"
            />
          </Grid>
        </Grid>
      </div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          padding: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: { xs: '100%', md: '50%' },
          }}>
          {!isLoading && <PieChart title="Total Pets by Species" data={petData} />}
        </Box>
        <Box
          sx={{
            flex: 1,
            width: { xs: '100%', md: '50%' },
          }}>
              {!adoptionLoading && <PieChart title="Adoption Requests" data={adoptionData} />}
        </Box>
      </Box>
      <div className="p-4">
        {
          !adoptionLoading && <AdoptionTable adoptionSuccess={adoptionSuccess}/>
        }
      </div>
    </Box>
  );
};

export default DashboardPage;
