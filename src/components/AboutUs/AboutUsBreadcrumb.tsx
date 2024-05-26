"use client";
import { Container } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function AboutUsBreadcrumb() {
  return (
    <Container role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          PET ADOPTION
        </Link>
        <Link underline="hover" color="inherit" href="/about-us">
          ABOUT US
        </Link>
      </Breadcrumbs>
    </Container>
  );
}
