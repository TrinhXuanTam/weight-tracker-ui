import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAuth from '@/modules/auth/hooks/use-auth';
import { colorPalette } from '@/config/theme/color-palette';
import { Link as RouterLink } from 'react-router-dom';

interface SignInFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export function SignInPage() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>();
  const auth = useAuth();

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    await auth.signIn(data.email, data.password, data.rememberMe);
  };

  return (
    <Stack spacing={4}>
      {auth.error && (
        <Alert status='error'>
          <AlertIcon />
          <AlertDescription>{auth.error}</AlertDescription>
        </Alert>
      )}

      <Heading color={'gray.800'} lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
        Sign in{' '}
        <Text as={'span'} bgGradient={colorPalette.primaryGradient} bgClip='text'>
          to Track Your Weight
        </Text>
      </Heading>
      <Text color={'gray.500'}>
        We're thrilled to have you back! Monitor your weight progress, receive personalized
        insights, and continue your journey to a healthier, happier you.
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl isInvalid={Boolean(errors.email)}>
            <Input
              placeholder='Email'
              {...register('email', { required: 'Email is required' })}
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              _placeholder={{ color: 'gray.500' }}
            />
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.password)}>
            <Input
              type='password'
              placeholder='Password'
              {...register('password', { required: 'Password is required' })}
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              _placeholder={{ color: 'gray.500' }}
            />
            <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
          </FormControl>

          <FormControl>
            <Checkbox {...register('rememberMe')}>Remember me</Checkbox>
          </FormControl>

          <Button
            isLoading={isSubmitting}
            type='submit'
            fontFamily={'heading'}
            mt={8}
            w={'full'}
            bgGradient={colorPalette.primaryGradient}
            color={'white'}
            _hover={{
              bgGradient: colorPalette.primaryGradient,
              boxShadow: 'xl',
            }}
          >
            Sign In
          </Button>
        </Stack>
      </form>

      <Text textAlign='center' color={'gray.500'} mt={4}>
        Don't have an account?{' '}
        <Link as={RouterLink} to='/sign-up' color={colorPalette.primary} fontWeight='bold'>
          Sign up here
        </Link>
      </Text>
    </Stack>
  );
}
