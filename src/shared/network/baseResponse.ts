export interface BaseResponse<T> {
  status: number;
  message: string;
  data: T;
}
