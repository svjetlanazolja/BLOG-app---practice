// import BlogCard from "./BlogCard";
import { Button, Card, styled, Typography } from "@mui/material";

const BlogCardsContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
}));

const SingleCardContainer = styled(Card)(() => ({
  width: "500px",
  marginTop: "30px",
  padding: "20px",
  boxShadow: "-5px -5px 13px 6px rgba(235,232,232,0.55) !important",
  WebkitBoxShadow: "5px -5px 13px 6px rgba(235,232,232,0.55)",
  MozBoxShadow: "5px -5px 13px 6px rgba(235,232,232,0.55)",
}));

const TypographyH2 = styled(Typography)(() => ({
  fontSize: "22px",
  textTransform: "capitalize",
  lineHeight: "28px",
  fontWeight: "600",
}));

const BlogButton = styled(Button)(() => ({
  background: "#f98171",
  color: "white",
  padding: "10px 25px !important",
  border: "none",
  borderRadius: "15px",
  fontSize: "16px",
  margin: "20px 0",
  "&:hover": {
    backgroundColor: "#c75749",
  },
}));

const Line = styled("hr")(() => ({
  border: "1px solid #f98171",
}));

export {
  BlogCardsContainer,
  SingleCardContainer,
  TypographyH2,
  BlogButton,
  Line,
};
