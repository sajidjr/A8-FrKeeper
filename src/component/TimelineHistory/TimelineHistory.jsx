import React from 'react';
import { IoMdCall } from "react-icons/io";
import { BsChatText } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const TimelineHistory = ({item}) => {
    const renderIcon = (type) => {
        switch (type) {
            case "call" :
                return <IoMdCall  />;

            case "text" :
                return <BsChatText />;
                
            case "video" :
                return <FaVideo />;
            
            default:
                return null;

        }
    }

    return (
        <div>
            

            <div className='border p-4 my-5 border-[#d5d5d5] rounded-xl shadow-md bg-white flex  justify-between'>

                <div className='flex flex-wrap gap-3 items-center'>
                    <h1 className='font-extrabold text-3xl sm:text-5xl'>{renderIcon(item.type)}</h1>

                   <div>
                        <div className='flex gap-1 items-center'>
                            <h2 className='text-2xl'>{item.type}</h2>
                            <h3 className='text-[18px]'>with: {item.name}</h3>
                        </div>

                        <p className='font-semibold'>{new Date(item.time).toLocaleString()}</p>
                        
                   </div>

                </div>
                <button className='hidden sm:flex justify-center items-center text-3xl px-3 shadow-sm border border-[#cecdcd] bg-base-300 rounded-xl text-red-400 cursor-pointer hover:bg-red-200 hover:shadow-xl'><RiDeleteBin6Fill /></button>
                
            </div>
        </div>
    );
};

export default TimelineHistory;