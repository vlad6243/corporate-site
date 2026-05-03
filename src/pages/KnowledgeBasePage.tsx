import { Button, Card } from "@heroui/react";
import {
  BookOpen,
  FilePlus2,
  FolderOpen,
  Search,
  ShieldCheck,
  Star,
} from "lucide-react";

const categories = [
  { name: "Все", count: 24, active: true },
  { name: "IT и доступы", count: 8, active: false },
  { name: "HR", count: 5, active: false },
  { name: "Финансы", count: 6, active: false },
  { name: "Офис", count: 5, active: false },
];

const articles = [
  {
    title: "Как запросить доступ к внутренним сервисам",
    category: "IT и доступы",
    updatedAt: "Обновлено сегодня",
    description:
      "Порядок подачи заявки, обязательные поля, согласование владельцем сервиса и сроки ревью.",
    featured: true,
  },
  {
    title: "Закупка и выдача техники сотрудникам",
    category: "Офис",
    updatedAt: "Обновлено вчера",
    description:
      "Что нужно указать в заявке, кто согласовывает покупку и как фиксируется выдача оборудования.",
    featured: false,
  },
  {
    title: "Регламент закрытия месяца",
    category: "Финансы",
    updatedAt: "Обновлено 27 апреля",
    description:
      "Регулярные проверки документов, оплат, актов и внутренних статусов перед отчетностью.",
    featured: false,
  },
];

export function KnowledgeBasePage() {
  return (
    <div className="grid gap-6">
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors sm:p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Knowledge base
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                База знаний
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                Внутренние инструкции, правила, регламенты и ответы на частые
                вопросы. Следующий шаг — форма создания статьи с черновиками и
                категориями.
              </p>
            </div>

            <Button className="h-10 rounded-full bg-[#ff7a2d] px-4 text-sm font-bold text-white shadow-[0_14px_26px_rgba(255,122,45,0.28)]">
              <FilePlus2 className="size-4" />
              Новая статья
            </Button>
          </div>

          <label className="relative mt-6 block">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <span className="sr-only">Поиск по базе знаний</span>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#3870de] focus:bg-white focus:ring-4 focus:ring-[#3870de]/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-900"
              placeholder="Найти инструкцию, регламент или правило"
              type="search"
            />
          </label>
        </Card>

        <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[#3870de]/10 text-[#2445c7]">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-950 dark:text-white">
                Модерация
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Для формы стоит добавить статусы: черновик, на ревью,
                опубликовано.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[260px_minmax(0,1fr)]">
        <Card className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
          <h2 className="px-2 text-sm font-semibold text-slate-950 dark:text-white">
            Категории
          </h2>
          <div className="mt-3 grid gap-1">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`flex h-10 items-center justify-between rounded-xl px-3 text-sm font-medium transition ${
                  category.active
                    ? "bg-[#3870de]/10 text-[#2445c7] dark:bg-[#3870de]/20 dark:text-blue-200"
                    : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
                type="button"
              >
                <span className="inline-flex items-center gap-2">
                  <FolderOpen className="size-4" />
                  {category.name}
                </span>
                <span className="text-xs">{category.count}</span>
              </button>
            ))}
          </div>
        </Card>

        <div className="grid gap-3">
          {articles.map((article) => (
            <Card
              key={article.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[#3870de] dark:bg-slate-950">
                    <BookOpen className="size-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-[#3870de]/10 px-2.5 py-1 text-xs font-semibold text-[#2445c7] dark:bg-[#3870de]/20 dark:text-blue-200">
                        {article.category}
                      </span>
                      {article.featured ? (
                        <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-400/10 dark:text-amber-200">
                          <Star className="size-3" />
                          Важное
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-slate-950 dark:text-white">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {article.description}
                    </p>
                  </div>
                </div>

                <time className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {article.updatedAt}
                </time>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
