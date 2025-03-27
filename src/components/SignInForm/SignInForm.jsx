import { useContext, useState } from "react";
import styles from "./SignInForm.module.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { ui, nav } from "../../constants/ui/fr.json"
import { useNavigate } from "react-router";

const SignInForm = () => {

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const authService = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSignInData({
      ...signInData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    await authService.login(
      signInData.email,
      signInData.password
    );
    navigate("/movies", { replace: true }); }
    catch (err) {console.log(err)}
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
