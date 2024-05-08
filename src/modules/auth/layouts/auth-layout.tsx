import {  Container, Heading, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '@/modules/auth/hooks/use-auth';
import { colorPalette } from '@/config/theme/color-palette';
import peopleImage from '@/assets/images/workout.webp';
import { Logo } from '@/components/logo';

type AuthLayoutProps = {
  children?: React.ReactNode;
};

export function AuthLayout(props: AuthLayoutProps) {
  const auth = useAuth();
  return auth.user ? (
    <Navigate to='/' />
  ) : (
    <VStack position='relative' justifyContent='center' minHeight='100vh'>
      <Logo />
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack
          spacing={{ base: 10, md: 20 }}
          alignItems='center'
          display={{ base: 'none', md: 'flex' }}
        >
          <Heading lineHeight={1.1} fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            Let's Start Living{' '}
            <Text as='span' bgGradient={colorPalette.primaryGradient} bgClip='text'>
              Healthier
            </Text>{' '}
          </Heading>
          <Image src={peopleImage} alt='People working out' />
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
        >
          <Outlet />
          {props.children}
        </Stack>
      </Container>
    </VStack>
  );
}
