import { getProduct } from '../../services/Product.services';
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({})
    useEffect(() => {
        // document.title = 'detalle-producto'
        getProduct(id).then((res) => {
            setProducto(res.data)
        })
    }, [id])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12" key={producto._id}>
                        <div className="card mt-4" >
                            <img src={producto.image} className="card-img-top" alt="perfum" />
                            <div className="card-body">
                                <h5 className="card-title">${producto.precio}.00</h5>
                                <h4 className="card-title">{producto.nombre}</h4>
                                <p className="card-text">{producto.descripcion}</p>
                                <Link className='btn btn-outline-primary d-grid'>Agregar Carrito</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalleProducto;