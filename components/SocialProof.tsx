'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "My son's confidence tripled in one term. The faculty doesn't just teach; they mentor. He's now leading the debate team and aiming for Stanford.",
    author: "Sarah Jenkins",
    role: "Parent of Grade 10 Student",
    image: "https://picsum.photos/200/200?random=21",
    roi: "Confidence & Leadership"
  },
  {
    quote: "We moved across the country specifically for Elite Academy. The STEM program is unparalleled, and the community is incredibly welcoming.",
    author: "Dr. Marcus Chen",
    role: "Parent of Grade 8 Student",
    image: "https://picsum.photos/200/200?random=22",
    roi: "Academic Rigor"
  },
  {
    quote: "The personalized attention my daughter receives is astounding. Her teachers know her learning style and challenge her exactly where she needs it.",
    author: "Elena Rodriguez",
    role: "Parent of Grade 12 Student",
    image: "https://picsum.photos/200/200?random=23",
    roi: "Personalized Growth"
  }
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-emerald-900/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-amber-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-4 block">
            Parent Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Don&apos;t Just Take Our Word For It
          </h2>
          <p className="text-lg text-slate-400">
            Hear from the families who have experienced the Elite Academy difference firsthand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl relative group hover:bg-white/10 transition-colors"
            >
              <Quote className="w-10 h-10 text-amber-500/20 absolute top-6 right-6 group-hover:text-amber-500/40 transition-colors" />
              
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
                  ROI: {testimonial.roi}
                </span>
                <p className="text-lg leading-relaxed text-slate-200 font-serif italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-700">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">{testimonial.author}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
