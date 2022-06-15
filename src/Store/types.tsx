// eslint-disable-next-line no-shadow

interface ISystemState {
    theme: string;
}
interface IAuthState {
    name: string;
    token: string;
}
interface IProviderProps {
    children: JSX.Element | JSX.Element[];
}
export type { ISystemState, IAuthState, IProviderProps };
