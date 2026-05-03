import { Card } from "@heroui/react";
import { BriefcaseBusiness, Mail, MapPin, Search, UserPlus } from "lucide-react";
import { useMemo, useState } from "react";
import type { Employee } from "../features/employees/api";
import { useEmployees } from "../features/employees/hooks";

export function EmployeesPage() {
  const [search, setSearch] = useState("");
  const employeesQuery = useEmployees();

  const employees = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) {
      return employeesQuery.data ?? [];
    }

    return (employeesQuery.data ?? []).filter((employee) =>
      [
        employee.full_name,
        employee.email,
        employee.position,
        employee.department,
        employee.location,
      ]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(normalizedSearch)),
    );
  }, [employeesQuery.data, search]);

  return (
    <div className="grid gap-6">
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
        <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors sm:p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Team directory
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                Сотрудники
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                Справочник команды из Supabase. Здесь можно искать коллег по
                имени, роли, отделу, локации или email.
              </p>
            </div>

            <button
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#ff7a2d] px-4 text-sm font-bold text-white shadow-[0_14px_26px_rgba(255,122,45,0.28)] transition hover:bg-[#ff6d1a]"
              type="button"
            >
              <UserPlus className="size-4" />
              Добавить
            </button>
          </div>

          <label className="relative mt-6 block">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <span className="sr-only">Поиск сотрудников</span>
            <input
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#3870de] focus:bg-white focus:ring-4 focus:ring-[#3870de]/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-900"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Найти сотрудника"
              type="search"
            />
          </label>
        </Card>

        <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Всего сотрудников
          </p>
          <p className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white">
            {employeesQuery.data?.length ?? 0}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Данные загружаются из таблицы `employees`.
          </p>
        </Card>
      </section>

      {employeesQuery.isPending ? (
        <Card className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          Загружаем сотрудников...
        </Card>
      ) : null}

      {employeesQuery.isError ? (
        <Card className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-700 shadow-sm dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-200">
          Не удалось загрузить сотрудников:{" "}
          {employeesQuery.error instanceof Error
            ? employeesQuery.error.message
            : "неизвестная ошибка"}
        </Card>
      ) : null}

      {!employeesQuery.isPending && !employeesQuery.isError ? (
        <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {employees.length > 0 ? (
            employees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))
          ) : (
            <Card className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600 shadow-sm md:col-span-2 xl:col-span-3 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
              Сотрудники не найдены. Проверьте таблицу `employees` в Supabase
              или измените поисковый запрос.
            </Card>
          )}
        </section>
      ) : null}
    </div>
  );
}

function EmployeeCard({ employee }: { employee: Employee }) {
  const initials = getInitials(employee.full_name || employee.email);

  return (
    <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start gap-4">
        {employee.avatar_url ? (
          <img
            className="size-12 rounded-2xl object-cover"
            src={employee.avatar_url}
            alt=""
          />
        ) : (
          <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#3870de]/10 text-sm font-bold text-[#2445c7] dark:bg-[#3870de]/20 dark:text-blue-200">
            {initials}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="truncate text-base font-semibold text-slate-950 dark:text-white">
                {employee.full_name}
              </h2>
              <p className="mt-1 truncate text-sm text-slate-600 dark:text-slate-400">
                {employee.position ?? "Роль не указана"}
              </p>
            </div>
            <StatusBadge status={employee.status} />
          </div>

          <div className="mt-4 grid gap-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <BriefcaseBusiness className="size-4 text-slate-400" />
              {employee.department ?? "Отдел не указан"}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="size-4 text-slate-400" />
              <a
                className="truncate text-[#2445c7] hover:underline dark:text-blue-200"
                href={`mailto:${employee.email}`}
              >
                {employee.email}
              </a>
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-slate-400" />
              {employee.location ?? "Локация не указана"}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function StatusBadge({ status }: { status: Employee["status"] }) {
  const normalizedStatus = status ?? "active";
  const labelByStatus: Record<string, string> = {
    active: "Активен",
    vacation: "Отпуск",
    inactive: "Неактивен",
  };
  const classNameByStatus: Record<string, string> = {
    active:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200",
    vacation:
      "bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-200",
    inactive: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  };

  return (
    <span
      className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
        classNameByStatus[normalizedStatus] ?? classNameByStatus.inactive
      }`}
    >
      {labelByStatus[normalizedStatus] ?? normalizedStatus}
    </span>
  );
}

function getInitials(value: string) {
  return value
    .split(/[ ._-]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
