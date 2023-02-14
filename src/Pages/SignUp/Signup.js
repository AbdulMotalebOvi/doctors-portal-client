import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContexr';
import useToken from '../../hooks/useToken';


const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateInfo } = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState('')
    const [token] = useToken(userEmail)
    const navigate = useNavigate()
    if (token) {
        navigate('/')
    }
    const signUp = (data) => {
        const { email, password } = data
        createUser(email, password)
            .then(result => {
                const user = result.user
                updateInfo(data.name)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.log(err))
                toast.success('User Created Successfully')

            })
            .catch(err => console.log(err))
    }

    const saveUser = (name, email) => {
        const user = { name, email }
        fetch('https://doctors-portal-server-pi-cyan.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(data => {

                setUserEmail(email)


            }
            )
            .catch(err => console.log(err))
    }


    return (
        <div className='my-20'>
            <div className='card w-96 bg-base-100 shadow-xl m-auto p-7'>
                <form onSubmit={handleSubmit(signUp)}>
                    <h2 className='text-xl font-bold text-center'>SignUp</h2>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text' className="input input-bordered w-full "  {...register("name", { required: "Name is required" })} />

                        {errors.name && <p className='text-red-500 font-semibold'>{errors.name?.message}</p>}

                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input type='email' className="input input-bordered w-full "  {...register("email", { required: 'Email is required' })} />

                        {errors.email && <p className='text-red-500 font-semibold'>{errors.email?.message}</p>}

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password'  {...register("password", {
                            required: true,
                            minLength: {
                                value: 6, message: ' Password Should be at least 6 characters or longer'
                            }
                        })} className="input input-bordered w-full " />


                        {errors.password && <p className='text-red-500 font-semibold'>{errors.password?.message}</p>}


                        <label className="label">
                            <span className="label-text text-[13px]">Forget Password?</span>
                        </label>

                    </div>
                    <input type="submit" className='mt-4 btn w-full ' />
                    <p className='text-[13px] mt-3'>Already have an account? <Link className='text-secondary' to='/login'>Sign In</Link></p>

                </form>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <div> <button className="btn btn-outline w-full ">CONTINUE WITH GOOGLE</button></div>
                </div>

            </div>
        </div >
    );
};

export default Signup;