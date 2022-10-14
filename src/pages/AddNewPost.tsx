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

  const [title, setTitle] = useState("");
  const [details, setDetailas] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefaulet();

    if (title && details && blogAuthor) {
      console.log(title, details, blogAuthor);
    }
  };
  // console.log(title, details, blogAuthor);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AddNewPostContainer>
        <form noValidate autoCapitalize="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => setDetailas(e.target.value)}
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
            onChange={(e) => setBlogAuthor(e.target.value)}
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
          <br />
          <BlogButton type="submit">Save</BlogButton>
        </form>
      </AddNewPostContainer>
    </>
  );
};

export default AddNewPost;
