import React, { useEffect, useState } from 'react';
import { Settings2 } from 'lucide-react';
import { COOKIE_NOTICE_DELAY_MS, COOKIE_STORAGE_KEY } from '../lib/constants';

export default function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (dismissed) return undefined;
    const timerId = setTimeout(() => setShow(true), COOKIE_NOTICE_DELAY_MS);
    return () => clearTimeout(timerId);
  }, []);

  const dismiss = () => {
    localStorage.setItem(COOKIE_STORAGE_KEY, '1');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-xl bg-neutral-100 border border-neutral-200 shadow-2xl p-5 animate-in">
      <h4 className="text-neutral-900 font-semibold text-[15px]">Cookie Notice</h4>
      <p className="text-neutral-500 text-[12.5px] mt-2 leading-relaxed">
        Cinemora uses cookies. Essential cookies keep the site working. Others let us measure how the site is used, improve it, and see which campaigns bring people here.
      </p>
      <div className="mt-4 space-y-2">
        <button onClick={dismiss} className="w-full bg-white text-neutral-900 text-[13px] font-medium py-2 rounded-md hover:bg-neutral-200 transition">
          Dismiss
        </button>
        <button onClick={dismiss} className="w-full text-neutral-700 text-[13px] py-2 rounded-md border border-neutral-200 hover:bg-neutral-100 transition">
          Do Not Sell or Share My Personal Information
        </button>
        <button onClick={dismiss} className="w-full flex items-center justify-center gap-2 text-neutral-700 text-[13px] py-2 rounded-md border border-neutral-200 hover:bg-neutral-100 transition">
          <Settings2 className="w-3.5 h-3.5" /> Cookie Preferences
        </button>
      </div>
    </div>
  );
}
