import { Button, Card } from "@heroui/react";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  FilePlus2,
  Filter,
  Inbox,
  Search,
} from "lucide-react";

const statuses = [
  { name: "Все", count: 32, active: true },
  { name: "Новые", count: 9, active: false },
  { name: "В работе", count: 14, active: false },
  { name: "Ожидают", count: 5, active: false },
  { name: "Закрыты", count: 4, active: false },
];

const requests = [
  {
    id: "REQ-204",
    title: "Доступ к VPN для нового сотрудника",
    type: "Доступы",
    status: "Новая",
    requester: "Алексей К.",
    priority: "High",
    updatedAt: "10 минут назад",
  },
  {
    id: "REQ-198",
    title: "Закупить монитор для рабочего места",
    type: "Офис",
    status: "В работе",
    requester: "Мария С.",
    priority: "Medium",
    updatedAt: "Сегодня",
  },
  {
    id: "REQ-191",
    title: "Справка по отпуску и остаткам дней",
    type: "HR",
    status: "Ожидает",
    requester: "Дмитрий Н.",
    priority: "Low",
    updatedAt: "Вчера",
  },
  {
    id: "REQ-187",
    title: "Обновить права в CRM",
    type: "Доступы",
    status: "Закрыта",
    requester: "Ольга В.",
    priority: "Medium",
    updatedAt: "27 апреля",
  },
];

export function RequestsPage() {
  return (
    <div className="grid gap-6">
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
        <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors sm:p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Request desk
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                Заявки
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                Внутренние обращения по доступам, офису, HR и операционным
                процессам. Позже сюда можно подключить таблицу Supabase и
                workflow согласований.
              </p>
            </div>

            <Button className="h-10 rounded-full bg-[#ff7a2d] px-4 text-sm font-bold text-white shadow-[0_14px_26px_rgba(255,122,45,0.28)]">
              <FilePlus2 className="size-4" />
              Новая заявка
            </Button>
          </div>

          <label className="relative mt-6 block">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <span className="sr-only">Поиск заявок</span>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#3870de] focus:bg-white focus:ring-4 focus:ring-[#3870de]/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-900"
              placeholder="Найти заявку по номеру, теме или автору"
              type="search"
            />
          </label>
        </Card>

        <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[#3870de]/10 text-[#2445c7] dark:bg-[#3870de]/20 dark:text-blue-200">
              <Inbox className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Открытые заявки
              </p>
              <p className="mt-1 text-3xl font-semibold text-slate-950 dark:text-white">
                28
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[260px_minmax(0,1fr)]">
        <Card className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-sm font-semibold text-slate-950 dark:text-white">
              Статусы
            </h2>
            <Filter className="size-4 text-slate-400" />
          </div>
          <div className="mt-3 grid gap-1">
            {statuses.map((status) => (
              <button
                key={status.name}
                className={`flex h-10 items-center justify-between rounded-xl px-3 text-sm font-medium transition ${
                  status.active
                    ? "bg-[#3870de]/10 text-[#2445c7] dark:bg-[#3870de]/20 dark:text-blue-200"
                    : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
                type="button"
              >
                {status.name}
                <span className="text-xs">{status.count}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-separate border-spacing-0 text-left">
              <thead>
                <tr className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                  <th className="pb-3">Заявка</th>
                  <th className="pb-3">Тип</th>
                  <th className="pb-3">Статус</th>
                  <th className="pb-3">Автор</th>
                  <th className="pb-3">Приоритет</th>
                  <th className="pb-3">Обновлено</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {requests.map((request) => (
                  <tr key={request.id} className="text-sm">
                    <td className="py-4 pr-4">
                      <p className="font-semibold text-slate-950 dark:text-white">
                        {request.title}
                      </p>
                      <p className="mt-1 text-xs font-medium text-[#2445c7] dark:text-blue-200">
                        {request.id}
                      </p>
                    </td>
                    <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                      {request.type}
                    </td>
                    <td className="py-4 pr-4">
                      <StatusBadge status={request.status} />
                    </td>
                    <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                      {request.requester}
                    </td>
                    <td className="py-4 pr-4">
                      <PriorityBadge priority={request.priority} />
                    </td>
                    <td className="py-4 text-slate-500 dark:text-slate-400">
                      {request.updatedAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const classNameByStatus: Record<string, string> = {
    Новая: "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-200",
    "В работе":
      "bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-200",
    Ожидает:
      "bg-purple-50 text-purple-700 dark:bg-purple-400/10 dark:text-purple-200",
    Закрыта:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-semibold ${
        classNameByStatus[status] ?? classNameByStatus.Новая
      }`}
    >
      {status === "Закрыта" ? <CheckCircle2 className="size-3" /> : null}
      {status === "Ожидает" ? <Clock3 className="size-3" /> : null}
      {status}
    </span>
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
      className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-semibold ${
        classNameByPriority[priority] ?? classNameByPriority.Medium
      }`}
    >
      {priority === "High" ? <AlertCircle className="size-3" /> : null}
      {priority}
    </span>
  );
}
