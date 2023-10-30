import { Navigate, useLocation } from 'react-router-dom';
import { authService } from '@/shared/lib/auth-service';

export const WithoutAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { authToken, refreshToken } = authService.get();

  if (authToken || refreshToken) {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }

  return children;
};
