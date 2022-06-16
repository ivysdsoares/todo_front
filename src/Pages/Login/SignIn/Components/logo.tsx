import React, { memo } from "react";
import { CalendarIcon } from "@heroicons/react/outline";
import "../Styles/styles.css";

function LogoComponent(): JSX.Element {
    return (
        <div className="flex flex-col items-center p-4 ">
            <h1 className="text-4xl font-bold text-center sm:text-6xl font-title h-fit gradient-text">
                Goal Getter
            </h1>
            <div className="flex-col items-center justify-center hidden py-2  sm:flex">
                <p className="text-lg font-semibold text-subtitle">
                    <b>Set</b> your goals.
                </p>

                <p className="text-lg font-semibold text-subtitle">
                    And get them <b>Done</b>.
                </p>
            </div>
            <div className="hidden  sm:flex gradient-svg">
                <CalendarIcon className="h-40 text-background" />
            </div>
        </div>
    );
}

const Logo = memo(LogoComponent);
export default Logo;
