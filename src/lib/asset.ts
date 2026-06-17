// Maakt van een pad (bv. '/bewijs/foto.png') een correcte URL onder het
// Vite base-path (op GitHub Pages is dat '/stijn-os/'). Externe links
// (http/https) worden ongemoeid gelaten.
export function withBase(path: string): string {
  if (/^https?:\/\//i.test(path)) return path
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
