import { Link, useLocation } from "@tanstack/react-router";
import {
  BookOpen,
  FolderKanban,
  Home,
  Inbox,
  LifeBuoy,
  LogOut,
  Moon,
  Sun,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../app/useTheme";

const navigation = [
  { name: "Главная", icon: Home, to: "/" },
  { name: "Заявки", icon: Inbox, to: "/requests" },
  { name: "Проекты", icon: FolderKanban, to: "/projects" },
  { name: "База знаний", icon: BookOpen, to: "/knowledge-base" },
  { name: "Сотрудники", icon: Users, to: "/employees" },
  { name: "Поддержка", icon: LifeBuoy, to: "/support" },
];

type SidebarProps = {
  userEmail: string;
  onSignOut: () => void;
  isSigningOut?: boolean;
};

type MobileNavigationDrawerProps = SidebarProps & {
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({
  userEmail,
  onSignOut,
  isSigningOut = false,
}: SidebarProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [tooltip, setTooltip] = useState<{
    label: string;
    top: number;
  } | null>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const initials = getInitials(userEmail);
  const location = useLocation();

  useEffect(() => {
    if (!isProfileOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (profileRef.current?.contains(event.target as Node)) {
        return;
      }

      setIsProfileOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isProfileOpen]);

  function showTooltip(
    label: string,
    element: HTMLAnchorElement | null,
  ) {
    if (!element) {
      return;
    }

    const sidebar = element.closest("aside");
    const sidebarTop = sidebar?.getBoundingClientRect().top ?? 0;
    const itemRect = element.getBoundingClientRect();

    setTooltip({
      label,
      top: itemRect.top - sidebarTop + itemRect.height / 2,
    });
  }

  return (
    <aside className="relative z-30 hidden border-b border-blue-900/20 bg-[linear-gradient(180deg,#245fd6_0%,#2445c7_48%,#2d28a8_100%)] px-4 py-3 text-white shadow-[8px_0_30px_rgba(45,40,168,0.18)] lg:sticky lg:top-0 lg:flex lg:h-dvh lg:min-h-dvh lg:w-[72px] lg:shrink-0 lg:flex-col lg:items-center lg:border-b-0 lg:px-3 lg:py-4">
      <div className="flex shrink-0 items-center gap-3">
        <div className="grid size-11 place-items-center rounded-md bg-white text-sm font-bold text-[#3870de] shadow-sm">
          OS
        </div>
      </div>

      <nav className="ml-4 flex flex-1 gap-2 overflow-x-auto lg:ml-0 lg:mt-8 lg:min-h-0 lg:w-full lg:flex-col lg:items-center lg:overflow-x-visible lg:overflow-y-auto lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            className={`relative inline-flex size-11 min-w-11 items-center justify-center rounded-md text-sm font-medium transition ${
              isNavigationActive(location.pathname, item.name, item.to)
                ? "bg-white text-[#2445c7] shadow-sm"
                : "text-white/72 hover:bg-white/12 hover:text-white"
            }`}
            title={item.name}
            aria-label={item.name}
            onMouseEnter={(event) => showTooltip(item.name, event.currentTarget)}
            onMouseLeave={() => setTooltip(null)}
            onFocus={(event) => showTooltip(item.name, event.currentTarget)}
            onBlur={() => setTooltip(null)}
          >
            <item.icon className="size-4" />
          </Link>
        ))}
      </nav>

      {tooltip ? (
        <span
          className="pointer-events-none absolute left-[calc(100%+10px)] z-50 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-950 px-2.5 py-1.5 text-xs font-semibold text-white shadow-lg"
          style={{ top: tooltip.top }}
        >
          {tooltip.label}
        </span>
      ) : null}

      <div ref={profileRef} className="relative ml-3 shrink-0 lg:ml-0 lg:mt-4">
        <button
          className="grid size-11 place-items-center rounded-full bg-white/16 text-sm font-bold text-white ring-1 ring-white/22 transition hover:bg-white/24"
          type="button"
          aria-label="Профиль пользователя"
          aria-expanded={isProfileOpen}
          onClick={() => setIsProfileOpen((value) => !value)}
        >
          {initials}
        </button>

        {isProfileOpen ? (
          <div className="absolute bottom-14 right-0 w-72 rounded-lg border border-slate-200 bg-white p-3 text-slate-900 shadow-[0_24px_70px_rgba(15,23,42,0.24)] lg:bottom-0 lg:left-14 lg:right-auto">
            <div className="flex items-center gap-3 rounded-md bg-slate-50 p-3">
              <div className="grid size-10 place-items-center rounded-full bg-[#3870de] text-sm font-bold text-white">
                {initials}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-950">Профиль</p>
                <p className="truncate text-xs text-slate-500">{userEmail}</p>
              </div>
            </div>

            <div className="mt-3 grid gap-1">
              <button
                className="inline-flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                type="button"
              >
                <Users className="size-4 text-slate-500" />
                Мой профиль
              </button>
              <button
                className="inline-flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                type="button"
                disabled={isSigningOut}
                onClick={onSignOut}
              >
                <LogOut className="size-4" />
                {isSigningOut ? "Выходим..." : "Logout"}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </aside>
  );
}

export function MobileNavigationDrawer({
  isOpen,
  userEmail,
  onClose,
  onSignOut,
  isSigningOut = false,
}: MobileNavigationDrawerProps) {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const initials = getInitials(userEmail);
  const isDark = theme === "dark";

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        className={`absolute inset-0 bg-slate-950/45 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        type="button"
        aria-label="Закрыть меню"
        onClick={onClose}
      />

      <aside
        className={`absolute right-0 top-0 flex h-dvh w-[min(360px,calc(100vw-32px))] flex-col bg-white p-4 text-slate-900 shadow-[-24px_0_70px_rgba(15,23,42,0.28)] transition-transform duration-200 dark:bg-slate-950 dark:text-slate-100 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-md bg-[#3870de] text-sm font-bold text-white">
              OS
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950 dark:text-white">
                OS Work Hub
              </p>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                Заявки и знания
              </p>
            </div>
          </div>

          <button
            className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            type="button"
            aria-label="Закрыть меню"
            onClick={onClose}
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="mt-6 grid gap-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`inline-flex h-11 items-center gap-3 rounded-xl px-3 text-sm font-semibold transition ${
                isNavigationActive(location.pathname, item.name, item.to)
                  ? "bg-[#3870de]/10 text-[#2445c7] dark:bg-[#3870de]/20 dark:text-blue-200"
                  : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900"
              }`}
              onClick={onClose}
            >
              <item.icon className="size-4" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
          <button
            className="flex h-11 w-full items-center justify-between rounded-xl px-3 text-sm font-semibold text-slate-700 transition hover:bg-white dark:text-slate-200 dark:hover:bg-slate-800"
            type="button"
            onClick={toggleTheme}
          >
            <span className="inline-flex items-center gap-3">
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
              {isDark ? "Светлая тема" : "Темная тема"}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {isDark ? "Light" : "Dark"}
            </span>
          </button>
        </div>

        <div className="mt-auto rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3 rounded-xl bg-white p-3 dark:bg-slate-950">
            <div className="grid size-10 place-items-center rounded-full bg-[#3870de] text-sm font-bold text-white">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">
                Профиль
              </p>
              <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                {userEmail}
              </p>
            </div>
          </div>

          <div className="mt-2 grid gap-1">
            <button
              className="inline-flex h-10 items-center gap-3 rounded-xl px-3 text-sm font-medium text-slate-700 transition hover:bg-white dark:text-slate-200 dark:hover:bg-slate-800"
              type="button"
            >
              <Users className="size-4 text-slate-500 dark:text-slate-400" />
              Мой профиль
            </button>
            <button
              className="inline-flex h-10 items-center gap-3 rounded-xl px-3 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60 dark:text-red-300 dark:hover:bg-red-950/30"
              type="button"
              disabled={isSigningOut}
              onClick={() => {
                onSignOut();
                onClose();
              }}
            >
              <LogOut className="size-4" />
              {isSigningOut ? "Выходим..." : "Logout"}
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

function getInitials(email: string) {
  const username = email.split("@")[0] || "user";
  const parts = username.split(/[._-]/).filter(Boolean);
  const source = parts.length > 1 ? parts.slice(0, 2) : [username.slice(0, 2)];

  return source
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function isNavigationActive(pathname: string, name: string, to: string) {
  if (to === "/") {
    return pathname === "/" && name === "Главная";
  }

  return pathname === to;
}
