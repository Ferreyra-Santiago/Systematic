
import React from 'react'
import Item from '../../Item/Item';


//Link react-router-dom
import { Link } from "react-router-dom"


const ItemList = ({producto}) => {

      return (
<div className='flex flex-wrap'>
{
  producto.map((items, idx)=>{
    return <Link to={`/detail/${items.id}`}><div className="p-6">
      <Item key={idx} data={items}/></div></Link>
}
)
}
</div>
)}
export default ItemList
