import Banner from '@/component/Banner/Banner';
import Category from '@/component/Banner/Category';
import FriendCard from '@/component/FriendCard/FriendCard';
import React from 'react';
import { headers } from "next/headers";

const getData = async () => {

    const host = (await headers()).get("host");
    const protocol = host.includes("localhost") ? "http" : "https";

    const res = await fetch(`${protocol}://${host}/data.json`);

    return res.json();
}

const HomePage = async () => {

    const FriendsData = await getData();
    // console.log(data, 'data')
    return (
        <div  className=' bg-base-200 container m-auto pt-10'>
            
            <Banner></Banner>

            <Category></Category>

            <FriendCard FriendsData = {FriendsData}></FriendCard>

        </div>
    );
};

export default HomePage;