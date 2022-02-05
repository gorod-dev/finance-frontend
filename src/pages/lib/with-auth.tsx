import { Navigate, useLocation } from 'react-router-dom';

export const WithAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  // TODO: change fake auth
  const isAuth = false;

  if (!isAuth)
    return <Navigate to="/auth" state={{ from: location }} replace />;

  return children;
};
