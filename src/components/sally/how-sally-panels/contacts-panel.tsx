'use client';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const sampleContacts = [
  { name: 'Aisha Khan', number: '+919876543210', hint: 'woman' },
  { name: 'Ben Carter', number: '+14151234567', hint: 'man' },
  { name: 'Chloe Davis', number: '+442079460958', hint: 'woman' },
  { name: 'Daniel Evans', number: '+61290345678', hint: 'man' },
]

export function ContactsPanel({ selected, hint }: { selected: string[], hint: string }) {
  return (
    <div className="p-4 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold">Contacts</h4>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">Import CSV</Button>
          <Button size="sm">Pick from WhatsApp</Button>
        </div>
      </div>
      <div className="flex-1 space-y-2 overflow-y-auto pr-2 -mr-2">
        {sampleContacts.map(contact => (
          <div key={contact.number} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
            <Checkbox id={contact.number} defaultChecked={selected.includes(contact.number)} />
            <Avatar className="size-9">
               <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium text-sm">{contact.name}</p>
              <p className="text-xs text-muted-foreground">{contact.number}</p>
            </div>
            {contact.number === '+14151234567' && <Badge variant="secondary">{hint}</Badge>}
          </div>
        ))}
      </div>
    </div>
  );
}
