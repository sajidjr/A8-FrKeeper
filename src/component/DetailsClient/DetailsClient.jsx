"use client";
import React from 'react';
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsChatLeftDots } from "react-icons/bs";
import { LuVideo } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsArchive } from "react-icons/bs";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { toast } from 'react-toastify';


const handleAction = (type, friendId, name) => {
    const newEntry = {
        type, 
        friendId,
        name,
        time: new Date().toISOString()
    };

    const existing = JSON.parse(localStorage.getItem("timeline")) || [];
    existing.unshift(newEntry);

     if (existing.length > 20) {
        existing.pop();
    }

    localStorage.setItem("timeline", JSON.stringify(existing));

    if (type === "call") {
        toast.success(`Called ${name}`);
    }else if (type === "text") {
        toast.success(`Text with ${name}`);
    }else if (type === "video"){
        toast.success(`Video Call with ${name}`);
    }

};

const DetailsClient = ({data}) => {
    return (
        <div className='bg-base-200'>

            <div className='flex flex-wrap gap-5 max-w-280 m-auto justify-between py-20'>
            

                <div className='max-w-93'>

                    <div className='border space-y-2 border-[#d6d5d5] rounded-xl shadow-md flex flex-col justify-center items-center p-6'>

                        <img
                                src={data.picture}
                                alt={data.name}
                                className='w-27 h-28 rounded-full mx-auto'
                            />

                        <h1 className='text-3xl'>{data?.name}</h1>

                        <h4 className={` px-3 py-1.5 rounded-full mt-4 font-medium
                                ${data.status === "overdue" ? "text-white bg-[#EF4444]" : ""}
                                ${data.status === "almost due" ? "text-white bg-[#EFAD44]" : ""}
                                ${data.status === "on-track" ? "text-white bg-[#244D3F]" : ""}
                            `}>
                                {data.status}
                        </h4>

                        <div className='flex flex-wrap justify-center gap-2 mt-3'>
                            {
                                data.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className=' bg-[#CBFADB] text-[#244D3F] px-2 py-1 text-sm rounded-full mx-2'
                                    >
                                        {tag}
                                    </span>
                                ))
                            }
                        </div>

                        <h1 className=''>{data.bio}</h1>
                        <h2>{data.email}</h2>

                    </div>

                    <div className='flex flex-col space-y-2 mt-4'>

                        <button className='bg-white border border-[#cbcaca] flex justify-center items-center shadow-md p-4 font-bold rounded-xl cursor-pointer hover:shadow-2xl '><span className='pr-1'><RiNotificationSnoozeLine /></span>Snooze 2 weeks</button>

                        <button className='bg-white border border-[#cbcaca] flex justify-center items-center shadow-md p-4 font-bold rounded-xl cursor-pointer hover:shadow-2xl '><span className='font-extrabold pr-1'> <BsArchive /></span> Archive</button>

                        <button className='bg-white border border-[#cbcaca] flex justify-center items-center shadow-md p-4 font-bold rounded-xl text-red-400 cursor-pointer hover:shadow-2xl '> <span className='font-bold pr-1'><RiDeleteBinLine /></span> Delete</button>

                    </div>

                </div>

                    

                <div className='max-w-186 space-y-6'>
                    <div className='flex flex-wrap justify-between gap-5'>

                        <div className='border  border-[#d6d5d5] flex flex-col justify-center items-center px-6 py-6 rounded-xl shadow-md bg-white'>
                            <h1 className='text-3xl font-bold'>{data.days_since_contact}</h1>
                            <h3 className='text-xl text-[#6b6a6a]'>Days Since Contact</h3>
                            
                        </div>
                        
                        <div className='border border-[#d6d5d5] flex flex-col justify-center items-center px-12 py-6 rounded-xl shadow-md bg-white'>
                            <h1  className='text-3xl font-bold'>{data.goal}</h1>
                            <h3 className='text-xl text-[#6b6a6a]'>Goal (Days)</h3>

                        </div>
                        
                        <div className='border border-[#d6d5d5] flex flex-col justify-center items-center px-6 py-6 rounded-xl shadow-md bg-white'>
                            <h1 className='text-3xl font-bold'>{data.next_due_date}</h1>
                            <h3 className='text-xl text-[#6b6a6a]'>Next Due</h3>

                        </div>
                        
                    </div>

                    <div className='border border-[#d6d5d5] p-6 rounded-xl shadow-md bg-white'>
                        
                        <div className='flex justify-between mb-4'>
                            <h1 className='font-medium text-2xl'>Relationship Goal</h1>
                            <button>Edit</button>
                        </div>
                        <h2><span>Connect every </span>{data.goal}<span>days</span></h2>
                    </div>

                    <div className='p-6 bg-white rounded-xl shadow-md border border-[#d6d5d5]'>
                        <h1 className='text-xl font-medium'>Quick Check-In</h1>

                        <div className='flex flex-wrap justify-between my-4' >

                            <div 
                            onClick={() => handleAction("call", data.id, data.name)}
                            className='flex flex-col justify-center items-center border py-4 px-20 shadow-md rounded-xl bg-base-200  border-[#d6d5d5] cursor-pointer hover:shadow-2xl '>

                                <h1 className='text-4xl font-bold'><BiSolidPhoneCall /></h1>
                                <h1 className='text-xl'>Call</h1>

                            </div>

                            <div 
                            onClick={() => handleAction("text", data.id, data.name)}
                            className='flex flex-col justify-center items-center border py-4 px-20 shadow-md rounded-xl bg-base-200  border-[#d6d5d5] cursor-pointer hover:shadow-2xl '>

                                <h1 className='text-4xl font-bold'><BsChatLeftDots /></h1>
                                <h1 className='text-xl'>Text</h1>

                            </div>

                            <div 
                            onClick={() => handleAction("video", data.id, data.name)}
                            className='flex flex-col justify-center items-center border py-4 px-20 shadow-md rounded-xl bg-base-200  border-[#d6d5d5] cursor-pointer hover:shadow-2xl '>

                                <h1 className='text-4xl font-bold'><LuVideo /></h1>
                                <h1 className='text-xl'>Video</h1>

                            </div>
                        </div>

                    </div>

                    <div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsClient;