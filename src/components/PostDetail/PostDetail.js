import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import CommentDetail from "../CommentDetail/CommentDetail";
import './PostDetail.css'

const PostDetail = (props) => {
  const { postId } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDetail(data));
  }, []);

  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div className="post">
      <p>ID: #{detail.id}</p>
      <h3>Title: {detail.title}</h3>
      <h3>Details: {detail.body}</h3>
      <br/>
  <h2>Comments on ID #{detail.id} are Below:</h2>
     <div> {comments.map(comment => <CommentDetail comment={comment}></CommentDetail>)}</div>
    </div>
  );
};

export default PostDetail;
