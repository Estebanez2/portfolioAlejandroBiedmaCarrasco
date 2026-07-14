export const asset = (path) => new URL(path, import.meta.url).href;
export const projectAsset = (projectId, path) =>
  asset(`../assets/projects/${projectId}/${path}`);

