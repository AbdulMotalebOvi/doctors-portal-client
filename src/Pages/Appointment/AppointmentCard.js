import React from 'react';
import { format } from 'date-fns';
import Modal from './Modal';
import Loading from '../Loading/Loading';

const AppointmentCard = ({ selectedDate, modalData, isLoading, appointmentTime }) => {

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl text-secondary text-center'>Available Appointments on {format(selectedDate, 'PP')}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    appointmentTime.map(data => <Modal
                        key={data._id}
                        data={data}
                        modalData={modalData}

                    >

                    </Modal>)
                }
            </div>
        </div>
    );
};

export default AppointmentCard;