export type ErrorDetails<T = unknown> = {
  errorCode: number;
  errorMessage: string;
  serverCode: number;
  data?: T;
};

export type ResDetails<T = unknown> = {
  message: string;
  data: T;
};
