const ItemCart = ({ product, removeProductInCart }) => {
	const total = product.precio * product.quantity;
	return (
	<div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
		<div className="flex w-2/5">
		<div className="w-20">
			<img className="h-20" src={product.img} alt="" />
		</div>
		<div className="flex flex-col justify-between ml-4 flex-grow">
			<span className="font-semibold text-slate-800">{product.nombre}</span>
			<span className="text-gray-600 text-xs capitalize">{product.categoria}</span>
			<button
			className="w-24 text-left font-semibold hover:text-red-500 text-gray-500 text-xs"
			onClick={() => removeProductInCart(product.id)}
			>
			Eliminar
			</button>
		</div>
		</div>
		<span className="text-center w-1/5 font-semibold text-sm">
		{product.quantity}
		</span>
		<span className="text-center w-1/5 font-semibold text-sm">
		${product.precio}
		</span>
		<span className="text-center w-1/5 font-semibold text-sm">${total}</span>
	</div>
	);
};

export default ItemCart;



