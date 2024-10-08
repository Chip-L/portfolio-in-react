export function getPublicUrl(urlFragment: string) {
  const assetsUrl = new URL("../../assets", import.meta.url).href;

  return `${assetsUrl}/${urlFragment}`;
}

export function getLocalAssetUrl(filename: string) {
  const assetsUrl = new URL("../assets", import.meta.url).href;

  return `${assetsUrl}/${filename}`;
}
