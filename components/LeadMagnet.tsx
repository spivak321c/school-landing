'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X, BookOpen, ChevronRight } from 'lucide-react';

export default function LeadMagnet() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !hasScrolled) {
        setIsOpen(true);
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <>
      {/* Sticky Sidebar Trigger */}
      <motion.button
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 100 }}
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-slate-900 text-white p-4 rounded-l-2xl shadow-2xl hover:bg-slate-800 transition-colors z-40 group flex items-center gap-3 border-y border-l border-slate-700"
      >
        <div className="flex flex-col items-center gap-2">
          <BookOpen className="w-6 h-6 text-amber-400" />
          <span className="writing-vertical-rl rotate-180 text-sm font-medium tracking-widest uppercase">
            Prospectus
          </span>
        </div>
        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-2 transition-all" />
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-10">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                  <Download className="w-8 h-8 text-amber-600" />
                </div>
                
                <h2 className="text-3xl font-serif text-slate-900 mb-4">
                  Unlock the Elite Academy Prospectus
                </h2>
                
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Discover our curriculum, campus facilities, and the success paths of our alumni. Join 200+ elite families who have already taken the first step.
                </p>

                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Parent&apos;s Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    Download PDF <Download className="w-4 h-4" />
                  </button>
                  
                  <p className="text-xs text-center text-slate-500 mt-4">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
