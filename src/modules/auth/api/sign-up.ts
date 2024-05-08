import api from '@/config/axios/api';
import { User } from '@/modules/auth/types/user';

export async function signUp(fullName: string, email: string, password: string): Promise<User> {
  const newUser = await api.post('/auth/sign-up', { full_name: fullName, email, password });
  return newUser.data;
}
