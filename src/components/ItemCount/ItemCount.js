import React, {useState} from "react"



const ItemCount = ({stock, onAdd}) => {

    let [counter, setcounter]= useState(1)

    let add = () =>{
        if(counter < stock){
            setcounter(counter + 1)
        }else{
            alert("Stock Maximo")
            return
        }
    }

    
    let diminish = () =>{
        if(counter > 1){
            setcounter(counter - 1)
        }else{
            return
        }
    } 


 
    return (
<div>
<div className=" inline-flex  items-center">
    <button onClick={diminish} className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 12H4"
        />
        </svg>
    </button>
    <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
        {counter}
    </div>
    <button  onClick={add} className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
        />
        </svg>
    </button>
    </div>
    <div className="mt-3">
    <button className="inline-block px-6 py-2.5 bg-[#6f5cef] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#7c42e9] hover:shadow-lg focus:bg-bg-[#6f5cef] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#7c42e9] active:shadow-lg transition duration-150 ease-in-out" onClick={()=>onAdd(counter)}>Agregar</button>
    </div>
</div>
)
}

export default ItemCount