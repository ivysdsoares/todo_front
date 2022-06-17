import { Transition } from "@headlessui/react";
import { PencilIcon } from "@heroicons/react/solid";
import React, { memo } from "react";

interface ITaskProps {
    id: number;
    title: string;
    description: string;
    expiration_date: string;
    color: number;
    onCancel: (id: number) => void;
    onConfirm: (id: number) => void;
    loading: boolean;
    active: boolean;
}
function getBorderColor(e: number) {
    switch (true) {
        case e % 2 === 0:
            return "border-red_text";
        case e % 3 === 0:
            return "border-green_text";
        case e % 5 === 0:
            return "border-blue_text";
        default:
            return "border-background";
    }
}

function TaskComponent({
    id,
    active,
    title,
    description,
    expiration_date,
    color,
    onCancel,
    onConfirm,
    loading
}: ITaskProps) {
    return (
        <Transition
            key={id}
            show={active}
            appear
            enter=" transform duration-1000"
            enterFrom="opacity-0  -translate-x-full "
            enterTo="opacity-100 opacity-0 -translate-x-0"
            leave="W transform duration-500 z-0"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full "
            className={`flex flex-col bg-menu shadow-card border-t-8 z-0 items-stretch  ${getBorderColor(
                color
            )} `}
            as="div"
        >
            <div className="px-6 pt-4 pb-0">
                <p className="font-bold">{title}</p>
                <p className="text-xs font-semibold text-placeholder">
                    Expires:{" "}
                    {new Date(expiration_date).toLocaleDateString("pt-BR")}
                </p>

                <p className="">{description}</p>
            </div>

            <div className="flex flex-col items-stretch p-4 pt-0">
                <div className="h-[1px] bg-border my-2" />
                <div className="flex items-center">
                    <button
                        type="button"
                        className="p-2 duration-200 rounded-full outline-none text-placeholder hover:bg-neutral hover:text-primary hover:shadow focus-visible:bg-neutral focus-visible:text-primary focus-visible:shadow active:brightness-90"
                    >
                        <PencilIcon className="w-5" />
                    </button>
                    <div className="flex-1" />
                    <button
                        onClick={() => onCancel(id)}
                        type="button"
                        className="p-2 font-semibold duration-200 rounded-sm outline-none hover:shadow focus-visible:bg-red focus-visible:text-red_text active:shadow-shadow-sm active:brightness-90 bg-neutral text-subtitle hover:bg-red hover:text-red_text"
                    >
                        GIVE UP ?
                    </button>
                    <div className="w-2" />
                    <button
                        onClick={() => onConfirm(id)}
                        type="button"
                        className="p-2 font-semibold duration-200 rounded-sm outline-none hover:shadow focus-visible:bg-green focus-visible:text-green_text active:shadow-shadow-sm active:brightness-90 bg-neutral text-subtitle hover:bg-green hover:text-green_text"
                    >
                        FINISH !
                    </button>
                </div>
            </div>
        </Transition>
    );
}

const Task = memo(TaskComponent);
export default Task;
