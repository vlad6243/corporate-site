import { isSupabaseConfigured, supabase } from "../../lib/supabase";

export type EmployeeStatus = "active" | "vacation" | "inactive";

export type Employee = {
  id: string;
  full_name: string;
  email: string;
  position: string | null;
  department: string | null;
  location: string | null;
  status: EmployeeStatus | string | null;
  avatar_url: string | null;
  created_at: string | null;
};

export async function getEmployees(): Promise<Employee[]> {
  if (!isSupabaseConfigured) {
    return [];
  }

  const { data, error } = await supabase
    .from("employees")
    .select(
      "id, full_name, email, position, department, location, status, avatar_url, created_at",
    )
    .order("full_name", { ascending: true });

  if (error) {
    if (isMissingEmployeesTableError(error)) {
      throw new Error(
        "Таблица employees не найдена в Supabase. Создайте таблицу employees или проверьте имя таблицы.",
      );
    }

    throw error;
  }

  return data ?? [];
}

function isMissingEmployeesTableError(error: { code?: string; message?: string }) {
  return (
    error.code === "PGRST205" ||
    error.code === "42P01" ||
    error.message?.toLowerCase().includes("employees") ||
    error.message?.toLowerCase().includes("could not find the table")
  );
}
