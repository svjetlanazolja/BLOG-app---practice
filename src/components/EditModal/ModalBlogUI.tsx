import { DialogActions, styled, TextField } from "@mui/material";

const BoxModalContainer = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  background: "white",
  border: "2px solid #f98171",
  padding: "30px",
}));

const TextFieldContainer = styled(TextField)(() => ({
  color: "red",
}));

const DialogActionContainer = styled(DialogActions)(() => ({
  justifyContent: "center",
}));
export { BoxModalContainer, TextFieldContainer, DialogActionContainer };
