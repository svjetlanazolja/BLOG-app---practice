import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard/BlogCard";
import { BlogCardsContainer } from "../components/BlogCard/BlogCardUI";
import DateBlog from "../components/Date/DateBlog";
import { PostI, UserI } from "./Services/Models";
import getPosts from "./Services/Posts";
import getUsers from "./Services/Users";

const Main = () => {
  const [allPost, setAllPost] = useState<PostI[]>([]);
  const [allAuthors, setAllAuthors] = useState<UserI[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [shuffled, setShuffled] = useState<any>([]);

  const getData = async () => {
    setLoading(true);
    setAllAuthors(await getUsers());
    setAllPost(await getPosts());
    setLoading(false);
  };

  const getAuthor = (userId: number): string => {
    let author = allAuthors.find((e) => e.id === userId);
    if (author) {
      return author.name;
    }
    return "";
  };

  const setToLocalStorage = () => {
    //set u localstorage
    const temp = JSON.stringify(allPost);
    localStorage.setItem("myBlogPosts", temp);
  };

  useEffect(() => {
    getData();
    // setToLocalStorage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function shuffle(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    // setLoading(false);
    return array;
  }

  useEffect(() => {
    // setToLocalStorage();
    setShuffled(shuffle(allPost));
  }, [allPost]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <BlogCardsContainer>
      {!isLoading &&
        shuffled?.map((blog: any) => {
          return (
            <BlogCard
              userId={blog.userId}
              id={blog.id}
              key={blog.id}
              blogTitle={blog.title}
              blogText={blog.body}
              blogAuthor={getAuthor(blog.userId)}
              blogDate={<DateBlog />}
            />
          );
        })}
    </BlogCardsContainer>
  );
};

export default Main;
