import '../Footer/Footer.css'

import { Link} from 'react-router-dom';
function Footer() {
    return (
        <>
            <footer className="pie-pagina">
                <div>
                    <h3 className='footer'>Nosotros</h3>
                    <ul>
                        <li><Link className="nav-link active" to="/home" >Acerca de</Link></li>
                        <li><Link className="nav-link active" to="/notfound">Sucursales</Link></li>
                        <li><Link className="nav-link active" to="/catalogo">Promociones en sucursales</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='footer'>Servicio al cliente</h3>
                    <ul>
                        <li><Link className="nav-link active" to="/notfound">Contactanos</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='footer'>Legales</h3>
                    <ul>
                        <li><Link className="nav-link active" to="/notfound">Terminos y condiciones</Link></li>
                        <li><Link className="nav-link active" to="/notfound">Aviso de privacidad</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='footer'>Siguenos</h3>
                    <div className="red-social">
                        <a className="boton-e" href='https://www.facebook.com/' target='_blank' rel='noreferrer noopener'><i className="fa-brands fa-facebook"></i><p>Facebook</p></a>
                        <a className="boton-e" href='https://twitter.com/?lang=es' target='_blank' rel='noreferrer noopener'><i className="fa-brands fa-twitter"></i><p>Twitter</p></a>
                        <a className="boton-e" href='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'><i className="fa-brands fa-instagram"></i><p>Instagram</p></a>
                    </div>
                </div>
                <div className="derechos">
                    <small>© 2023 The parfum. Todos los derechos reservados. </small>
                </div>
            </footer>
        </>
    );
}

export default Footer;