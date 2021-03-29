import React, { useState } from "react";
import Moviecard from "../Moviecard/Moviecard";

function Movielist({ films, searchTitle, searchRate }) {
    return (
        <div className="movieList">
            {films
                .filter(
                    (film) =>
                        film.name
                            .toLowerCase()
                            .includes(searchTitle.toLowerCase()) &&
                        film.rate >= searchRate
                )

                .map((film, i) => (
                    <Moviecard key={i} film={film} />
                ))}
        </div>
    );
}

export default Movielist;
