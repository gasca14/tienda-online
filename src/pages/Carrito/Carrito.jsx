import '../Carrito/Carrito.css'
import PaypalCheckoutButton from "../../components/PaypalCheckoutButton";
const Carrito = () => {
    return (
        <>  <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 mt-4">
                    {/* <PaypalCheckoutButton currency={"MXN"} amount={1} showSpinner={false} /> */}
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Resumen de compra:</h5>
                            <p id='resumen' className="card-text">Tenemos envios gratuitos, aprovecha y compra nuestros productos.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <p id='total'>Subtotal:<b>$4800.00</b></p>
                                    <p id='total'>Envio:<b><s>$100.00</s></b></p>
                                    <p id='total'>Total:<b> $4800.00</b></p>
                                </div>
                            </div>
                            <div className="text-center">
                                <PaypalCheckoutButton currency={"MXN"}
                                    amount={1}
                                    showSpinner={true} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mt-4">
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                    <div id='contenido' className="row g-0">
                        <div className="col-md-4">
                            <img id='car' src="https://ss701.liverpool.com.mx/xl/1109452498.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">$1400.00</h5>
                                <h4>Polo Red</h4>
                                <p className="card-text">Fragancia de hombre amaderada.</p>
                                <button className='btn btn-danger float-start'>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                    <div id='contenido' className="row g-0">
                        <div className="col-md-4">
                            <img id='car' src="https://ss701.liverpool.com.mx/xl/1109736461.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">$1700.00</h5>
                                <h4>Dior Savage</h4>
                                <p className="card-text">Fragancia de hombre con aroma embriagador.</p>
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                <button className='btn btn-danger float-start'>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                    <div id='contenido' className="row g-0">
                        <div className="col-md-4">
                            <img id='car' src="https://ss701.liverpool.com.mx/xl/1068402758.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">$1700.00</h5>
                                <h4>Coco Channel</h4>
                                <p className="card-text">Fragancia de mujer con un toque dulce.</p>
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                <button className='btn btn-danger float-start'>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Carrito;