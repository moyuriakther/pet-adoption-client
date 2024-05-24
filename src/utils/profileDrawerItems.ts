import { DrawerItem, UserRole } from "@/types";
//icons

import PersonIcon from "@mui/icons-material/Person";

export const profileDrawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];
  const defaultMenus = [
    {
      title: "Profile",
      path: `/`,
      icon: PersonIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: PersonIcon,
    },
    {
      title: "My Adopted Pets",
      path: `my-adopted-pets`,
      icon: PersonIcon,
    },
  ];

  return [...defaultMenus];
};
