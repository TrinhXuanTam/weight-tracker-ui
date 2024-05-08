import api from '@/config/axios/api';
import { User } from '@/modules/auth/types/user';

export async function signIn(email: string, password: string): Promise<User> {
  await api.post('/auth/sign-in', { email, password });
  const userData = await api.get<User>('/auth/me');
  return userData.data;
}
