import useAuth from '@/modules/auth/hooks/use-auth';
import authPaths from '@/modules/auth/routes/paths';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute() {
  const auth = useAuth();
  return auth.user ? <Outlet /> : <Navigate to={authPaths.signIn} />;
}
