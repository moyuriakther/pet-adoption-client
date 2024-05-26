// import { USER_ROLE } from "@/constants/userRoles";
// import { DrawerItem, UserRole } from "@/types";
// //icons

// import PersonIcon from "@mui/icons-material/Person";

// export const profileDrawerItems = (role: UserRole): DrawerItem[] => {
//   const roleMenus: DrawerItem[] = [];
//   // const defaultMenus = [
//   //   {
//   //     title: "Profile",
//   //     path: `/`,
//   //     icon: PersonIcon,
//   //   },
//   //   {
//   //     title: "Change Password",
//   //     path: `change-password`,
//   //     icon: PersonIcon,
//   //   },
//   //   {
//   //     title: "My Adopted Pets",
//   //     path: `my-adopted-pets`,
//   //     icon: PersonIcon,
//   //   },
//   // ];

//   switch (role) {
//     case USER_ROLE.USER:
//       roleMenus.push(
//         {
//           title: "Profile",
//           path: `/`,
//           icon: PersonIcon,
//         },
//         {
//           title: "Change Password",
//           path: `change-password`,
//           icon: PersonIcon,
//         },
//         {
//           title: "My Adopted Pets",
//           path: `my-adopted-pets`,
//           icon: PersonIcon,
//         }
//       );
//       break;
//     case USER_ROLE.ADMIN:
//       roleMenus.push(
//         {
//           title: "Profile",
//           path: `/`,
//           icon: PersonIcon,
//         },
//         {
//           title: "Change Password",
//           path: `change-password`,
//           icon: PersonIcon,
//         }
//       );
//       break;

//     default:
//       break;
//   }

//   return [...roleMenus];
// };
