import React from 'react'
import FormLogin from './FormLogin'
import axios from 'axios'
import { useNavigate } from 'react-router'



const Login = () => {

    const navigate = useNavigate();

    const login = (dataUser) => {
        axios.post('https://fakestoreapi.com/auth/login', dataUser).then((response)=>{
            if (response.data.token) {
                navigate('/productos', { replace: true })
            } else {
                console.log(response.data.msg);
            }
            })
        }   

    return (
        <FormLogin login={login} />
    )
}

export default Login
