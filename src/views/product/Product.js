import React from 'react'
import { Link } from 'react-router-dom'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

const product = () => {
  return (
    <div>
            <div className="text-slate-800 justify-items-center grid grid-cols-5">
      <div className="list-none w-60">
        <h1 className="font-bold text-2xl border-b-2 p-2">productos</h1>
        <ul>
          <li className="p-1 font-semibold">
            <Link to="/Category/hoodies"> - Hoodie </Link>
          </li>
          <li className="p-1 font-semibold">
            <Link to="/Category/remera"> - Remera </Link>
          </li>
          <li className="p-1 font-semibold">
            <Link to="/Category/pantalon"> - Pantalon </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-4">
        <ItemListContainer />
      </div>
    </div>
    </div>
  )
}

export default product