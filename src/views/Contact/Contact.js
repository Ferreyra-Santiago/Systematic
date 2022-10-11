  import React, {useState} from 'react'
  import { collection, addDoc } from "firebase/firestore";
  import { db } from "../../components/FireBase/FireBaseConfig";
  const Contact = () => {



const initialState = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
};


    const [data, setData] = useState(initialState);
    const [orderID, setOrderID] = useState("");
    const handleOnChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value});
    };
    const onSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "Mensaje"), {
        data,

    });

    setOrderID(docRef.id);
    setData(initialState);
    };
  return (
    <div>
             <h1 className='text-gray-700 font-bold text-2xl  m-auto mt-12  w-96 hover:text-gray-900 hover:cursor-pointer'>Ponte en contacto con nosotros </h1>
      <div className='m-auto'>
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={onSubmit}>
          <div className="mb-5">
            <label
              for="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-5">
            <label
              for="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Apellido
            </label>
            <input
              type="text"
              name="apellido"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={handleOnChange}
            />
            
            <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                <label
                    for="dni"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    onChange={handleOnChange}
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
                    onChange={handleOnChange}
                />
                </div>
            </div>
            </div>
            <label
                    for="telefono"
                    className="mb-3 block text-base font-medium text-[#07074D]">
                    Mensaje
                </label>
            <textarea
              rows="4"
              name="mensaje"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={handleOnChange}
            ></textarea>
          </div>
          <div>
            <button
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
    {orderID ? <h1 className="m-auto text-gray-700 font-bold text-2xl mb-3 w-96">Muchas gracias por tu mensaje pronto nos estaremos poniendo en Contacto: {orderID}</h1> : <></>}
    </div>
    </div>

  )
}

export default Contact