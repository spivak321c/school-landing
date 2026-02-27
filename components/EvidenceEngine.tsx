'use client';

import { Award, GraduationCap, Users, Globe, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: GraduationCap,
    title: 'Ivy League Acceptance',
    description: '98% of our graduates are accepted into top-tier universities globally.',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-1',
    bg: 'bg-slate-900',
    text: 'text-white',
    iconColor: 'text-amber-400',
  },
  {
    icon: Globe,
    title: 'Global Curriculum',
    description: 'Bilingual immersion and international baccalaureate programs.',
    colSpan: 'col-span-1',
    bg: 'bg-emerald-900',
    text: 'text-white',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Users,
    title: '1:8 Faculty Ratio',
    description: 'Personalized attention ensuring no child is left behind or unchallenged.',
    colSpan: 'col-span-1',
    bg: 'bg-white',
    text: 'text-slate-900',
    iconColor: 'text-slate-600',
    border: 'border border-slate-200',
  },
  {
    icon: Award,
    title: 'Accredited Excellence',
    description: 'Recognized by the National Association of Independent Schools.',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    bg: 'bg-amber-500',
    text: 'text-slate-900',
    iconColor: 'text-slate-900',
  },
];

const comparison = [
  { feature: 'Average Class Size', us: '12 Students', them: '25+ Students' },
  { feature: 'College Counseling', us: 'Starts Grade 8', them: 'Starts Grade 11' },
  { feature: 'Extracurriculars', us: '50+ Programs', them: 'Limited Options' },
  { feature: 'Alumni Network', us: 'Global & Active', them: 'Local Only' },
];

export default function EvidenceEngine() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            The Architecture of Success
          </h2>
          <p className="text-lg text-slate-600">
            We don&apos;t just promise excellence; we engineer it. Our methodology is proven, our faculty is elite, and our results speak for themselves.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`rounded-3xl p-8 md:p-10 ${feature.bg} ${feature.text} ${feature.colSpan} ${feature.border || ''} relative overflow-hidden group`}
            >
              <div className="relative z-10">
                <feature.icon className={`w-12 h-12 mb-6 ${feature.iconColor}`} />
                <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
                <p className="opacity-90 leading-relaxed">{feature.description}</p>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-3 bg-slate-900 text-white p-6 font-medium text-sm uppercase tracking-wider">
              <div>The Standard</div>
              <div className="text-center text-amber-400">Elite Academy</div>
              <div className="text-right text-slate-400">Public/Other Private</div>
            </div>
            
            <div className="divide-y divide-slate-100">
              {comparison.map((row, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="grid grid-cols-3 p-6 items-center hover:bg-slate-50 transition-colors"
                >
                  <div className="font-medium text-slate-900">{row.feature}</div>
                  <div className="text-center font-bold text-emerald-700 flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> {row.us}
                  </div>
                  <div className="text-right text-slate-500">{row.them}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
