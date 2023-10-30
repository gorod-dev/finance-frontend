import { Navigate, useLocation } from 'react-router-dom';
import { authService } from '@/shared/lib/auth-service';

export const WithAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { authToken, refreshToken } = authService.get();

  if (!authToken && !refreshToken) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
};
