import Link from 'next/link';
import React from 'react';

const FriendCard = ({ FriendsData }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15 py-10 max-w-330 m-auto'>
            {
                FriendsData?.map(data => (
                    <Link href={`/home/${data.id}`} key={data.id} className='p-5  flex flex-col justify-center items-center rounded-xl  border border-[#d3d3d3] bg-white shadow-md cursor-pointer hover:shadow-2xl transition'>

                        
                        <img
                            src={data.picture}
                            alt={data.name}
                            className='w-27 h-28 rounded-full mx-auto'
                        />

                        
                        <h1 className='text-center text-2xl font-semibold mt-3'>
                            {data.name}
                        </h1>

                        <h4 className='text-center'><span className='text-xl'>{data.days_since_contact}</span><span className='text-[#767676]'>d ago</span> </h4>
                        
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

                        
                        <h4 className={` px-3 py-1.5 rounded-full mt-4 font-medium
                            ${data.status === "overdue" ? "text-white bg-[#EF4444]" : ""}
                            ${data.status === "almost due" ? "text-white bg-[#EFAD44]" : ""}
                            ${data.status === "on-track" ? "text-white bg-[#244D3F]" : ""}
                        `}>
                            {data.status}
                        </h4>

                    </Link>
                ))
            }
        </div>
    );
};

export default FriendCard;