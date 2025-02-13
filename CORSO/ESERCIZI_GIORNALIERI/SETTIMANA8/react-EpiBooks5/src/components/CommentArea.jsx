import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCommentSent, setIsCommentSent] = useState(false);
  const [isCommentDelete, setCommentDelete] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true);
      try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNThmZGI3NDcwMTAwMTU4YjJhZWQiLCJpYXQiOjE3Mzg4NTAxMTgsImV4cCI6MTc0MDA1OTcxOH0.8b4QOmLZsljzz3_qfjPqEuneu0N5k_0RSCtlJRh1tHk",
          },
        });
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          setComments(comments);
          setIsCommentSent(false);
          setCommentDelete(false);
          setIsLoading(false);
          setIsError(false);
        } else {
          console.log("error");
          setIsCommentSent(false);
          setCommentDelete(false);
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsCommentSent(false);
        setCommentDelete(false);
        setIsLoading(false);
        setIsError(true);
      }
    };
    if (asin) {
      getComments();
    }
  }, [asin, isCommentSent, isCommentDelete]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} setIsCommentSent={setIsCommentSent} />
      <CommentList commentsToShow={comments} setCommentDelete={setCommentDelete} />
    </div>
  );
};

export default CommentArea;
