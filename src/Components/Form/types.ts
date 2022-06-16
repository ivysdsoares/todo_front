
// TEXT INPUT
interface ITextProps {
    name?: string;
    label: string;
    value: string;
    disabled: boolean;
    onChange: (params: string) => void;
    error: boolean | string;
    password: boolean;
}

// GRADIENT BUTTON
interface IGradientButtonCommonProps {
    className: string;
    onClick:React.MouseEventHandler<HTMLButtonElement>;
  
}
type TGradientButtonConditionalProps=
|{children?:JSX.Element|JSX.Element[] ; title:never}
|{title?:string, children:never};
type IGradientButtonProps = TGradientButtonConditionalProps & IGradientButtonCommonProps

// BUTTON 

interface IButtonCommonProps {
    className: string;
    onClick:React.MouseEventHandler<HTMLButtonElement>;
    color:'primary'|'secondary'
}

type TButtonConditionalProps=
|{children?:JSX.Element|JSX.Element[] ; title:never}
|{title?:string, children:never};

type IButtonProps = TButtonConditionalProps & IButtonCommonProps

 
export type {ITextProps,IGradientButtonProps,IButtonProps}