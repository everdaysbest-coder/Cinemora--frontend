// Shared constants
export const API_TIMEOUT_MS = 180000; // 3 minutes for long-running generation
export const CLIENT_TIMEOUT_MS = 60000; // default axios timeout
export const POLL_INTERVAL_MS = 3000;
export const SUGGESTION_TRUNCATE = 45;
export const COOKIE_NOTICE_DELAY_MS = 1200;
export const COOKIE_STORAGE_KEY = 'cinemora_cookie_dismissed';

export const VIDEO_PROVIDERS = [
  {
    id: 'pollinations',
    label: 'Free (Pollinations)',
    subtitle: 'Free · wan/seedance/nova-reel',
    models: [
      { id: 'wan', label: 'Wan 2.1', durations: [4, 6, 8, 10, 12, 15] },
      { id: 'seedance-2.0', label: 'Seedance 2.0', durations: [4, 6, 8, 10, 12, 15] },
      { id: 'veo', label: 'Veo', durations: [4, 6, 8] },
      { id: 'nova-reel', label: 'Nova Reel (long)', durations: [6, 12, 18, 24, 30, 60] },
    ],
  },
  {
    id: 'fal',
    label: 'Sora 2 (paid)',
    subtitle: 'Requires fal.ai credits',
    models: [
      { id: 'sora-2', label: 'Sora 2', durations: [4, 8, 12, 16, 20] },
    ],
  },
];

export const DEFAULT_VIDEO_PROVIDER = 'pollinations';
export const DEFAULT_VIDEO_MODEL = 'wan';
export const DEFAULT_VIDEO_DURATION = 8;

export const VIDEO_DURATIONS = [4, 8, 12, 16, 20];
export const VIDEO_ASPECTS = [
  { value: '16:9', label: '16:9  Landscape' },
  { value: '9:16', label: '9:16  Portrait' },
];

export const PROMPT_SUGGESTIONS = [
  { id: 'samurai', text: 'A cinematic shot of a lone samurai in falling cherry blossoms, dusk lighting' },
  { id: 'cyberpunk', text: 'Cyberpunk cityscape at night with neon reflections on wet pavement, wide angle' },
  { id: 'warrior', text: 'A dramatic portrait of a warrior with glowing tattoos in a dark forest' },
  { id: 'astronaut', text: 'An astronaut floating over an alien ocean under twin suns, hyper-realistic' },
  { id: 'castle', text: 'Fantasy castle on a floating island above the clouds, golden hour' },
];
