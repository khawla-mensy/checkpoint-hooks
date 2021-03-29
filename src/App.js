import "./App.css";
import react, { useState } from "react";
import Movielist from "./Components/Movielist/Movielist";
import AddMovie from "./Components/AddMovie/AddMovie";

import MyNavbar from "./Components/MyNavbar/MyNavbar";
import image1 from "./titanic.jpg";
import image2 from "./princeofpersia.jpg";
import image3 from "./gladiator.jpg";
import image4 from "./godfather.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const movies = [
        {
            name: "Titanic",
            image: image1,
            description:
                "lTitanic est un film dramatique américain écrit, produit et réalisé par James Cameron, sorti en 1997. Intégrant à la fois des aspects historiques et fictionnels",
            rate: 4,
        },
        {
            name: "Prince of persia",
            image: image2,
            description:
                "Un prince rebelle est contraint d'unir ses forces avec une mystérieuse princesse pour affronter ensemble les forces du mal et protéger une dague antique capable de libérer les Sables du temps, ",
            rate: 5,
        },
        {
            name: "Gladiator",
            image: image3,
            description:
                "Gladiator (ou Gladiateur, au Québec et au Nouveau-Brunswick) est un film américano-britannique de Ridley Scott, sorti en 2000.",
            rate: 3,
        },
        {
            name: "The Godfather",
            image: image4,
            description:
                "Le Parrain (The Godfather) est un film américain de Francis Ford Coppola, sorti en 1972. Produit par les studios Paramount, le film est une adaptation du roman ...",
            rate: 3,
        },
    ];
    const [films, setfilms] = useState(movies);

    const [searchTitle, setSearchTitle] = useState("");

    const [searchRate, setSearchRate] = useState(0);

    const getSearchRate = (input) => {
        setSearchRate(input);
    };

    const getSearchTitle = (input) => {
        setSearchTitle(input);
    };
    const getNewMovie = (newMovie) => {
        setfilms([...films, newMovie]);
    };

    return (
        <div className="App">
            <MyNavbar
                getSearchRate={getSearchRate}
                getSearchTitle={getSearchTitle}
            />
            <AddMovie getNewMovie={getNewMovie} />

            <Movielist
                films={films}
                searchTitle={searchTitle}
                searchRate={searchRate}
            />
        </div>
    );
}

export default App;
