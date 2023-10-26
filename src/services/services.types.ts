enum Roles {
  Admin = "ADMIN",
  User = "USER",
}

export interface GoogleAuthResponse {
  token: string;
  role: Roles | string;
  firstName: string;
}

export interface SignUpDto {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface CreateUserDto extends Omit<SignUpDto, "confirmPassword"> {
  role: Roles | string;
}

export interface SignUpResponse {
  token: string;
  role: Roles;
  firstName: string;
}

export interface SignInResponse {
  token: string;
  role: Roles;
  firstName: string;
}

export interface CurrentUserResponse {
  role: Roles;
  firstName: string;
  lastName: string;
}
export interface UserResponse {
  items: User[];
}
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: Roles;
}

export interface GetUsersParams {
  page?: number;
  countPerPage?: number;
}
export interface CreateUserResponse extends CreateUserDto {
  id: string;
}
