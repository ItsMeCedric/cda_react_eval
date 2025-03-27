// import styles et constantes
import styles from "./Home.module.css";
import { home } from "../../constants/ui/fr.json";

const Home = () => {
  return (
    <>
      <div className={styles["home-page"]}>
        <h1>{home.title}</h1>
        <p>{home.descr}</p>
        <ul>
          <h2>{home.func.title}</h2>
          <li>{home.func.item1}</li>
          <li>{home.func.item2}</li>
          <li>{home.func.item3}</li>
        </ul>
        <p>{home.short}</p>
      </div>
    </>
  );
};

export default Home;
