import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "Store";

export default function ThemeProvider({
    children
}: {
    children: JSX.Element | JSX.Element[];
}): JSX.Element {
    const systemState = useAppSelector((state) => state.system);

    useEffect(() => {
        document.body.classList.value =
            "transition-colors ease-in-out duration-200";
        document.body.classList.add(`theme-${systemState.theme}`);
    }, [systemState]);

    return <>{children}</>;
}
