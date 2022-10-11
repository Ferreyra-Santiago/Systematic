import { useCartContext } from "../../CartContex";
import Form from "../../components/Form/Form";


const Checkout = () => {
  const { cart } = useCartContext();
  return (
    <div>
      <div className="w-2/3 m-auto p-5">
        <h2 className="text-gray-700 font-bold text-2xl mb-3 w-96 hover:text-gray-900 hover:cursor-pointer">Tu Pedido</h2>
        {cart.map((product) => (
          <div className="flex items-center bg-gray-200 hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="w-20">
              <img className="h-20" src={product.img} alt="" />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-semibold text-slate-800">
                {product.nombre}
              </span>
              <span className="text-gray-600 text-xs capitalize">
                {product.categoria}
              </span>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">
              <span className="font-thin">Cantidad: </span>x {product.quantity}
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
              <span className="font-thin">Subtotal: </span>${product.precio}
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
              <span className="font-thin">Total: </span>$
              {product.precio * product.quantity}
            </span>
          </div>
        ))}
      </div>
      {cart.map((product) => (
        <Form button={"Enviar"} productoNombre={product.nombre} Cantidad={product.quantity} PagoTotal={product.precio * product.quantity}/>
      ))}
    </div>
  );
};

export default Checkout;


