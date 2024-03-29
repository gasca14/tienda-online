import React, { useState } from 'react';
import { loginService } from '../../services/Auth';
import './Signin.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const [typeForm, setTypeForm] = useState(true);
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate()

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const saveData = (event) => {
        event.preventDefault();
        loginService(form)
            .then(response => {
                console.log(response);
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 1400,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Mensaje:',
                    text: 'Bienvenido!'
                  }).then(()=>{
                    navigate('/perfilusuario')
                  })

            })  
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: 'top-center',
                    icon: 'info',
                    title: 'Mensaje:',
                    text: 'Login incorrecto!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }


    const showSignUp = () => {
        setTypeForm(false);
    };


    return (
        <>
            {/* <div>
                <img id='img' src={img} alt="portada" />
            </div> */}
            <div className="container">
            <div id='formu' className="mt-5 d-flex justify-content-center align-items-center vh-90">
                <div className="bg-white p-5 rounded-5 text-success shadow " style={{ width: '25rem' }}>
                    <div className='text-center fs-1 fw-bold'>
                        <h1>{typeForm ? 'Sign In':'Sign Up'}</h1>
                    </div>
                    <form onSubmit={saveData}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" id='email' placeholder='Ingresa tu email' required onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='password' className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" id='password' placeholder='Ingresa tu password' required onChange={handleInputChange} />
                        </div>
                        <button
                            type='submit'
                            className='btn btn-outline-success w-100 mt-2 fw-semibold shadow-sm'>
                            Sign In
                        </button>
                    </form>
                    {typeForm === true &&
                        <div className="d-flex gap-2 justify-content-center mt-3">
                            <div>¿No tienes cuenta?</div>
                            <Link to='/signup' className="signup" onClick={showSignUp}>SignUp</Link>
                        </div>
                    }
                </div>
            </div>
            </div>
        </>
    );
}

export default Signin;