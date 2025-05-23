// import du css et des constantes
import styles from "./Nav.module.css";
import { nav } from "../../constants/ui/fr.json";

// import des dépendances
import { NavLink } from "react-router";
import { useContext } from "react";

// import des context pour gérer les routes privées et le message de manière global
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { MessageContext } from "../../context/MessageContext/MessageContext";

const Nav = () => {
  // accès à authService pour checker "isAuthenticated" et conditionner les items présents ou non
  const authService = useContext(AuthContext);

  // accès à message pour la déconnexion réussie
  const { showMessage } = useContext(MessageContext);

  return (
    <div>
      <ul className={styles["nav-links"]}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            to="/"
          >
            {nav.home}
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            to="/movies"
          >
            {nav.movies}
          </NavLink>
        </li>

        {authService.isAuthenticated() && (
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              to="/add-movie"
            >
              {nav["add-movie"]}
            </NavLink>
          </li>
        )}

        {!authService.isAuthenticated() && (
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              to="/login"
            >
              {nav.login}
            </NavLink>
          </li>
        )}

        {!authService.isAuthenticated() && (
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              to="/register"
            >
              {nav.register}
            </NavLink>
          </li>
        )}

        {authService.isAuthenticated() && (
          <li>
            <NavLink
              className={styles.navLink}
              onClick={() => {
                authService.logout();
                showMessage("success", "Déconnexion effectuée avec succès");
              }}
              to={"/"}
            >
              {nav.logout}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
