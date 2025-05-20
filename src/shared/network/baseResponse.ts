export interface BaseResponse<T> {
  success: boolean;
  code: string;
  message: string;
  data: T;
}
