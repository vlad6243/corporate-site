import { Button, Card } from "@heroui/react";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  GitPullRequest,
  MoreHorizontal,
  Plus,
  Rocket,
} from "lucide-react";

const columns = [
  {
    title: "Backlog",
    description: "Запланировано",
    items: [
      {
        id: "OPS-101",
        title: "Форма создания статьи в базе знаний",
        project: "Knowledge base",
        priority: "Medium",
        assignee: "VA",
        due: "8 мая",
      },
      {
        id: "OPS-104",
        title: "Справочник отделов и ролей сотрудников",
        project: "People",
        priority: "Low",
        assignee: "AK",
        due: "12 мая",
      },
    ],
  },
  {
    title: "In progress",
    description: "В работе",
    items: [
      {
        id: "OPS-097",
        title: "Интеграция сотрудников с Supabase profiles",
        project: "People",
        priority: "High",
        assignee: "VB",
        due: "Сегодня",
      },
      {
        id: "OPS-099",
        title: "Мобильный drawer для портала",
        project: "Shell",
        priority: "Medium",
        assignee: "OS",
        due: "Завтра",
      },
    ],
  },
  {
    title: "Review",
    description: "Проверка",
    items: [
      {
        id: "OPS-088",
        title: "Темная тема dashboard и карточек",
        project: "Design system",
        priority: "Medium",
        assignee: "DK",
        due: "6 мая",
      },
    ],
  },
  {
    title: "Done",
    description: "Готово",
    items: [
      {
        id: "OPS-074",
        title: "Авторизация email/password через Supabase",
        project: "Auth",
        priority: "High",
        assignee: "VA",
        due: "Готово",
      },
      {
        id: "OPS-080",
        title: "Collapsed sidebar с профилем",
        project: "Navigation",
        priority: "Low",
        assignee: "OS",
        due: "Готово",
      },
    ],
  },
];

export function ProjectsPage() {
  return (
    <div className="grid gap-6">
      <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors sm:p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Project board
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
              Проекты
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              Канбан-доска для внутренних задач: планирование, работа, ревью и
              закрытые задачи. Следующий шаг — подключить проекты и задачи к
              Supabase.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button className="h-10 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
              <GitPullRequest className="size-4" />
              Фильтры
            </Button>
            <Button className="h-10 rounded-full bg-[#ff7a2d] px-4 text-sm font-bold text-white shadow-[0_14px_26px_rgba(255,122,45,0.28)]">
              <Plus className="size-4" />
              Новая задача
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Metric
          icon={<Rocket className="size-5" />}
          label="Активные проекты"
          value="6"
        />
        <Metric
          icon={<Clock3 className="size-5" />}
          label="В работе"
          value="11"
        />
        <Metric
          icon={<CheckCircle2 className="size-5" />}
          label="Закрыто за неделю"
          value="18"
        />
      </div>

      <section className="overflow-x-auto pb-2">
        <div className="grid min-w-[1120px] grid-cols-4 gap-4">
          {columns.map((column) => (
            <div key={column.title} className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-900/70">
              <div className="flex items-start justify-between gap-3 px-1 py-2">
                <div>
                  <h2 className="text-sm font-semibold text-slate-950 dark:text-white">
                    {column.title}
                    <span className="ml-2 rounded-md bg-white px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                      {column.items.length}
                    </span>
                  </h2>
                  <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                    {column.description}
                  </p>
                </div>
                <button
                  className="inline-flex size-8 items-center justify-center rounded-md text-slate-500 transition hover:bg-white dark:text-slate-400 dark:hover:bg-slate-800"
                  type="button"
                  aria-label={`Действия ${column.title}`}
                >
                  <MoreHorizontal className="size-4" />
                </button>
              </div>

              <div className="mt-2 grid gap-3">
                {column.items.map((item) => (
                  <Card
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold text-[#2445c7] dark:text-blue-200">
                        {item.id}
                      </span>
                      <PriorityBadge priority={item.priority} />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold leading-6 text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                      {item.project}
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="grid size-8 place-items-center rounded-full bg-[#3870de]/10 text-xs font-bold text-[#2445c7] dark:bg-[#3870de]/20 dark:text-blue-200">
                        {item.assignee}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {item.due}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Metric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-3">
        <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[#3870de]/10 text-[#2445c7] dark:bg-[#3870de]/20 dark:text-blue-200">
          {icon}
        </div>
        <div>
          <p className="text-2xl font-semibold text-slate-950 dark:text-white">
            {value}
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            {label}
          </p>
        </div>
      </div>
    </Card>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const classNameByPriority: Record<string, string> = {
    High: "bg-red-50 text-red-700 dark:bg-red-400/10 dark:text-red-200",
    Medium:
      "bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-200",
    Low: "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold ${
        classNameByPriority[priority] ?? classNameByPriority.Medium
      }`}
    >
      {priority === "High" ? <AlertTriangle className="size-3" /> : null}
      {priority}
    </span>
  );
}
