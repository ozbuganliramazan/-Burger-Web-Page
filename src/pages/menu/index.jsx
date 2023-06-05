import { Data } from "../../helpers/data";
import "../../assets/style/Menu.css";
import MenuCard from "../../components/menu-card";

export default function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((item, index) => (
          <MenuCard
            key={index}
            image={item.image}
            name={item.name}
            content={item.content}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
