// import du CSS et des constantes
import styles from "./SignUpForm.module.css";
import { ui, nav } from "../../constants/ui/fr.json";

// import des dépendances
import { useContext, useState } from "react";
import { useNavigate } from "react-router";

// import du context d'authentification
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { MessageContext } from "../../context/MessageContext/MessageContext";

const SignUpForm = () => {
  // initialisation d'un utilisateur pour inscription
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // récupération des fonctions de authService
  const authService = useContext(AuthContext);

  // fonction pour la redirection
  const navigate = useNavigate();

  // accès au message pour
  const { showMessage } = useContext(MessageContext);

  // fonction pour mettre à jour signUpData en temps réel
  const handleChange = (event) => {
    const { id, value } = event.target;
    setSignUpData({
      ...signUpData,
      [id]: value,
    });
  };

  // fonction envoi formulaire avec blocage en l'état et redirection vers la page Films
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await authService.register(
        signUpData.username,
        signUpData.email,
        signUpData.password
      );
      navigate("/movies", { replace: true });
    } catch (error) {
      showMessage("error", error.message);
    }
  };

  return (
    <div className={styles["auth-form"]}>
      <h1>{nav.register}</h1>
      <form id="register-form" onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="nickname">{ui.nickname}</label>
          <input
            type="text"
            id="username"
            required
            onChange={handleChange}
            value={signUpData.username}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">{ui.email}</label>
          <input
            type="email"
            id="email"
            required
            onChange={handleChange}
            value={signUpData.email}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">{ui.password}</label>
          <input
            type="password"
            id="password"
            required
            onChange={handleChange}
            value={signUpData.password}
          />
        </div>
        <button type="submit">{ui.register}</button>
      </form>
    </div>
  );
};

export default SignUpForm;
