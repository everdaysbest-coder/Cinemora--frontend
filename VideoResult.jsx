import React from 'react';
import { Check, Bookmark } from 'lucide-react';

export default function VideoResult({ videoUrl, aspect, duration, job, loading, saved, onSave }) {
  if (loading) {
    return (
      <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-center">
        <p className="text-[13px] text-neutral-600">
          {job?.provider === 'fal' ? 'Rendering with Sora 2…' : 'Rendering your video…'}
        </p>
        <p className="text-[11.5px] text-neutral-400 mt-1">Status: {job?.status || 'submitting'}</p>
      </div>
    );
  }

  if (!videoUrl) return null;

  return (
    <div className="mt-4 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50">
      <video
        src={videoUrl}
        controls
        className={`w-full bg-black ${aspect === '9:16' ? 'max-h-[480px]' : 'max-h-[360px]'}`}
      />
      <div className="flex items-center justify-between p-3">
        <p className="text-[12px] text-neutral-500">{duration}s · {aspect}</p>
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
  );
}
