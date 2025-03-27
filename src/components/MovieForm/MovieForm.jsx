import { useContext, useState } from "react";
import styles from "./MovieForm.module.css";
import { MovieContext } from "../../context/MoviesContext/MoviesContext";
import { ui, movie } from "../../constants/ui/fr.json"
import { useNavigate } from "react-router";


const MovieForm = () => {

  const [movieData, setMovieData] = useState({
    title: "",
    description: "",
    releaseDate: "",
    imageUrl: "",
  });
  const movieService = useContext(MovieContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    movieService
      .createMovie(movieData)
      .then((m) => navigate("/movie-details", { state: { movie: m } }))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setMovieData({
      ...movieData,
      [id]: value,
    });
  };

  return (
    <div className={styles["movie-form"]}>
      <h1>{movie.cat}</h1>
      <form id="movie-form" onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="title">{movie.title}</label>
          <input
            type="text"
            id="title"
            required
            onChange={handleChange}
            value={movieData.title}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="description">{movie.description}</label>
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
          <label htmlFor="releaseDate">{movie.releaseDate}</label>
          <input
            type="date"
            id="releaseDate"
            required
            onChange={handleChange}
            value={movieData.releaseDate}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="imageUrl">{movie.imageURL}</label>
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
