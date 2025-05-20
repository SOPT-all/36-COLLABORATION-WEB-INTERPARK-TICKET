import { toast } from 'react-toastify';
import axiosInstance from './axiosInstance';
import type { BaseResponse } from './baseResponse';

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}
export interface RequestConfig {
  method: HTTPMethod;
  url: string;
  query?: Record<string, any>;
  body?: Record<string, any>;
}

export const request = async <T>(config: RequestConfig): Promise<T> => {
  const { method, url, query, body } = config;

  try {
    const response = await axiosInstance.request<BaseResponse<T>>({
      method,
      url,
      params: query,
      data: body,
    });
    
    console.log(`[성공] ${url} :`, response.data.data);
    // toast.success(response.data.message);

    return response.data.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || '알 수 없는 에러가 발생했습니다';

    console.log(`[실패] ${url} : ${message}`);
    toast.error(message);

    throw error;
  }
};
