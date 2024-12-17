import { BaseModel } from "./base";

export interface User extends BaseModel {
  data: {
    email: string;
    full_name: string;
    id: number;
    username: string;
    wallet_address: string;
  };
  status: string | "success";
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginWithWalletCredentials {
  publicKey: string;
  message: string;
  signedMessage: string;
}

export interface SignupCredentials {
  email: string;
  full_name: string;
  password: string;
  ref_code?: string;
}

export interface AuthResponse {
  status: "success" | "error";
  data: {
    user_id: number;
    email: string;
    exp: number;
    access_token: string;
    refresh_token: string;
  };
}
