'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    question: "What grade is your child entering?",
    options: ["Pre-K to 5th", "Middle School (6-8)", "High School (9-12)"]
  },
  {
    question: "What is your primary goal for their education?",
    options: ["Academic Excellence", "Character Development", "Ivy League Preparation", "Holistic Growth"]
  },
  {
    question: "When are you looking to enroll?",
    options: ["Fall 2026", "Fall 2027", "Exploring Options"]
  }
];

export default function EligibilityStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!isComplete ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">
                Step {currentStep + 1} of {steps.length}
              </span>
              <div className="flex gap-1">
                {steps.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1 w-6 rounded-full transition-colors duration-300 ${idx <= currentStep ? 'bg-amber-400' : 'bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
            
            <h3 className="text-2xl font-serif text-white mb-6 leading-tight">
              {steps[currentStep].question}
            </h3>
            
            <div className="space-y-3 mt-auto">
              {steps[currentStep].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="w-full text-left px-5 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-200 group flex justify-between items-center"
                >
                  <span className="font-medium">{option}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">You&apos;re a great fit.</h3>
            <p className="text-slate-300 mb-8">
              Based on your answers, your child is an excellent candidate for our upcoming cohort. Let&apos;s begin the conversation.
            </p>
            <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] flex items-center justify-center gap-2">
              Start Your Application <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
