import { RouteObject } from 'react-router-dom';
import authRoutes from '@/modules/auth/routes/routes';

const routes: RouteObject[] = [...authRoutes];

export default routes;
