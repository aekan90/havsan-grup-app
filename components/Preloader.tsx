"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: HAVSAN fade in (0-1.2sn)
    const timer1 = setTimeout(() => setStage(1), 1200);
    
    // Stage 1: Grup fade in (1.2-2.2sn)
    const timer2 = setTimeout(() => setStage(2), 2200);
    
    // Stage 2: İş kolları göster (2.2-3.5sn)
    const timer3 = setTimeout(() => setStage(3), 3500);
    
    // Stage 3: Tümü fade out, landing page (3.5-4sn)
    const timer4 = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: stage === 3 ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
        animate={{
          background: [
            "radial-gradient(circle, #4285F4 0%, transparent 70%)",
            "radial-gradient(circle, #EA4335 0%, transparent 70%)",
            "radial-gradient(circle, #FBBC05 0%, transparent 70%)",
            "radial-gradient(circle, #34A853 0%, transparent 70%)",
            "radial-gradient(circle, #4285F4 0%, transparent 70%)",
          ],
          x: [0, 100, 0, -100, 0],
          y: [0, -50, 100, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl opacity-20"
        animate={{
          background: [
            "radial-gradient(circle, #EA4335 0%, transparent 70%)",
            "radial-gradient(circle, #FBBC05 0%, transparent 70%)",
            "radial-gradient(circle, #34A853 0%, transparent 70%)",
            "radial-gradient(circle, #4285F4 0%, transparent 70%)",
            "radial-gradient(circle, #EA4335 0%, transparent 70%)",
          ],
          x: [0, -80, 0, 80, 0],
          y: [0, 80, -80, 0, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ x: "-50%", y: "-50%" }}
        animate={{
          background: [
            "radial-gradient(circle, #8875D6 0%, transparent 70%)",
            "radial-gradient(circle, #4285F4 0%, transparent 70%)",
            "radial-gradient(circle, #F3C242 0%, transparent 70%)",
            "radial-gradient(circle, #8875D6 0%, transparent 70%)",
          ],
          scale: [1, 1.2, 1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative flex flex-col items-center gap-6">
          {/* HAVSAN - Fade in with scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: stage >= 0 && stage < 3 ? 1 : 0,
              scale: stage >= 0 && stage < 3 ? 1 : 0.8
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="relative text-7xl md:text-9xl font-bold tracking-wider text-white"
          >
            <span className="relative z-10">HAVSAN</span>
            <motion.span
              className="absolute inset-0 z-0 bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent blur-sm"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              HAVSAN
            </motion.span>
          </motion.div>

          {/* Grup - Fade in after HAVSAN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: stage >= 1 && stage < 3 ? 1 : 0,
              y: stage >= 1 && stage < 3 ? 0 : 20
            }}
            transition={{ 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-4xl md:text-6xl font-light tracking-[0.3em] text-gray-400"
          >
            Grup
          </motion.div>

          {/* Divider Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: stage >= 2 && stage < 3 ? "200px" : 0,
              opacity: stage >= 2 && stage < 3 ? 1 : 0
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-transparent via-google-blue to-transparent"
          />

          {/* İş Kolları - Robotik | Yapay Zeka | Enerji */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: stage >= 2 && stage < 3 ? 1 : 0,
              y: stage >= 2 && stage < 3 ? 0 : 20
            }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex items-center gap-4 text-sm md:text-base text-gray-500 tracking-widest"
          >
            <motion.span
              animate={{ 
                color: stage >= 2 && stage < 3 ? "#4285F4" : "#6B7280"
              }}
              transition={{ duration: 0.4 }}
              className="font-medium"
            >
              Robotik
            </motion.span>
            <span className="text-gray-700">|</span>
            <motion.span
              animate={{ 
                color: stage >= 2 && stage < 3 ? "#8875D6" : "#6B7280"
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-medium"
            >
              Yapay Zeka
            </motion.span>
            <span className="text-gray-700">|</span>
            <motion.span
              animate={{ 
                color: stage >= 2 && stage < 3 ? "#F3C242" : "#6B7280"
              }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="font-medium"
            >
              Enerji
            </motion.span>
          </motion.div>
        </div>

        {/* Ambient Glow Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: stage >= 1 && stage < 3 ? [0, 0.15, 0] : 0
          }}
          transition={{ 
            duration: 3,
            repeat: stage >= 1 && stage < 3 ? Infinity : 0,
            ease: "easeInOut"
          }}
          style={{
            background: "radial-gradient(circle at center, rgba(66, 133, 244, 0.2) 0%, rgba(234, 67, 53, 0.1) 50%, transparent 70%)",
          }}
        />
      </div>
    </motion.div>
  );
}
