import React from 'react';
import background from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/remove.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const MakeApp = () => {
    const myStyle = {
        backgroundImage:
            `url(${background})`,
        width: '100%',
        height: 'auto',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className='my-[180px]'>
            <div className="hero " style={myStyle}>
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="rounded-lg w-full lg:w-1/2 -mt-[150px] lg:-mt-[50px]" alt='' />
                    <div className="mx-6 lg:mx-10 mt-6 lg:mt-0">
                        <div className='text-left text-white space-y-3'>
                            <p className='text-primary font-bold '>Appointment</p>
                            <h1 className='text-4xl lg:text-5xl'>Make an appointment Today</h1>
                            <p className="text-sm lg:text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <PrimaryButton>Appointment</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeApp;
