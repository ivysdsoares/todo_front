import React from "react";
import { ISubtitle } from "../types";

function Subtitle({ text }: ISubtitle) {
    return (
        <p className="text-base font-semibold text-center sm:text-left  font-body text-subtitle ">
            {text}
        </p>
    );
}

export default Subtitle;
