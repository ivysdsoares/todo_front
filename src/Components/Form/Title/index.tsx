import React from "react";
import { ITitle } from "../types";

function Title({ text }: ITitle) {
    return (
        <p className="text-2xl font-bold text-center sm:text-left  font-body text-title ">
            {text}
        </p>
    );
}

export default Title;
