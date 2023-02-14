import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UseContexr';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)
    const url = `https://doctors-portal-server-pi-cyan.vercel.app/booking?email=${user?.email}`
    const { data: bookings = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bareer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-2xl font-semibold my-4'>My Appointment</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((bk, i) => <tr className="hover">
                                <th>{i + 1}</th>
                                <td>{bk.patientName}</td>
                                <td>{bk.TreatmentName}</td>
                                <td>{bk.appointmentDate}</td>
                                <td>{bk.slot}</td>
                                <td>
                                    {bk.price && !bk.paid &&
                                        <Link to={`/dashboard/payment/${bk._id}`}>  <button className="btn btn-primary text-white">Pay</button>
                                        </Link>
                                    }
                                    {
                                        bk.price && bk.paid &&
                                        <button className=" text-green-600">Paid</button>
                                    }
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;