import React from 'react';
import './modal.css'

const Modal = ({ data, modalData }) => {

    const { name, slots, price } = data
    return (
        <div className="card bg-base-100 shadow-xl mt-10 text-center">
            <div className="card-body">
                <h2 className="text-2xl text-secondary font-bold">{name}</h2>
                <p>{slots.length > 0 ? [slots[0]] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <p>${price}</p>
                <div className="card-actions justify-center ">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => modalData(data)}
                        htmlFor="make-appointment" className="btn btn-primary text-white"
                    >
                        Book Appointment
                    </label>
                </div>
            </div>

        </div>

    )
};

export default Modal;