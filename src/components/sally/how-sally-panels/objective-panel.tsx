'use client';
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export function ObjectivePanel({ tags, context }: { tags: string[], context: string }) {
  return (
    <div className="p-6 space-y-6 bg-white rounded-xl h-full flex flex-col justify-center">
      <div className="space-y-3">
        <Label className="font-semibold">Objective</Label>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-base px-4 py-1.5 shadow-sm border-gray-200">{tag}</Badge>
          ))}
           <Badge variant="outline" className="text-base px-4 py-1.5 shadow-sm border-gray-200">Custom</Badge>
        </div>
      </div>
      <div className="space-y-3">
        <Label className="font-semibold">Context</Label>
        <Card className="p-4 text-sm bg-gray-50/80 border-gray-200/80 text-gray-800 shadow-inner">
          <p>{context}</p>
        </Card>
      </div>
       <div className="space-y-3">
        <Label className="fontsemibold">Follow-up Cadence</Label>
        <Select defaultValue="balanced">
          <SelectTrigger>
            <SelectValue placeholder="Select a cadence" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light (2 attempts)</SelectItem>
            <SelectItem value="balanced">Balanced (4 attempts)</SelectItem>
            <SelectItem value="persistent">Persistent (7 attempts)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
