
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../CartContex'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({data}) => {
  const { addProduct } = useCartContext();
  const [buy, setBuy] = useState(false);
  const handleOnAdd = (quantity) => {
    
    setBuy(true);
    addProduct(data ,quantity)
  };
    return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
    <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={data.img}/>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{data.categoria}</h2>
        <h1 class="text-gray-700 font-bold text-2xl mb-3 w-96 hover:text-gray-900 hover:cursor-pointer">{data.nombre}</h1>
        <div className="flex mb-4">
        </div>
        
        {buy ? <h2 className='no-underline'>Se agrego al carrito:<li className='text-gray-700 underline font-bold text-1xl mb-3 w-96'>{data.nombre}</li> </h2> : <p className="leading-relaxed">{data.descripcion}</p>}
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <div className="flex ml-6 items-center">
            {buy ? (
            <Link to={`/cart`}>
              
              <button className="py-4 px-6 mb-3 mx-auto shadow-lg shadow-slate-500/50 bg-[#6f5cef] text-white rounded hover:bg-[#5941f2] active:bg-sky-300 disabled:opacity-50  flex items-center justify-center">
                Ir a Pagar
              </button>
            </Link>
          ) : (
            <ItemCount stock={data.stock} onAdd={handleOnAdd} />
          )}      

            <div className="relative">
                <div className='flex ml-72'>
                <span className="title-font font-medium text-2xl text-gray-900">Precio: ${data.precio}</span>
                </div>
            </div>
            </div>
            
        </div>
        </div>
    </div>
    
    </div>
    
</section>
)
}

export default ItemDetail