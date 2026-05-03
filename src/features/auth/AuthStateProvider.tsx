import { useQueryClient } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { authSessionQueryKey } from "./hooks";

type AuthStateProviderProps = {
  children: ReactNode;
};

export function AuthStateProvider({ children }: AuthStateProviderProps) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      queryClient.setQueryData(authSessionQueryKey, session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [queryClient]);

  return children;
}
