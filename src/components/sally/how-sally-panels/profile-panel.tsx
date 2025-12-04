'use client';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ProfilePanel({ name, role, tone, preview }: { name: string; role: string; tone: string; preview: string }) {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Avatar className="size-16">
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="tone">Voice</Label>
        <Select defaultValue={tone}>
          <SelectTrigger id="tone">
            <SelectValue placeholder="Select a tone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Friendly">Friendly</SelectItem>
            <SelectItem value="Direct">Direct</SelectItem>
            <SelectItem value="Formal">Formal</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Message Preview</Label>
        <div className="p-3 bg-gray-100 rounded-md text-sm text-gray-700 italic">
          "{preview}"
        </div>
      </div>
    </div>
  );
}
