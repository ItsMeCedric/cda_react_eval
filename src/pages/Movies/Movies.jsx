import styles from "./Movies.module.css";
import { nav } from "../../constants/ui/fr.json";

import CardGrid from "../../components/Card/Card";

// import movies from "../../mocks/movies.json";

import { MovieContext } from "../../context/MoviesContext/MoviesContext";
import { useContext, useEffect, useState } from "react";

const Movies = () => {
  const movieService = useContext(MovieContext);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    movieService.getAllMovies().then((m) => setMovies(m));
  }, []);

  return (
    <div className={styles["movies-page"]}>
      <h1>{nav.movies}</h1>
      <CardGrid cards={movies} />
    </div>
  );
};

export default Movies;
