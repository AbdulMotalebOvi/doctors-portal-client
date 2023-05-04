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
            const res = await fetch(url)

            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="my-4">
            <h1 className='text-2xl font-semibold mb-4 text-center'>My Appointment</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="hidden md:table-cell"></th>
                            <th className="text-left">Name</th>
                            <th className="text-left">Treatment</th>
                            <th className="text-left">Date</th>
                            <th className="text-left">Time</th>
                            <th className="text-left">Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings &&
                            bookings?.map((bk, i) => (
                                <tr className="hover" key={bk._id}>
                                    <td className="hidden md:table-cell">{i + 1}</td>
                                    <td>{bk.patientName}</td>
                                    <td>{bk.TreatmentName}</td>
                                    <td>{bk.appointmentDate}</td>
                                    <td>{bk.slot}</td>
                                    <td>
                                        {bk.price && !bk.paid ? (
                                            <Link to={`/dashboard/payment/${bk._id}`}>
                                                <button className="btn btn-primary text-white">Pay</button>
                                            </Link>
                                        ) : (
                                            bk.price && bk.paid && (
                                                <button className=" text-green-600">Paid</button>
                                            )
                                        )}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyAppointment;