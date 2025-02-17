import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ commentsToShow, setCommentDelete }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNThmZGI3NDcwMTAwMTU4YjJhZWQiLCJpYXQiOjE3Mzg4NTAxMTgsImV4cCI6MTc0MDA1OTcxOH0.8b4QOmLZsljzz3_qfjPqEuneu0N5k_0RSCtlJRh1tHk",
        },
      });
      if (response.ok) {
        setCommentDelete(true);
      } else {
        throw new Error("La recensione non è stata eliminata!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup style={{ color: "black" }} className="mt-2">
      {commentsToShow.map((comment) => (
        <SingleComment comment={comment} onClick={() => deleteComment(comment._id)} key={comment._id} />
      ))}
    </ListGroup>
  );
};

export default CommentList;
