import { Button, Card } from "@heroui/react";
import {
  Clock3,
  Headphones,
  LifeBuoy,
  Mail,
  MessageCircle,
  Phone,
  Plus,
  ShieldAlert,
} from "lucide-react";

const supportChannels = [
  {
    title: "IT поддержка",
    description: "Доступы, техника, VPN, почта, рабочие сервисы и инциденты.",
    icon: Headphones,
    response: "до 2 часов",
    accent: "bg-[#3870de]/10 text-[#2445c7]",
  },
  {
    title: "Офис и HR",
    description: "Рабочее место, справки, отпуска, документы и бытовые вопросы.",
    icon: LifeBuoy,
    response: "в течение дня",
    accent: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Срочные инциденты",
    description: "Недоступность ключевых систем или блокирующие проблемы команды.",
    icon: ShieldAlert,
    response: "15 минут",
    accent: "bg-orange-50 text-orange-700",
  },
];

const supportQueue = [
  {
    id: "SUP-82",
    title: "Проблема с доступом к корпоративной почте",
    owner: "IT Support",
    status: "В работе",
    updatedAt: "8 минут назад",
  },
  {
    id: "SUP-79",
    title: "Не открывается VPN после обновления macOS",
    owner: "Infrastructure",
    status: "Ожидает ответа",
    updatedAt: "Сегодня",
  },
  {
    id: "SUP-73",
    title: "Нужна консультация по рабочему оборудованию",
    owner: "Office",
    status: "Новая",
    updatedAt: "Вчера",
  },
];

const contacts = [
  { label: "support@os-system.com", icon: Mail },
  { label: "Slack #internal-support", icon: MessageCircle },
  { label: "+380 00 000 00 00", icon: Phone },
];

export function SupportPage() {
  return (
    <div className="grid gap-6">
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
        <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors sm:p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Help desk
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                Поддержка
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                Единое место для вопросов, инцидентов и быстрых обращений к
                внутренним командам. Позже этот раздел можно связать с
                заявками, базой знаний и уведомлениями.
              </p>
            </div>

            <Button className="h-10 rounded-full bg-[#ff7a2d] px-4 text-sm font-bold text-white shadow-[0_14px_26px_rgba(255,122,45,0.28)]">
              <Plus className="size-4" />
              Новое обращение
            </Button>
          </div>
        </Card>

        <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[#3870de]/10 text-[#2445c7] dark:bg-[#3870de]/20 dark:text-blue-200">
              <Clock3 className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Среднее время ответа
              </p>
              <p className="mt-1 text-3xl font-semibold text-slate-950 dark:text-white">
                42 мин
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {supportChannels.map((channel) => (
          <Card
            key={channel.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900"
          >
            <div
              className={`inline-flex size-11 items-center justify-center rounded-xl ${channel.accent}`}
            >
              <channel.icon className="size-5" />
            </div>
            <h2 className="mt-4 text-base font-semibold text-slate-950 dark:text-white">
              {channel.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {channel.description}
            </p>
            <div className="mt-5 rounded-xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 dark:bg-slate-950 dark:text-slate-300">
              Ответ: {channel.response}
            </div>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
        <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-semibold text-slate-950 dark:text-white">
                Очередь поддержки
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Последние обращения сотрудников и текущий статус обработки.
              </p>
            </div>
          </div>

          <div className="mt-5 divide-y divide-slate-100 dark:divide-slate-800">
            {supportQueue.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs font-medium text-[#2445c7] dark:text-blue-200">
                    {item.id} · {item.owner}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge status={item.status} />
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {item.updatedAt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-base font-semibold text-slate-950 dark:text-white">
            Контакты
          </h2>
          <div className="mt-4 grid gap-2">
            {contacts.map((contact) => (
              <button
                key={contact.label}
                className="inline-flex h-11 items-center gap-3 rounded-xl border border-slate-200 px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                type="button"
              >
                <contact.icon className="size-4 text-slate-500 dark:text-slate-400" />
                {contact.label}
              </button>
            ))}
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
    "Ожидает ответа":
      "bg-purple-50 text-purple-700 dark:bg-purple-400/10 dark:text-purple-200",
  };

  return (
    <span
      className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${
        classNameByStatus[status] ?? classNameByStatus.Новая
      }`}
    >
      {status}
    </span>
  );
}
