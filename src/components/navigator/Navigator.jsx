import "./Navigator.css";
import menu from "../../images/menu.jpg";
import sale from "../../images/sale.jpg";
import location from "../../images/location.jpg";

const Navigator = ({ setActive }) => {
  return (
    <div className="Nav-wrapper">
      <a onClick={() => setActive("menu-active")} href="#" className="Nav-elem">
        <img src={menu} alt="menu" />
        <h2 className="Nav-h2-menu">MENU</h2>
      </a>
      <a href="#" className="Nav-elem">
        <img src={sale} alt="sale" />
        <h2 className="Nav-h2-sale">promotions</h2>
      </a>
      <a href="https://vk.com/alex_vnrms" className="Nav-elem">
        <img src={location} alt="location" />
        <h2 className="Nav-h2-loc">CONTACT</h2>
      </a>
    </div>
  );
};
export default Navigator;
