'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function PhoneScreenQR() {
  const [status, setStatus] = useState<'scanning' | 'connected'>('scanning');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('connected');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-gray-800 text-white">
      <h1 className="text-xl font-semibold mb-2">Link your WhatsApp</h1>
      <p className="text-sm text-gray-300 mb-8 text-center">Scan this code from the WhatsApp app to connect instantly.</p>
      
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 bg-gray-700/50 rounded-lg flex items-center justify-center p-2">
          <div className="w-full h-full bg-white p-2 rounded-md shadow-inner">
             <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M10 10 H 40 V 40 H 10 Z M 15 15 V 35 H 35 V 15 Z M 22.5 22.5 H 27.5 V 27.5 H 22.5 Z M 60 10 H 90 V 40 H 60 Z M 65 15 V 35 H 85 V 15 Z M 72.5 22.5 H 77.5 V 27.5 H 72.5 Z M 10 60 H 40 V 90 H 10 Z M 15 65 V 85 H 35 V 65 Z M 22.5 72.5 H 27.5 V 77.5 H 22.5 Z M 60 60 H 65 V 65 H 60 Z M 65 65 H 70 V 70 H 65 Z M 70 60 H 75 V 65 H 70 Z M 75 60 H 80 V 65 H 75 Z M 80 60 H 85 V 65 H 80 Z M 85 60 H 90 V 65 H 85 Z M 60 70 H 65 V 75 H 60 Z M 75 70 H 80 V 75 H 75 Z M 80 75 H 85 V 80 H 80 Z M 85 80 H 90 V 85 H 85 Z M 60 85 H 65 V 90 H 60 Z M 65 85 H 70 V 90 H 65 Z M 70 85 H 75 V 90 H 70 Z M 45 45 H 55 V 55 H 45 Z" fill="#333" />
             </svg>
          </div>
        </div>

        {status === 'scanning' && (
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-primary/80"
            animate={{ y: [0, 188] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ boxShadow: '0 0 12px 2px hsl(var(--primary))' }}
          />
        )}
        
        {status === 'connected' && (
           <motion.div 
             className="absolute inset-0 bg-primary/90 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center text-center"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.3, ease: [0.2, 0.9, 0.2, 1] }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 400, damping: 20 }}
              >
                <CheckCircle className="size-16 text-white" />
              </motion.div>
              <p className="mt-4 font-semibold">Connected!</p>
           </motion.div>
        )}
      </div>
    </div>
  );
}
