import React from 'react';

const SingleReviews = ({ reviews }) => {
    const { title, Desc, image } = reviews
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body space-y-4">
                <p>{Desc}</p>
                <div className="card-actions items-center">
                    <div className="avatar mx-3">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-3">
                            <img src={image} alt='' />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{title}</h2>
                        <span className='text-[14px]'>USA</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReviews;