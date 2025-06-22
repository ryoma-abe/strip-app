import { tools, ToolType } from "@/config/tools";

export default function ToolPage({ params }: { params: { tool: string } }) {
  const toolName = params.tool as ToolType;
  const tool = tools[toolName];
  return (
    <div>
      <h2>{tool.title}</h2>
    </div>
  );
}
