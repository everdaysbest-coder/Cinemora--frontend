import React from 'react';
import { Twitter, Youtube, Instagram, Github } from 'lucide-react';

const COLS = [
  {
    title: 'Products',
    items: ['Cinema Studio', 'Marketing Studio', 'Viral Presets', 'Canvas', 'Supercomputer', 'MCP & CLI'],
  },
  {
    title: 'Models',
    items: ['Seedance 2.5', 'Nano Banana Pro', 'Kling 2.5 Turbo', 'Google Veo 3', 'Sora 2', 'Flux Kontext'],
  },
  {
    title: 'Learn',
    items: ['Academy', 'Community', 'Blog', 'Docs', 'Guides', 'Changelog'],
  },
  {
    title: 'Company',
    items: ['About', 'Careers', 'Press', 'Contact', 'Privacy', 'Terms'],
  },
];

export default function Footer() {
  return (
    <footer className="px-3 lg:px-5 mt-16 border-t border-neutral-200 pt-10 pb-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        <div className="col-span-2">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[#EF4444] flex items-center justify-center">
              <span className="text-white font-black text-sm">C</span>
            </div>
            <span className="text-neutral-900 font-semibold">cinemora</span>
          </a>
          <p className="text-neutral-500 text-[13px] mt-3 max-w-xs">
            The AI-native creative suite. Create images, videos, and voice content from prompts or references.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {[
              { key: 'twitter', Icon: Twitter },
              { key: 'youtube', Icon: Youtube },
              { key: 'instagram', Icon: Instagram },
              { key: 'github', Icon: Github },
            ].map(({ key, Icon }) => (
              <a key={key} href="#" className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {COLS.map(col => (
          <div key={col.title}>
            <h5 className="text-neutral-900 text-[13px] font-semibold mb-3">{col.title}</h5>
            <ul className="space-y-2">
              {col.items.map(it => (
                <li key={it}>
                  <a href="#" className="text-neutral-500 hover:text-neutral-900 text-[12.5px] transition">{it}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-neutral-500 text-[12px]">&copy; 2026 Cinemora. All rights reserved.</p>
        <div className="flex items-center gap-4 text-[12px] text-neutral-500">
          <a href="#" className="hover:text-neutral-900 transition">Privacy</a>
          <a href="#" className="hover:text-neutral-900 transition">Terms</a>
          <a href="#" className="hover:text-neutral-900 transition">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
