import React from 'react';
import background from '../../../assets/images/appointment.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Contact = () => {
    const myStyle = {
        backgroundImage:
            `url(${background})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle} className='my-20'>
            <div className='py-10'>
                <div className='text-center'>
                    <p className='text-primary font-bold '>Contact Us</p>
                    <h1 className=' text-4xl text-white'>Stay Connected With Us</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm  mx-auto">
                    <div className="card-body">
                        <div className="form-control">

                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" placeholder="Subject" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <textarea className="textarea textarea-bordered h-24" placeholder="Your Message"></textarea>

                        </div>
                        <div className="form-control mt-6">
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;