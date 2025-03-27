import styles from './MovieEdit.module.css';

const MovieEdit = () => {
  return (
    <div className={styles["movie-form"]}>
      <h1>Edit Movie</h1>
      <form onSubmit={handleSubmit} id="movie-form">
        <div className={styles["form-group"]}>
          <label htmlFor="title">Titre</label>
          <input
            onChange={handleChange}
            value={formData.title}
            type="text"
            id="title"
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleChange}
            value={formData.description}
            id="description"
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="releaseDate">Date de sortie</label>
          <input
            onChange={handleChange}
            value={formData.releaseDate}
            type="date"
            id="releaseDate"
            required=""
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="imageUrl">URL de l'image</label>
          <input
            onChange={handleChange}
            value={formData.imageUrl}
            type="url"
            id="imageUrl"
            required=""
          />
        </div>
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
};

export default MovieEdit;
