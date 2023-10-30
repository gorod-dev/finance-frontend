import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { api } from '@/shared/api';
import { useUserStore } from '../model';

export const useGetUser = () => {
  const setUserData = useUserStore((state) => state.setUserData);

  const { data, error, ...rest } = useQuery(['user'], () => api.getUser());

  useEffect(() => {
    if (data) {
      setUserData(data?.data);
    }
  }, [data, error, setUserData]);

  return { data, ...rest };
};
