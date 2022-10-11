import React from 'react'

const item = ({data}) => {

  return (
    <div className="max-w-2xl m-auto my-2 ">
        <div className="max-w-2xl m-auto my-2 shadow-xl">
          <div className=" bg-gray-100 flex justify-center items-center">
  <div className="container flex justify-center">
    <div className="max-w-sm">
      <div className="bg-white relative  hover:shadow-xl transition duration-500 rounded-lg">
        <img className="rounded-t-lg h-96 w-96"  src={data.img} alt="" />
        <div className="py-6 px-8 rounded-lg bg-white">
          <h1 className="text-gray-700 font-bold text-2xl mb-3 w-96 hover:text-gray-900 hover:cursor-pointer">{data.nombre}</h1>
        </div>
        <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
          <span className="text-md">${data.precio}</span>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
  )
}

export default item