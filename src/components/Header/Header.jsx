import Nav from "../Nav/Nav";
import styles from "./Header.module.css";

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
