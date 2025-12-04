import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CheckCircle2, CircleCheck, Clock, Sparkles, Zap } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { Button } from "../ui/button";

const conversations = [
  { id: 1, name: "Ankit", role: "Warm lead", tag: "Nurturing", color: "accent", avatar: "10", hint: "man" },
  { id: 2, name: "Sarah L.", role: "Demo booked", tag: "Booked", color: "primary-ghost", avatar: "11", hint: "woman" },
  { id: 3, name: "Michael P.", role: "Waiting reply", tag: "Waiting", color: "outline", avatar: "12", hint: "man" },
  { id: 4, name: "Jessica B.", role: "High intent", tag: "Nurturing", color: "accent", avatar: "13", hint: "woman" },
  { id: 5, name: "David C.", role: "New inquiry", tag: "New", color: "outline", avatar: "14", hint: "man" },
];

const actions = [
    { text: "Send follow-up on WhatsApp", status: "Scheduled", variant: "accent" },
    { text: "Share case studies", status: "Running", variant: "accent" },
    { text: "Propose 3 demo slots", status: "Done", variant: "primary-ghost" },
    { text: "Tag as 'warm - Q2'", status: "Done", variant: "primary-ghost" },
];

export function SallyUICard() {
  return (
    <div className="relative scale-[0.85] md:scale-100 group">
      <Card className="absolute -top-10 -left-20 z-10 w-auto p-3 shadow-xl bg-white/60 backdrop-blur-md rounded-2xl border border-white/30 transition-transform duration-500 group-hover:-translate-y-2 animate-float-delay">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-foreground whitespace-nowrap">Autonomous follow-ups</p>
          <Switch defaultChecked id="autonomous-mode" className="data-[state=checked]:bg-primary" />
        </div>
      </Card>
      
      <Card className="absolute -bottom-16 -right-24 z-10 w-48 p-3 shadow-xl bg-white/60 backdrop-blur-md rounded-2xl border border-white/30 transition-transform duration-500 group-hover:translate-y-2 animate-float">
        <p className="text-xs font-medium text-muted-foreground/70">Reply rate</p>
        <p className="text-4xl font-bold bg-gradient-to-r from-secondary to-destructive bg-clip-text text-transparent">
          +32%
        </p>
      </Card>

      <Card className="absolute -bottom-8 -left-24 z-10 w-auto p-3 shadow-xl bg-white/60 backdrop-blur-md rounded-2xl border border-white/30 transition-transform duration-500 group-hover:-translate-x-2 animate-float">
          <div className="flex items-center gap-2">
            <Clock className="size-5 text-accent-foreground" />
            <p className="text-sm font-medium text-foreground">Next: 4 demos this week</p>
          </div>
      </Card>

      <Card className="w-[900px] h-[450px] bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10">
        <CardContent className="p-0 flex h-full">
          <div className="w-[280px] p-4 border-r border-white/30 flex flex-col">
            <h3 className="font-headline text-lg font-medium text-foreground px-2">Conversations</h3>
            <div className="mt-4 -mx-2 flex-1 space-y-1 overflow-y-auto pr-1">
              {conversations.map((conv) => (
                <div key={conv.id} className={cn("flex items-center gap-3 p-2 rounded-lg cursor-pointer", conv.id === 1 ? "bg-white/70" : "hover:bg-white/40")}>
                  <Avatar className="size-9">
                    <AvatarImage src={`https://picsum.photos/seed/${conv.avatar}/40/40`} alt={conv.name} data-ai-hint={conv.hint} />
                    <AvatarFallback>{conv.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-foreground">{conv.name}</p>
                    <p className="text-xs text-muted-foreground">{conv.role}</p>
                  </div>
                  <Badge variant={conv.color as any} className="text-xs font-semibold">{conv.tag}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col bg-muted/20">
            <div className="p-4 border-b border-white/30 flex items-center gap-3 bg-white/20">
              <Avatar className="size-9"><AvatarImage src="https://picsum.photos/seed/10/40/40" alt="Ankit" data-ai-hint="man" /><AvatarFallback>A</AvatarFallback></Avatar>
              <div>
                <p className="font-medium text-foreground">Ankit</p>
                <div className="flex items-center gap-1.5"><WhatsappIcon className="size-3 text-muted-foreground" /><span className="text-xs text-muted-foreground">Active now</span></div>
              </div>
            </div>
            <div className="flex-1 p-6 space-y-4">
              <div className="flex justify-start"><div className="max-w-md p-3 rounded-t-xl rounded-br-xl bg-white shadow-sm"><p className="text-sm text-foreground">Hey, can we look at pricing next week?</p></div></div>
              <div className="flex justify-end">
                <div className="flex items-start gap-2 max-w-md">
                   <div className="mt-1 p-3 rounded-t-xl rounded-bl-xl bg-white shadow-sm"><p className="text-sm text-foreground">Already on it. I’ve checked your last call with Arjun and shared the custom pricing deck. Do you want me to propose 3 demo slots?</p></div>
                  <div className="size-8 flex-shrink-0 flex items-center justify-center rounded-full bg-primary"><Sparkles className="size-4 text-white" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[260px] p-4 border-l border-white/30 bg-white/20">
            <h3 className="font-headline text-lg font-medium text-foreground px-2">Playbook steps</h3>
            <div className="mt-4 space-y-2">
              {actions.map((action, i) => (
                <Button key={i} variant="ghost" className="w-full justify-start h-auto p-2 text-left bg-white/50 hover:bg-white/80">
                  <div className="flex items-center gap-3 w-full">
                    <div className={cn("size-7 rounded-md flex items-center justify-center", {
                      "bg-accent/70": action.variant === 'accent',
                      "bg-primary/20": action.variant === 'primary-ghost'
                    })}>
                      {action.status === 'Done' ? <CircleCheck className="size-4 text-primary" /> : <Zap className="size-4 text-accent-foreground" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{action.text}</p>
                      <p className={cn("text-xs", {
                        "text-accent-foreground": action.variant === 'accent',
                        "text-primary": action.variant === 'primary-ghost'
                      })}>{action.status}</p>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
