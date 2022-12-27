import { Navigate, Routes, Route } from 'react-router-dom'
import Home from '../pages/Inicio/Home';
import InicioSesion from '../pages/InicioSesion/InicioSesion';
import CatalogoPerfumes from '../pages/Catalogo/CatalogoPerfumes';


function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/iniciosesion' element={<InicioSesion/>}/>
                <Route path='/catalogo' element={<CatalogoPerfumes/>}/>

                <Route path='/' element={<Navigate to="/home"/>}/>
                <Route path='*' element={<Navigate to="/NotFound"/>}/>

            </Routes>
        </>
    );
}

export default AppRouter;