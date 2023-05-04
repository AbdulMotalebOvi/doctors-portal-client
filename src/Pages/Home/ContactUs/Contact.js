import React from 'react';
import background from '../../../assets/images/appointment.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <div className='my-20 bg-cover bg-center' style={{ backgroundImage: `url(${background})` }}>
            <div className='py-10'>
                <div className='text-center'>
                    <p className='text-primary font-bold '>Contact Us</p>
                    <h1 className='text-4xl text-white'>Stay Connected With Us</h1>
                </div>
                <div className="card w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
                    <div className="form-control mb-4">
                        <input type="text" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control mb-4">
                        <input type="text" placeholder="Subject" className="input input-bordered" />
                    </div>
                    <div className="form-control mb-4">
                        <textarea className="textarea textarea-bordered h-24" placeholder="Your Message"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Contact;