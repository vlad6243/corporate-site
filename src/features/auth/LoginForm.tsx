import { Button } from "@heroui/react";
import { useNavigate } from "@tanstack/react-router";
import { Lock, Mail } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { isSupabaseConfigured } from "../../lib/supabase";
import { useSignInMutation } from "./hooks";

export function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInMutation = useSignInMutation();
  const errorMessage =
    signInMutation.error instanceof Error ? signInMutation.error.message : null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const credentials = {
      email: email.trim(),
      password,
    };

    const session = await signInMutation.mutateAsync(credentials);

    if (session) {
      await navigate({ to: "/" });
    }
  }

  return (
    <div className="w-full rounded-3xl border border-white/70 bg-white p-6 text-slate-900 shadow-[0_24px_70px_rgba(13,37,138,0.28)] sm:p-7">
      <div>
        <p className="text-sm font-semibold text-[#3870de]">Secure access</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-950">
          Вход в портал
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Используйте корпоративный email и пароль для доступа к внутреннему
          рабочему пространству.
        </p>
      </div>

      {!isSupabaseConfigured ? (
        <div className="mt-5 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800">
          Заполните `.env.local` значениями `VITE_SUPABASE_URL` и
          `VITE_SUPABASE_PUBLISHABLE_KEY`, чтобы авторизация начала работать.
        </div>
      ) : null}

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Email
          <span className="relative">
            <Mail
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#3870de]"
              aria-hidden="true"
            />
            <input
              className="h-12 w-full rounded-md border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#3870de] focus:bg-white focus:ring-4 focus:ring-[#3870de]/10"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              autoComplete="email"
              placeholder="name@company.com"
              required
            />
          </span>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Пароль
          <span className="relative">
            <Lock
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#3870de]"
              aria-hidden="true"
            />
            <input
              className="h-12 w-full rounded-md border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#3870de] focus:bg-white focus:ring-4 focus:ring-[#3870de]/10"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              autoComplete="current-password"
              minLength={6}
              placeholder="Минимум 6 символов"
              required
            />
          </span>
        </label>

        {errorMessage ? (
          <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
            {errorMessage}
          </div>
        ) : null}

        <Button
          className="h-12 rounded-full bg-[#ff7a2d] px-5 text-sm font-bold text-white shadow-[0_16px_30px_rgba(255,122,45,0.34)] transition hover:bg-[#ff6d1a] disabled:opacity-60"
          isDisabled={signInMutation.isPending || !isSupabaseConfigured}
          type="submit"
        >
          {signInMutation.isPending ? "Проверяем доступ..." : "Войти"}
        </Button>
      </form>

      <div className="mt-5 border-t border-slate-100 pt-5 text-sm leading-6 text-slate-500">
        Доступ выдает администратор. Если аккаунт не работает, обратитесь к
        ответственному за внутренний портал.
      </div>
    </div>
  );
}
