import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavouritesAction, removeFromFavouritesAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourites.content);

  const isJobInFavourites = favourites.some((job) => job._id === data._id);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs="auto">
        {isJobInFavourites ? (
          <Button
            variant="light"
            className="text-danger"
            onClick={() => {
              // dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: data._id });
              dispatch(removeFromFavouritesAction(data));
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
            </svg>
          </Button>
        ) : (
          <Button
            variant="light"
            onClick={() =>
              // dispatch({ type: "ADD_TO_FAVOURITES", payload: data })
              dispatch(addToFavouritesAction(data))
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default Job;
