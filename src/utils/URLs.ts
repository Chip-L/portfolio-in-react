export function getAssetUrl(urlFragment: string) {
  const assetsUrl = new URL("../../assets", import.meta.url).href;

  return `${assetsUrl}/${urlFragment}`;
}
