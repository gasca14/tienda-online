import img from '../../assets/images/error.jpg'
import '../../pages/NotFound/NotFound.css'
const NotFound = () => {
    return ( 
        <>  <div className="container">
            <div className='text-center mt-5'>
            <img id='error' src={img} alt="" />
            </div>
            </div>
        </>
     );
}
 
export default NotFound;