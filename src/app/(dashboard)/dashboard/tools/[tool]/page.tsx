import { tools } from "@/config/tools";

export default function ToolPage() {
  const tool = tools["image-generator"];
  return (
    <div>
      <h2>{tool.title}</h2>
    </div>
  );
}
