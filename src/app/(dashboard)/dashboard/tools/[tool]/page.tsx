import PageContainer from "@/components/ui/dashboard/page-container";
import PageHeader from "@/components/ui/dashboard/page-header";
import { tools, ToolType } from "@/config/tools";

export default function ToolPage({ params }: { params: { tool: string } }) {
  const toolName = params.tool as ToolType;
  const tool = tools[toolName];
  const ToolComponent = tool.component;
  return (
    <PageContainer>
      <PageHeader title={tool.title} description={tool.description} />
      <div className="max-w-2xl">
        <ToolComponent />
      </div>
    </PageContainer>
  );
}
