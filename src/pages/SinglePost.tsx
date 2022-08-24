import { Button, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { TypographyH2, Line } from "../components/BlogCard/BlogCardUI";
import PostContext from "../GlobalContext/State";
import { SinglePostContainer, AuthorP } from "./SinglePostUI";
import { useParams } from "react-router-dom";

const SinglePost: FC = () => {
  const { singlePost } = useContext(PostContext);
  const params = useParams();
  console.log("HELLO" + params);

  return (
    <SinglePostContainer>
      <TypographyH2>{singlePost.title}</TypographyH2>
      <Line />
      <Typography>{singlePost.body}</Typography>
      <AuthorP>{singlePost.author}</AuthorP>
      <Typography>{singlePost.blogDate}</Typography>
      <Button>Izmijeni post </Button>
    </SinglePostContainer>
  );
};

export default SinglePost;
