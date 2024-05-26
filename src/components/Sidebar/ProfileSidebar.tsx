// import { Box, List, Stack, Typography } from "@mui/material";
// import Image from "next/image";
// import assets from "@/assets";
// import Link from "next/link";
// import { UserRole } from "@/types";
// import { useEffect, useState } from "react";
// import { getUserInfo } from "@/services/authServices";
// import { profileDrawerItems } from "@/utils/profileDrawerItems";
// import ProfileSidebarItem from "./ProfileSidebarItems";

// const ProfileSidebar = () => {
//   const [userRole, setUserRole] = useState("");
//   useEffect(() => {
//     const { role } = getUserInfo() as any;
//     setUserRole(role);
//   }, []);
//   return (
//     <div>
//       <Stack
//         component={Link}
//         href="/"
//         direction="row"
//         gap={1}
//         sx={{
//           justifyContent: "center",
//           alignItems: "center",
//           py: 1,
//         }}
//       >
//         {/* <Image src={assets..logo} alt="logo" width={40} height={40} /> */}
//         <Typography variant="h6" component="h1" color="primary.main">
//           Pet Adoption
//         </Typography>
//       </Stack>
//       <List>
//         {profileDrawerItems(userRole as UserRole)?.map((item, index) => (
//           <ProfileSidebarItem key={index} item={item} />
//         ))}
//       </List>
//     </div>
//   );
// };

// export default ProfileSidebar;
