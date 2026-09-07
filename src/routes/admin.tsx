import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ADMIN_NAV, ProductShell } from "@/components/app/shell";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <ProductShell nav={ADMIN_NAV} variant="admin" contextLabel="WEBWARHEADS operations">
      <Outlet />
    </ProductShell>
  );
}
