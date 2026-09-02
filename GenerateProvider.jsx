import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const GenerateContext = createContext(null);

export function GenerateProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [presetTitle, setPresetTitle] = useState(null);

  const openGenerate = useCallback((title) => {
    setPresetTitle(title || null);
    setOpen(true);
  }, []);

  const closeGenerate = useCallback(() => {
    setOpen(false);
    setPresetTitle(null);
  }, []);

  const value = useMemo(() => ({ open, presetTitle, openGenerate, closeGenerate }), [open, presetTitle, openGenerate, closeGenerate]);

  return <GenerateContext.Provider value={value}>{children}</GenerateContext.Provider>;
}

export function useGenerate() {
  const ctx = useContext(GenerateContext);
  if (!ctx) throw new Error('useGenerate must be used within GenerateProvider');
  return ctx;
}
