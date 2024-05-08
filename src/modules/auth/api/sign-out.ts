import api from '@/config/axios/api';

export async function signOut(): Promise<void> {
  await api.post('/auth/sign-out');
}
