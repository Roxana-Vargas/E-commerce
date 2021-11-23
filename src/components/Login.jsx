import React from 'react'
import FormLogin from './FormLogin'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Login = () => {

    const navigate = useNavigate();

    const login = (dataUser) => {
        axios.post('https://fakestoreapi.com/auth/login', dataUser).then((response)=>{
            if (response.data.token) {
                navigate('/productos', { replace: true })
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', dataUser.username)
            } else {
                console.log(response.data.msg);
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
            }
        })
    }   

    return (
        <>
            <FormLogin login={login} />
            <ToastContainer />
        </>
    )
}

export default Login
