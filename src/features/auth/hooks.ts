import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getCurrentSession,
  signInWithPassword,
  signOut,
  type AuthCredentials,
} from "./api";

export const authSessionQueryKey = ["auth", "session"] as const;

export function useAuthSession() {
  return useQuery({
    queryKey: authSessionQueryKey,
    queryFn: getCurrentSession,
    staleTime: Infinity,
  });
}

export function useSignInMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: AuthCredentials) =>
      signInWithPassword(credentials),
    onSuccess: (session) => {
      queryClient.setQueryData(authSessionQueryKey, session);
    },
  });
}

export function useSignOutMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.setQueryData(authSessionQueryKey, null);
    },
  });
}
