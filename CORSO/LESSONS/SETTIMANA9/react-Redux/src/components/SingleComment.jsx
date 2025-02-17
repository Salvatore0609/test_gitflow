import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment, onClick }) => {
  return (
    <ListGroup.Item>
      {comment.comment}
      <Button variant="danger" className="ms-2" onClick={onClick}>
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
