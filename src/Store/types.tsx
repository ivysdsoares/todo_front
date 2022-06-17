// eslint-disable-next-line no-shadow

interface ISystemState {
    theme: string;
}
interface IAuthState {
    name: null | string;
    email: null | string;
    error: false | string;
    loading?: boolean;
}
interface IProviderProps {
    children: JSX.Element | JSX.Element[];
}
export type { ISystemState, IAuthState, IProviderProps };
