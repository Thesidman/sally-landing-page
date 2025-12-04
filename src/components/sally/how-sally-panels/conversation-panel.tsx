'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Bot, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

type Message = {
    from: 'Sally' | 'Aisha';
    text: string;
    flag?: 'needs_touch';
    suggestedReply?: string;
}

export function ConversationPanel({ messages }: { messages: Message[] }) {
  return (
    <div className="p-6 flex flex-col h-full bg-gray-100/50 rounded-xl">
      <div className="flex-1 space-y-4 overflow-y-auto -mr-2 pr-2">
        {messages.map((msg, index) => (
          <div key={index} className={cn("flex items-end gap-2", msg.from === 'Sally' ? "justify-end" : "justify-start")}>
             {msg.from === 'Aisha' && <div className="size-7 rounded-full bg-gray-300 flex-shrink-0" />}
            <div className={cn(
              "max-w-[80%] p-3 rounded-2xl shadow-sm text-sm", 
              msg.from === 'Sally' ? "bg-primary/20 rounded-br-none" : "bg-white rounded-bl-none"
            )}>
              <p>{msg.text}</p>
              {msg.flag === 'needs_touch' && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-3 p-3 bg-amber-100/80 border border-amber-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="size-4 text-amber-600 mt-0.5"/>
                    <div>
                      <p className="font-semibold text-amber-800">Needs your touch</p>
                      <p className="text-xs text-amber-700">Sally needs help with this reply.</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Button size="sm" className="bg-white hover:bg-gray-50 text-foreground border shadow-sm">
                           "{msg.suggestedReply}"
                        </Button>
                         <Button size="sm" variant="ghost">Edit & Send</Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
             {msg.from === 'Sally' && <Bot className="size-5 mb-1 text-primary/70 flex-shrink-0"/>}
          </div>
        ))}
      </div>
    </div>
  );
}
