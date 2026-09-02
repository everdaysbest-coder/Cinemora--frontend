import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { GenerateProvider, useGenerate } from './components/GenerateProvider';
import { UsageProvider } from './components/UsageProvider';
import ViralPresets from './components/ViralPresets';
import Footer from './components/Footer';
import CookieNotice from './components/CookieNotice';
import UpgradeModal from './components/UpgradeModal';
import GenerateModal from './components/GenerateModal';

function Header() {
  const { openGenerate } = useGenerate();
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="px-3 lg:px-5 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-[#EF4444] flex items-center justify-center">
            <span className="text-white font-black text-sm">C</span>
          </div>
          <span className="text-neutral-900 font-semibold">cinemora</span>
        </a>
        <button
          type="button"
          onClick={() => openGenerate(null)}
          className="flex items-center gap-1.5 bg-[#EF4444] hover:bg-[#F87171] text-white text-[13px] font-semibold px-3.5 py-1.5 rounded-md transition"
        >
          <Sparkles className="w-3.5 h-3.5" /> Generate
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const { openGenerate } = useGenerate();
  return (
    <section className="px-3 lg:px-5 pt-12 pb-6 text-center">
      <h1 className="text-neutral-900 text-3xl md:text-5xl font-black tracking-tight max-w-3xl mx-auto">
        Create images and videos from a single prompt
      </h1>
      <p className="text-neutral-500 text-[14px] md:text-[15px] mt-3 max-w-xl mx-auto">
        Cinemora turns your ideas into cinematic visuals in seconds — no cameras, no crew.
      </p>
      <button
        type="button"
        onClick={() => openGenerate(null)}
        className="mt-6 inline-flex items-center gap-2 bg-[#EF4444] hover:bg-[#F87171] text-white font-semibold text-sm px-5 py-2.5 rounded-md transition"
      >
        <Sparkles className="w-4 h-4" /> Start generating
      </button>
    </section>
  );
}

function GenerateModalHost() {
  const { open, presetTitle, closeGenerate } = useGenerate();
  return <GenerateModal open={open} onClose={closeGenerate} presetTitle={presetTitle} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <UsageProvider>
        <GenerateProvider>
          <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <ViralPresets />
            <Footer />
            <CookieNotice />
            <UpgradeModal />
            <GenerateModalHost />
          </div>
        </GenerateProvider>
      </UsageProvider>
    </BrowserRouter>
  );
}
