import React, {useState, useEffect} from 'react'
import Spinner from '../Spinner/Spinner';
import ItemList from './ItemList/ItemList';
//firebase
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../FireBase/FireBaseConfig';

const ItemListContainer = ({greeting}) => {
  const [producto, setproducto] = useState([]);
  const[isLoading, setIsLoading] = useState(false)



  const getProduct = async () =>{
    const q = query(collection(db, "productos"))
    const docs = []

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({...doc.data(), id: doc.id})
      });
      setproducto(docs)
  }

  useEffect(()=>{
    setIsLoading(true) 

    getProduct();

  }, []);           
  setTimeout(()=>{
    setIsLoading(false)
  },1000)

        

  return (
    <div>
      <h2 className='text-4xl text-center ml-4 underline font-serif'>{greeting}</h2>
      <div>
        {
          isLoading ? <Spinner/> : 
            <ItemList producto={producto}/>
        }
    </div>
    </div>
    )
}

export default ItemListContainer