import '../Inicio/Home.css'
import port from '../../assets/images/feme.jpg'
import img from '../../assets/images/perfumes/dior.jpg'

function Home() {
    return (
        <>
             <div>
                <img id='portada' src={port} alt="portada" />
            </div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-6">
                        <img id='reference' src={img} alt="img" />
                    </div>
                    <div className="col-md-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia earum commodi doloribus animi culpa impedit ex delectus velit maiores! Quod, perferendis beatae fugiat quaerat consectetur ducimus perspiciatis minus! Sapiente!
                        Porro magni voluptatibus architecto cumque inventore optio officiis cum eum impedit omnis doloribus voluptatem doloremque repellat nemo obcaecati, sunt minus, consequatur maxime autem voluptatum? Quo sapiente possimus fugiat aspernatur. Quis?
                        Quia modi voluptate deleniti ipsam, atque voluptatibus nesciunt at, iste distinctio voluptas deserunt nisi officia soluta non itaque repellat enim ad, in quae fugiat laborum. Similique maxime doloribus doloremque perspiciatis.
                        Nostrum inventore exercitationem obcaecati, ipsum dignissimos odit consectetur accusantium impedit molestias nam sunt assumenda harum veritatis recusandae! Tempora in tempore, illo similique doloremque fugit dolorum laudantium velit amet inventore sunt.
                        Aliquam deserunt laudantium pariatur ipsum error natus, culpa, quo nisi quam iusto cumque facilis excepturi tempora libero ad velit. Architecto deserunt iure ducimus deleniti quo officia placeat vel non nam!
                        Obcaecati exercitationem autem tempora adipisci laborum, dolorum corrupti fugit fugiat nam placeat mollitia molestias temporibus quibusdam. Consequatur laudantium tempora quidem dolores inventore vel nemo dolor sapiente cum? Obcaecati, consectetur sunt.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;    