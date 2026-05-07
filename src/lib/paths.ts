export function withBase(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  const trimmedBase = base.endsWith("/") ? base : `${base}/`;
  const trimmedPath = path.replace(/^\//, "");

  if (!trimmedPath) {
    return trimmedBase;
  }

  return `${trimmedBase}${trimmedPath}`;
}
