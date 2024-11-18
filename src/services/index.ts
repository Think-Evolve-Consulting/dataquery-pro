import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import Axios from 'axios';

interface Config extends AxiosRequestConfig {}

const BASE = process.env.NEXT_PUBLIC_API_ENDPOINT;

console.log('BASE', process);

Axios.defaults.baseURL = BASE;

const axiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  timeout: 5000,
});

const get = (url: string, config: Config = {}): Promise<AxiosResponse> =>
  axiosInstance.get(url, config);

const post = <T>(
  url: string,
  data: T,
  config: Config = {}
): Promise<AxiosResponse> => axiosInstance.post(url, data, config);

const put = <T>(
  url: string,
  data: T,
  config: Config = {}
): Promise<AxiosResponse> => axiosInstance.put(url, data, config);

const patch = <T>(
  url: string,
  data: T,
  config: Config = {}
): Promise<AxiosResponse> => axiosInstance.patch(url, data, config);

const del = (url: string, config: Config = {}): Promise<AxiosResponse> =>
  axiosInstance.delete(url, config);

const axios = {
  get,
  post,
  put,
  patch,
  del,
};

export { axios };
