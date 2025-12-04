'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const sampleContacts = [
  { name: 'Aisha Khan', number: '+919876543210', hint: 'woman', status: 'Warm' },
  { name: 'Ben Carter', number: '+14151234567', hint: 'man', status: 'High intent' },
  { name: 'Chloe Davis', number: '+442079460958', hint: 'woman', status: 'New' },
  { name: 'Daniel Evans', number: '+61290345678', hint: 'man', status: 'New' },
  { name: 'Eva Wilson', number: '+12125550123', hint: 'woman', status: 'Warm' },
  { name: 'Frank Miller', number: '+13105550987', hint: 'man', status: 'New' },
]

export function PhoneScreenContacts() {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <header className="p-4 bg-white/80 backdrop-blur-sm border-b border-gray-200/80">
        <h1 className="font-semibold text-center text-gray-800">Select Contacts</h1>
        <div className="flex gap-2 justify-center mt-2">
            <button className="text-xs font-medium text-gray-600 bg-gray-200/70 px-2 py-1 rounded-md">Import CSV</button>
            <button className="text-xs font-medium text-gray-600 bg-gray-200/70 px-2 py-1 rounded-md">Upload File</button>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {sampleContacts.map((contact, index) => (
          <div key={contact.number} className="flex items-center gap-3 p-2 rounded-lg bg-white shadow-sm">
            <Checkbox id={contact.number} defaultChecked={['+919876543210', '+14151234567'].includes(contact.number)} />
            <Avatar className="size-9">
              <AvatarImage src={`https://picsum.photos/seed/${100+index}/40/40`} data-ai-hint={contact.hint} />
               <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium text-sm text-gray-900">{contact.name}</p>
              <p className="text-xs text-gray-500">{contact.number}</p>
            </div>
             <Badge variant={contact.status === 'High intent' ? 'destructive' : contact.status === 'Warm' ? 'secondary': 'outline'} 
                className={
                    contact.status === 'High intent' ? 'bg-red-100 text-red-700 border-red-200' :
                    contact.status === 'Warm' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : ''
                }>
                {contact.status}
            </Badge>
          </div>
        ))}
      </div>
      <footer className="p-4 bg-white/80 backdrop-blur-sm border-t border-gray-200/80 mt-auto">
        <div className="text-center bg-primary/90 text-white text-sm font-semibold py-2 px-4 rounded-full">
            3 people selected
        </div>
      </footer>
    </div>
  );
}
