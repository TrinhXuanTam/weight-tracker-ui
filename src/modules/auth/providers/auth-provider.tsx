import { User } from '@/modules/auth/types/user';
import { createContext, useEffect, useMemo, useState } from 'react';
import { getUser } from '@/modules/auth/api/get-user';
import { signOut } from '@/modules/auth/api/sign-out';
import { signIn } from '@/modules/auth/api/sign-in';
import { signUp } from '@/modules/auth/api/sign-up';

type AuthContextType = {
  user: User | null;
  error: string | null;
  loading: boolean;
  signIn: (email: string, password: string, rememberMe: boolean) => void;
  signUp: (fullName: string, email: string, password: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  function signInUser(email: string, password: string, rememberMe: boolean) {
    setLoading(true);
    setError(null);
    signIn(email, password, rememberMe)
      .then(setUser)
      .catch((error: Error) => setError(error.message))
      .finally(() => setLoading(false));
  }

  function signUpUser(fullName: string, email: string, password: string) {
    setLoading(true);
    setError(null);
    signUp(fullName, email, password)
      .then(setUser)
      .catch((error: Error) => setError(error.message))
      .finally(() => setLoading(false));
  }

  function signOutUser() {
    setLoading(true);
    signOut()
      .then(() => setUser(null))
      .catch((error: Error) => setError(error.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getUser()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoadingInitial(false));
  }, []);

  const memoedValue = useMemo<AuthContextType>(
    () => ({
      user,
      error,
      loading,
      signIn: signInUser,
      signOut: signOutUser,
      signUp: signUpUser,
    }),
    [user, loading, error],
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && props.children}
    </AuthContext.Provider>
  );
}
