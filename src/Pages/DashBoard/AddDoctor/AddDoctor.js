import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { InfinitySpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';



const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgbb = process.env.REACT_APP_IMGBB_SECRET_KEY;
    const navigate = useNavigate()

    const { data: specialty = [], isLoading } = useQuery({
        queryKey: ['specailties'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-pi-cyan.vercel.app/appointmentSpecialty')
            const data = await res.json()
            return data
        }
    })
    const addUser = (data) => {
        // const { email, password } = data
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?&key=${imgbb}`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then((result) => {
                if (result.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialties,
                        image: result.data.url

                    }
                    fetch('https://doctors-portal-server-pi-cyan.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success(`${data.name}is added successfully`)
                            navigate('/dashboard/manageDoctors')
                        })
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }
    if (isLoading) {
        return <div style={{ margin: '0 , auto' }}><InfinitySpin> </InfinitySpin></div>
    }

    return (
        <div>
            <h1 className='text-2xl'>Add a new doctor</h1>
            <div className='w-1/2 p-7'>
                <form onSubmit={handleSubmit(addUser)}>

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
                        <div className=''>
                            <label className="label">
                                <span className="label-text">Specialty</span>
                            </label>
                            <select className="select select-bordered w-full "
                                {...register('specialties')}
                            >

                                {
                                    specialty?.map(sp => <option key={sp._id} value={sp.name}>{sp.name} </option>)
                                }

                            </select>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Choose Your photo</span>
                            </label>
                            <div className="form-control w-full max-w-xs  border p-8 ">

                                <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: 'Photo is required' })} />

                                {errors.image &&
                                    <p className='text-red-500 font-semibold'>{errors.image?.message}</p>}

                            </div>
                        </div>
                    </div>
                    <input type="submit" className='mt-4 btn w-full ' value='add' />


                </form>
            </div>
        </div>
    );
};

export default AddDoctor;
