import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext/MessageContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  // message login/logout
  const { message } = useContext(MessageContext);

  return (
    <>
      <Header />

      {message.content && (
        <div className={`${styles.message} ${styles[`${message.type}`]}`}>
          {message.content}
        </div>
      )}

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
