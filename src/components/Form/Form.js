import React, {useState} from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../components/FireBase/FireBaseConfig";



const initialState = {
    nombre: "",
    apellido: "",
    email: "",
    dni: "",
    telefono: "",
    calle: "",
    numero: "",
    codigoPostal: "",
    infoAdicional: "",
};

const Form = ({button, productoNombre, Cantidad, PagoTotal}) => {

    const [data, setData] = useState(initialState);
    const [orderID, setOrderID] = useState("");
    const handleOnChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value});
    };
    const onSubmit = async (e) => {
    e.preventDefault();


    const docRef = await addDoc(collection(db, "OrdenDeCompra"), {
        data,
        productoNombre,
        Cantidad,
        PagoTotal

    });

    setOrderID(docRef.id);
    setData(initialState);
    };
    return (

<div>
{orderID ? <h1 class="m-auto text-gray-700 font-bold text-2xl mb-3 w-96">Gracias por su compra! su id de transacción es: {orderID}</h1> : <div className="flex items-center justify-center p-12 ">
    <div className="mx-auto w-full max-w-[550px]">
    <form onSubmit={onSubmit} >
        <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
            <label
                for="nombre"
                className="mb-3 block text-base font-medium text-[#07074D]"
                >
                Nombre
                </label>
            <input
                type="text"
                name="nombre"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={data.nombre}
                onChange={handleOnChange}
                required
            />
            </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
            <label
                for="apellido"
                className="mb-3 block text-base font-medium text-[#07074D]"
                >
                Apellido
            </label>
            <input
                type="text"
                name="apellido"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={data.apellido}
                onChange={handleOnChange}
                required
            />
            </div>
        </div>
        </div>
        <div className="mb-5">
        <label
            for="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
        >
            Email
        </label>
        <input
            type="text"
            name="email"         
            placeholder="Email@gmail.com"
            min="0"
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={data.email}
            onChange={handleOnChange}
            required
            />
        </div>

        <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
            <label
                for="dni"
                className="mb-3 block text-base font-medium text-[#07074D]"
                >
                D.N.I
            </label>
            <input
                type="number"
                name="dni"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={data.dni}
                onChange={handleOnChange}
                required
            />
            </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
            <label
                for="telefono"
                className="mb-3 block text-base font-medium text-[#07074D]">
                Telefono
            </label>
            <input
                type="number"
                name="telefono"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={data.telefono}
                onChange={handleOnChange}
                required
            />
            </div>
        </div>
        </div>
        <div className="mb-5">
        <label
            for="calle"
            className="mb-3 block text-base font-medium text-[#07074D]">
            Calle
        </label>
        <input
            type="text"
            name="calle"        
            min="0"
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={data.calle}
            onChange={handleOnChange}
            required
            />
        </div>
        <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
            <label
                for="numero"
                className="mb-3 block text-base font-medium text-[#07074D]"
            >
                Numero
            </label>
            <input
                type="number"
                name="numero"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={data.numero}
                onChange={handleOnChange}
                required
            />
            </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
            <label
                for="codigoPostal"
                className="mb-3 block text-base font-medium text-[#07074D]">
                Codigo postal
            </label>
            <input
                type="number"
                name="codigoPostal"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={data.codigoPostal}
                onChange={handleOnChange}
                required
            />
            </div>
        </div>
        </div>
        <div className="mb-5">
        <label
            for="infoAdicional"
            className="mb-3 block text-base font-medium text-[#07074D]">
            Cosas a tener en Cuenta
        </label>
        <textarea
            rows="4"
            name="infoAdicional"
            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={data.infoAdicional}
            onChange={handleOnChange}
            required
            ></textarea>
        </div>

        <div>
        <button
        type='submit'
            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
            {button}
        </button>
        </div>
    </form>
    </div>
</div>
    }


</div>


)
}

export default Form