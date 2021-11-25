import React from 'react'
import FormLogin from './FormLogin'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import loginPng from '../assets/login.png'
import logo from '../assets/logo-ec.PNG'
import 'react-toastify/dist/ReactToastify.css';
import './login.css'



const Login = () => {

    const navigate = useNavigate();

    const login = (dataUser) => {
        axios.post('https://fakestoreapi.com/auth/login', dataUser).then((response)=>{
            if (response.data.token) {
                navigate('/productos', { replace: true })
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', dataUser.username)
            } else {
                toast.error(`${response.data.msg}`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored'
                    });
                navigate('/login', { replace: true })
            }
        })
    }   

    return (
        <>
            <div className='m-5' >
                <div className='row '>
                    <div className='col containerLogin'>
                        <div className='textLogin hide'>
                            <h4 >Your best option </h4> 
                            <h4>to buy online</h4>
                        </div>
                        <div className='containerImage'>
                           <img className='loginImg'   src={loginPng} alt="login" /> 
                        </div>
                    </div>
                    <div className='col containerForm'>
                        <img className='hide logo' src={logo} alt="logo" />
                        <FormLogin login={login} /> 
                    </div>
                </div>
                <ToastContainer />
            </div>
            
        </>
    )
}

export default Login
