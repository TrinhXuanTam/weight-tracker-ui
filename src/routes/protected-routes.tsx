import { RouteObject } from 'react-router-dom';
import { PrivateRoute } from '@/routes/private-route';

const routes: RouteObject[] = [
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: <></>,
      },
    ],
  },
];

export default routes;