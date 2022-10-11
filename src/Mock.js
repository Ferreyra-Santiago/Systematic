const Productos = [
    {
        id:1,
        nombre:"Micro AMD Ryzen 5 3600 4.2 Ghz AM4",
        img:"https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000147BOX_800.jpg", 
        descripcion:"Modelo	Micro AMD Ryzen 5 3600 4.2 GHz AM4 Familia	AMD Ryzen 5 Nucleos	6 Hilos	12 Frecuencia	3.6 GHz Frecuencia Turbo	4.2 GHz Proceso de Fabricacion	7 Nm Grafica Integrada	No Socket	AM4",
        precio:"$29.879",
        categoria:"procesador" 
    },
    {
        id:2,
        nombre:"Disco Solido SSD 256GB Gigabyte M.2 NVMe PCIe x4 3.0",
        img:"https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/GP-GSM2NE3256GNTD_800.jpg",
        descripcion:"Capacidad 	256 GB Dimensiones 	80 mm x 22 mm x 2.3 mm Conector 	PCIe Gen 3 x4 Vida Util 1.500.000 Millones de horas",
        precio:"$6.547",
        categoria:"almacenamiento"
    },
    {
        id:3,
        nombre:"Placa de Video Gigabyte Nvidia Geforce RTX 3060 GAMING OC 12GB",
        img:"https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/GV-N3060GAMING-OC-12GD_800.jpg",
        descripcion:"Tipo de Conexion	PCI Express 4.0 Chipset GPU	RTX 3060 Ti Producto LHR	Low Hash Rate Salidas HDMI	1 Salidas DVI	No Salidas DisplayPort	3",
        precio:"$102.013",
        categoria:"placa de video"
    },
    {
        id:4,
        nombre:"Monitor LED CURVO 24 Samsung Odyssey CRG5 G50 144Hz Freesync",
        img:"https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/LC24RG50FZLCZB_800.jpg",
        descripcion:"Consumo	35W Resolucion Maxima	1920 x 1080 Tiempo de respuesta	4ms Cantidad de colores	16.7 millones de colores Frecuencia Maxima	144 Hz",
        precio:"$73.696",
        categoria:"monitores"
    },
    {
        id:5,
        nombre:"Monitor LED 28 Gaming Gigabyte M28U-SA UHD 144Hz 1Ms IPS Freesync",
        img:"https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/M28U-SA_800.jpg", 
        descripcion:"Consumo	115W Resolucion Maxima	3840 x 2160 Tiempo de respuesta	1ms Cantidad de colores	16.7 millones de colores    Frecuencia Maxima	144 Hz",
        precio:"$216.799",
        categoria:"monitores"
    },
    {
        id:5,
        nombre:"Micro Intel I5-10400 4.3Ghz 12Mb S.1200",
        img:"https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BX8070110400_800.jpg", 
        descripcion:"Modelo	Micro Intel I5-10400 4.3 GHz Familia	Intel I5 Nucleos	6 Hilos	12 Frecuencia	2.9 GHz Frecuencia Turbo	4.3 GHz Proceso de Fabricacion	14 Nm Grafica Integrada	UHD 630 Socket	1200",
        precio:"$36.979",
        categoria:"procesador"
    }
]

export const getFetch = new Promise((resolve, reject) => {
    let url = "www.productos.com.ar";

    if(url === "www.productos.com.ar"){
        setTimeout(()=>{
            resolve(Productos);
        },1500);
    }else{
        reject("404 not found")
    }
})


export const getProductoById = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Productos.find(product => product.id === productId))
        }, 2000)
    })
  }


