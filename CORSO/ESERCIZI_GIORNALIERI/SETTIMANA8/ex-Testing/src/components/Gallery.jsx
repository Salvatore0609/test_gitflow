import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router";

const Gallery = (props) => {
  //   const navigate = useNavigate();
  const [films, setFilms] = useState([]);

  const getOmdbData = async () => {
    const resp = await fetch(`http://www.omdbapi.com/?s=${props.title}&apikey=43a932c8&type=${props.type}`);

    if (resp.ok) {
      const omdbData = await resp.json();
      setFilms(omdbData.Search.slice(0, 6));
    }
  };

  useEffect(() => {
    getOmdbData();
  }, []);
  console.log(films);
  return (
    <>
      <h2 className="text-capitalize">{props.title}</h2>
      <Row xs={1} sm={2} md={4} xl={6}>
        {films.map((film) => (
          <Col key={film.imdbID}>
            <Link to={"/details/" + film.imdbID}>
              <Image src={film.Poster !== "N/A" ? film.Poster : "https://static.thenounproject.com/png/2932881-200.png"} rounded fluid />
            </Link>
            {/* <Image
              src={film.Poster !== "N/A" ? film.Poster : "https://static.thenounproject.com/png/2932881-200.png"}
              rounded
              fluid
              onClick={() => navigate("/details/" + film.imdbID)}
            /> */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Gallery;
