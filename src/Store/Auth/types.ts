export interface ILoginPayload {
  password: string;
  email: string;
}
export interface IGoogleLoginPayload {
  name:string;
  email: string;
}
export interface IGoogleLoginReturn {
  id: string;
}
export interface ILoginReturn {
  id: number;
  email: string;
  name: string;
}
export interface ISignInPayload {
  name:string;
  email: string;
  password:string;
}
export interface ISignInReturn {
  id: number;
  email: string;
  name: string;
}

export interface IAuthState {
  name: null | string;
  email: null | string;
  id: null | number;
  error: false | string;
  loading?: boolean;
}
