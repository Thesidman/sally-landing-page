'use client';
import { cn } from '@/lib/utils';
import { Bot, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

type Message = {
    from: 'Sally' | 'Aisha';
    text: string;
}

const messages: Message[] = [
    { from: 'Sally', text: 'Hi Aisha — are you open to a quick demo next week?' },
    { from: 'Aisha', text: 'Yes — what times do you have?' },
    { from: 'Sally', text: 'I can propose: Tue 10am, Wed 3pm — which works?' },
];

export function PhoneScreenConversation() {
  return (
    <div className="h-full bg-gray-100/50 flex flex-col">
       <header className="p-3 bg-white/80 backdrop-blur-sm border-b border-gray-200/80 flex items-center gap-2">
         <div className="size-8 rounded-full bg-gray-300"></div>
         <div>
            <p className="font-semibold text-sm">Aisha Khan</p>
            <p className="text-xs text-gray-500">Online</p>
         </div>
       </header>
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className={cn("flex items-end gap-2", msg.from === 'Sally' ? "justify-end" : "justify-start")}>
             {msg.from === 'Aisha' && <div className="size-7 rounded-full bg-gray-300 flex-shrink-0" />}
            <div className={cn(
              "max-w-[80%] p-3 rounded-2xl shadow-sm text-sm", 
              msg.from === 'Sally' ? "bg-primary/20 rounded-br-none" : "bg-white rounded-bl-none"
            )}>
              <p>{msg.text}</p>
            </div>
             {msg.from === 'Sally' && <Bot className="size-5 mb-1 text-primary/70 flex-shrink-0"/>}
          </div>
        ))}
      </div>
      <footer className="p-4 bg-transparent mt-auto">
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ease: "easeOut" }}
            className="p-3 bg-white border border-amber-200/80 rounded-xl shadow-lg">
          <div className="flex items-start gap-2">
            <AlertTriangle className="size-4 text-amber-500 mt-0.5 flex-shrink-0"/>
            <div>
              <p className="font-semibold text-sm text-amber-800">Sally needs your input</p>
              <p className="text-xs text-amber-700 mt-0.5">Aisha asked a question Sally isn't sure how to answer.</p>
              <div className="mt-3 p-2 bg-gray-100 rounded-lg">
                <p className="text-xs font-medium text-gray-500 mb-1">Suggested Reply</p>
                <p className="text-sm text-gray-800">"Sure — let’s do tomorrow at 4pm"</p>
              </div>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
