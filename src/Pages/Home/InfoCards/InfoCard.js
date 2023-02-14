import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import Info from './Info';

const InfoCard = () => {
    const infoData = [
        {
            id: 1,
            title: "Opening Hours",
            Desc: "Lorem Ipsum is simply dummy text of the pri",
            background: ' bg-gradient-to-r from-primary to-secondary',
            icon: clock
        },
        {
            id: 2,
            title: "Visit our location",
            Desc: "Brooklyn, NY 10036, United States",
            background: 'bg-accent',
            icon: location
        },
        {
            id: 3,
            title: "Contact us now",
            Desc: "+000 123 456789",
            background: 'bg-gradient-to-r from-primary to-secondary',
            icon: phone
        },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 my-20'>
            {
                infoData.map(data => <Info key={data.id} card={data}></Info>)
            }
        </div>
    );
};

export default InfoCard;