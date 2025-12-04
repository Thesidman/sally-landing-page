'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export function QRPanel({ isActive, status, caption }: { isActive: boolean; status: string; caption: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-gray-50 rounded-lg">
      <div className="relative w-40 h-40">
        <motion.div
          className="absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-32 h-32 bg-white p-1 rounded">
             <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M10 10 H 40 V 40 H 10 Z M 15 15 V 35 H 35 V 15 Z M 22.5 22.5 H 27.5 V 27.5 H 22.5 Z M 60 10 H 90 V 40 H 60 Z M 65 15 V 35 H 85 V 15 Z M 72.5 22.5 H 77.5 V 27.5 H 72.5 Z M 10 60 H 40 V 90 H 10 Z M 15 65 V 85 H 35 V 65 Z M 22.5 72.5 H 27.5 V 77.5 H 22.5 Z M 60 60 H 65 V 65 H 60 Z M 65 65 H 70 V 70 H 65 Z M 70 60 H 75 V 65 H 70 Z M 75 60 H 80 V 65 H 75 Z M 80 60 H 85 V 65 H 80 Z M 85 60 H 90 V 65 H 85 Z M 60 70 H 65 V 75 H 60 Z M 75 70 H 80 V 75 H 75 Z M 80 75 H 85 V 80 H 80 Z M 85 80 H 90 V 85 H 85 Z M 60 85 H 65 V 90 H 60 Z M 65 85 H 70 V 90 H 65 Z M 70 85 H 75 V 90 H 70 Z M 45 45 H 55 V 55 H 45 Z" fill="#333" />
             </svg>
          </div>
        </motion.div>

        {isActive && status !== 'connected' && (
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-primary/50"
            animate={{ y: [0, 156] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ boxShadow: '0 0 10px 1px hsl(var(--primary))' }}
          />
        )}
        
        {status === 'connected' && (
           <motion.div 
             className="absolute inset-0 bg-primary/80 backdrop-blur-sm rounded-lg flex items-center justify-center"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.3 }}
            >
              <CheckCircle className="size-16 text-white" />
           </motion.div>
        )}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{caption}</p>
    </div>
  );
}
