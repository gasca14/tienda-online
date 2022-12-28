import { NavLink, Link } from 'react-router-dom'
import '../Navbar/Navbar.css'
import logo from '../../assets/images/perfume.png'
function Navbar() {
    return (
        <>
            <nav id='nav' className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
                <div className="container-fluid">
                    {/* <NavLink className="nav-link" to="/home">The parfum</NavLink> */}
                    <Link className="navbar-brand" to="/home">
                        <img id='log' src={logo} alt="img" />
                    </Link>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse collapse" id="navbarsExample05" style={{}}>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/iniciosesion">Iniciar sesion</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/catalogo">Catalogo</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           
        </>

    );
}

export default Navbar;