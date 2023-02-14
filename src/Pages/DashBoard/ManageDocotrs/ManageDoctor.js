
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { InfinitySpin } from 'react-loader-spinner';
import DeleteModal from '../DeleteModal/DeleteModal';

const ManageDoctor = () => {

    const [deleteModal, setDeleteModal] = useState(null)

    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctors-portal-server-pi-cyan.vercel.app/finDdoctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = res.json()
                return data
            }
            catch {

            }
        }
    })
    if (isLoading) {
        return <div style={{ margin: '0 , auto' }}><InfinitySpin> </InfinitySpin></div>
    }
    const handlerToDelete = id => {

        fetch(`https://doctors-portal-server-pi-cyan.vercel.app/dltdoctors/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0)
                    toast.success('Items deleted Successfully')
                refetch()
            })

    }
    const closeModal = () => {
        setDeleteModal(null)
    }
    return (
        <div>
            <h1 className='text-2xl font-bold my-3'>Manage Doctors: {doctors?.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr className='uppercase text-[#383838] font-semibold'>
                            <th>Numbers</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>SPECIALITY</th>
                            <th>aCTION</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors?.map((dr, index) =>
                                <tr key={index} className='text-[#898989]'>
                                    <th>
                                        <label>
                                            <h1>{index + 1}</h1>
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="rounded-full w-12 h-12">
                                                    <img src={dr?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-bold">{dr.name}</div>

                                        </div>
                                    </td>
                                    <td>
                                        {dr.specialty}

                                    </td>
                                    <td>
                                        <label htmlFor="confirmation-modal" className="btn btn-error text-white" onClick={() => setDeleteModal(dr)}>Action</label>
                                    </td>

                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
            {
                deleteModal &&
                <DeleteModal
                    title={`Are you sure you want to delete?`}
                    message={`If you Delete this ${deleteModal.name} & ${deleteModal.specialty} it cannot be recovery.`}
                    closeModal={closeModal}
                    handlerToDelete={handlerToDelete}
                    deleteModal={deleteModal}
                >

                </DeleteModal>
            }
        </div >
    );
};

export default ManageDoctor;