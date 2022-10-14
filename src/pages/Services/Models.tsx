export interface PostI {
  [x: string]: any;
  userId?: number | any;
  id: number;
  title: string;
  body: string;
  blogDate: string;
  author: string;
}

export interface GlobalModel {
  singlePost: PostI;
  AddToPost: any;
  DeleteBlog: any;
}

export interface UserI {
  id: number;
  name: string;
  username: string;
  author: string;
}
