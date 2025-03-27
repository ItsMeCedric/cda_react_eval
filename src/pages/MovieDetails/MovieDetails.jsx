// import du CSS et des constantes
import styles from "./MovieDetails.module.css";
import { ui } from "../../constants/ui/fr.json";

// import des dépendances
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";

// import des contexts
import { MovieContext } from "../../context/MoviesContext/MoviesContext";
import { MessageContext } from "../../context/MessageContext/MessageContext";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { AuthService } from "../../services/authService";

const MovieDetails = () => {
  // récupération des fonction de movieService
  const movieService = useContext(MovieContext);

  // fonction pour la redirection
  const navigate = useNavigate();

  // accès au message pour "deleteMovie"
  const { showMessage } = useContext(MessageContext);

  // accès aux données enregistrée par react-router via .navigate
  const { state } = useLocation();

  // extraction du film à modifier des données du "state"
  const movie = state.movie;

  // fonction d'édition du film
  const editMovie = (event) => {
    event.preventDefault();
    navigate("/edit-movie", { state: { movie } }); // renvoi le film via react-router
  };

  // fonction de suppression du film
  const deleteMovie = (event) => {
    event.preventDefault();
    movieService.deleteMovie(movie.id);
    showMessage("success", "Film supprimé avec succès");
    navigate("/movies");
  };

  return (
    <div className={styles["movie-details"]}>
      <div className={styles["movie-header"]}>
        <h1>{movie.title}</h1>
        {AuthService.getCurrentUser().id === movie.userId && (
          <div className={styles["movie-actions"]}>
            <button onClick={editMovie}>{ui.edit}</button>
            <button onClick={deleteMovie}>{ui.delete}</button>
          </div>
        )}
      </div>
      <div className={styles["movie-content"]}>
        <img className={styles["movie-image"]} src={movie.imageUrl} alt="" />
        <div className={styles["movie-info"]}>
          <p className={styles["release-date"]}>
            {ui.releaseDate} : {movie.releaseDate}
          </p>
          <p className={styles["description"]}>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
