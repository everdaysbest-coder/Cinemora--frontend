import React, { useCallback } from 'react';
import { Sparkles, X, Loader2, Wand2 } from 'lucide-react';
import { createProject } from '../lib/api';
import { PROMPT_SUGGESTIONS } from '../lib/constants';
import { useGeneration } from '../hooks/useGeneration';
import ModeTabs from './generate/ModeTabs';
import PromptEditor from './generate/PromptEditor';
import VideoOptions from './generate/VideoOptions';
import ImageResult from './generate/ImageResult';
import VideoResult from './generate/VideoResult';

const DEFAULT_SUGGESTION = PROMPT_SUGGESTIONS[0].text;

function GenerateButtonLabel({ loading, mode, job, duration }) {
  if (!loading) {
    return (
      <>
        <Wand2 className="w-4 h-4" /> Generate {mode === 'image' ? 'image' : `${duration}s video`}
      </>
    );
  }

  if (mode === 'video') {
    const label = job?.provider === 'fal' ? 'Sora 2' : 'Free Video';
    const status = job ? `${label} — ${job.status}…` : 'Submitting job…';
    return (
      <>
        <Loader2 className="w-4 h-4 animate-spin" /> {status}
      </>
    );
  }

  return (
    <>
      <Loader2 className="w-4 h-4 animate-spin" /> Generating image…
    </>
  );
}

export default function GenerateModal({ open, onClose, presetTitle, initialMode = 'image' }) {
  const g = useGeneration({
    open,
    presetTitle,
    initialMode,
    defaultSuggestion: DEFAULT_SUGGESTION,
  });

  const saveImage = useCallback(async () => {
    if (!g.image) return;
    try {
      await createProject({
        title: g.prompt.slice(0, 60),
        author: '@you',
        prompt: g.prompt,
        image_base64: g.image.split(',')[1],
        kind: 'image',
        public: true,
      });
      g.setSaved(true);
    } catch (e) {
      g.setError('Could not save project');
    }
  }, [g]);

  const saveVideo = useCallback(async () => {
    if (!g.videoUrl) return;
    try {
      await createProject({
        title: g.prompt.slice(0, 60),
        author: '@you',
        prompt: g.prompt,
        image_url: g.videoUrl,
        kind: 'video',
        public: true,
      });
      g.setSaved(true);
    } catch (e) {
      g.setError('Could not save project');
    }
  }, [g]);

  const downloadImage = useCallback(() => {
    if (!g.image) return;
    const a = document.createElement('a');
    a.href = g.image;
    a.download = `cinemora-${Date.now()}.png`;
    a.click();
  }, [g.image]);

  if (!open) return null;

  const handleGenerate = g.mode === 'image' ? g.runImageGeneration : g.runVideoGeneration;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-neutral-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#EF4444]" />
            <h3 className="text-neutral-900 font-semibold text-[15px]">
              Generate with Cinemora {presetTitle ? `— ${presetTitle}` : ''}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-5 pt-4">
          <ModeTabs mode={g.mode} onChange={g.setMode} disabled={g.loading} />
        </div>

        <div className="p-5">
          <PromptEditor
            prompt={g.prompt}
            onPromptChange={g.setPrompt}
            mode={g.mode}
            loading={g.loading}
            wasEnhanced={g.wasEnhanced}
            enhancing={g.enhancing}
            onEnhance={g.enhanceWithClaude}
            onRevert={g.revertEnhance}
          />

          {g.mode === 'video' && (
            <VideoOptions
              provider={g.provider}
              onProviderChange={g.setProvider}
              model={g.model}
              onModelChange={g.setModel}
              duration={g.duration}
              onDurationChange={g.setDuration}
              aspect={g.aspect}
              onAspectChange={g.setAspect}
              disabled={g.loading}
            />
          )}

          <button
            type="button"
            onClick={handleGenerate}
            disabled={g.loading || !g.prompt.trim()}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-[#EF4444] hover:bg-[#F87171] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm py-2.5 rounded-md transition"
          >
            <GenerateButtonLabel
              loading={g.loading}
              mode={g.mode}
              job={g.job}
              duration={g.duration}
            />
          </button>

          {g.error && (
            <div className="mt-3 text-[12.5px] text-red-400 bg-red-500/5 border border-red-500/20 rounded-md px-3 py-2">
              {g.error}
            </div>
          )}

          {g.mode === 'image' && (
            <ImageResult
              image={g.image}
              caption={g.caption}
              saved={g.saved}
              onDownload={downloadImage}
              onSave={saveImage}
              loading={g.loading}
            />
          )}

          {g.mode === 'video' && (
            <VideoResult
              videoUrl={g.videoUrl}
              aspect={g.aspect}
              duration={g.duration}
              job={g.job}
              loading={g.loading}
              saved={g.saved}
              onSave={saveVideo}
            />
          )}
        </div>
      </div>
    </div>
  );
}
