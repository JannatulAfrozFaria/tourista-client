import React, { useContext, useEffect, useState } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaGoogle, FaGithub  } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Login = () => {
    useEffect(()=>{
        document.title = "Tourista | Login"
    },[])
    //state for error in password
    const [loginError,setLoginError] = useState('');
     //state for SUCCESSFUL LOGIN
     const [success,setSuccess] = useState('');

    const {logIn,signInWithGoogle,signInWithGitHub} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
   
    const handleLogin = e =>{
        e.preventDefault();
        // const email = e.target.email.value;
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(e.currentTarget);
        console.log(form.get('email'));
        console.log(form.get('password'));

        //reset error & success
        setLoginError('');
        setSuccess('');

        logIn(email,password)
            .then(result=>
                {console.log(result.user)
                    navigate(location.state? location.state : '/')
                    setSuccess('User Created Successfully!')
                    // alert('Logged in Successfully!')
                   Swal.fire({
                        title: 'Success',
                        text: 'Logged in Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                })
            .catch(error=>{
                console.error(error)
                setLoginError(error.message)
                // alert('Please input a valid email and password ')
                Swal.fire({
                    text: 'Please input a valid email and password',
                    icon: 'warning',
                    confirmButtonText: 'Close'
                  })
            })
    }

    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    const handleGitHubSignIn = () =>{
        signInWithGitHub()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div className='mx-10 md:mx-auto lg:mx-auto'>
            <div>
                <h2 data-aos="fade-left" data-aos-duration="2000" className="text-3xl text-center my-10 theme-color animate__animated animate__fadeInLeft animate__animated animate__backInUp animate__delay-1s">Please Login</h2>
            </div>
                 <form  data-aos="fade-up" data-aos-duration="3000" onSubmit={handleLogin} className='sm:w-1/2 md:w-3/4 lg:w-1/2 mx-auto  animate__animated animate__fadeInRight animate__animated animate__bounce animate__delay-1s'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn basic-btn text-center mt-4">Login</button>
                    </div>
                  </form>
                  <div className='text-center mt-2 font-semibold'>
                        {
                            loginError && <p className='text-red-800 '> {loginError} </p>
                        }
                        {
                            success && 
                            <div>
                                <p className='text-green-600'>{success} </p>
                                <ToastContainer/>
                            </div>
                        }
                  </div>
                <p className='text-center mt-4 animate__animated animate__flash animate__animated animate__backInUp animate__delay-1s '> Do not have an Account?  <Link  className='text-blue-600 font-bold' to="/register" >Register</Link>  </p>
                <div className='animate__animated animate__flash animate__animated animate__fadeInUp animate__delay-2s'>
                    <p className='text-center mt-2 theme-light'><button onClick={handleGoogleSignIn}  className='btn btn-ghost' > <FaGoogle></FaGoogle> Log in With Google</button></p>          
                    <p className='text-center mt-1 theme-light'><button onClick={handleGitHubSignIn}  className='btn btn-ghost' > <FaGithub></FaGithub> Log in With GitHub</button></p>    
                </div>      
        </div>
    );
};

export default Login;