'use client';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const objectiveTags = ['Demo', 'Feedback', 'Re-engage', 'Intro', 'Custom'];

export function PhoneScreenObjective() {
  return (
    <div className="h-full bg-gray-50 p-4 space-y-6 flex flex-col">
       <header>
         <h1 className="font-semibold text-center text-lg text-gray-800">Define Objective</h1>
         <p className="text-center text-sm text-gray-500 mt-1">What's the goal of this conversation?</p>
       </header>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {objectiveTags.map(tag => (
            <Badge 
                key={tag} 
                variant={tag === 'Demo' ? 'default' : 'outline'}
                className={
                    "text-sm px-3 py-1 cursor-pointer " + 
                    (tag === 'Demo' ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-700')
                }
            >
                {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <label className="font-medium text-sm text-gray-600 px-1">Context</label>
        <Card className="p-3 text-sm bg-white text-gray-800 shadow-sm">
          <p className="font-mono text-xs text-gray-400">// Add notes for this conversation...</p>
          <p>Book a 15-min demo next week. Tone: casual but professional.</p>
        </Card>
      </div>
       <div className="space-y-3 mt-auto">
        <button className="w-full bg-primary text-white font-semibold py-3 rounded-full shadow-lg shadow-primary/20">
          Launch
        </button>
      </div>
    </div>
  );
}
