import { useState } from "react";
import { postComment } from "../api/api";
import { dummyUser } from "../data/dummyUser";

export default function PostCommentForm({ article_id }) {
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    postComment(article_id, {
      username: "dummyUser",
      body: comment,
    });
  }

  return (
    <>
      <form className="post-comment-form" onSubmit={handleSubmit}>
        <textarea
          id="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Join the conversation..."
          rows="3"
          required
        />
        <button type="submit">Post</button>
      </form>
    </>
  );
}
