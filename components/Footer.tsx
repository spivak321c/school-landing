import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-serif text-white">Elite Academy</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Where potential becomes prestige. Preparing the next generation of global leaders through academic excellence and character development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Admissions</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">How to Apply</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Tuition & Financial Aid</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Visit Campus</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Important Dates</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Academics</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Curriculum Overview</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">College Counseling</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Faculty Directory</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Student Life</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li>123 Prestige Boulevard<br />Academic City, AC 12345</li>
              <li><a href="tel:+18005550199" className="hover:text-amber-400 transition-colors">+1 (800) 555-0199</a></li>
              <li><a href="mailto:admissions@eliteacademy.edu" className="hover:text-amber-400 transition-colors">admissions@eliteacademy.edu</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Elite Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
