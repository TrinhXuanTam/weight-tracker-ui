import { useContext } from 'react';
import { AuthContext } from '@/modules/auth/providers/auth-provider';

export default function useAuth() {
  return useContext(AuthContext);
}
