import { Navigate, Routes, Route } from 'react-router-dom'
import Home from '../pages/Inicio/Home';
import Signin from '../pages/Signin/Signin';
import Signup from '../pages/Signup/Signup';
import CatalogoPerfumes from '../pages/Catalogo/CatalogoPerfumes';
import Carrito from '../pages/Carrito/Carrito';
import DetalleProducto from '../pages/DetalleProducto/DetalleProducto';
import Perfil from '../pages/Perfil/Perfil';
import NotFound from '../pages/NotFound/NotFound';

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/catalogo' element={<CatalogoPerfumes/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path='/detalleproducto/:id' element={<DetalleProducto/>}/>
                <Route path='/perfilusuario' element={<Perfil/>}/>
                <Route path='/notfound' element={<NotFound/>}/>

                <Route path='/' element={<Navigate to="/home"/>}/>
                <Route path='*' element={<Navigate to="/NotFound"/>}/>
            </Routes>
        </>
    );
}

export default AppRouter;