import { Card } from "@heroui/react";
import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-50 px-4 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Card className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold text-[#3870de]">404</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
          Страница не найдена
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          Такой страницы нет или ссылка устарела.
        </p>
        <Link
          className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#3870de] px-4 text-sm font-bold text-white transition hover:bg-[#2f61c7]"
          to="/"
        >
          <Home className="size-4" />
          На главную
        </Link>
      </Card>
    </div>
  );
}
