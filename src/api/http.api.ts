import axios from 'axios';
import env from 'app/app.env';
import { STATUS_CODE } from 'app/app.status';
import { refreshAccessToken } from 'api/request.api';
import { withError, withData } from 'common/common-helper';
import { getAccessToken, changeAccessToken } from 'app/app.storage';

const axiosInstance = axios.create({
  baseURL: env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

let isRefreshing: boolean = false;
let refreshSubscribers: (() => void)[] = [];

const subscribeTokenRefresh = (cb: any) => {
  refreshSubscribers.push(cb);
};

const onRefreshed = (token: string) => {
  refreshSubscribers.map((cb: (token: string) => void) => cb(token));
};

axiosInstance.interceptors.response.use(
  (response: any): any => {
    return withData(response.data);
  },
  (error: any): any => {
    if (error.message === STATUS_CODE.NETWORK_ERROR) {
      return withError(error.message);
    }

    const status = error.response?.status;

    const isSignedIn = getAccessToken();

    if (status === STATUS_CODE.UNAUTHORIZED && isSignedIn) {
      return handle401Error(error);
    }

    return withError(error.response?.data ? error.response.data : error);
  }
);

const handle401Error = (error: any) => {
  const pendingRequest = error.config;

  if (!isRefreshing) {
    isRefreshing = true;
    refreshAccessToken().then((res: any) => {
      if (res.data) {
        const { data } = res;
        isRefreshing = false;
        onRefreshed(data.token);
        changeAccessToken(data.token);

        return (refreshSubscribers = []);
      }
    });
  }

  const retryPendingRequest = new Promise((resolve) => {
    subscribeTokenRefresh((token: string) => {
      // replace the expired token and retry
      pendingRequest.headers.authorization = `Bearer ${token}`;
      resolve(axiosInstance(pendingRequest));
    });
  });

  return retryPendingRequest;
};

export function get(url: string, params: object = {}): any {
  return axiosInstance({
    method: 'get',
    url,
    params,
    headers: {
      authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

export function post(url: string, data: any, auth: boolean = true): any {
  return axiosInstance({
    method: 'post',
    url,
    data,
    headers: auth
      ? {
          authorization: `Bearer ${getAccessToken()}`,
        }
      : undefined,
  });
}

export function put(url: string, data: any): any {
  return axiosInstance({
    method: 'put',
    url,
    data,
    headers: {
      authorization: `Bearer ${getAccessToken()} `,
    },
  });
}

export function remove(url: string, params: object = {}): any {
  return axiosInstance({
    method: 'delete',
    url,
    params,
    headers: {
      authorization: `Bearer ${getAccessToken()} `,
    },
  });
}
