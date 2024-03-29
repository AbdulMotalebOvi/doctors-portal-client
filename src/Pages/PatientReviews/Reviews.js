import React from 'react';
import patient1 from '../../assets/images/people1.png'
import patient2 from '../../assets/images/people2.png'
import patient3 from '../../assets/images/people3.png'
import SingleReviews from './SingleReviews';
import logo from '../../assets/icons/quote.svg'

const Reviews = () => {
    const reviewsData = [
        {
            id: 1,
            title: "Winson Herry",
            Desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: patient1
        },
        {
            id: 2,
            title: "Winson Herry",
            Desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: patient2
        },
        {
            id: 3,
            title: "Winson Herry",
            Desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: patient3
        },

    ]
    return (
        <div className='my-20'>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <div>
                    <p className='text-primary font-bold'>Testimonial</p>
                    <h1 className='text-4xl'>What Our Patients Say</h1>
                </div>

                <img src={logo} alt="" className='w-48 lg:w-64' />
            </div>

            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 mt-10'>
                {reviewsData.map(re => <SingleReviews key={re.id} reviews={re} />)}
            </div>
        </div>

    );
};

export default Reviews;