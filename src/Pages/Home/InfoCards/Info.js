import React from 'react';

const Info = ({ card }) => {
    const { title, Desc, background, icon } = card
    return (
        <div className={`card md:card-side w-full p-6 text-white  ${background} shadow-xl`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body ">
                <h2 className="card-title font-bold">{title}</h2>
                <p>{Desc}</p>

            </div>
        </div>
    );
};

export default Info;