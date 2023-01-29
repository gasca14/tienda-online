import { useState, useEffect } from 'react';
import { getProfile } from '../../services/Auth';

function Perfil() {

    const [formulario, setFormulario] = useState({
        nombre: '',
        apellido: '',
        edad: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        getProfile().then((res) => {
            setFormulario(res.data);
        });
    }, []);

    const handleInputChange = (event) => {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log("enviando datos");

    }
    return (
        <div className="container mt-4">
            <form className="form-login" onSubmit={enviarDatos}>
                <h1 className="text-center mb-5">Informacion de la cuenta</h1>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control form-control-lg" id="nombre" onChange={handleInputChange} value={formulario.nombre} name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control form-control-lg" id="apellido" onChange={handleInputChange} value={formulario.apellido} name="apellido" />
                </div>
                <div className="mb-3">
                    <label htmlFor="edad" className="form-label">Edad</label>
                    <input type="number" className="form-control form-control-lg" id="edad" onChange={handleInputChange} value={formulario.edad} name="edad" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label form-label-lg">Email</label>
                    <input type="email" className="form-control form-control-lg" id="email" onChange={handleInputChange} value={formulario.email} name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label form-label-lg">Password</label>
                    <input type="password" className="form-control form-control-lg" id="password" onChange={handleInputChange} value={formulario.password} name="password" />
                </div>
            </form>
        </div>
    );
}

export default Perfil;