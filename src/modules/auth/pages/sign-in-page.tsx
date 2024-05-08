import { Button, Checkbox, Input, VStack } from '@chakra-ui/react';

export function SignInPage() {
  return (
    <VStack>
      <Input />
      <Input />
      <Checkbox>Remember me</Checkbox>
      <Button>Sign In</Button>
    </VStack>
  );
}
