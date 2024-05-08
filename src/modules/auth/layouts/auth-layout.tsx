import { Box, Container, VStack } from '@chakra-ui/react';
import { Navigate, Outlet } from 'react-router-dom';
import { colorPalette } from '@/config/theme/color-palette';
import useAuth from '../hooks/use-auth';

type AuthLayoutProps = {
  children?: React.ReactNode;
};

export function AuthLayout(props: AuthLayoutProps) {
  const auth = useAuth();

  if (auth.user) {
    return Navigate({ to: '/' });
  }

  return (
    <Box bg={colorPalette.primary}>
      <Container>
        <VStack height='100vh' alignItems='center' justifyContent='center'>
          <Outlet />
          {props.children}
        </VStack>
      </Container>
    </Box>
  );
}
