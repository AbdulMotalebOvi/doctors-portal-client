import React from 'react';
import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCards/ServiceCard';
import Banner from './ServiceBanner/Banner';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            title: "Fluoride Treatment",
            Desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: flouride
        },
        {
            id: 2,
            title: "Cavity Filling",
            Desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: cavity
        },
        {
            id: 3,
            title: "Teeth Whitening",
            Desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: whitening
        },

    ]
    return (
        <div className='my-20'>
            <div className='text-center'>
                <p className='text-primary font-bold '>our Services</p>
                <h1 className=' text-4xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    servicesData.map(ser =>
                        <ServiceCard
                            key={ser.id}
                            service={ser}
                        ></ServiceCard>)
                }
            </div>
            <div className='my-20'>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Services;