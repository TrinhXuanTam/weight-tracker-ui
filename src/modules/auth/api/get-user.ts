import api from '@/config/axios/api';
import { User } from '@/modules/auth/types/user';

export async function getUser(): Promise<User> {
  const userData = await api.get<User>('/auth/me');
  return userData.data;
}
