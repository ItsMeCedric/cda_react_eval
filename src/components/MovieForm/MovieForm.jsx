// import du style et des constantes
import styles from "./MovieForm.module.css";
import { ui, uimovie } from "../../constants/ui/fr.json";

// import des dépendances
import { useContext, useState } from "react";
import { useNavigate } from "react-router";

// import du context des films
import { MovieContext } from "../../context/MoviesContext/MoviesContext";

const MovieForm = () => {
  // initilisation d'un film vide
  const [movieData, setMovieData] = useState({
    title: "",
    description: "",
    releaseDate: "",
    imageUrl: "",
  });

  // récupération des fonctions de movieService
  const movieService = useContext(MovieContext);

  // fonction pour la redirection
  const navigate = useNavigate();

  // fonction envoi formulaire avec blocage en l'état et redirection
  const handleSubmit = (element) => {
    element.preventDefault();
    movieService
      .createMovie(movieData)
      .then((currentMovie) =>
        navigate("/movie-details", { state: { movie: currentMovie } })
      )
      .catch((err) => console.log(err));
  };

  // fonction pour mettre à jour movieData en temps réel
  const handleChange = (element) => {
    const { id, value } = element.target;
    setMovieData({
      ...movieData,
      [id]: value,
    });
  };

  return (
    <div className={styles["movie-form"]}>
      <h1>{uimovie.add}</h1>
      <form id="movie-form" onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="title">{uimovie.title}</label>
          <input
            type="text"
            id="title"
            required
            onChange={handleChange}
            value={movieData.title}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="description">{uimovie.description}</label>
          <textarea
            type="text"
            id="description"
            rows="7"
            required
            onChange={handleChange}
            value={movieData.description}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="releaseDate">{uimovie.releaseDate}</label>
          <input
            type="date"
            id="releaseDate"
            required
            onChange={handleChange}
            value={movieData.releaseDate}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="imageUrl">{uimovie.imageURL}</label>
          <input
            type="url"
            id="imageUrl"
            required
            onChange={handleChange}
            value={movieData.imageUrl}
          />
        </div>
        <button type="submit">{ui.add}</button>
      </form>
    </div>
  );
};

export default MovieForm;
