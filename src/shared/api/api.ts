import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';
import { authService } from '../lib/auth-service';

interface AxiosRequestConfigOverride extends AxiosRequestConfig {
  retry?: boolean;
}

class Api {
  instance: AxiosInstance;
  private queue: any[];
  private isRefreshing: boolean;

  constructor() {
    this.queue = [];
    this.isRefreshing = false;

    this.instance = axios.create({
      baseURL: String(import.meta.env.VITE_API_URL ?? ''),
    });

    this.instance.interceptors.request.use((config) => {
      const { authToken } = authService.get();

      if (authToken) {
        config.headers.set('Authorization', `Bearer ${authToken}`);
      }

      return config;
    });

    this.instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const isRequestCancelled = error.code === AxiosError.ERR_CANCELED;

        if (isRequestCancelled) {
          return Promise.reject(error);
        }

        const originalRequest = { ...error.config };

        if (error?.response?.status === 401 && !originalRequest?.retry) {
          return this.onRefresh(originalRequest);
        }

        return Promise.reject(error);
      },
    );
  }

  private async onRefresh(config: AxiosRequestConfigOverride) {
    if (this.isRefreshing) {
      return new Promise((resolve, reject) => {
        this.queue.push({ resolve, reject });
      })
        .then(() => this.instance(config))
        .catch((err) => Promise.reject(err));
    }

    config.retry = true;
    this.isRefreshing = true;

    return new Promise((resolve, reject) => {
      this.refresh()
        .then(() => {
          this.processQueue();
          resolve(this.instance(config));
        })
        .catch((err) => {
          authService.remove();
          this.processQueue(true);
          reject(err);
        })
        .finally(() => {
          this.isRefreshing = false;
        });
    });
  }

  private processQueue(error?: boolean) {
    this.queue.forEach((promise) => {
      if (error) {
        promise.reject();
      } else {
        promise.resolve();
      }
    });

    this.queue = [];
  }

  async login(data: { login: string; email: string; password: string }) {
    const response = await this.instance.post('/auth/login', data);

    const { accessToken, refreshToken } = response.data;

    authService.set(accessToken, refreshToken);

    return response;
  }

  async refresh() {
    const response = await this.instance.post('/auth/refresh', {
      refresh: authService.get().refreshToken,
    });

    const { accessToken, refreshToken } = response.data;

    if (accessToken && refreshToken) {
      authService.set(
        response?.data?.accessToken,
        response?.data?.refreshToken,
      );
    }

    return response;
  }

  async getUser() {
    return this.instance.get(`/user`);
  }
}

const api = new Api();

export { api };
