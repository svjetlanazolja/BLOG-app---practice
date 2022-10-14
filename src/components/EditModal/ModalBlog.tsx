import * as React from "react";
import { useContext, useState } from "react";
import Modal from "@mui/material/Modal";
import PostContext from "../../GlobalContext/State";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material";

import {
  BoxModalContainer,
  DialogActionContainer,
} from "../EditModal/ModalBlogUI";
import { BlogButton } from "../BlogCard/BlogCardUI";

export default function ModalBlog() {
  const { singlePost } = useContext(PostContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const [openDialog, setOpenDialog] = useState(false);

  const { DeleteBlog } = useContext(PostContext);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <BlogButton onClick={handleOpen}>Edit post</BlogButton>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <BoxModalContainer>
          <TextField
            defaultValue={singlePost.title}
            id="standard-textarea"
            label="Blog Title"
            placeholder="Blog Title"
            multiline
            variant="standard"
            fullWidth
            margin="dense"
          />
          <br />
          <TextField
            defaultValue={singlePost.body}
            id="standard-textarea"
            label="Blog Text"
            placeholder="Blog Text"
            multiline
            variant="standard"
            fullWidth
            margin="normal"
          />
          <BlogButton onClick={() => DeleteBlog(singlePost.id)}>
            Delete
          </BlogButton>
          <br />
          <DialogActions>
            <BlogButton onClick={handleClose}>Cancel</BlogButton>
            <BlogButton variant="outlined" onClick={handleClickOpen}>
              Save
            </BlogButton>
            <Dialog
              open={openDialog}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  You have successfully edited your blog!
                </DialogContentText>
              </DialogContent>
              <DialogActionContainer>
                <BlogButton onClick={handleCloseDialog}>OK</BlogButton>
              </DialogActionContainer>
            </Dialog>
          </DialogActions>
        </BoxModalContainer>
      </Modal>
    </div>
  );
}
function DeleteBlog(): void {
  throw new Error("Function not implemented.");
}
