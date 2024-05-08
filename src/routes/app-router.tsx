import { createBrowserRouter } from 'react-router-dom';
import publicRoutes  from '@/routes/public-routes';
import protectedRoutes from '@/routes/protected-routes';

export const appRouter = createBrowserRouter([...publicRoutes, ...protectedRoutes]);
