import React from 'react';
import { Image as ImageIcon, Video } from 'lucide-react';

export default function ModeTabs({ mode, onChange, disabled }) {
  const tabs = [
    { id: 'image', label: 'Image', Icon: ImageIcon },
    { id: 'video', label: 'Video', Icon: Video },
  ];
  return (
    <div className="flex gap-1 bg-neutral-100 rounded-lg p-1 w-fit">
      {tabs.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          disabled={disabled}
          onClick={() => onChange(id)}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-[13px] font-medium transition disabled:opacity-50 ${
            mode === id
              ? 'bg-white text-neutral-900 shadow-sm'
              : 'text-neutral-500 hover:text-neutral-900'
          }`}
        >
          <Icon className="w-3.5 h-3.5" /> {label}
        </button>
      ))}
    </div>
  );
}
