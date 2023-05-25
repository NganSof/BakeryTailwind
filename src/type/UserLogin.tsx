export interface UserLogin {
  email: string | null;
  password: string | number;
}
export interface User {
  fullName: string | null;
  email: string | null;
  phone: string | number;
  password: string | number;
  address: string | null;
  role?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  token?: string | null;
}
export interface UserSignUp {
  fullName: string | null;
  email: string | null;
  phone: string | number;
  password: string | number;
  address: string | null;
}