import React from "react";
import Carrito from "../Assets/icons/carro-de-la-compra.png";
import { useCartContext } from "../../CartContex";
import { Link } from "react-router-dom";

const CardWidget = () => {
  const { cart } = useCartContext();
  const quantity = cart.map((product) => {
    return product.quantity;
  });
  const total = quantity.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return (
    <Link to={`/cart`}>
    <div>
      {total > 0 ? (
        <div className=" flex w-16 mt-4 px-2 py-2 leading-none border rounded-xl shadow-lg transition ease-in-out delay-150 duration-300  bg-slate-300 border-white hover:border-transparent hover:bg-slate-400 lg:mt-0">
          <img className="w-6 h-6" src={Carrito} alt="CardWidget" />
        <p className="text-black p-1 ml-1 font-light">{total}</p>
      </div>
      ) : (
        <div></div>
      )}
    </div>
    </Link>
  );
};

export default CardWidget;