import { NavLink} from 'react-router-dom'
import '../Navbar/Navbar.css'
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" aria-label="Fifth navbar example">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">The Parfum</a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse collapse" id="navbarsExample05" style={{}}>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Iniciar sesion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Crear cuenta</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Catalogo de perfumes</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>


    );
}

export default Navbar;