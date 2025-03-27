import styles from "./Nav.module.css";

// import du texte pour l'interface utilisateur
import { nav, msg } from "../../constants/ui/fr.json";

import { NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { MessageContext } from "../../context/MessageContext/MessageContext";

const Nav = () => {
  const authService = useContext(AuthContext);
  const { showMessage } = useContext(MessageContext)

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
                showMessage("success", "Déconnexion réussie");
              }} 
              to={"/"}>
              {nav.logout}
            </NavLink>
          </li>
        )}

        
      </ul>
    </div>
  );
};

export default Nav;
