"use client";

import React, { useEffect, useState } from "react";
import { Pie, PieChart } from "recharts";
import { GoDotFill } from "react-icons/go";

const StatsPage = () => {
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("timeline")) || [];
        setTimeline(data);
    }, []);

    const getChartData = () => {
        const counts = {
            call: 0,
            text: 0,
            video: 0,
        };

        timeline.forEach((item) => {
            if (counts[item.type] !== undefined) {
                counts[item.type]++;
            }
        });

        return [
            { name: "Call", value: counts.call, fill: "#244D3F" },
            { name: "Text", value: counts.text, fill: "#10b981" },
            { name: "Video", value: counts.video, fill: "#f97316" },
        ];
    };

    const data = getChartData();

    return (
        <div className=" py-15 max-w-300 m-auto ">

            <h1 className="text-3xl sm:text-5xl font-extrabold">Friendship Analytics</h1>

            <div className="border border-[#d3d2d2]  my-6 p-4 shadow-md rounded-xl">
                <h1 className="text-2xl font-medium mb-10">By Interaction Type</h1>

                <div className=" flex flex-col justify-center items-center ">
                    {timeline.length === 0 ? (
                        <p className="text-2xl">No data available</p>
                    ) : (
                        <PieChart
                            style={{
                                width: "100%",
                                maxWidth: "400px",
                                aspectRatio: 1,
                            }}
                        >
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                cornerRadius="50%"   // 🔥 rounded ends
                                paddingAngle={3}     // 🔥 gap between slices
                                dataKey="value"
                            />
                        </PieChart>
                    )}

                    <div className="flex flex-wrap gap-3 mt-10 ">
                        <h4 className="flex justify-center items-center text-xl text-[#244D3F]"><span className="text-3xl"><GoDotFill /></span>Call</h4>

                        <h4 className="flex justify-center items-center text-xl text-[#10b981]"><span className="text-3xl"><GoDotFill /></span>Text</h4>

                        <h4 className="flex justify-center items-center text-xl text-[#f97316]"><span className="text-3xl"><GoDotFill /></span>Video</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;