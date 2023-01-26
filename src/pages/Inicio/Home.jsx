import '../../pages/Inicio/Home.css'
import port from '../../assets/images/feme.jpg'
import img from '../../assets/images/perfumes/dior.jpg'

function Home() {
    return (
        <>
            <div>
                <img id='portada' src={port} alt="portada" />
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img id='reference' src={img} alt="img" />
                    </div>
                    <div id='pres' className="col-md-6">
                        <h3>The parfum desde 1992</h3>
                        <p>Te ofrecemos la experiencia mas amplia en perfumeria, con mas de 30 anos de experiencia, nos encanta el trato a nuestros cleintes, pues son lo mas especial para nosotros, te ayudaremos a encontrar la fragancia indicada de acuerdo a tus necesidades, ya sea para uso de diario, para algun evento o dia especial, asi como si la necesitas para brindarsela como obsequio a esa personita especial!</p>
                        <p>Contamos con todas las marcas de perfumeria de la mas alta gama, nuestro sello nos distingue a lo largo de los anos y el tiempo y pasion que le dedicamos a nuestro negocio, asi como a nuestros clientes</p>
                        <p>Acercate a una de nuestras sucursales, o bien contactanoa a trabes de nuestro sitio web y redes sociales. sera un placer atenderte!</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <dic className="col-12">
                        <h3>Contacto</h3>

                        <p>Visitanos en nuestra sucursal ubicada en The parfum, San Luis Potosi, Lomas 4ta seccion #30.</p>
                    </dic>
                </div>
            </div>

        </>
    );
}

export default Home;    