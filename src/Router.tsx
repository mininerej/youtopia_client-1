import React from "react";
import { Route, Switch } from "react-router-dom";
import PostList from "./Routes/PostList";
import PostDetail from "./Routes/PostDetail";
import CreatePost from "./Routes/CreatePost";

export const Router: React.SFC<{}> = ({}) => (
  <>
    <Switch>
      <Route path="/posts/:postId" component={PostDetail} />
      <Route path="/posts/create" component={CreatePost} />
      <Route path="/" component={PostList} />
    </Switch>
  </>
);
