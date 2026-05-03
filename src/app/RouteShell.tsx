import { Navigate, Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useAuthSession } from "../features/auth/hooks";

export function RootLayout() {
  return <Outlet />;
}

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const sessionQuery = useAuthSession();

  if (sessionQuery.isPending) {
    return (
      <div className="grid min-h-screen place-items-center bg-slate-50 px-4 text-sm text-slate-600">
        Проверяем сессию...
      </div>
    );
  }

  if (!sessionQuery.data) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
