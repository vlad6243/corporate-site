# Corporate Ops

Стартовая структура внутреннего корпоративного портала на React, Tailwind CSS и Supabase.

## Что внутри

- Vite + React + TypeScript
- Tailwind CSS через официальный Vite-плагин
- Supabase client с настройкой через переменные окружения
- Базовая оболочка внутреннего портала: навигация, карточки рутин, активности и быстрые действия

## Запуск

```bash
npm install
npm run dev
```

Создайте `.env.local` на основе `.env.example` и подставьте значения из Supabase:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

## Структура

```text
src/
  components/       Переиспользуемые UI-блоки
  lib/              Интеграции и общие утилиты
  App.tsx           Главный экран портала
  index.css         Tailwind и базовые стили
  main.tsx          Точка входа React
```
