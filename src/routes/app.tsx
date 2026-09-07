import { createFileRoute, Outlet } from "@tanstack/react-router";
import { APP_NAV, ProductShell } from "@/components/app/shell";

export const Route = createFileRoute("/app")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <ProductShell nav={APP_NAV} variant="app" contextLabel="Your business workspace">
      <Outlet />
    </ProductShell>
  );
}
