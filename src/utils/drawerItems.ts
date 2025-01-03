import { DrawerItem, UserRole } from "@/types";
//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import { USER_ROLE } from "@/constants/userRoles";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Adoption Requests",
          path: `${role}/adoption-request`,
          icon: GroupIcon,
        },
        {
          title: "Success Adoptions",
          path: `${role}/successful-adoption`,
          icon: GroupIcon,
        },
        {
          title: "Reject Adoptions",
          path: `${role}/reject-adoption`,
          icon: GroupIcon,
        },
        {
          title: "User Management",
          path: `${role}/user-management`,
          icon: GroupIcon,
        },
        {
          title: "Pet Management",
          path: `${role}/pet-management`,
          icon: MedicalInformationIcon,
        }
      );
      break;
    case USER_ROLE.USER:
      roleMenus.push({
        title: "Dashboard",
        path: `${role}`,
        icon: DashboardIcon,
      }, 
      {
        title: "Adoption Requests",
        path: `${role}/adoption-request`,
        icon: GroupIcon,
      },
      {
        title: "Success Adoptions",
        path: `${role}/successful-adoption`,
        icon: GroupIcon,
      },
    );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
