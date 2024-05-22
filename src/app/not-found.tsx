import { Box } from "@mui/material";
import Image from "next/image";
import notFound from "../assets/not-found.jpg";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
    >
      <Box width="50%" maxWidth="500">
        <Link href="/" passHref>
          <Image
            src={notFound}
            alt="not-found"
            width={300}
            height={400}
            layout="responsive"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
