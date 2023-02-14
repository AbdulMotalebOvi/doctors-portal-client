import React from 'react';
import Reviews from '../PatientReviews/Reviews';
import Banner from './Banner';
import Contact from './ContactUs/Contact';
import InfoCard from './InfoCards/InfoCard';
import MakeApp from './MakeAppointment/MakeApp';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <MakeApp></MakeApp>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;