import React from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';
import { PROMPT_SUGGESTIONS, SUGGESTION_TRUNCATE } from '../../lib/constants';

export default function PromptEditor({ prompt, onPromptChange, mode, loading, wasEnhanced, enhancing, onEnhance, onRevert }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-[12.5px] font-medium text-neutral-700">
          Describe your {mode === 'image' ? 'image' : 'video'}
        </label>
        <div className="flex items-center gap-2">
          {wasEnhanced && (
            <button
              type="button"
              onClick={onRevert}
              disabled={loading}
              className="flex items-center gap-1 text-[11.5px] text-neutral-500 hover:text-neutral-900 transition disabled:opacity-50"
            >
              <RotateCcw className="w-3 h-3" /> Revert
            </button>
          )}
          <button
            type="button"
            onClick={onEnhance}
            disabled={loading || enhancing || !prompt.trim()}
            className="flex items-center gap-1 text-[11.5px] text-[#EF4444] hover:text-[#F87171] transition disabled:opacity-50"
          >
            <Sparkles className="w-3 h-3" /> {enhancing ? 'Enhancing…' : 'Enhance with AI'}
          </button>
        </div>
      </div>

      <textarea
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        disabled={loading}
        rows={3}
        placeholder="A cinematic shot of..."
        className="w-full resize-none rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-[13.5px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#EF4444]/30 disabled:opacity-60"
      />

      <div className="flex flex-wrap gap-1.5 mt-2">
        {PROMPT_SUGGESTIONS.map((s) => (
          <button
            key={s.id}
            type="button"
            disabled={loading}
            onClick={() => onPromptChange(s.text)}
            className="text-[11px] text-neutral-600 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 px-2 py-1 rounded-full transition disabled:opacity-50"
            title={s.text}
          >
            {s.text.length > SUGGESTION_TRUNCATE ? `${s.text.slice(0, SUGGESTION_TRUNCATE)}…` : s.text}
          </button>
        ))}
      </div>
    </div>
  );
}
