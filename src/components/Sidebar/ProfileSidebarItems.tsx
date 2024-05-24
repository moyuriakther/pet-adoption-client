import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { DrawerItem } from "@/types";
import { usePathname } from "next/navigation";

type TProps = {
  item: DrawerItem;
};

const ProfileSidebarItem = ({ item }: TProps) => {
  const linkPath = `/my-profile/${item.path}`;
  const pathName = usePathname();

  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathName === linkPath
            ? {
                borderRight: "3px solid #1586FD",

                "& svg": {
                  color: "#1586FD",
                },
              }
            : {}),
          my: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default ProfileSidebarItem;
