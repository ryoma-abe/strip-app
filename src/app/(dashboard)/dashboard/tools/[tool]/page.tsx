import PageContainer from "@/components/ui/dashboard/page-container";
import PageHeader from "@/components/ui/dashboard/page-header";
import { tools, ToolType } from "@/config/tools";

export default async function ToolPage({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool } = await params;
  const toolName = tool as ToolType;

  const toolConfig = tools[toolName];
  const ToolComponent = toolConfig.component;
  return (
    <PageContainer>
      <PageHeader
        title={toolConfig.title}
        description={toolConfig.description}
      />
      <div className="max-w-2xl">
        <ToolComponent />
      </div>
    </PageContainer>
  );
}
