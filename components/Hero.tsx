'use client';

import Image from 'next/image';
import EligibilityStepper from './EligibilityStepper';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/1920/1080?random=1"
          alt="Students engaged in learning"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Copy */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6 tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                Applications Open for Fall 2026
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6">
                Where Potential Becomes <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Prestige.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
                Join a legacy of excellence. We don&apos;t just educate; we prepare your child for a future without limits. Discover if your family is a fit for our next cohort.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 overflow-hidden relative">
                      <Image 
                        src={`https://picsum.photos/100/100?random=${i + 10}`} 
                        alt="Parent" 
                        fill 
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
                <p>Join <strong className="text-white">200+ elite families</strong> already enrolled.</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Stepper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <EligibilityStepper />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
