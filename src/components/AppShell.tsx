import type { ReactNode } from "react";
import { useState } from "react";
import { Header } from "./Header";
import { MobileNavigationDrawer, Sidebar } from "./Sidebar";
import { useAuthSession, useSignOutMutation } from "../features/auth/hooks";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const sessionQuery = useAuthSession();
  const signOutMutation = useSignOutMutation();
  const email = sessionQuery.data?.user.email ?? "Сотрудник";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors lg:flex dark:bg-slate-950 dark:text-slate-100">
      <Sidebar
        userEmail={email}
        onSignOut={() => signOutMutation.mutate()}
        isSigningOut={signOutMutation.isPending}
      />
      <MobileNavigationDrawer
        isOpen={isMobileMenuOpen}
        userEmail={email}
        onClose={() => setIsMobileMenuOpen(false)}
        onSignOut={() => signOutMutation.mutate()}
        isSigningOut={signOutMutation.isPending}
      />

      <div className="min-w-0 flex-1">
        <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
        <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
