import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { api } from '@/shared/api';
import { useUserStore } from '../model';

export const useGetUser = (id: number) => {
  const setUserData = useUserStore((state) => state.setUserData);

  const { data, error, ...rest } = useSuspenseQuery({
    queryKey: ['user', id],
    queryFn: () => api.getUser(),
  });

  useEffect(() => {
    if (data) {
      setUserData(data?.data);
    }
  }, [data, error, setUserData]);

  return { data, ...rest };
};
