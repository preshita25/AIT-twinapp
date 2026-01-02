import { Button } from "@/components/ui/button";

export default function ParentInsight() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Parent Insight</h1>

      <div className="space-y-3 mb-6">
        <p>📊 Academic Progress: Strong</p>
        <p>🧠 Skill Growth: Logical & Creative</p>
        <p>⚠️ Needs Attention: Science consistency</p>
      </div>

      <Button className="w-full">Send Report to Parent</Button>
    </div>
  );
}
