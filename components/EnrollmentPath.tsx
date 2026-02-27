'use client';

import { motion } from 'motion/react';
import { FileText, MapPin, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: '1. Apply Online',
    description: 'Submit your initial application and academic records securely through our portal.',
    color: 'text-amber-500',
    bg: 'bg-amber-100',
  },
  {
    icon: MapPin,
    title: '2. Campus Visit',
    description: 'Experience the Elite Academy environment firsthand with a personalized family tour.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
  },
  {
    icon: CheckCircle,
    title: '3. Enroll & Prepare',
    description: 'Receive your acceptance package and begin the onboarding process for the new term.',
    color: 'text-slate-900',
    bg: 'bg-slate-200',
  },
];

export default function EnrollmentPath() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-700 font-medium tracking-widest uppercase text-sm mb-4 block">
            The Path to Enrollment
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            A Seamless Journey to Excellence
          </h2>
          <p className="text-lg text-slate-600">
            We&apos;ve streamlined our admissions process to be as frictionless as possible, allowing you to focus on what matters: your child&apos;s future.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="text-center group"
              >
                <div className={`w-24 h-24 mx-auto rounded-full ${step.bg} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white`}>
                  <step.icon className={`w-10 h-10 ${step.color}`} />
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-5 px-10 rounded-full text-lg transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_50px_rgba(245,158,11,0.7)] flex items-center justify-center gap-3 mx-auto"
          >
            Begin Your Application
          </motion.button>
          <p className="text-sm text-slate-500 mt-6">
            Applications for Fall 2026 close on December 15th.
          </p>
        </div>
      </div>
    </section>
  );
}
