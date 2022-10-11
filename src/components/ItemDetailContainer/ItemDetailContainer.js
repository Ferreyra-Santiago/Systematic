import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

//import params para id
import { useParams } from "react-router"
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';

const Detail = () => {
const [detail, usedetail] = useState([])

let {id} = useParams()


useEffect(()=>{
  
  
const querydb = getFirestore()
const querydoc = doc(querydb, "productos", id);
getDoc(querydoc).then(res => usedetail({id:res, ...res.data()}))
usedetail(false)
},[id])


  return (
    <div>
    {detail ?<ItemDetail data={detail} /> : <Spinner/>  } 
    </div>
  )
}

export default Detail