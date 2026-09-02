import React, { useMemo } from 'react';
import { VIDEO_PROVIDERS, VIDEO_ASPECTS } from '../../lib/constants';

export default function VideoOptions({ provider, onProviderChange, model, onModelChange, duration, onDurationChange, aspect, onAspectChange, disabled }) {
  const providerDef = useMemo(() => VIDEO_PROVIDERS.find((p) => p.id === provider) || VIDEO_PROVIDERS[0], [provider]);
  const modelDef = useMemo(
    () => providerDef.models.find((m) => m.id === model) || providerDef.models[0],
    [providerDef, model]
  );

  const handleProviderChange = (id) => {
    const def = VIDEO_PROVIDERS.find((p) => p.id === id);
    onProviderChange(id);
    onModelChange(def.models[0].id);
    onDurationChange(def.models[0].durations[0]);
  };

  const handleModelChange = (id) => {
    const def = providerDef.models.find((m) => m.id === id);
    onModelChange(id);
    if (def && !def.durations.includes(duration)) {
      onDurationChange(def.durations[0]);
    }
  };

  return (
    <div className="mt-3 grid grid-cols-2 gap-2.5">
      <div>
        <label className="text-[11.5px] font-medium text-neutral-600 block mb-1">Provider</label>
        <select
          value={provider}
          disabled={disabled}
          onChange={(e) => handleProviderChange(e.target.value)}
          className="w-full text-[13px] rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 disabled:opacity-60"
        >
          {VIDEO_PROVIDERS.map((p) => (
            <option key={p.id} value={p.id}>{p.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-[11.5px] font-medium text-neutral-600 block mb-1">Model</label>
        <select
          value={model}
          disabled={disabled}
          onChange={(e) => handleModelChange(e.target.value)}
          className="w-full text-[13px] rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 disabled:opacity-60"
        >
          {providerDef.models.map((m) => (
            <option key={m.id} value={m.id}>{m.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-[11.5px] font-medium text-neutral-600 block mb-1">Duration</label>
        <select
          value={duration}
          disabled={disabled}
          onChange={(e) => onDurationChange(Number(e.target.value))}
          className="w-full text-[13px] rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 disabled:opacity-60"
        >
          {(modelDef?.durations || []).map((d) => (
            <option key={d} value={d}>{d}s</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-[11.5px] font-medium text-neutral-600 block mb-1">Aspect ratio</label>
        <select
          value={aspect}
          disabled={disabled}
          onChange={(e) => onAspectChange(e.target.value)}
          className="w-full text-[13px] rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 disabled:opacity-60"
        >
          {VIDEO_ASPECTS.map((a) => (
            <option key={a.value} value={a.value}>{a.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
