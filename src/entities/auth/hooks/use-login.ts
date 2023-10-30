import { useMutation } from '@tanstack/react-query';
import { api } from '@/shared/api';

export const useLogin = () =>
  useMutation({
    mutationKey: ['login'],
    mutationFn: (data: any) => api.login(data),
  });
