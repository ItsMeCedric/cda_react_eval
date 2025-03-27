// import du CSS
import styles from "./MovieCard.module.css";

// import des dépendances
import { useNavigate } from "react-router";

// composant Card représentant la miniature d'un film
const MovieCard = ({ movie }) => {
  // fonction de redirection
  const navigate = useNavigate();

  // fonction d'évenement lors du clic
  const handleClick = (event) => {
    event.preventDefault();
    navigate("/movie-details", { state: { movie } });
  };

  return (
    <div className={styles["movie-card"]} onClick={handleClick}>
      <img src={movie.imageUrl} alt="test" />
      <div className={styles["movie-card-content"]}>
        <h2>{movie.title}</h2>
        <p>{movie.releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
