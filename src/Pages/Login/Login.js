import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContexr';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { logIn } = useContext(AuthContext)
    const [userLogin, setUserLogin] = useState('')
    const [token] = useToken(userLogin)
    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }
    const submit = data => {
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user
                toast.success('Login Successful')
                setUserLogin(data.email)

            })
            .catch(err => console.log(err))
    }


    return (
        <div className='my-20'>
            <div className='card w-96 bg-base-100 shadow-xl m-auto p-7'>
                <form onSubmit={handleSubmit(submit)} >
                    <h2 className='text-xl font-bold text-center'>Login</h2>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full " {...register("email", { required: true })} />

                        {errors.email?.type === 'required' && <p className='text-red-600 font-semibold'>Email is required</p>}

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' className="input input-bordered w-full " {...register("password",
                            {
                                required: true,
                                minLength: { value: 6, message: 'Password Must be At lest 6 characters or longer' }
                            }
                        )} />


                        {errors.password?.type === 'required' && <p className='text-red-600 font-semibold'>Password is required</p>}
                        <label className="label">
                            <span className="label-text text-[13px]">Forget Password?</span>
                        </label>

                    </div>
                    <input type="submit" className='mt-4 btn w-full ' />
                    <p className='text-[13px] mt-3'>New to doctor Portal? <Link className='text-secondary' to='/signup'>Create a New Account</Link></p>

                </form>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <div> <button className="btn btn-outline w-full ">CONTINUE WITH GOOGLE</button></div>
                </div>

            </div>
        </div >
    );
};

export default Login;