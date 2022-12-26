import { useState } from "react";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

import "./Menu.css";

// import Carbonara from "../../images/Carbonara.jpg";
// import Borch from "../../images/Borch.jfif";
// import Ragu from "../../images/Ragu.jpg";
// import Cake from "../../images/Cake.jpg";
import MenuItem from "./MenuItem";
import { menu } from "../../data";

export default function Menu({
  active,
  setActive,
  setActiveForm,
  setSumCost,
  dish,
  sumCost,
  addToDish,
  deleteFromDish, 
  setItemCountInDish,
}) {

  const continuePay = () => {
    setActive("");
    setActiveForm("active-form");
  };

  return (
    <div className={`menu-container ${active}`}>
      <h1>Меню</h1>
      <CloseButton onClick={() => setActive("")} className="CloseButton" />
     
      {menu.map(item => {
        return <MenuItem
          name={item.name}
          description={item.description}
          image={item.image}
          price={item.price}
          addToDish={() => {addToDish(item)}}
          deleteFromDish={() => {deleteFromDish(item)} }
          setItemCountInDish={count => {setItemCountInDish(item, count)}}
        />
      })}

      <div className="menu-elem">
        <h4 className="menu-total">Итог</h4>
        <div className="menu-elem-descr d-flex oveflow-x-hidden"></div>
        <div style={{ fontWeight: "bold" }}>{sumCost}</div>
        <Button onClick={() => continuePay()} variant="warning">
          Купить
        </Button>{" "}
      </div>
    </div>
  );
}
