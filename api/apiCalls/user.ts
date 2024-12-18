import { axios } from '..';
import {
  User,
  LoginCredentials,
  AuthResponse,
  LoginWithWalletCredentials,
} from '@/types/user';

export const login = async (
  credentials: LoginCredentials,
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>('/login/', credentials);
  return response.data;
};

export const GetUser = async (): Promise<User> => {
  const response = await axios.get<User>('/current/');
  return response.data;
};

export const loginWithWallet = async (
  credentials: LoginWithWalletCredentials,
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
    '/login-wallet/',
    credentials,
  );
  return response.data;
};

export const getSignatureMessage = async (
  publicKey: string,
): Promise<{ message: string }> => {
  const response = await axios.get<any>(`/login-message/${publicKey}`);
  return response.data;
};
