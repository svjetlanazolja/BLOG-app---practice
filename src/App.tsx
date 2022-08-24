import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddNewPosts from "./pages/AddNewPost";
import Main from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import { CardProvider } from "./GlobalContext/State";
import { Navigation, NavigationLink } from "./pages/SinglePostUI";

const App = () => {
  return (
    <>
      <CardProvider>
        <Router>
          <Navigation>
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="AddPost">Add New Post</NavigationLink>
          </Navigation>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="AddPost" element={<AddNewPosts />} />
            <Route path="post" element={<SinglePost />}>
              <Route path=":id" element={<SinglePost />}></Route>
            </Route>
          </Routes>
        </Router>
      </CardProvider>
    </>
  );
};

export default App;
