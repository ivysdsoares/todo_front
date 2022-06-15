import { JsxEmit } from "typescript";

interface ITextProps {
    name?: string;
    label: string;
    value: string;
    disabled: boolean;
    onChange: (params: string) => void;
    error: boolean | string;
    password: boolean;
}

interface IGradientButtonCommonProps {
    className: string;
    onClick:React.MouseEventHandler<HTMLButtonElement>;
  
}

type TGradientButtonConditionalProps=
|{children?:JSX.Element|JSX.Element[]}
|{title?:string};

type IGradientButtonProps = TGradientButtonConditionalProps & IGradientButtonCommonProps

export type {ITextProps,IGradientButtonProps}