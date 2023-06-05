import "../../assets/style/Home.css";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="mainPage" >
      <div className="order">
        <Link to={"/menu"}>
          <button>SİPARİŞN VER</button>
        </Link>
      </div>
    </div>
  );
}
