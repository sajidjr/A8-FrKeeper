import React from 'react';
import { headers } from "next/headers";
import DetailsClient from '@/component/DetailsClient/DetailsClient';





const getData = async () => {

    const host = (await headers()).get("host");
    const protocol = host.includes("localhost") ? "http" : "https";

    const res = await fetch(`${protocol}://${host}/data.json`);

    return res.json();
}

const DetailsPage = async ({params}) => {
    // console.log(params)
    const friendParams = await params;
    const friend = await getData();
    const data = friend.find(f => f.id === Number(friendParams.id));

    return <DetailsClient data= {data}></DetailsClient>
};

export default DetailsPage;