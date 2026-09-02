import React from 'react';
import { Download, Check, Bookmark } from 'lucide-react';

export default function ImageResult({ image, caption, saved, onDownload, onSave, loading }) {
  if (!image || loading) return null;
  return (
    <div className="mt-4 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50">
      <img src={image} alt={caption || 'Generated'} className="w-full max-h-[420px] object-contain bg-black/5" />
      <div className="flex items-center justify-between p-3">
        <p className="text-[12px] text-neutral-500 truncate pr-3">{caption}</p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onDownload}
            className="flex items-center gap-1 text-[12px] text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-100 px-2.5 py-1.5 rounded-md transition"
          >
            <Download className="w-3.5 h-3.5" /> Download
          </button>
          <button
            type="button"
            onClick={onSave}
            disabled={saved}
            className="flex items-center gap-1 text-[12px] text-white bg-[#EF4444] hover:bg-[#F87171] disabled:opacity-60 px-2.5 py-1.5 rounded-md transition"
          >
            {saved ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
            {saved ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}
