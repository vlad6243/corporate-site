import { Card } from "@heroui/react";
import {
  BadgeCheck,
  CalendarDays,
  FileText,
  Inbox,
  KeyRound,
  MessageSquareText,
  Plus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ProcessCard } from "../components/ProcessCard";

const processes = [
  {
    title: "Заявки на доступ",
    description: "Сбор запросов, согласование владельцем сервиса и аудит статуса.",
    icon: KeyRound,
    count: "12",
    accent: "bg-cyan-50 text-cyan-700",
  },
  {
    title: "HR и офис",
    description: "Онбординг, справки, техника, рабочее место и типовые обращения.",
    icon: BadgeCheck,
    count: "8",
    accent: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Операционные процессы",
    description: "Повторяемые процедуры для админов, финансов и операционной команды.",
    icon: FileText,
    count: "24",
    accent: "bg-indigo-50 text-indigo-700",
  },
];

const activity = [
  "Новая заявка на VPN ожидает подтверждения руководителя",
  "Процесс закрытия месяца обновлен финансовой командой",
  "В базе знаний добавлена инструкция по закупке оборудования",
  "3 заявки переведены в статус Выполнено",
];

const quickActions = [
  { label: "Создать заявку", icon: Plus },
  { label: "Открыть заявки", icon: Inbox },
  { label: "Найти инструкцию", icon: FileText },
  { label: "Написать в поддержку", icon: MessageSquareText },
];

const news = [
  {
    title: "Обновлен процесс заявок на доступ",
    category: "Operations",
    date: "Сегодня",
    description:
      "Добавлены обязательные поля для владельца сервиса и срока действия доступа.",
  },
  {
    title: "Новая инструкция по закупке техники",
    category: "Office",
    date: "Вчера",
    description:
      "В базе знаний появился короткий порядок согласования и получения оборудования.",
  },
  {
    title: "Регламент закрытия месяца обновлен",
    category: "Finance",
    date: "27 апреля",
    description:
      "Финансовая команда обновила регулярный список проверок перед отчетностью.",
  },
];

export function DashboardPage() {
  return (
    <>
      <CompanyNewsSection />
      <DashboardBottomSection />
      <ProcessesSection />
      
    </>
  );
}

function ProcessesSection() {
  return (
    <section className="mt-6 grid gap-4 md:grid-cols-3">
      {processes.map((process) => (
        <ProcessCard key={process.title} {...process} />
      ))}
    </section>
  );
}

function CompanyNewsSection() {
  return (
    <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-950 dark:text-white">
            Новости компании
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Важные обновления внутренних процессов и командных правил.
          </p>
        </div>
        <button
          className="inline-flex h-9 items-center justify-center rounded-md border border-slate-200 px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          type="button"
        >
          Все новости
        </button>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-3">
        {news.map((item) => (
          <NewsCard key={item.title} {...item} />
        ))}
      </div>
    </Card>
  );
}

function NewsCard({
  title,
  category,
  date,
  description,
}: {
  title: string;
  category: string;
  date: string;
  description: string;
}) {
  return (
    <Card className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-none transition-colors dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-md bg-[#3870de]/10 px-2.5 py-1 text-xs font-semibold text-[#2445c7]">
          {category}
        </span>
        <time className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {date}
        </time>
      </div>
      <h3 className="mt-4 text-sm font-semibold leading-6 text-slate-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </Card>
  );
}

function DashboardBottomSection() {
  return (
    <section className="mt-6 grid gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
      <ActivityCard />
      <QuickActionsCard />
    </section>
  );
}

function ActivityCard() {
  return (
    <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-slate-950 dark:text-white">
            Последняя активность
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            События можно хранить в отдельной таблице Supabase.
          </p>
        </div>
        <CalendarDays className="size-5 text-slate-400" />
      </div>

      <div className="mt-5 divide-y divide-slate-100 dark:divide-slate-800">
        {activity.map((item) => (
          <div
            key={item}
            className="py-3 text-sm text-slate-700 dark:text-slate-300"
          >
            {item}
          </div>
        ))}
      </div>
    </Card>
  );
}

function QuickActionsCard() {
  return (
    <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-base font-semibold text-slate-950 dark:text-white">
        Быстрые действия
      </h2>
      <div className="mt-4 grid gap-2">
        {quickActions.map((action) => (
          <QuickActionButton key={action.label} {...action} />
        ))}
      </div>
    </Card>
  );
}

function QuickActionButton({
  label,
  icon: Icon,
}: {
  label: string;
  icon: LucideIcon;
}) {
  return (
    <button
      className="inline-flex h-10 items-center gap-3 rounded-md border border-slate-200 px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
      type="button"
    >
      <Icon className="size-4 text-slate-500 dark:text-slate-400" />
      {label}
    </button>
  );
}
