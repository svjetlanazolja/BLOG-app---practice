import { NativeSelect, styled } from "@mui/material";

const AddNewPostContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "700px",
  margin: "auto",
  padding: "40px",
}));

const NativeSelectContainer = styled(NativeSelect)(() => ({
  margin: "40px 0 50px 0",
}));

export { AddNewPostContainer, NativeSelectContainer };
