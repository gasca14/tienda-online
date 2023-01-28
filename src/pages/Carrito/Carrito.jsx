import '../Carrito/Carrito.css'
import PaypalCheckoutButton from "../../components/PaypalCheckoutButton";
const Carrito = () => {
    return (
        <>  <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <PaypalCheckoutButton currency={"MXN"} amount={1} showSpinner={false} />
                </div>
                <div className="col-6">
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://picsum.photos/300" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">$1200.00</h5>
                                <h4>Nautica</h4>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                <button className='btn btn-danger float-start'>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://picsum.photos/300" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">$1500.00</h5>
                                <h4>Dior</h4>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                <button className='btn btn-danger float-start'>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://picsum.photos/300" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">$1700.00</h5>
                                <h4>Channel</h4>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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