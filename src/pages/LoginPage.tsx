import { LoginForm } from "../features/auth/LoginForm";
import logo from "../assets/logo.svg";

export function LoginPage() {
  return (
    <main className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[radial-gradient(circle_at_55%_18%,#16b8ff_0%,#177ef1_35%,#3147d7_72%,#3428bf_100%)]">

      <header className="relative z-20 bg-white px-5 py-5 shadow-sm sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <img className="h-10 w-auto" src={logo} alt="OS-System" />
          <span className="rounded-full bg-[#ff7a2d] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(255,122,45,0.28)]">
            Internal portal
          </span>
        </div>
      </header>

      <section className="flex flex-1 items-center px-5 py-16 text-white sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_430px]">
          <section className="max-w-2xl">
            <p className="text-lg font-medium text-white/88">
              OS-System internal workspace
            </p>
            <h1 className="mt-7 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Work routines, approvals and team operations
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/88">
              Единый вход для внутренних процессов компании: заявки, инструкции,
              доступы и операционные задачи команды.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Access requests", "Operations", "Knowledge base"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/24 bg-white/12 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </section>

          <LoginForm />
        </div>
      </section>
    </main>
  );
}
