import React, { useState } from 'react';
import { loginService, registerService } from '../../services/Auth';
import '../InicioSesion/InicioSesion.css'

const InicioSesion = () => {
    const [typeForm, setTypeForm] = useState('signin');
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        edad: '',
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const saveData = (event) => {
        event.preventDefault();
        console.log(form);
        if (typeForm === 'signin') {

            loginService(form)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else {


            registerService(form)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    const showSignIn = () => {
        setTypeForm('signin');
    };

    const showSignUp = () => {
        setTypeForm('signup');
    };


    return (
        <div className="mt-5 d-flex justify-content-center align-items-center vh-100">
            <div className="bg-white p-5 rounded-5 text-secondary shadow" style={{ width: '25rem' }}>
                <div className="d-flex justify-content-center">
                    {/* <img src={logo} alt="logo-img" style={{ height: '15rem' }} /> */}
                </div>
                <div className='text-center fs-1 fw-bold text-coffe'>
                    <h1>{typeForm === 'signin' ? 'Sign In' : 'Signup'}</h1>
                </div>
                <form onSubmit={saveData}>
                    {typeForm === 'signup' &&
                        <>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" name="nombre" placeholder='Ingresa tu nombre' required onChange={handleInputChange} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="apellido" className="form-label">Apellido</label>
                                <input type="text" className="form-control" name="apellido" placeholder='Ingresa tu apellido' required onChange={handleInputChange} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="edad" className="form-label">Edad</label>
                                <input type="number" className="form-control" name="edad" placeholder='Ingresa tu edad' required onChange={handleInputChange} />
                            </div>
                        </>
                    }

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" placeholder='Ingresa tu email' required onChange={handleInputChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" placeholder='Ingresa tu password' required onChange={handleInputChange} />
                    </div>
                    <button
                        type='submit'
                        className='btn btn-success w-100 mt-4 fw-semibold shadow-sm'>
                        {typeForm === 'signin' ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>
                {typeForm === 'signin' &&
                    <div className="d-flex gap-1 justify-content-center mt-1">
                        <div>¿No tienes cuenta?</div>
                        <p className="signup" onClick={showSignUp}>Sign Up</p>
                    </div>
                }

                {typeForm === 'signup' &&
                    <div className="d-flex gap-1 justify-content-center mt-1">
                        <div>¿Ya tienes cuenta?</div>
                        <p className="signup" onClick={showSignIn}>Sign In</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default InicioSesion;