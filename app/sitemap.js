export default async function sitemap() {
  const base = 'https://tu-dominio.com'
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/servicios`, lastModified: new Date() },
    { url: `${base}/industrias`, lastModified: new Date() },
    { url: `${base}/proyectos`, lastModified: new Date() },
    { url: `${base}/contacto`, lastModified: new Date() },
  ]
}
