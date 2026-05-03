import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "../app/useTheme";

type HeaderProps = {
  onOpenMobileMenu: () => void;
};

export function Header({ onOpenMobileMenu }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 py-4 transition-colors sm:px-6 dark:border-slate-800 dark:bg-slate-950">
      <div>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          OS Work Hub
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-950 dark:text-white">
          Заявки, знания и поддержка
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="hidden size-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-white lg:inline-flex dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          type="button"
          aria-label={isDark ? "Включить светлую тему" : "Включить темную тему"}
          onClick={toggleTheme}
        >
          {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
        <button
          className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-white lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          type="button"
          aria-label="Открыть меню"
          onClick={onOpenMobileMenu}
        >
          <Menu className="size-5" />
        </button>
      </div>
    </header>
  );
}
