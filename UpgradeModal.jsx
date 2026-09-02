import React from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { useUsage } from './UsageProvider';
import { Link } from 'react-router-dom';
import { track } from '../lib/analytics';

const TIER_TARGET = {
  anonymous: 'starter',
  free: 'starter',
  starter: 'creator',
  creator: 'pro',
  pro: 'pro',
};

export default function UpgradeModal() {
  const { upgradePrompt, closeUpgrade } = useUsage();
  if (!upgradePrompt) return null;

  const currentTier = upgradePrompt.tier || 'free';
  const suggested = TIER_TARGET[currentTier] || 'creator';

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={closeUpgrade}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white border border-neutral-200 shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#EF4444]" />
          </div>
          <button
            type="button"
            onClick={closeUpgrade}
            className="w-8 h-8 rounded-full hover:bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <h3 className="text-neutral-900 text-lg font-bold mt-4">
          Time to upgrade
        </h3>
        <p className="text-neutral-600 text-[13.5px] mt-2 leading-relaxed">
          {upgradePrompt.message}
        </p>

        <div className="mt-5 flex flex-col gap-2">
          <Link
            to="/pricing"
            onClick={() => {
              track('upgrade_modal_cta_click', {
                code: upgradePrompt.code,
                current_tier: currentTier,
                suggested_tier: suggested,
              });
              closeUpgrade();
            }}
            className="w-full flex items-center justify-center gap-1.5 bg-[#EF4444] hover:bg-[#F87171] text-white font-semibold text-sm py-2.5 rounded-md transition"
          >
            See {suggested.charAt(0).toUpperCase() + suggested.slice(1)} plan
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={closeUpgrade}
            className="w-full text-neutral-500 hover:text-neutral-900 text-sm py-2 rounded-md transition"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
