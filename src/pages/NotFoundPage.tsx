import { Card } from "@heroui/react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Home, LifeBuoy } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="relative isolate grid min-h-screen place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#16b8ff_0%,#177ef1_32%,#3147d7_72%,#3428bf_100%)] px-4 py-10 text-white">
      <div className="absolute inset-x-0 top-0 h-24 bg-white/10" />

      <Card className="relative z-10 w-full max-w-xl rounded-3xl border border-white/20 bg-white/95 p-6 text-slate-950 shadow-[0_28px_90px_rgba(15,23,42,0.28)] sm:p-8 dark:border-white/10 dark:bg-slate-950/92 dark:text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#3870de]/10 px-3 py-1 text-sm font-semibold text-[#2445c7] dark:bg-[#3870de]/20 dark:text-blue-200">
          <span className="grid size-6 place-items-center rounded-full bg-[#3870de] text-xs text-white">
            404
          </span>
          Страница не найдена
        </div>

        <h1 className="mt-6 max-w-md text-3xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-4xl">
          Такой страницы нет в OS Work Hub
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-400">
          Ссылка могла устареть, раздел могли переименовать или у вас нет
          доступа к этой странице. Вернитесь на главную или откройте поддержку.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#3870de] px-5 text-sm font-bold text-white transition hover:bg-[#2f61c7]"
            to="/"
          >
            <Home className="size-4" />
            На главную
          </Link>
          <Link
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
            to="/support"
          >
            <LifeBuoy className="size-4" />
            Поддержка
          </Link>
        </div>

        <button
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          type="button"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="size-4" />
          Вернуться назад
        </button>
      </Card>
    </div>
  );
}
