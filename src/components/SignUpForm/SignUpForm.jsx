import { useContext, useState } from "react";
import styles from "./SignUpForm.module.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router";
import { ui, nav } from "../../constants/ui/fr.json"

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const authService = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSignUpData({
      ...signUpData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await authService.register(
      signUpData.username,
      signUpData.email,
      signUpData.password
    );
    navigate("/movies", { replace: true });
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
