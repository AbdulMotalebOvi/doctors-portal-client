import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../Context/UseContexr';
import toast from 'react-hot-toast';

const ApointmentModal = ({ modalData, selectedDate, refetch }) => {
    const { name: TreatmentName, slots, price } = modalData;
    const { user } = useContext(AuthContext)
    const date = format(selectedDate, 'PP')
    const handlerToSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const date = form.date.value;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value
        const slot = form.slot.value
        const booking = {
            TreatmentName,
            patientName: name,
            email,
            appointmentDate: date,
            slot,
            number,
            price
        }
        fetch('https://doctors-portal-server-pi-cyan.vercel.app/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Booking Confirmed')
                    refetch()

                }
                else {
                    toast.error(data.message)
                }
            })
    }
    return (

        <div>
            <input type="checkbox" id="make-appointment" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="make-appointment" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{TreatmentName}</h3>
                    <form onSubmit={handlerToSubmit} className='mt-3 space-y-5'>
                        <input type="text" value={date} disabled
                            name='date'
                            className="input input-bordered w-full " />

                        <select name='slot' className="select select-bordered w-full ">

                            {
                                slots?.map((slot, i) => <option value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>


                        <input type="text"
                            name='name'
                            defaultValue={user?.displayName}
                            readOnly
                            placeholder="Full Name" className="input input-bordered w-full " />

                        <input type="number"
                            name='number'
                            placeholder="Phone" className="input input-bordered w-full " />
                        <input type="email"
                            name='email'
                            defaultValue={user?.email}
                            readOnly
                            placeholder="Your Email" className="input input-bordered w-full " />
                        <input className='btn w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ApointmentModal;