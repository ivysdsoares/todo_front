import React from "react";
import { TextProps } from "./.types.js";

export default function Text({
    name,
    label,
    value,
    readOnly,
    onChange,
    onBlur,
    error,
    password
}: TextProps): JSX.Element {
    // eslint-disable-next-line no-unneeded-ternary
    const [valueF, setValueF] = useState(value ? value : "");
    const id = useRef(idGen(10)).current;

    useEffect(() => {
        if (value !== valueF && value) {
            setValueF(value);
        }
    }, [value]);

    return (
        <div>
            <label>
                {label}
            </label>
                <input
                    disabled={disabled}
                    className=""
                    type={password ? "password" : "text"}
                    autoComplete="off"
                    value={valueF}
                    name={name}                   
                    onChange={(e) => {
                        onChange(e.target.value);
                        setValueF(e.target.value);
                    }}
                    id={id}
                    error={(!!error).toString()}
                />
            </div>
    );
}

Text.defaultProps = {
    label: "Placeholder",
    name: "",
    value: "",
    onChange: () => {},
    onBlur: () => {},
    readOnly: false,
    error: false,
    password: false
};