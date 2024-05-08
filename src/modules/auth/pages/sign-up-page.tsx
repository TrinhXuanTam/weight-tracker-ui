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
import paths from '@/modules/auth/routes/paths';

interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
  acceptTerms: boolean;
}

export function SignUpPage() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>();
  const auth = useAuth();

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    if (data.password !== data.repeatPassword) {
      return;
    }
    auth.signUp(data.fullName, data.email, data.password);
  };

  return (
    <Stack spacing={4}>
      <Heading color={'gray.800'} lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
        Start Your{' '}
        <Text as={'span'} bgGradient={colorPalette.primaryGradient} bgClip='text'>
          Fitness Journey
        </Text>
      </Heading>
      <Text color={'gray.500'}>
        Join us today! Track your fitness progress, receive personalized insights, and embark on
        your journey to a healthier, happier lifestyle.
      </Text>

      {auth.error && (
        <Alert status='error'>
          <AlertIcon />
          <AlertDescription>{auth.error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl isInvalid={Boolean(errors.fullName)}>
            <Input
              placeholder='Full Name'
              {...register('fullName', { required: 'Full Name is required' })}
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              _placeholder={{ color: 'gray.500' }}
            />
            <FormErrorMessage>{errors.fullName && errors.fullName.message}</FormErrorMessage>
          </FormControl>

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

          <FormControl isInvalid={Boolean(errors.repeatPassword)}>
            <Input
              type='password'
              placeholder='Repeat Password'
              {...register('repeatPassword', {
                required: 'Please repeat the password',
                validate: (value) => value === getValues().password || 'Passwords do not match',
              })}
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              _placeholder={{ color: 'gray.500' }}
            />
            <FormErrorMessage>
              {errors.repeatPassword && errors.repeatPassword.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.acceptTerms)}>
            <Checkbox
              {...register('acceptTerms', { required: 'Please accept the terms and conditions' })}
            >
              I accept the terms and conditions
            </Checkbox>
            <FormErrorMessage>{errors.acceptTerms && errors.acceptTerms.message}</FormErrorMessage>
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
            Sign Up
          </Button>
        </Stack>
      </form>

      <Text textAlign='center' color={'gray.500'} mt={4}>
        Already have an account?{' '}
        <Link as={RouterLink} to={paths.signIn} color={colorPalette.primary} fontWeight='bold'>
          Sign in here
        </Link>
      </Text>
    </Stack>
  );
}
