// import du CSS et des constantes
import styles from "./SignInForm.module.css";
import { ui, nav } from "../../constants/ui/fr.json";

// import des dépendances
import { useContext, useState } from "react";
import { useNavigate } from "react-router";

// import du context d'authentification
import { AuthContext } from "../../context/AuthContext/AuthContext";

const SignInForm = () => {
  // initialisation d'un utilisateur pour connexion
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  // récupération des fonctions de authService
  const authService = useContext(AuthContext);

  // fonction pour la redirection
  const navigate = useNavigate();

  // fonction pour mettre à jour signInData en temps réel
  const handleChange = (element) => {
    const { id, value } = element.target;
    setSignInData({
      ...signInData,
      [id]: value,
    });
  };

  // fonction envoi formulaire avec blocage en l'état et redirection vers la page Films
  const handleSubmit = async (element) => {
    element.preventDefault();
    try {
      await authService.login(signInData.email, signInData.password);
      navigate("/movies", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles["auth-form"]}>
      <h1>{nav.login}</h1>
      <form id="login-form" onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="email">{ui.email}</label>
          <input
            type="email"
            id="email"
            required
            onChange={handleChange}
            value={signInData.email}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">{ui.password}</label>
          <input
            type="password"
            id="password"
            required
            onChange={handleChange}
            value={signInData.password}
          />
        </div>
        <button type="submit">{ui.signin}</button>
      </form>
    </div>
  );
};

export default SignInForm;
