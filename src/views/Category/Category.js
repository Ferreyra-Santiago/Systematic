import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


import Item from '../../components/Item/Item';


import { db } from '../../components/FireBase/FireBaseConfig';

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from 'firebase/firestore';


const Category = () => {
    const [producto, setproducto] = useState([]);




	const { Categoria } = useParams();

	useEffect(() => {
		const getAlbums = async () => {
			const q = query(collection(db, 'productos'), where('categoria', '==', Categoria));
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setproducto(docs);
		};
		getAlbums();
	}, [Categoria]);

	return (
        <div>
        <div className="text-slate-800 justify-items-center grid grid-cols-5">
  <div className="list-none w-60">
    <h1 className="font-bold text-2xl border-b-2 p-2">productos</h1>
    <ul>
        <li className="p-1 font-semibold">
        <Link to="/Category/hoodies"> - Hoodies </Link>
        </li>
        <li className="p-1 font-semibold">
        <Link to="/Category/remera"> - Remeras </Link>
        </li>
        <li className="p-1 font-semibold">
        <Link to="/Category/pantalon"> - Pantalones </Link>
        </li>
        <li className="p-1 font-semibold">
        <Link to="/product"> - Todos los Productos </Link>
        </li>
    </ul>
    </div>
    <div className="flex flex-wrap col-span-4  ">
    {producto.map((data) => {
    return <Link to={`/detail/${data.id}`} className="p-6"><Item  data={data} /></Link>;
})
}
</div>
</div>
</div>
	);
};

export default Category;

