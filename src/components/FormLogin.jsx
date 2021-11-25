import React from 'react'
import { useForm } from 'react-hook-form'


const FormLogin = ({login}) => {

    const {register, formState: { errors } , handleSubmit} = useForm();

    const onSubmit = (dataUser, e) => {
        console.log(dataUser);
        login(dataUser)
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Username</label>
                <input name='username' type="text" autoComplete='username' className="form-control" aria-describedby="emailHelp"
                {...register('username', {
                    required: {
                        value: true, 
                        message: 'Username is required'
                        }, 
                })} />
                <span className="text-danger text-small d-block mb-2">{errors.username && errors.username.message}</span>
            </div>
            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" autoComplete='current-password' id="inputPassword" 
                {...register('password', {
                    required: {
                        value: true, 
                        message: 'Password is required'
                        }, 
                    minLength: {
                        value: 6, 
                        message: 'Mínimo 6 carácteres'
                        }
                })}/>
                <span className="text-danger text-small d-block mb-2">{errors.password && errors.password.message}</span>
            </div>
            <div className='d-flex justify-content-center'>
                <button name='password' type="submit" className="btn btn-login">Login</button>
            </div>
            
        </form>
    )
}

export default FormLogin
