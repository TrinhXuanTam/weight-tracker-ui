import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from '@/routes/app-router';
import { themeConfig } from '@/config/theme/theme-config';
import { AuthProvider } from '@/modules/auth/providers/auth-provider';

export function AppProvider() {
  return (
    <AuthProvider>
      <ChakraProvider theme={themeConfig}>
        <RouterProvider router={appRouter} />
      </ChakraProvider>
    </AuthProvider>
  );
}
