import { getProducts } from '../../services/Product.services';
import { useEffect, useState } from 'react'
import '../../pages/Catalogo/CatalogoPerfumes.css'
import { Link } from 'react-router-dom'
function CatalogoPerfumes() {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProducts().then((res) => {
            setProductos(res.data);
        })
    }, [])
    return (
        <>
            <div className="p-5 text-center">
                <div className="row">
                    {productos.map((producto) => {
                        return (
                            <div className="col-lg-3 col-md-6" key={producto._id}>
                                <div id='tarjeta' className="card mt-4" >
                                    <img id='tarjeta-img' src={producto.image} className="card-img-top" alt="perfum" />
                                    <div className="card-body">
                                        <h5 className="card-title">${producto.precio}.00</h5>
                                        <h4 className="">{producto.nombre}</h4>
                                        <p id='descrip' className="card-text">{producto.descripcion}</p>
                                        <Link to={`/detalleproducto/${producto._id}`} className="btn btn-outline-primary mb-2">Detalles</Link><br />
                                        <Link to={'/carrito'} className='btn btn-outline-success'>Agregar Carrito</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default CatalogoPerfumes;