import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/services/authServices";
import { TAuthUser } from "@/types";
import Link from "next/link";
import { Typography } from "@mui/material";

const menuStyles = {
  paper: {
    elevation: 0,
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

export default function AccountMenu() {
  const user = getUserInfo() as TAuthUser;
  const userRole = user?.role;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("accessToken");
    router.push("/login");
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip
          title="Profile"
          componentsProps={{
            tooltip: {
              sx: {
                // bgcolor: "#cdd1da5c",
                color: "primary.main", // Change text color if necessary
              },
            },
          }}
        >
          <IconButton
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            //   size='small'
            sx={{
              //   background: "#ffffff",
              "& svg": {
                color: "primary.main",
              },
            }}
          >
            <Avatar
              alt="profile image"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAB0dHTo6Ojz8/NTU1P8/Pz39/fj4+Pw8PBnZ2e1tbXr6+vV1dUvLy9kZGRMTEwqKiqqqqqJiYlAQEBubm6/v78WFhZfX1/IyMiBgYGlpaW9vb2Pj481NTXb29sdHR3Pz8+ZmZkiIiI+Pj5HR0cLCwtYWFidnZ0ZGRmmpqaEhIQ7rmcpAAAJyUlEQVR4nO1d13biMBCNqbaBQIDQQwsQsvn//1sgjcSjNnNlafdwH3hD0rWt0XTd3d1www033HDDDSWi2WxXL2g3Qy8FimY6ms8m6+Q3nnuPg/4orYVenwiNzjy/L1D7hfVw1u80Qi+Vgdp0sDORu8Jy1qqGXrILNk9LB3afGD+2/olvttmaMNh9orddhSagR6NVF9D7eJXbNDQNJaaPYnrv2PdjPE/a2wOI3wWVTmhCv7DJkfQu2LVCk7pCy3jq8bCNRLb2X/3wO2MQwYbs+6N3wVNgjq2xZ4InHAPy23jaf78wHgXi134phd8Z9SBK67E0fmc8lc4vfSiV4MnKKlkF2JbM74xKifyyYQCCSXIo7TWOgvA7Y1sOwVkwgif7sQQ9LnNxTniA9y+1E5bfCXO/BFuh+SWeZepTaHYX7P05H7uhuX1g7UuJ24dm9g0vzqpmOYaEJTyI1NpzaFI/sUETzEowdd0w/d8Jgt9iE+Rseti/TCYv+2KsjQXgXmzKjcHhYJFeHWPV6XYi9yDjYhycSNI1ZhvSYZYepTou6lyUnYMvOpGQDmQUMwhBkSbzZnzMIofrA4Kg5ClXrJ6xhGNdTlBgTQxtdatmhT/Jm5Tghj+3S+xIMM1CRrDNnnjYdpqowY+Ny7Rw9jnhbqayHZTPEoLs/cGJpky5k+V8ggvunLzwLdsHxI4WszchN1a04k7I1W24m5AfgOe+xR1vOq7bSRLR5O5F1pzcT0bm7OPG7DjfKdNrsRQRZGvBQ/eZuA9Tqu03mN6EvutEGZOg80QFcKWNa84G82PpiQmyY1uO+5/7IBGe2gZzbjefBvMonAEIsu1Fp++HaxSC8peYvjgXDyrTDSa2Rj/AfMD39jPMeTPAXF/cJ2yvLjIJTlAEuYfxwXZ87ivERRK4Vo1tBJzrjIYRvLvjJsTbjc517iHj69w12KlU3DATMkeSqzRa7US2uwSazMsNONs8Zu4WgDjYv8D1tO/NQ6fMoUEa2yfYuXNm7fSNO7TcbrpGlbsMs7zjjgyOqzfZ6zCJA7aLNHHz4hvBDjubviV+djq4LoKdpGvwLHLPodNJBE4245f56a3wP+xxsYfF3R0/FqVP6+cncEu9iL/BL4bT6jX8cCHXsa6EoFpTl2cjiKjH8w61n6mgzieefahbCtePdwFYlvYES1F7U9hmxRng81CSLqU+9EWVFODMZEmu4ItyVFGSbCx66RmqHSM4KxK0bcE24i5QmVB8rfuMSOzDC1Q+N1lBE/a4kFV2dBWjCrM9ocJUWPlADyo6DROsqJGuhRbs0qIt5EaUljjSLjdp74AxkKG0SwqtmoorJ3HlAbLTMFEl1oqLe3FufXErijU1akNeHQArYZVXP1BL4btovoAqRBZZAO+grOCNfFiUBSWt70jocDCiABbzEhHV8NRKIG0SIDsRUUVGST1BRcA3BAnJX4AUG1M5BZJGct+Qq24yu+kTlGMM1KxErH8DxMwZxMiYgcUpJ6ieFP4YCts6wVoaFIcWq4JfkGQssLP1CygezTInzQ/wSzuBiyieWxgR9g4uRXZom0AxYIv7PhIuReRDJqx8KEPWXtxAV1CMk2IZMjRUcHtC7wyTiaOdAVEar+CfYXJwcWqs4F03igyh2/wdFdvX2PDQXKsUhrYZrV4ahBZlKfCwvcLaHK9pgbpk/ELxPJR6mZV40uW3VL21JyRscV9TJcluTmeE1fqSULYBhAzwN9kJ40prdf1Um+liADIEFSCeqMd+xx94HXZng6fBWz70s/V+gGAo7xcfFQiGqJbxcYDy07CTg6MEFQX23Zi7XFD+0nB9V32Asm28qG3BQMUtaqEXBQWZgRlZ20AZyACKRxWqdNA9a/6n44LO3Yuhgy4KdC4G3I8REApfX+hlAaFIdo2oi64UNEFRd724oApFy/JLP3C4P2HZq38gr9hhcvnt9nr1/b08jq/ygAmcUcv8uFgBM70b6fSY81UQZdyEF+iuH33dX5iNZjxvgHJEd8fs/WDq+XbGdO4uANWRdkcDaqx1FOKQHR0/LrWT1slnWge3m9ai41QGpSlnta976pZ9E2Nmv4V0RWa2noyXEJcw1mw56mrX7DIwd6HuJszs8ra0n5dNnjC2OMYNNpmn+t4Y5jrgSeC77Myx4oH2/8bPNOQLfIfxSDPICL1vfx3DNa+ZPqRjKtfVat/DSG6X1jYENMadNf/FdbqSQnduGNOU1X9G5P+ioPaamV+D0vUdE0GNtW6R46KQNXERVH5rNm0B6EPVojtRyaDFjdVpRpnW40ik6DXIZllW/6Q8w7Hdkn0GJTEsEwaLJV7qAveQIGxGy4qWog2FLJ7EoajbWN84W3w2Md1z/glC/bK2CghDOEJJU3SrOlwaXBSn2H4CCBBnvsNrICwU+E1uQhCRMqf7OwkfZWTfafEzWzv9n3hC8VgWZxCmvqN3kxjB8yWuTiDkqOvNT1QZVDxbkVJnnLsaUrob5pYzORpEvIZRgkwkn6A7lnFBLI1zJRJVZhWHkUiZhqwgA9U2HNVXXgKq3bjeR6oElSRV0v3tGlDeQIeO+j9AuodD6+AbalHs+Drp0AhLkWwTJFgS6e4JSZEkKJJ/ZHOscLELkqCsyRidVisrSOeDdgMKWzRvyEEdTE0g6ORJcToBPWwIg5guAgN8T3SIAHCHqyPo0OgjYmjaubwGd/M0oEnnDYFc8YrgfpnGVEq36bpHOR4Ul02UJ29UCdqwnALV3erDkgxGVdEZcKPUVCmfZeg3HVV+IjQtK1NRzL0nnyjbRoHzzpQUpbdGG9BRXjgDT6yrKTN26+CbLa4nVZd9esgcbKrTWHwJVc3lYX4SezTJuj4kzlSdAf3sS4hrUgOf0Rw7mue59CfedJk6YyTHja6Qzmt8QZtie5iDlKiFtis1069mi41u7tPscgnQnOsrSrwrGYbMwKS3EL3IqeGa3tcy8suN6dYVbm7K1Jge69qbibsQ0zpOJKeu4q4xsugU9ccLHwI1m5Lh3tH+VXaONnUQ92Xm71qWLewHi1T/XTXao4Fl2U/J7q/MvhXK8nHb6hSJppvWU760brG9LLuE5XRoufb/Pizr3W6e593uZOdcYhgmxA5p+GuFPFT0uS24dsoBwWp0zuiIm/Eb8erXxDZjBOqwrMAhdLzyjJG/pl3j8CU675j6+VbXMby/T6zwMqeHvCMagSr27JjFUGFVwALV8m3YjywR8htV16prAq8lVYizkW4lonW5jZzeO6p/eHdhvvT9+ZbhaHTmTtL1kHtrPeET2fRY2ZkskMOyMt/ALhkKgmw16g8qee9niOWh/jjbtkar7B98czfccMMNN9xwQ3z4C8jbomctGPdzAAAAAElFTkSuQmCC"
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          ...menuStyles,
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link href={`/my-profile`}>
          <MenuItem>
            <Avatar sx={{ background: "transparent", color: "primary.main" }} />
            Profile
          </MenuItem>
        </Link>
        <Link href={`/my-profile/change-password`}>
          <MenuItem>
            <Avatar sx={{ background: "transparent", color: "primary.main" }} />
            Change Password
          </MenuItem>
        </Link>

        <Divider />
      </Menu>
    </React.Fragment>
  );
}
