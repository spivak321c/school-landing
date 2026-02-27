import Hero from '@/components/Hero';
import LeadMagnet from '@/components/LeadMagnet';
import EvidenceEngine from '@/components/EvidenceEngine';
import SocialProof from '@/components/SocialProof';
import EnrollmentPath from '@/components/EnrollmentPath';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-amber-500/30 selection:text-slate-900">
      <Hero />
      <LeadMagnet />
      <EvidenceEngine />
      <SocialProof />
      <EnrollmentPath />
      <Footer />
    </main>
  );
}
