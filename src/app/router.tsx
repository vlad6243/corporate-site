import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { ProtectedRoute, RootLayout } from "./RouteShell";
import { DashboardPage } from "../pages/DashboardPage";
import { EmployeesPage } from "../pages/EmployeesPage";
import { KnowledgeBasePage } from "../pages/KnowledgeBasePage";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { RequestsPage } from "../pages/RequestsPage";
import { SupportPage } from "../pages/SupportPage";

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <ProtectedRoute>
      <AppShell>
        <DashboardPage />
      </AppShell>
    </ProtectedRoute>
  ),
});

const knowledgeBaseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/knowledge-base",
  component: () => (
    <ProtectedRoute>
      <AppShell>
        <KnowledgeBasePage />
      </AppShell>
    </ProtectedRoute>
  ),
});

const employeesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employees",
  component: () => (
    <ProtectedRoute>
      <AppShell>
        <EmployeesPage />
      </AppShell>
    </ProtectedRoute>
  ),
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: () => (
    <ProtectedRoute>
      <AppShell>
        <ProjectsPage />
      </AppShell>
    </ProtectedRoute>
  ),
});

const requestsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/requests",
  component: () => (
    <ProtectedRoute>
      <AppShell>
        <RequestsPage />
      </AppShell>
    </ProtectedRoute>
  ),
});

const supportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/support",
  component: () => (
    <ProtectedRoute>
      <AppShell>
        <SupportPage />
      </AppShell>
    </ProtectedRoute>
  ),
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  knowledgeBaseRoute,
  employeesRoute,
  projectsRoute,
  requestsRoute,
  supportRoute,
  loginRoute,
]);

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
  notFoundMode: "root",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
