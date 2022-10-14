import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { BlogButton } from "../components/BlogCard/BlogCardUI";
import { AddNewPostContainer, NativeSelectContainer } from "./AddNewPostUI";
import { UserI } from "./Services/Models";
import getUsers from "./Services/Users";

const AddNewPost = () => {
  const [allAuthors, setAllAuthors] = useState<UserI[]>([]);

  const getData = async () => {
    setAllAuthors(await getUsers());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AddNewPostContainer>
      <TextField
        // defaultValue={singlePost.title}
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
        // defaultValue={singlePost.body}
        id="standard-textarea"
        label="Blog Text"
        placeholder="Blog Text"
        multiline
        variant="standard"
        fullWidth
        margin="normal"
      />

      <NativeSelectContainer
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
      </NativeSelectContainer>
      <BlogButton>Save</BlogButton>
    </AddNewPostContainer>
  );
};

export default AddNewPost;
