import { createFileRoute, Link } from "@tanstack/react-router";
import { PenLine, Eye } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app/website/editor")({
  head: () => ({
    meta: [
      { title: "Website editor — WEBWARHEADS" },
      { name: "description", content: "Edit the content and sections of your website." },
      { property: "og:title", content: "Website editor — WEBWARHEADS" },
      { property: "og:description", content: "Edit the content and sections of your website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EditorPage,
});

function EditorPage() {
  return (
    <div className="grid gap-8">
      <PageHeader
        eyebrow="Website"
        title="Editor"
        description="Change your headlines, text and sections, then send it to our team to publish."
        actions={
          <Button variant="outline" size="sm" asChild>
            <Link to="/app/website">
              <Eye /> Back to website
            </Link>
          </Button>
        }
      />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState
          icon={PenLine}
          title="Nothing to edit yet"
          description="Once your website has been created, its sections and content will be editable here."
        />
      </Panel>
    </div>
  );
}
