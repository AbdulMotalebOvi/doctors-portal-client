import React from 'react';
import banner from '../../../../assets/images/treatment.png'

const Banner = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner} className="w-full lg:w-[450px] h-auto lg:h-[570px] rounded-lg mx-auto lg:ml-12" alt='' />
                <div className='mx-6 lg:mx-10 mt-6 lg:mt-0'>
                    <h1 className="text-4xl lg:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 text-sm lg:text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="text-white btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>


    );
};

export default Banner;