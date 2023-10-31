import { create } from 'zustand';
import { authService } from '@/shared/lib/auth-service';

type UserStore = {
  id: number | null;
  email: string | null;
  login: string | null;
};

type UserActions = {
  // eslint-disable-next-line no-unused-vars
  setUserData: (data: UserStore) => void;
};

const { decoded } = authService.get();

export const useUserStore = create<UserStore & UserActions>((set) => ({
  id: decoded?.id ?? null,
  email: decoded?.email ?? null,
  login: decoded?.login ?? null,
  setUserData: (data: UserStore) => set(() => data),
}));
