/**
 * All remote images/videos used across the app — preloaded on first visit
 * so route changes hit the browser cache.
 */
export const MIXKIT_HERO_VIDEO = 'https://assets.mixkit.co/videos/11239/11239-720.mp4';
export const MIXKIT_HERO_POSTER = 'https://assets.mixkit.co/videos/11239/11239-thumb-720-0.jpg';

const RAW_IMAGES: string[] = [
  MIXKIT_HERO_POSTER,
  // Home + gallery
  'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=1000&auto=format&fit=crop',
  // Destinations
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-15804762679-948d840935e4?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=2400&auto=format&fit=crop',
  // Inner page heroes + content
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507608616759-54f48f0af692?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=2400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2400&auto=format&fit=crop',
];

/** Dedupe while preserving order */
export const PREFETCH_IMAGE_URLS: string[] = [...new Set(RAW_IMAGES)];

const SESSION_KEY = 'wildsafari-preload-v1';

export function isPreloadMarkedDone(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

export function markPreloadDone(): void {
  try {
    sessionStorage.setItem(SESSION_KEY, '1');
  } catch {
    /* private mode */
  }
}

function loadImage(url: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = url;
  });
}

const BATCH = 8;

/**
 * Preload all images in parallel batches; failures are ignored (still resolve).
 */
export async function prefetchAllImages(
  onProgress?: (loaded: number, total: number) => void,
): Promise<void> {
  const urls = PREFETCH_IMAGE_URLS;
  let loaded = 0;
  const total = urls.length;

  for (let i = 0; i < urls.length; i += BATCH) {
    const chunk = urls.slice(i, i + BATCH);
    await Promise.all(
      chunk.map(async (url) => {
        await loadImage(url);
        loaded += 1;
        onProgress?.(loaded, total);
      }),
    );
  }
}

/**
 * Warm HTTP cache for hero video (best-effort; may fail cross-origin).
 */
export function prefetchHeroVideo(): Promise<void> {
  return fetch(MIXKIT_HERO_VIDEO, { mode: 'cors', credentials: 'omit' })
    .then(() => undefined)
    .catch(() => undefined);
}

let preloadSingleton: Promise<void> | null = null;

export function runInitialPreload(
  onProgress?: (loaded: number, total: number) => void,
): Promise<void> {
  if (preloadSingleton) return preloadSingleton;

  preloadSingleton = (async () => {
    await Promise.all([prefetchAllImages(onProgress), prefetchHeroVideo()]);
  })();

  return preloadSingleton;
}
