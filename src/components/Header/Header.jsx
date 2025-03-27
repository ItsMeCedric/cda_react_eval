// import du CSS
import styles from "./Header.module.css";

// import du composant menu
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className={styles["logo"]}>
            <img src="src/assets/logo.png" className={styles["logo"]} />
          </div>
          <Nav />
        </nav>
      </header>
    </>
  );
};

export default Header;
