import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAuth from '@/modules/auth/hooks/use-auth';

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
    <VStack>
      {auth.error && (
        <Alert status='error'>
          <AlertIcon />
          <AlertDescription>{auth.error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={Boolean(errors.email)}>
          <Input placeholder='Email' {...register('email', { required: 'Email is required' })} />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.password)}>
          <Input
            type='password'
            placeholder='Password'
            {...register('password', { required: 'Password is required' })}
          />
          <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
        </FormControl>

        <FormControl>
          <Checkbox {...register('rememberMe')}>Remember me</Checkbox>
        </FormControl>

        <Button isLoading={isSubmitting} type='submit'>
          Sign In
        </Button>
      </form>
    </VStack>
  );
}
