import { axios } from '..';
import {
  User,
  LoginCredentials,
  SignupCredentials,
  AuthResponse,
  LoginWithWalletCredentials,
} from "../../types/user"

export const login = async (
  credentials: LoginCredentials,
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
    '/api/user/login/',
    credentials,
  );
  return response.data;
};

export const signup = async (
  credentials: SignupCredentials,
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
    '/api/user/signup/',
    credentials,
  );
  return response.data;
};

export const GetUser = async (): Promise<User> => {
  const response = await axios.get<User>('/api/user/current/');
  return response.data;
};

export const loginWithWallet = async (
  credentials: LoginWithWalletCredentials,
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
    '/api/user/login-wallet/',
    credentials,
  );
  return response.data;
};

export const getSignatureMessage = async (
  publicKey: string,
): Promise<{ message: string }> => {
  const response = await axios.get<any>(`/api/user/login-message/${publicKey}`);
  return response.data;
};