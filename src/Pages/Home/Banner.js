import React from 'react';
import image from '../../assets/images/chair.png';
import banner from '../../assets/images/bg.png'


const Banner = () => {
    const myStyle = {
        backgroundImage: `url(${banner})`,
        width: '100%',
        height: '900px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div style={myStyle} className="my-20">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={image}
                        className="lg:w-1/2 sm:w-full rounded-lg shadow-2xl"
                        alt=""
                    />
                    <div>
                        <h1 className="text-5xl font-bold textColor">Your New Smile Starts Here</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                            et a id nisi.
                        </p>
                        <button className="btn bg-gradient-to-r from-primary to-secondary text-white border-0">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
          @media (max-width: 767px) {
            /* Small screens */
            .hero-content {
              flex-direction: column;
            }
            img {
              width: 100%;
              height: auto;
            }
          }
  
          @media (min-width: 768px) and (max-width: 1023px) {
            /* Medium screens */
            .hero-content {
              flex-direction: row;
            }
            img {
              width: 50%;
              height: auto;
            }
          }
  
          @media (min-width: 1024px) {
            /* Large screens */
            img {
              width: 50%;
              height: auto;
            }
          }
        `}</style>
        </div>
    );
};

export default Banner;
