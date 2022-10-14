import { createContext, useState } from "react";
import { PostI, GlobalModel } from "../pages/Services/Models";

const PostContext = createContext<GlobalModel>({} as GlobalModel);

export function CardProvider({ children }: any) {
  const [singlePost, setSinglePost] = useState<PostI>({
    title: "test",
    body: "test",
    author: "any",
    blogDate: "20.10.2022",
    id: 13,
  });

  const AddToPost = (
    title: string,
    body: string,
    author: string,
    blogDate: string,
    id: number
  ) => {
    setSinglePost({ title, body, author, blogDate, id });
  };

  const DeleteBlog = (id: number) => {
    setSinglePost(singlePost.filter((post: any) => post.id !== id));
  };

  return (
    <PostContext.Provider value={{ singlePost, AddToPost, DeleteBlog }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostContext;
