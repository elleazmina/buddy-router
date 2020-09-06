import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllPosts from './components/AllPosts/AllPosts';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';
// import CommentDetail from './components/CommentDetail/CommentDetail';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/posts">
           <AllPosts></AllPosts>
        </Route>
        <Route path="/detail/:postId">
            <PostDetail></PostDetail>
        </Route>
        {/* <Route path="/comments/:Id">
          <CommentDetail></CommentDetail>
        </Route> */}
        <Route exact path="/">
          <AllPosts></AllPosts>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    
  );
};

export default App;
