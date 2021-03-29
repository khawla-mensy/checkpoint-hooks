import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import StarRatingComponent from "react-star-rating-component";
import "./Moviecard.css";
function Moviecard({ film }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={film.image} height="60%" />
            <Card.Body>
                <Card.Title>{film.name}</Card.Title>
                <Card.Text>
                    {film.description}
                    <br />

                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={film.rate}
                    />
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">Go somewhere</Button>
            </Card.Footer>
        </Card>
    );
}

export default Moviecard;
