// import du CSS et des constantes
import styles from "./MovieEdit.module.css";
import { ui, uimovie } from "../../constants/ui/fr.json";

// import des dépendances
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

// import des contexts
import { MovieContext } from "../../context/MoviesContext/MoviesContext";
import { MessageContext } from "../../context/MessageContext/MessageContext";

const MovieEdit = () => {
  // accès aux données enregistrée par react-router via .navigate
  const { state } = useLocation();

  // extraction du film à modifier des données du "state"
  const movie = state.movie;

  // initialisation d'un film vide
  const [movieEdit, setMovieEdit] = useState({
    title: movie.title,
    description: movie.description,
    releaseDate: movie.releaseDate,
    imageUrl: movie.imageUrl,
  });

  // récupération des fonction de movieService
  const movieService = useContext(MovieContext);

  // fonction pour la redirection
  const navigate = useNavigate();

  // accès au message pour
  const { showMessage } = useContext(MessageContext);

  // fonction pour mettre à jour movieEdit en temps réel
  const handleChange = (event) => {
    const { id, value } = event.target;
    setMovieEdit({
      ...movieEdit,
      [id]: value,
    });
  };

  // fonction envoi formulaire avec blocage en l'état et redirection vers la page du film
  const handleSubmit = (event) => {
    event.preventDefault();
    movieService
      .getMovieById(movie.id) // récupére un film par id
      .then((movie) => {
        movieService
          .updateMovie(movie.id, movieEdit) // patch ue film reçu dans "movie"
          .then((movie) => {
            navigate("/movie-details", {
              replace: true,
              state: {
                movie,
              },
            });
          })
          .catch((err) => showMessage("error", err.message)); // message 401
      })
      .catch((err) => showMessage("error", err.message)); // message film introuvable
  };

  return (
    <div className={styles["movie-form"]}>
      <h1>
        {uimovie.edit}: {movieEdit.title}
      </h1>
      <form id="movie-form" onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="title">{ui.title}</label>
          <input
            type="text"
            id="title"
            required
            onChange={handleChange}
            value={movieEdit.title}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="description">{ui.description}</label>
          <textarea
            id="description"
            required
            rows="7"
            onChange={handleChange}
            value={movieEdit.description}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="releaseDate">{ui.releaseDate}</label>
          <input
            type="date"
            id="releaseDate"
            required=""
            onChange={handleChange}
            value={movieEdit.releaseDate}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="imageUrl">{ui.imageURL}</label>
          <input
            type="url"
            id="imageUrl"
            required=""
            onChange={handleChange}
            value={movieEdit.imageUrl}
          />
        </div>
        <button type="submit">{uimovie.edit}</button>
      </form>
    </div>
  );
};

export default MovieEdit;
