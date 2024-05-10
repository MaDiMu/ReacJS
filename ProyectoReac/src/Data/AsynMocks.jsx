
export const productos =[{
    id: 1,
    nombre: "AIAIA Tm-2" ,
    precio: 550000,
    categoria: "auriculares",
    stock: 4,
    descripcion:"IAIA fue fundada en 2006 en Dinamarca, y es una de las empresas numero uno de disños de auriculares, para poder disfrutar en el trabajao colectivo o arriba de una cabina de modo profesional",
    img: "../../../img/Aiaiai_TMA-2_Move_03-Auwnr2Gj.jpg",
},
{
    id: 2,
    nombre: "Pioneer Hdj-Cue1",
    precio: 155000,
    categoria: "auriculares",
    stock: 3,
    descripcion: "Diseñados para DJ principiantes y entusiastas de la música profesional, los auriculares para DJ Pioneer HDJ-CUE1 brindan un sonido rico y un aspecto elegante. Fuera de la caja, vienen en un acabado plateado oscuro, pero se pueden personalizar en una variedad de detalles coloridos con la aplicación de cualquiera de los paquetes de accesorios disponibles por separado.",
    img:"../../../img/pioneerxdj.webp",
},
{id:3,
    nombre: "Allen & Heath Xone 96", 
    precio: 4800000,
    categoria: " MIXER ",
    stock: 3,
    descripcion: "Xone 96 es la más esperada renovación de la mítico mixer Xone 92, sin duda uno de los mejores mixers djs de la historia. Xone renueva su buque insignia, el mixer que utiliza medio planeta y que se ha ganado su fama demostrando en cada uso que puede retorcerse sin limites y sacar lo mejor de cada Dj.",
    img: '../../../img/xone96.jpg',
},
{id: 4,
    nombre: "Allen & Heath Xone K2",
    precio: 700000,
    categoria: "CONTROLADOR",
    stock: 1,
    descripcion:"Xone K2 es un controlador MIDI universal compacto y de línea delgada que incorpora una tarjeta de sonido de 4 canales para usar con cualquier software de DJ.",
    img:"../../../img/allen-and-heath-xone-k2.jpg"
},
{id:5,
    nombre: "Allen & Heath Xone 43",
    precio: 2000000,
    categoria:"MIXER",
    stock: 2,
    descripcion: "Creado para DJ y puristas de música electrónica, Xone: 43 es un mezclador de DJ de 4 + 1 canales que ofrece lo mejor de la calidad de audio analógico, incluido el legendario filtro Xone con control de resonancia, ecualizador de 3 bandas, crossfader con tres configuraciones de curva y X: FX para enviar / regresar a su unidad de FX favorita.",
    img:'../../../img/allen-and-heath-xone-43.jpg'}];

    export const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
            resolve(productos) ;  
            } ,2000);
        });
    };
    export const getProductsByCategory = (category) => {
        return new Promise((resolve)=>{
            const productosFiltrados = productos.filter((prod)=> prod.categoria === category);
            setTimeout(()=>{
                resolve(productosFiltrados);
            }, 2000);
        });
    };

    export const getProductById= (id) => {
        return new Promise((resolve)=>{
            const productosFiltrado = productos.find((prod)=>prod.id === parseInt(id));
            resolve(productosFiltrado);
        })
    }