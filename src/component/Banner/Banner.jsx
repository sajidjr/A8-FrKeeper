import React from 'react';
import { MdAdd } from "react-icons/md";

const Banner = () => {
    return (
        <div className=''>
            <div className="hero  ">

                <div className="hero-content text-center">

                    <div className=" max-w-180">

                        <h1 className="text-3xl  md:text-5xl font-bold">Friends to keep close in your life</h1>
                        <p className="py-6 text-[#656565] ">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>
                        <button className="btn bg-[#244D3F] text-white"><MdAdd></MdAdd>Add a Friend</button>

                    </div>

                </div>
            </div>

            <div>

            </div>
        </div>
    );
};

export default Banner;