// import du CSS
import styles from "./Layout.module.css";

// import des dépendances
import { useContext } from "react";

// import de message pour l'afficher sur l'ensemble du site via le Layout
import { MessageContext } from "../../context/MessageContext/MessageContext";

// import des composants récurrents
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// children représente le composant inclu dans chaque route définie dans main.jsx
const Layout = ({ children }) => {
  // accès à message
  const { message } = useContext(MessageContext);

  return (
    <>
      <Header />

      <main>
        {message.content && (
          <div className={`${styles.message} ${styles[`${message.type}`]}`}>
            {message.content}
          </div>
        )}
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
