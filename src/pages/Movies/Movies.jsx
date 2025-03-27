// import styles et ui
import styles from "./Movies.module.css";
import { ui, uimovie } from "../../constants/ui/fr.json";

// import composant de rendu des Cards
import MovieCard from "../../components/MovieCard/MovieCard";

// import des dépendances
import { MovieContext } from "../../context/MoviesContext/MoviesContext";
import { useContext, useEffect, useState } from "react";

const Movies = () => {
  // import du movieService via useContext
  const movieService = useContext(MovieContext);
  // initialisation des films et de la fonction liée
  const [movies, setMovies] = useState([]);

  // appel de la fonction du MovieService pour obtenir tous les films
  useEffect(() => {
    movieService.getAllMovies().then((list) => setMovies(list));
  }, []); // laisser le tableau sinon boucle infini
  console.log(movies.length);

  const sortedMovies = [...movies].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  // s'il n'y a pas de films dans la liste
  if (movies.length === 0)
    return (
      <div className={styles["movies-page"]}>
        <h1>{ui.movies}</h1>
        <div className={styles["movies-grid"]}>
          <p>{uimovie.nomovie}</p>
        </div>
      </div>
    );

  return (
    <div className={styles["movies-page"]}>
      <h1>Films</h1>
      <div className={styles["movies-grid"]}>
        {sortedMovies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
