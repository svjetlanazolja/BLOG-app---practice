import { Typography } from "@mui/material";
import React, { FC, useContext, useState } from "react";
import PostContext from "../../GlobalContext/State";
import { useNavigate } from "react-router-dom";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import {
  SingleCardContainer,
  TypographyH2,
  BlogButton,
  Line,
  ReactionsRed,
  ButonIcon,
  TypographyCounter,
} from "./BlogCardUI";

interface BlogcardProps {
  userId?: number;
  id: number;
  blogTitle: string;
  blogText: string;
  blogDate: string | any;
  blogAuthor: string | number;
}

const BlogCard: FC<BlogcardProps> = ({
  blogTitle,
  blogText,
  blogAuthor,
  blogDate,
  id,
}) => {
  const { AddToPost } = useContext(PostContext);
  const [tempState] = useState<BlogcardProps[]>([
    { blogTitle, blogText, blogAuthor, blogDate, id },
  ]);

  const [count, setCount] = useState(0);
  const [countDislike, setCountDislike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const CountLike = () => {
    if (isLiked) {
      setCount((prevState) => prevState - 1);
      setIsLiked(false);
    } else if (!isLiked && !isDisliked) {
      setCount((prevState) => prevState + 1);
      setIsLiked(true);
    } else if (!isLiked && isDisliked) {
      setCount((prevState) => prevState + 1);
      setCountDislike((prevState) => prevState - 1);
      setIsLiked(true);
      setIsDisliked(false);
    }
  };

  const CountDislike = () => {
    if (isDisliked) {
      setCountDislike((prevState) => prevState - 1);
      setIsDisliked(false);
    } else if (!isDisliked && !isLiked) {
      setCountDislike((prevState) => prevState + 1);
      setIsDisliked(true);
    } else if (!isDisliked && isLiked) {
      setCountDislike((prevState) => prevState + 1);
      setCount((prevState) => prevState - 1);
      setIsDisliked(true);
      setIsLiked(false);
    }
  };

  const navigate = useNavigate();
  const navigateToPost = (id: number) => {
    AddToPost(blogTitle, blogText, blogAuthor, blogDate, id);
    navigate(`post/${id}`);

    const temp = JSON.stringify(tempState);
    localStorage.setItem("onePost", temp);
  };

  return (
    <SingleCardContainer>
      <TypographyH2>{blogTitle}</TypographyH2>
      <Line />
      <Typography>{blogText.substring(0, 100) + "..."}</Typography>
      <BlogButton onClick={() => navigateToPost(id)} type="button">
        Read more
      </BlogButton>
      <Typography>{blogAuthor}</Typography>
      <Typography>{blogDate}</Typography>
      <ReactionsRed>
        <TypographyCounter>{count}</TypographyCounter>
        <ButonIcon onClick={() => CountLike()}>
          <ThumbUpRoundedIcon style={{ fill: "#f98171" }} />
        </ButonIcon>
        <TypographyCounter>{countDislike}</TypographyCounter>
        <ButonIcon onClick={() => CountDislike()}>
          <ThumbDownAltRoundedIcon style={{ fill: "#f98171" }} />
        </ButonIcon>
      </ReactionsRed>
    </SingleCardContainer>
  );
};

export default BlogCard;
