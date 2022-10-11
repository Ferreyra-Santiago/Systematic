import React from 'react'
import  buzo from "../Assets/images/buzo.jpg"
import remera from "../Assets/images/remera.jpg"
import pantalon from "../Assets/images/pantalon.jpg"
import { Link } from 'react-router-dom'



const Card = ({name}) => {
  return (
    <>
    <div>
      <Link to={"/product"}> <h1 className='text-gray-700 font-bold text-4xl  m-auto mt-12 mb-12 w-96 hover:text-gray-900 hover:cursor-pointer'>Nuestros productos</h1></Link>
    </div>
      <div className='flex mt-2'>
        <div className="mt-4 space-y-12 lg:space-y-0 lg:grid lg: lg:gap-x-8 max-w-xl mx-auto py-16 px-4 sm:pb-24 lg:-mt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div
            aria-hidden="true"
            className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
        >
            <Link to={"/Category/remera"}> <div
  className="relative overflow-hidden bg-no-repeat bg-cover "
  data-mdb-ripple="true" data-mdb-ripple-color="light"
>

<img
src={remera}
alt={`${name} collection`}
className="w-full h-full object-center object-cover"
/>
  <a href="#!">
    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-40 transition duration-300 ease-in-out bg-black"><h1 className="absolute text-5xl text-white text-opacity-1 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2">
            Remeras</h1></div>
    
  </a>
</div></Link>
        </div>
                

</div>
        <div className="mt-4 space-y-12 lg:space-y-0 lg:grid lg: lg:gap-x-8 max-w-xl mx-auto py-16 px-4 sm:pb-24 lg:-mt-16 sm:px-6 lg:max-w-7xl lg:px-8">

                

        <div
                        aria-hidden="true"
                        className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                    >
            <Link to={"/Category/hoodies"}> <div
  className="relative overflow-hidden bg-no-repeat bg-cover "
  data-mdb-ripple="true" data-mdb-ripple-color="light"
>

<img
src={buzo}
alt={`${name} collection`}
className="w-full h-full object-center object-cover"
/>
  <a href="#!">
    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-40 transition duration-300 ease-in-out bg-black"><h1 className="absolute text-5xl text-white text-opacity-1 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2">
            Hoddies</h1></div>
    
  </a>
</div></Link>     
                    </div>
</div>
        <div className="mt-4 space-y-12 lg:space-y-0 lg:grid lg: lg:gap-x-8 max-w-xl mx-auto py-16 px-4 sm:pb-24 lg:-mt-16 sm:px-6 lg:max-w-7xl lg:px-8">

                
        <div
            aria-hidden="true"
            className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
        >
            <Link to={"/Category/pantalon"}> <div
  className="relative overflow-hidden bg-no-repeat bg-cover "
  data-mdb-ripple="true" data-mdb-ripple-color="light"
>

<img
src={pantalon}
alt={`${name} collection`}
className="w-full h-full object-center object-cover"
/>
  <a href="#!">
    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-40 transition duration-300 ease-in-out bg-black"><h1 className="absolute text-5xl text-white text-opacity-1 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2">
            Pantalones</h1></div>
    
  </a>
</div></Link>
        </div>
</div>

</div></>


  )
}

export default Card

