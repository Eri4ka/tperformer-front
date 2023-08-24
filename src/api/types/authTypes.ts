export type TAuthResBody = {
  key: string;
};

export type TDetailResBody = {
  detail: string;
};

export type TRegistrationReqBody = {
  username: string;
  email: string;
  password1: string;
  password2: string;
};

export type TRegistrationResErrBody = Record<keyof TRegistrationReqBody | 'non_field_errors', string[]>;

export type TLoginReqBody = {
  email: string;
  password: string;
};

export type TLoginResErrBody = Record<keyof TLoginReqBody | 'non_field_errors', string[]>;

export type TUserResBody = {
  email: string;
  first_name: string;
  last_name: string;
  pk: number;
  username: string;
};
