import React from "react";
import "./CommentDetail.css";

const CommentDetail = (props) => {
  const { name, email, body } = props.comment;
  return (
    <div className="comment-info">
      <img
        src="https://randomuser.me/api/portraits/thumb/women/86.jpg"
        alt=""
      />
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Email:</b> {email}
      </p>
      <p>
        <b>Comment:</b> {body}
      </p>
    </div>
  );
};

export default CommentDetail;
