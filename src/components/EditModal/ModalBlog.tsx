import * as React from "react";
import { useContext, useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import PostContext from "../../GlobalContext/State";
import { InputLabel, NativeSelect, TextField } from "@mui/material";
import getUsers from "../../pages/Services/Users";
import { UserI } from "../../pages/Services/Models";
import { BoxModalContainer } from "../EditModal/ModalBlogUI";
import { BlogButton } from "../BlogCard/BlogCardUI";

export default function ModalBlog() {
  const { singlePost } = useContext(PostContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [allAuthors, setAllAuthors] = useState<UserI[]>([]);
  const handleClose = () => setOpen(false);

  const getData = async () => {
    setAllAuthors(await getUsers());
  };

  useEffect(() => {
    getData();
  }, []);

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

          <InputLabel
            variant="standard"
            htmlFor="uncontrolled-native"
            margin="dense"
          >
            Author
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            {allAuthors.map((item) => {
              return (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </NativeSelect>
          <br />
          <BlogButton>Save</BlogButton>
        </BoxModalContainer>
      </Modal>
    </div>
  );
}
