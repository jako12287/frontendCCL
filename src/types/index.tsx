export interface ProtectedRouteProps {
  children: JSX.Element;
}

export interface PropsForm {
  password: string;
  user: string;
}

type UserProps = {
  _id: string;
  user: string;
  password: string;
};

export interface AuthState {
  token: string | null;
  user: UserProps | null;
}

export interface LoginResult {
  token: string;
  user: UserProps | null;
}
