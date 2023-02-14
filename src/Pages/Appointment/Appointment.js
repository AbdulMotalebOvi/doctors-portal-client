import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png'
import chamber from '../../assets/images/chair.png'
import AppointmentCard from './AppointmentCard';
import { format } from 'date-fns';
import ApointmentModal from './ApointmentModal';
import { useQuery } from '@tanstack/react-query';

const Appointment = () => {
    const [selectedDate, setSelected] = useState(new Date())
    const date = format(selectedDate, 'PP')
    const [data, setData] = useState([])
    const myStyle = {
        backgroundImage:
            `url(${bg})`,
        width: '100%',
        height: 'auto',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    };
    const { data: appointmentTime = [], isLoading, refetch } = useQuery({
        queryKey: ['appointmentsTime', date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-pi-cyan.vercel.app/v2/appointmentOptions?date=${date}`)
            const data = await res.json()
            return data
        }
    })
    return (
        <section className='my-20'>
            <div style={myStyle} className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chamber} className="w-1/2 rounded-lg" alt='' />
                    <div className='mr-6'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelected}
                        />
                    </div>
                </div>
            </div>
            <div className='text-center my-14'>
                <AppointmentCard
                    selectedDate={selectedDate}
                    modalData={setData}
                    isLoading={isLoading}
                    appointmentTime={appointmentTime}
                ></AppointmentCard>
            </div>
            <div>
                {
                    data &&
                    <ApointmentModal
                        modalData={data}
                        selectedDate={selectedDate}
                        refetch={refetch}
                    ></ApointmentModal>
                }
            </div>
        </section>
    );
};

export default Appointment;