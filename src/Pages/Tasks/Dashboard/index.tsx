import React from "react";

function Dashboard() {
    const array = [
        1, 2, 4, 56, 724, 824, 90, 9877, 89, 87, 62347, 82467, 65, 7842457, 76,
        698707, 953, 9098776, 78090, 7, 6, 789, 0, 8247, 6, 7248, 8, 7
    ];
    return (
        <div className="grid grid-cols-6 gap-6 flex-1">
            <div className="col-span-3 bg-form p-2  px-4 flex justify-start items-center h-40 rounded-xl overflow-x-auto">
                {array.map((item) => item)}
            </div>
            <div className="grid col-span-3 bg-form p-2 rounded-xl flex-1 " />
        </div>
    );
}
export default Dashboard;
