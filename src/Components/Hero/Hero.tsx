import React from "react";

import Heroimg from "../../assets/banner-main.png";
import Heorbg from '../../assets/bg-shadow.png'

const Hero = () => {
  return (
    <div className="max-w-330 mx-auto py-16 bg-cover bg-center rounded-3xl" style={{ backgroundImage: `url(${Heorbg})`, backgroundColor: '#050505' }}>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="">
            <img className="max-w-87 mx-auto" src={Heroimg} alt="Hero" />
            <h1 className="text-white text-4xl font-bold mt-6 mb-4 ">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-6 text-gray-100">Beyond Boundaries Beyond Limits.</p>
            <button className="btn btn-primary bg-[#E7FE29] text-black border-none outline-none">Claim Free Credit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
