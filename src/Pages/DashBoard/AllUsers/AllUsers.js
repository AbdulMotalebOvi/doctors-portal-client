import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(
        {
            queryKey: ['users'],
            queryFn: async () => {
                const res = await fetch('https://doctors-portal-server-pi-cyan.vercel.app/user')
                const data = await res.json()
                return data;

            }
        }
    )
    const handlerToMakeAdmin = id => {
        fetch(`https://doctors-portal-server-pi-cyan.vercel.app/user/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bareer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin Created Successful')
                    refetch()
                }

            })
    }
    const handlerToDeleteUser = id => {
        const proceed = window.confirm('Do you want to delete this user?')
        if (proceed) {
            fetch(`https://doctors-portal-server-pi-cyan.vercel.app/users/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('User deleted Successfully')
                        refetch()
                    }
                })
        }
    }
    return (
        <>
            <h1 className='text-2xl font-semibold my-4'>My Appointment</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((bk, i) => <tr key={i} className="hover">
                                <th>{i + 1}</th>
                                <td>{bk.name}</td>
                                <td>{bk.email}</td>
                                <td >{bk?.role !== 'admin' && <button className='btn btn-accent text-white' onClick={() => handlerToMakeAdmin(bk?._id)}>Make Admin</button>}</td>
                                <td>
                                    <button className="btn btn-error text-white" onClick={() => handlerToDeleteUser(bk._id)}>Delete</button></td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllUsers;