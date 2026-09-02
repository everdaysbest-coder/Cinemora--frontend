import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const authClient = axios.create({
  baseURL: API,
  withCredentials: true,
});

export const REFERRAL_STORAGE_KEY = 'cinemora_referral_code';

export async function exchangeSessionId(sessionId) {
  let referralCode = null;
  try {
    referralCode = localStorage.getItem(REFERRAL_STORAGE_KEY);
  } catch { /* ignore */ }
  const { data } = await authClient.post('/auth/session', {
    session_id: sessionId,
    referral_code: referralCode || null,
  });
  if (data?.referral_applied) {
    try { localStorage.removeItem(REFERRAL_STORAGE_KEY); } catch { /* ignore */ }
  }
  return data;
}

export async function fetchCurrentUser() {
  const { data } = await authClient.get('/auth/me');
  return data;
}

export async function logout() {
  const { data } = await authClient.post('/auth/logout');
  return data;
}

// REMINDER: DO NOT HARDCODE THE URL, OR ADD ANY FALLBACKS OR REDIRECT URLS, THIS BREAKS THE AUTH
export function startGoogleLogin(redirectPath = '/') {
  const redirectUrl = window.location.origin + redirectPath;
  window.location.href = `https://auth.emergentagent.com/?redirect=${encodeURIComponent(redirectUrl)}`;
}
