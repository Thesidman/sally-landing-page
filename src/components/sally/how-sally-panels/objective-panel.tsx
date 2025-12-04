'use client';
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

export function ObjectivePanel({ tags, context }: { tags: string[], context: string }) {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <Label>Goal</Label>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label>Context</Label>
        <div className="p-3 text-sm bg-gray-100 rounded-md border text-gray-800">
          <p>{context}</p>
        </div>
      </div>
    </div>
  );
}
