import React from 'react';

const Category = () => {
    return (
        <div className='flex flex-wrap justify-center items-center max-w-330 m-auto gap-8 py-13 sm:justify-between object-center'>

            <div className='flex flex-col justify-center border border-[#d3d3d3] items-center px-7 sm:px-15 py-10 rounded-xl bg-white shadow-md  cursor-pointer hover:shadow-2xl transition'>
                <h1 className='font-bold text-2xl'>8</h1>
                <p className=" text-[#656565] "> Total Friends</p>
            </div>

            <div className='flex flex-col justify-center border border-[#d3d3d3] items-center px-10  sm:px-20 py-10 rounded-xl bg-white shadow-md   cursor-pointer hover:shadow-2xl transition'>
                <h1 className='font-bold text-2xl'>3 </h1>
                <p className=" text-[#656565] "> On Track</p>
            </div>

            <div className='flex flex-col justify-center border border-[#d3d3d3] items-center px-7  sm:px-15 py-10 rounded-xl bg-white shadow-md   cursor-pointer hover:shadow-2xl transition'>
                <h1 className='font-bold text-2xl'>6 </h1>
                <p className=" text-[#656565] ">Need Attention </p>
            </div>

            <div className='flex flex-col justify-center border border-[#d3d3d3] items-center px-5  sm:px-10 py-10 rounded-xl bg-white shadow-md  cursor-pointer hover:shadow-2xl transition'>
                <h1 className='font-bold text-2xl'> 12</h1>
                <p className=" text-[#656565] ">Interactions This Month</p>
            </div>

        </div>
    );
};

export default Category;