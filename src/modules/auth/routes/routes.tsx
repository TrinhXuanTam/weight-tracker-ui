import { RouteObject } from 'react-router-dom';
import { AuthLayout } from '@/modules/auth/layouts/auth-layout';
import { SignInPage } from '@/modules/auth/pages/sign-in-page';
import { SignUpPage } from '@/modules/auth/pages/sign-up-page';
import paths from '@/modules/auth/routes/paths';

const routes: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: paths.signIn,
        element: <SignInPage />,
      },
      {
        path: paths.signUp,
        element: <SignUpPage />,
      }
    ],
  },
];

export default routes;
