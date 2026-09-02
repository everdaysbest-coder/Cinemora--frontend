import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const UsageContext = createContext(null);

/**
 * ⚠️ نسخة مبسّطة: لا تفرض حدود استخدام فعلية بعد (الباك اند يتحقق منها
 * أصلًا ويرجّع 429 عند التجاوز). هذا الـ Provider موجود فقط ليعرض نافذة
 * الترقية عند الحاجة، ويمكن توسيعه لاحقًا ليجلب /usage/me فعليًا.
 */
export function UsageProvider({ children }) {
  const [upgradePrompt, setUpgradePrompt] = useState(null);

  const triggerUpgrade = useCallback((payload) => setUpgradePrompt(payload), []);
  const closeUpgrade = useCallback(() => setUpgradePrompt(null), []);

  const value = useMemo(() => ({ upgradePrompt, triggerUpgrade, closeUpgrade }), [upgradePrompt, triggerUpgrade, closeUpgrade]);

  return <UsageContext.Provider value={value}>{children}</UsageContext.Provider>;
}

export function useUsage() {
  const ctx = useContext(UsageContext);
  if (!ctx) throw new Error('useUsage must be used within UsageProvider');
  return ctx;
}
