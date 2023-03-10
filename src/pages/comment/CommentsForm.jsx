import React, { useState } from "react";

function CommentForm({ onCommentSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCommentSubmit({ name, email, comment });
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function Comment({ name, email, comment }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>{comment}</p>
      <p>{email}</p>
    </div>
  );
}

function CommentSection() {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
      <CommentForm onCommentSubmit={handleCommentSubmit} />
    </div>
  );
}

export default CommentSection;
