import styles from "./Card.module.css";

const Card = ({ card }) => {
  return (
    <div className={styles["card"]}>
      <img src={card.imageUrl} alt={card.title} />
      <div className={styles["card-content"]}>
        <h2>{card.title}</h2>
        <p>{card.releaseDate}</p>
      </div>
    </div>
  );
};

const CardGrid = ({ cards }) => {
  // petit tri par ordre alphabétique avant de rendre la grille
  const sortedCards = [...cards].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className={styles["cards-grid"]}>
      {sortedCards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default CardGrid;