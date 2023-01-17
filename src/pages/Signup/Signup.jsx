import React, { useState } from 'react';
import { registerService } from '../../services/Auth';
// import img from '../../assets/images/man.jpg'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [typeForm, setTypeForm] = useState('signup');
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        edad: '',
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
        // console.log(form);
        // if (typeForm === 'signup') {
            registerService(form)
                .then(response => {
                    console.log(response);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Mensaje:',
                        text: 'Usuario agregado correctamente!',
                        showConfirmButton: false,
                        timer: 1500
                      }).then(()=>{
                            navigate('/signin')
                      })
                })
                .catch(error => {
                    console.log(error);
                    Swal.fire({
                        position: 'top-center',
                        icon: 'info',
                        title: 'Mensaje:',
                        text: 'Usuario o correo ya existentes!',
                        showConfirmButton: false,
                        timer: 1700
                    })
                })
    }

    const showSignIn = () => {
        setTypeForm('signin');
    };

   

    return (
        <>
            {/* <div>
                <img id='img' src={img} alt="portada" />
            </div> */}
            <div className="mt-5 d-flex justify-content-center align-items-center vh-90">
                <div className="bg-white p-5 rounded-5 text-success shadow " style={{ width: '25rem' }}>

                    <div className='text-center fs-1 fw-bold text-coffe'>
                        <h1>Sign Up</h1>
                    </div>
                    <form onSubmit={saveData}>
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
                            Sign Up
                        </button>
                    </form>

                    {typeForm === 'signup' &&
                        <div className="d-flex gap-1 justify-content-center mt-1">
                            <div>¿Ya tienes cuenta?</div>
                            <Link to='/signin' className="signup" onClick={showSignIn}>SignIn</Link>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Signup;


//     return (
//         <>
//             <div>
//                 <img id='img' src={img} alt="portada" />
//             </div>
//             <div className="mt-5 d-flex justify-content-center align-items-center vh-90">
//                 <div className="bg-white p-5 rounded-5 text-success shadow " style={{ width: '25rem' }}>

//                     <div className='text-center fs-1 fw-bold text-coffe'>
//                         <h1>Sign Up</h1>
//                     </div>
//                     <form onSubmit={saveData}>
                        
//                                 <div className="mb-3">
//                                     <label htmlFor="nombre" className="form-label">Nombre</label>
//                                     <input type="text" className="form-control" name="nombre" placeholder='Ingresa tu nombre' required onChange={handleInputChange} />
//                                 </div>

//                                 <div className="mb-3">
//                                     <label htmlFor="apellido" className="form-label">Apellido</label>
//                                     <input type="text" className="form-control" name="apellido" placeholder='Ingresa tu apellido' required onChange={handleInputChange} />
//                                 </div>

//                                 <div className="mb-3">
//                                     <label htmlFor="edad" className="form-label">Edad</label>
//                                     <input type="number" className="form-control" name="edad" placeholder='Ingresa tu edad' required onChange={handleInputChange} />
//                                 </div>

//                         <div className="mb-3">
//                             <label htmlFor="email" className="form-label">Email</label>
//                             <input type="email" className="form-control" name="email" placeholder='Ingresa tu email' required onChange={handleInputChange} />
//                         </div>

//                         <div className="mb-3">
//                             <label htmlFor="password" className="form-label">Password</label>
//                             <input type="password" className="form-control" name="password" placeholder='Ingresa tu password' required onChange={handleInputChange} />
//                         </div>
//                         <button
//                             type='submit'
//                             className='btn btn-success w-100 mt-4 fw-semibold shadow-sm'>
//                             {typeForm === 'signin' ? 'Sign In' : 'Sign Up'}
//                         </button>
//                     </form>
//                     {typeForm === 'signin' &&
//                         <div className="d-flex gap-1 justify-content-center mt-1">
//                             <div>¿No tienes cuenta?</div>
//                             <p className="signup" onClick={showSignUp}>Sign Up</p>
//                         </div>
//                     }

//                     {typeForm === 'signup' &&
//                         <div className="d-flex gap-1 justify-content-center mt-1">
//                             <div>¿Ya tienes cuenta?</div>
//                             <Link  className="signup" onClick={showSignIn}>Sign In</Link>
//                         </div>
//                     }
//                 </div>
//             </div>
//         </>
//     );
// export default Signup;