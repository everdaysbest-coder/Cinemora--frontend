import React from 'react';
import { VIRAL_PRESETS } from '../mock';
import { Play, ArrowUpRight } from 'lucide-react';
import { useGenerate } from './GenerateProvider';

export default function ViralPresets() {
  const { openGenerate } = useGenerate();
  return (
    <section className="px-3 lg:px-5 mt-10">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-neutral-900 text-2xl md:text-3xl font-black tracking-tight">
            <a href="#viral" className="hover:underline decoration-[#EF4444] underline-offset-4">Cinemora Viral Presets</a>
          </h2>
          <p className="text-neutral-500 text-[13px] mt-1">Big-budget visual effects, from explosions to surreal transformations.</p>
        </div>
        <a href="#all-presets" className="hidden sm:flex items-center gap-1 text-[13px] text-neutral-700 hover:text-neutral-900 transition">
          View all presets <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {VIRAL_PRESETS.map(p => (
          <div
            key={p.id}
            onClick={() => openGenerate(p.title)}
            className="group relative overflow-hidden rounded-lg bg-neutral-100 aspect-[3/4] cursor-pointer"
          >
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <div className="w-11 h-11 rounded-full bg-white/95 flex items-center justify-center shadow-lg">
                <Play className="w-4 h-4 text-black fill-black ml-0.5" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h4 className="text-neutral-900 font-bold text-[14px] tracking-tight">{p.title}</h4>
              <button onClick={(e) => { e.stopPropagation(); openGenerate(p.title); }} className="mt-1 opacity-0 group-hover:opacity-100 transition text-[11px] text-black bg-[#EF4444] hover:bg-[#F87171] font-semibold px-2.5 py-1 rounded">
                Generate
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <a href="#all" className="text-[13px] text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 px-4 py-2 rounded-full transition flex items-center gap-1.5">
          View all presets <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
