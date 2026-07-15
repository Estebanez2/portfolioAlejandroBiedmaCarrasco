const loadedImages = new Map();
const prefetchedAssets = new Set();

const IMAGE_EXTENSION = /\.(avif|webp|png|jpe?g|svg)(?:\?.*)?$/i;
const MODEL_EXTENSION = /\.(glb|gltf)(?:\?.*)?$/i;
const VIDEO_EXTENSION = /\.(mp4|webm|mov)(?:\?.*)?$/i;

export function preloadPortfolioAssets(...sources) {
  const { images, prefetch } = collectPortfolioAssets(sources);
  const timers = [];

  schedule(() => {
    images.forEach(preloadImage);
  }, timers);

  schedule(() => {
    prefetch.forEach(prefetchAsset);
  }, timers, 700);

  return () => {
    timers.forEach((timer) => cancelScheduledWork(timer));
  };
}

function collectPortfolioAssets(sources) {
  const images = new Set();
  const prefetch = new Set();

  const visit = (value) => {
    if (!value) return;

    if (typeof value === "string") {
      if (!isLocalAsset(value)) return;
      if (IMAGE_EXTENSION.test(value)) images.add(value);
      if (MODEL_EXTENSION.test(value) || VIDEO_EXTENSION.test(value)) prefetch.add(value);
      return;
    }

    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }

    if (typeof value === "object") {
      Object.values(value).forEach(visit);
    }
  };

  sources.forEach(visit);
  return { images, prefetch };
}

function preloadImage(src) {
  if (loadedImages.has(src)) return loadedImages.get(src);

  const image = new Image();
  image.decoding = "async";
  image.src = src;
  loadedImages.set(src, image);
  return image;
}

function prefetchAsset(href) {
  if (prefetchedAssets.has(href)) return;

  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = href;
  if (VIDEO_EXTENSION.test(href)) link.as = "video";
  if (MODEL_EXTENSION.test(href)) link.as = "fetch";
  document.head.appendChild(link);
  prefetchedAssets.add(href);
}

function schedule(callback, timers, delay = 0) {
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(callback, { timeout: delay + 1600 });
    timers.push({ type: "idle", id });
    return;
  }

  const id = window.setTimeout(callback, delay);
  timers.push({ type: "timeout", id });
}

function cancelScheduledWork(timer) {
  if (timer.type === "idle" && "cancelIdleCallback" in window) {
    window.cancelIdleCallback(timer.id);
    return;
  }

  if (timer.type === "timeout") {
    window.clearTimeout(timer.id);
  }
}

function isLocalAsset(url) {
  return !/^https?:\/\//i.test(url) && !url.startsWith("mailto:");
}
