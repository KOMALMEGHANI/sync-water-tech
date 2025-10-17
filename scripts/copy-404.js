import { cpSync, existsSync } from 'fs';
import { join } from 'path';

const dist = join(process.cwd(), 'dist');
const indexHtml = join(dist, 'index.html');
const notFound = join(dist, '404.html');
const srcFavicon = join(process.cwd(), 'src', 'assets', 'logo-2.png');
const distFavicon = join(dist, 'logo-2.png');

if (existsSync(indexHtml)) {
  try {
    cpSync(indexHtml, notFound);
    console.log('Copied dist/index.html to dist/404.html for SPA fallback.');
    // Copy favicon image to dist root for stable path
    cpSync(srcFavicon, distFavicon);
    console.log('Copied src/assets/logo-2.png to dist/logo-2.png');
  } catch (e) {
    console.error('Failed to copy 404.html:', e);
    process.exit(1);
  }
} else {
  console.error('dist/index.html not found. Run `npm run build` first.');
  process.exit(1);
}


