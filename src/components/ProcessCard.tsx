import { Card } from "@heroui/react";
import type { LucideIcon } from "lucide-react";

type ProcessCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  count: string;
  accent: string;
};

export function ProcessCard({
  title,
  description,
  icon: Icon,
  count,
  accent,
}: ProcessCardProps) {
  return (
    <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div
          className={`inline-flex size-10 items-center justify-center rounded-xl ${accent}`}
        >
          <Icon className="size-5" />
        </div>
        <span className="text-2xl font-semibold text-slate-950 dark:text-white">
          {count}
        </span>
      </div>
      <h2 className="mt-5 text-base font-semibold text-slate-950 dark:text-white">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </Card>
  );
}
