import { Badge, ListGroup } from "react-bootstrap";

const DishComments = ({ selectedPasta }) => {
  return (
    <ListGroup>
      {selectedPasta.comments.map((review) => (
        <ListGroup.Item key={`review-${review.id}`}>
          {review.author} — {review.comment} <Badge bg="info">{review.rating}</Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DishComments;
