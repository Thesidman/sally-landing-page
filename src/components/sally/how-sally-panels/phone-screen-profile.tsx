'use client';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";

export function PhoneScreenProfile() {
  return (
    <div className="h-full bg-gray-50 p-4 space-y-6">
        <header>
            <h1 className="font-semibold text-center text-lg text-gray-800">Your Profile</h1>
            <p className="text-center text-sm text-gray-500 mt-1">This helps Sally write like you.</p>
        </header>

      <div className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm">
        <Avatar className="size-16">
          <AvatarFallback className="text-2xl bg-gray-200">AH</AvatarFallback>
        </Avatar>
        <div>
          <input defaultValue="Alex Howard" className="text-lg font-semibold bg-transparent w-full outline-none" />
          <input defaultValue="Head of Growth" className="text-muted-foreground text-sm bg-transparent w-full outline-none" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="bio" className="px-1 font-medium text-gray-600">Bio</Label>
        <textarea id="bio" placeholder="Tell Sally a bit about yourself..." className="min-h-[80px] w-full text-sm p-3 rounded-xl border-gray-200/80 bg-white shadow-sm outline-none focus:ring-2 focus:ring-primary/50" defaultValue="I help SaaS companies scale their outbound sales. My focus is on creating authentic connections that lead to real pipeline, not just vanity metrics." />
      </div>
      
      <div className="p-4 bg-white rounded-xl shadow-sm">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
            <Label htmlFor="impersonation-mode" className="font-semibold">Reply as me</Label>
                <button>
                    <Info className="size-3.5 text-muted-foreground"/>
                </button>
            </div>
            <Switch id="impersonation-mode" defaultChecked className="data-[state=checked]:bg-primary"/>
        </div>
        <p className="text-xs text-gray-500 mt-2">When enabled, Sally will reply directly as you. Otherwise, Sally will reply as your assistant.</p>
      </div>
    </div>
  );
}
