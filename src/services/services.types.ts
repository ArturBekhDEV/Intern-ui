enum Roles {
  Admin = "ADMIN",
  User = "USER",
}

export interface GoogleAuthResponse {
  token: string;
  role: Roles;
}

export interface SignUpDto {
    firstName: string
    lastName?: string
    email: string
    password: string
    confirmPassword: string
}

export interface SignUpResponse {
    token: string
    role: Roles
}
// export type Google