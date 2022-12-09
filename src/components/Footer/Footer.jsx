import '../Footer/Footer.css'

import { Link} from 'react-router-dom';
function Footer() {
    return (
        <>
            <footer className="pie-pagina">
                <div>
                    <h3>Nosotros</h3>
                    <ul>
                        <li><Link className="nav-link active" to="*" >Acerca de</Link></li>
                        <li><Link className="nav-link active" to="*">Sucursales</Link></li>
                        <li><Link className="nav-link active" to="*">Promociones en sucursales</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Servicio al cliente</h3>
                    <ul>
                        <li><Link className="nav-link active" to="*">Contactanos</Link></li>
                        <li><Link className="nav-link active" to="*">Reserva</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Legales</h3>
                    <ul>
                        <li><Link className="nav-link active" to="*">Terminos y condiciones</Link></li>
                        <li><Link className="nav-link active" to="*">Aviso de privacidad</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Siguenos</h3>
                    <div className="red-social">
                        <Link className="boton-e" to="*"><i class="fa-brands fa-facebook"></i><p>Facebook</p></Link>
                        <Link className="boton-e" to="*"><i class="fa-brands fa-whatsapp"></i><p>Whatsapp</p></Link>
                        <Link className="boton-e" to="*"><i class="fa-brands fa-instagram"></i><p>Instagram</p></Link>
                    </div>
                </div>
                <div className="derechos">
                    <small>© 2022 Loredo. Todos los derechos reservados. </small>
                </div>
            </footer>
        </>
    );
}

export default Footer;