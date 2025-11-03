// scripts/generate-sitemap.ts
import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://dormesia.com'; // Changez par votre domaine
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');

interface Page {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

// Ajoutez toutes vos pages ici
const pages: Page[] = [
  {
    url: '',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  },
  {
    url: '/articles',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: '/ressources/guide-gratuit',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: '/ressources/quiz',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: '/ressources/calculateur',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: '/ressources/faq',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: '/formations',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  {
    url: '/a-propos',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: '/contact',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  },
];

function generateSitemapXML(pages: Page[]): string {
  const urlEntries = pages
    .map(
      (page) => `  <url>
    <loc>${DOMAIN}${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

function generateSitemap() {
  try {
    const xml = generateSitemapXML(pages);

    // Créer le dossier public s'il n'existe pas
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }

    // Écrire le fichier
    fs.writeFileSync(OUTPUT_PATH, xml);
    console.log('✅ Sitemap généré avec succès:', OUTPUT_PATH);
    console.log(`📄 ${pages.length} pages ajoutées au sitemap`);
  } catch (error) {
    console.error('❌ Erreur lors de la génération du sitemap:', error);
    process.exit(1);
  }
}

// Exécuter
generateSitemap();