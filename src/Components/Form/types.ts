
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
    type:'submit'|'button',
    loading:boolean,
    disabled:boolean,
}
type TGradientButtonConditionalProps=
|{children?:JSX.Element|JSX.Element[] ; title:never}
|{title?:string, children:never};
type IGradientButtonProps = TGradientButtonConditionalProps & IGradientButtonCommonProps

// BUTTON 

interface IButtonCommonProps {
    type:'button'|'submit'
    className: string;
    onClick:React.MouseEventHandler<HTMLButtonElement>;
    color:'primary'|'secondary',
    loading:boolean,
    disabled:boolean,
}

type TButtonConditionalProps=
|{children?:JSX.Element|JSX.Element[] ; title:never}
|{title?:string, children:never};

type IButtonProps = TButtonConditionalProps & IButtonCommonProps

// TITLE PROPS
interface ITitle{
    text:string
}
// TITLE PROPS
 interface ISubtitle{
    text:string
}
// TITLE PROPS
 interface IPaperProps{
    children:JSX.Element|JSX.Element[]
}

// DATE INPUT
interface IDateProps {
    name?: string;
    label: string;
    value: string;
    disabled: boolean;
    onChange: (params: string) => void;
    error: boolean | string;
    type:'datetime-local'|'time'|'date'
}
// SELECT INPUT
interface ISelectOptions{
    label:string;
    value:string|number;
    mod:string
}
interface ISelectProps {
    name?: string;
    label: string;
    value: string;
    options:Array<ISelectOptions>;
    disabled: boolean;
    onChange: (params: string) => void;
    error: boolean | string;
}

export type {ITextProps,IGradientButtonProps,IButtonProps,ITitle,ISubtitle,IDateProps,ISelectProps, ISelectOptions,IPaperProps }