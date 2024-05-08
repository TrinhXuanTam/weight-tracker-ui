import useAuth from '@/modules/auth/hooks/use-auth';
import authPaths from '@/modules/auth/routes/paths';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute() {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to={authPaths.signIn} />;
  }

  return <Outlet />;
}
