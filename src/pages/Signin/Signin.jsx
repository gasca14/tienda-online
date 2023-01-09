import React, { useState } from 'react';
import { loginService } from '../../services/Auth';
import './Signin.css'
import img from '../../assets/images/man.jpg'
import { Link } from 'react-router-dom';


const Signin = () => {
    const [typeForm, setTypeForm] = useState('signin');
    const [form, setForm] = useState({
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
        // console.log(form);
        if (typeForm === 'signin') {
            loginService(form)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }


    const showSignUp = () => {
        setTypeForm('signup');
    };


    return (
        <>
            <div>
                <img id='img' src={img} alt="portada" />
            </div>
            <div className="mt-5 d-flex justify-content-center align-items-center vh-90">
                <div className="bg-white p-5 rounded-5 text-success shadow " style={{ width: '25rem' }}>

                    <div className='text-center fs-1 fw-bold text-coffe'>
                        <h1>Sign In</h1>
                    </div>
                    <form onSubmit={saveData}>
                                
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
                            <Link to='/signup' className="signup" onClick={showSignUp}>Sign Up</Link>
                        </div>
                    }

                </div>
            </div>
        </>
    );
}

export default Signin;