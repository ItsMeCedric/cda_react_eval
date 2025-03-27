// import du CSS et des constantes
import "./Footer.module.css";
import { footer } from "../../constants/ui/fr.json";

const Footer = () => {
  return (
    <footer>
      <p>{footer.copyright}</p>
    </footer>
  );
};

export default Footer;
