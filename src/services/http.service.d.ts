import axios from "axios";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import config from "../config.json";

axios.defaults.baseURL = config.apiEndPoint;

interface HttpService {
  get: AxiosInstance["get"];
  post: AxiosInstance["post"];
  put: AxiosInstance["put"];
  delete: AxiosInstance["delete"];
  interceptors: {
    response: {
      use(
        onFulfilled?: (
          value: AxiosResponse
        ) => AxiosResponse | Promise<AxiosResponse>,
        onRejected?: (error: AxiosError) => unknown
      ): number;
    };
  };
}

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedErrors) {
      console.log("Unexpected Errors");
    }
    return Promise.reject(error);
  }
);

// declare const httpService: HttpService;

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
