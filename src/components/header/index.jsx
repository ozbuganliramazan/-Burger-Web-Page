import { Link } from "react-router-dom";
import BurgerLogo from "../../assets/burgerlogo.png";
import "../../assets/style/navbar.css";
export default function Header() {
  return (
    <div className="navbar">
      <div className="main">
        <img src={BurgerLogo} />
        <div className="mainLink">
          <Link to={"/"}>Anasayfa</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/about"}>Hakkımızda</Link>
          <Link to={"/contact"}>İletişim</Link>
        </div>
      </div>
    </div>
  );
}
