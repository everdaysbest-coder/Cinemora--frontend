import axios from 'axios';
import { API_TIMEOUT_MS } from './constants';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

const client = axios.create({
  baseURL: API,
  timeout: API_TIMEOUT_MS,
  withCredentials: true,
});

export async function createCheckoutSession({ package_id, origin_url }) {
  const { data } = await client.post('/payments/checkout', {
    package_id,
    origin_url,
  });
  return data;
}

export async function getPaymentStatus(sessionId) {
  const { data } = await client.get(`/payments/status/${sessionId}`);
  return data;
}

export async function fetchUsage() {
  const { data } = await client.get('/usage/me');
  return data;
}

export async function enhancePrompt(prompt, mode = 'image') {
  const { data } = await client.post('/enhance/prompt', { prompt, mode });
  return data;
}

export async function generateImage(prompt, sessionId) {
  const { data } = await client.post('/generate/image', {
    prompt,
    session_id: sessionId,
  });
  return data;
}

export async function planFilm({ idea, scene_count = 5, scene_duration = 8 }) {
  const { data } = await client.post('/cinema/plan', { idea, scene_count, scene_duration });
  return data;
}

export async function generateScene({ prompt, duration = 8, aspect_ratio = '16:9', provider = 'pollinations', model = 'wan' }) {
  const { data } = await client.post('/cinema/scene', { prompt, duration, aspect_ratio, provider, model });
  return data;
}

export async function submitVideoJob({ prompt, duration = 8, aspect_ratio = '16:9', resolution = '720p', provider = 'pollinations', model = 'wan' }) {
  const { data } = await client.post('/generate/video', {
    prompt, duration, aspect_ratio, resolution, provider, model,
  });
  return data;
}

export async function getVideoJob(jobId) {
  const { data } = await client.get(`/generate/video/${jobId}`);
  return data;
}

export async function listProjects(limit = 12) {
  const { data } = await client.get('/projects', { params: { limit } });
  return data;
}

export async function createProject(payload) {
  const { data } = await client.post('/projects', payload);
  return data;
}

export async function likeProject(id) {
  const { data } = await client.post(`/projects/${id}/like`);
  return data;
}

export async function listPresets() {
  const { data } = await client.get('/presets');
  return data;
}

export async function signup(email) {
  const { data } = await client.post('/signup', { email });
  return data;
}

export async function getStats() {
  const { data } = await client.get('/stats');
  return data;
}

// ---- Referrals ----
export async function fetchMyReferral() {
  const { data } = await client.get('/referral/me', { withCredentials: true });
  return data;
}

export async function applyReferralCode(code) {
  const { data } = await client.post('/referral/apply', { code }, { withCredentials: true });
  return data;
}

// ---- Public gallery ----
export async function fetchExplore(kind, limit = 24) {
  const params = { limit };
  if (kind) params.kind = kind;
  const { data } = await client.get('/explore', { params });
  return data;
}

export async function fetchSharedProject(id) {
  const { data } = await client.get(`/share/${id}`);
  return data;
}

export async function fetchTrending(limit = 20) {
  const { data } = await client.get('/trending', { params: { limit } });
  return data;
}

export async function createPortalSession(returnUrl) {
  const { data } = await client.post('/payments/portal', { return_url: returnUrl }, { withCredentials: true });
  return data;
}
