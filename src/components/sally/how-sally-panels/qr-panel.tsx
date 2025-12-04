'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function QRPanel({ isActive, status, caption }: { isActive: boolean; status: 'scanning' | 'connected'; caption: string }) {
  const [internalStatus, setInternalStatus] = useState<'scanning' | 'connected'>('scanning');
  
  useEffect(() => {
    if (isActive) {
      setInternalStatus('scanning');
      const timer = setTimeout(() => {
        setInternalStatus('connected');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-gray-50/70 rounded-xl">
      <div className="relative w-48 h-48">
        <motion.div
          className="absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-40 h-40 bg-white p-2 rounded-md shadow-inner">
             <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M10 10 H 40 V 40 H 10 Z M 15 15 V 35 H 35 V 15 Z M 22.5 22.5 H 27.5 V 27.5 H 22.5 Z M 60 10 H 90 V 40 H 60 Z M 65 15 V 35 H 85 V 15 Z M 72.5 22.5 H 77.5 V 27.5 H 72.5 Z M 10 60 H 40 V 90 H 10 Z M 15 65 V 85 H 35 V 65 Z M 22.5 72.5 H 27.5 V 77.5 H 22.5 Z M 60 60 H 65 V 65 H 60 Z M 65 65 H 70 V 70 H 65 Z M 70 60 H 75 V 65 H 70 Z M 75 60 H 80 V 65 H 75 Z M 80 60 H 85 V 65 H 80 Z M 85 60 H 90 V 65 H 85 Z M 60 70 H 65 V 75 H 60 Z M 75 70 H 80 V 75 H 75 Z M 80 75 H 85 V 80 H 80 Z M 85 80 H 90 V 85 H 85 Z M 60 85 H 65 V 90 H 60 Z M 65 85 H 70 V 90 H 65 Z M 70 85 H 75 V 90 H 70 Z M 45 45 H 55 V 55 H 45 Z" fill="#333" />
             </svg>
          </div>
        </motion.div>

        {internalStatus === 'scanning' && (
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-primary/80"
            animate={{ y: [0, 188] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ boxShadow: '0 0 12px 2px hsl(var(--primary))' }}
          />
        )}
        
        {internalStatus === 'connected' && (
           <motion.div 
             className="absolute inset-0 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.3, ease: [0.2, 0.9, 0.2, 1] }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 400, damping: 20 }}
              >
                <CheckCircle className="size-20 text-white" />
              </motion.div>
           </motion.div>
        )}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">{caption}</p>
    </div>
  );
}
