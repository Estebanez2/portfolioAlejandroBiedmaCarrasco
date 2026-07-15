const assetModules = import.meta.glob("../assets/{brand,projects}/**/*", {
  eager: true,
  import: "default",
  query: "?url",
});

const assetMap = new Map(
  Object.entries(assetModules).map(([path, url]) => [normalizeAssetPath(path), url]),
);

export const asset = (path) => {
  const normalizedPath = normalizeAssetPath(path);
  const url = assetMap.get(normalizedPath);

  if (!url) {
    throw new Error(`Asset not found: ${path}`);
  }

  return url;
};

export const projectAsset = (projectId, path) =>
  asset(`../assets/projects/${projectId}/${path}`);

function normalizeAssetPath(path) {
  return path.replaceAll("\\", "/").replace(/^\.\//, "");
}
