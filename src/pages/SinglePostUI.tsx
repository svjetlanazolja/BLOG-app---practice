import { styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SinglePostContainer = styled("div")(() => ({
  textAlign: "left",
  width: "70%",
  margin: "80px auto",
}));

const AuthorP = styled(Typography)(() => ({
  marginTop: "40px",
}));

const Navigation = styled("nav")(() => ({
  textAlign: "end",
  margin: "40px",
}));

const NavigationLink = styled(Link)(() => ({
  textDecoration: "none",
  margin: "0 20px",
  cursor: "pointer",
  color: "rgba(0, 0, 0, 0.87)",
  fontWeight: "700",
  fontSize: "18px",
}));

export { SinglePostContainer, AuthorP, Navigation, NavigationLink };
