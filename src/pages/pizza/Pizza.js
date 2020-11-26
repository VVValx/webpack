import React from "react";
import pizzaImg from "../../assets/pizza.jpg";
import piz from "./pizza.module.css";

function Pizza() {
  return (
    <div className={piz.container}>
      <img src={pizzaImg} alt="pizza" />
    </div>
  );
}

export default Pizza;
