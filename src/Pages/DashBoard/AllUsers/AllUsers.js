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
                <div className="min-w-full overflow-hidden overflow-x-scroll">
                    <table className="table-auto min-w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Admin</th>
                                <th className="px-4 py-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((bk, i) => (
                                <tr key={i} className="hover">
                                    <td className="border px-4 py-2">{i + 1}</td>
                                    <td className="border px-4 py-2">{bk.name}</td>
                                    <td className="border px-4 py-2">{bk.email}</td>
                                    <td className="border px-4 py-2">{bk?.role !== 'admin' && <button className='btn btn-accent text-white' onClick={() => handlerToMakeAdmin(bk?._id)}>Make Admin</button>}</td>
                                    <td className="border px-4 py-2"><button className="btn btn-error text-white" onClick={() => handlerToDeleteUser(bk._id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default AllUsers;