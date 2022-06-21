import { DotsHorizontalIcon } from "@heroicons/react/solid";
import React from "react";
import "./styles.css";

import { SearchIcon } from "@heroicons/react/outline";
import Form from "Components/Form";
import { Link } from "react-router-dom";
import Components from "./Components";
import ListTasks from "./Components/ListTasks";

function Dashboard() {
    return (
        <div className="flex flex-col sm:overflow-visible sm:overflow-auto items-stretch justify-start h-full max-h-full  sm:flex-row ">
            <ListTasks />
            <div className="w-4 h-4" />
            <div className="shadow-elevation flex bg-form top-1/2 rounded-xl p-4">
                <div className="flex flex-col">
                    <p className="px-4 text-2xl font-semibold ">Stats</p>
                    <div className="h-2" />
                    <div className="flex justify-start items-center">
                        <div className="bg-gradient-to-tl from-blue to-blue_text w-2 h-2 rounded-full flex justify-center items-center" />
                        <p className="pl-2 flex-1 font-semibold text-subtitle">
                            OnGoing:
                        </p>
                        <p className="font-bold text-title">10</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <div className="bg-gradient-to-tl from-green to-green_text w-2 h-2 rounded-full flex justify-center items-center" />
                        <p className="pl-2 flex-1 font-semibold text-subtitle">
                            Completed:
                        </p>
                        <p className="font-bold text-title">10</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <div className="bg-gradient-to-tl from-yellow to-yellow_text w-2 h-2 rounded-full flex justify-center items-center" />
                        <p className="pl-2  flex-1 font-semibold text-subtitle">
                            Canceled:
                        </p>
                        <p className="font-bold text-title">10</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <div className="bg-gradient-to-tl from-red to-red_text w-2 h-2 rounded-full flex justify-center items-center" />
                        <p className="pl-2 flex-1 font-semibold text-subtitle">
                            Expired:
                        </p>
                        <p className="font-bold text-title pl-2"> 10</p>
                    </div>
                </div>{" "}
            </div>
            <div className="w-4 h-4" />
            <div className="shadow-elevation flex flex-col h-96 bg-form top-1/2 rounded-xl p-4">
                <Link to="new-task">
                    <Form.GradientButton className="px-4" title="NOVA TAREFA" />{" "}
                </Link>
            </div>
        </div>
    );
}
export default Dashboard;
