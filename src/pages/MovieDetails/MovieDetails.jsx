import styles from "./MovieDetails.module.css";
import { ui, movie } from "../../constants/ui/fr.json";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { MovieContext } from "../../context/MoviesContext/MoviesContext";
import { MessageContext } from "../../context/MessageContext/MessageContext";
import { AuthService } from "../../services/authService";

const MovieDetails = () => {
  const { showMessage } = useContext(MessageContext);
  const movieService = useContext(MovieContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  /*const movie = state.movie;

  const editMovie = (e) => {
    e.preventDefault();
    navigate("/edit-movie", { state: { movie } });
  };

  const deleteMovie = (e) => {
    e.preventDefault();
    movieService.deleteMovie(id);
    showMessage("success", "Film supprimé avec succès !");
  };
*/

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
