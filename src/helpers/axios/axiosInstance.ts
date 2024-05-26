import { authKey } from "@/constants/authKey";
import { setAccessToken } from "@/services/actions/setAccessToken";
import { getNewAccessToken } from "@/services/authServices";
import { TResponseError, TResponseSuccess } from "@/types/common";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    // console.log({ config });
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  // @ts-ignore
  function (response) {
    // console.log(response);
    const responseObject: TResponseSuccess = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  async function (error) {
    // console.log(error);
    const config = error?.config;
    if (error?.response?.status === 500 && !config.sent) {
      config.sent = true;
      const response = await getNewAccessToken();
      console.log(response.data.accessToken);
      const accessToken = response.data.accessToken;
      config.headers["Authorization"] = accessToken;
      setToLocalStorage(authKey, accessToken);
      setAccessToken(authKey);
      return instance(config);
    } else {
      const responseObject: TResponseError = {
        success: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something Went Wrong !!!",
        errorDetails: error?.response?.data?.message,
      };
      return responseObject;
    }
  }
);

export { instance };
