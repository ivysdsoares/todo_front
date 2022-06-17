import { DotsHorizontalIcon } from "@heroicons/react/solid";
import React from "react";
import "./styles.css";

import { SearchIcon } from "@heroicons/react/outline";
import Form from "Components/Form";
import { Link } from "react-router-dom";
import Components from "./Components";

function Dashboard() {
    const array = [
        1, 2, 4, 56, 724, 824, 90, 9877, 89, 87, 62347, 82467, 65, 7842457, 76,
        698707, 953, 9098776, 78090, 7, 6, 789, 0, 8247, 6, 7248, 8, 7
    ];
    return (
        <div className="flex flex-col overflow-visible sm:overflow-auto items-stretch justify-start h-full max-h-full  sm:flex-row ">
            <div className="h-full flex flex-col justify-start items-stretch p-4 pt-0 overflow-scroll max-h-full sm:max-w-1/2 min-h-52 bg-form shadow-elevation rounded-xl">
                <div className="sticky z-10 top-0 flex flex-col items-stretch pt-4 border-b  border-border bg-form">
                    <p className="px-4 text-2xl font-semibold ">Active Tasks</p>
                    <div className="flex items-center px-4 py-2 rounded-xl ">
                        <div className="flex flex-1 p-2 px-4 duration-200 border-b-2 rounded-lg focus-within:text-primary focus-within:border-primary bg-neutral text-subtitle border-border">
                            <SearchIcon className="w-5 " />
                            <div className="w-2" />{" "}
                            <input className="flex-1 bg-transparent outline-none text-title" />
                        </div>
                        {/* <div className="w-2" /> */}
                        {/* <button className="p-2 duration-200  outline-none text-placeholder hover:bg-neutral hover:text-primary hover:shadow focus-visible:bg-neutral focus-visible:text-primary focus-visible:shadow active:brightness-90">
                            <SortAscendingIcon className="w-6" />
                        </button> */}
                    </div>
                </div>
                <div className="flex flex-col static items-stretch justify-start space-y-4 p-4 b-10  rounded-xl">
                    {array.map((item, index) => (
                        <Components.Task
                            // eslint-disable-next-line react/no-array-index-key
                            key={item + index}
                            color={index}
                            title="SERATO LINDO DEMAIS CORPO DE COIXINHA"
                            description="A bae sdsjasd asd asd asd asdasfasfag asgadasdasd asgagsagafafef safafea asfsfagsf"
                            id={index}
                            expiration_date={new Date().toISOString()}
                            onCancel={() => {}}
                            onConfirm={() => {}}
                            loading={false}
                            active
                        />
                    ))}
                </div>
            </div>
            <div className="w-4 h-4" />
            <div className="shadow-elevation flex bg-form top-1/2 rounded-xl p-4">
                <div className="flex flex-col">
                    <p className="px-4 text-2xl font-semibold ">Stats</p>
                    <div className="h-2" />
                    <div className="flex justify-start items-center">
                        <div className="bg-gradient-to-tl from-blue to-blue_text w-3 h-3 rounded-full flex justify-center items-center">
                            <div className="bg-form h-1 w- h-2 w-2 rounded-full" />
                        </div>
                        <p className="pl-2 flex-1 font-semibold text-subtitle">
                            OnGoing:
                        </p>
                        <p className="font-bold text-title">10</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <div className="bg-gradient-to-tl from-green to-green_text w-3 h-3 rounded-full flex justify-center items-center">
                            <div className="bg-form h-2 w-2 rounded-full" />
                        </div>
                        <p className="pl-2 flex-1 font-semibold text-subtitle">
                            Completed:
                        </p>
                        <p className="font-bold text-title">10</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <div className="bg-gradient-to-tl from-yellow to-yellow_text w-3 h-3 rounded-full flex justify-center items-center">
                            <div className="bg-form h-2 w-2 rounded-full" />
                        </div>
                        <p className="pl-2  flex-1 font-semibold text-subtitle">
                            Canceled:
                        </p>
                        <p className="font-bold text-title">10</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <div className="bg-gradient-to-tl from-red to-red_text w-3 h-3 rounded-full flex justify-center items-center">
                            <div className="bg-form h-2 w-2 rounded-full" />
                        </div>
                        <p className="pl-2 flex-1 font-semibold text-subtitle">
                            Expired:
                        </p>
                        <p className="font-bold text-title pl-2"> 10</p>
                    </div>
                </div>{" "}
            </div>
            <div className="w-4 h-4" />
            <div className="shadow-elevation flex flex-col h-96 flex bg-form top-1/2 rounded-xl p-4">
                <Link to="new-task">
                    <Form.GradientButton className="px-4" title="NOVA TAREFA" />{" "}
                </Link>
            </div>
        </div>
    );
}
export default Dashboard;
