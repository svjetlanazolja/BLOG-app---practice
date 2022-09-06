import { Button, Typography } from "@mui/material";
import { FC, useContext, useState } from "react";
import { TypographyH2, Line } from "../components/BlogCard/BlogCardUI";
import PostContext from "../GlobalContext/State";
import { SinglePostContainer, AuthorP } from "./SinglePostUI";
import { useParams } from "react-router-dom";

const SinglePost: FC = () => {
  const { singlePost } = useContext(PostContext);

  const params = useParams();
  console.log("HELLO" + params);

  const setBody = () => {
    singlePost.body = "my changed body data... example..";
  };

  return (
    <SinglePostContainer>
      <TypographyH2>{singlePost.title}</TypographyH2>
      <Line />
      <Typography>{singlePost.body}</Typography>
      <AuthorP>{singlePost.author}</AuthorP>
      <Typography>{singlePost.blogDate}</Typography>
      <Button>Izmijeni post </Button>
      <button onClick={() => setBody()}>Edit this body...</button>
    </SinglePostContainer>
  );
};

export default SinglePost;

// napraviti modal
