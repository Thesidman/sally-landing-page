'use client';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export function ProfilePanel({ name, role, tone, preview }: { name: string; role: string; tone: string; preview: string }) {
  return (
    <div className="p-6 space-y-6 bg-white rounded-xl h-full">
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
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" placeholder="Tell Sally a bit about yourself..." className="min-h-[80px]" defaultValue="I help SaaS companies scale their outbound sales. My focus is on creating authentic connections that lead to real pipeline, not just vanity metrics." />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
           <Label htmlFor="impersonation-mode">Impersonation Mode</Label>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild><button><Info className="size-3.5 text-muted-foreground"/></button></TooltipTrigger>
                    <TooltipContent><p>Choose if Sally should speak as you, or as an assistant.</p></TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
        <div className="flex items-center space-x-2">
            <Label htmlFor="impersonation-mode" className="text-sm">Speak as my assistant</Label>
            <Switch id="impersonation-mode" />
            <Label htmlFor="impersonation-mode" className="text-sm font-medium">Speak as me</Label>
        </div>
      </div>
    </div>
  );
}
