import { Button, Checkbox, FormControl, FormErrorMessage, Input, VStack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAuth from '../hooks/use-auth';

interface SignInFormData {
  username: string;
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
    await auth.signIn(data.username, data.password, data.rememberMe);
  };

  return (
    <VStack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={Boolean(errors.username)}>
          <Input
            placeholder='Username'
            {...register('username', { required: 'Username is required' })}
          />
          <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
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
