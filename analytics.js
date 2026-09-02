// Thin analytics helper — writes to PostHog (loaded from index.html) and to our
// own /api/track endpoint. Never throws.

import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const trackClient = axios.create({ baseURL: `${BACKEND_URL}/api`, withCredentials: true });

export function track(event, props = {}) {
  try {
    if (typeof window !== 'undefined' && window.posthog?.capture) {
      window.posthog.capture(event, props);
    }
  } catch { /* ignore */ }
  // Fire-and-forget server-side event log
  try {
    trackClient.post('/track', { event, props }).catch(() => {});
  } catch { /* ignore */ }
}

export function identify(userId, traits = {}) {
  try {
    if (typeof window !== 'undefined' && window.posthog?.identify) {
      window.posthog.identify(userId, traits);
    }
  } catch { /* ignore */ }
}
