import { Button } from "react-bootstrap";

const CommentsList = ({ comments, onDelete }) => (
  <div>
    {comments.map((comment) => (
      <SingleComment key={comment._id} comment={comment} onDelete={onDelete} />
    ))}
  </div>
);

const SingleComment = ({ comment, onDelete }) => (
  <div className="d-flex justify-content-between align-items-center border p-2">
    <p className="m-0">
      {comment.comment} - <strong>{comment.rate}/5</strong>
    </p>
    <Button variant="danger" size="sm" onClick={() => onDelete(comment._id)}>
      X
    </Button>
  </div>
);

export default CommentsList;
