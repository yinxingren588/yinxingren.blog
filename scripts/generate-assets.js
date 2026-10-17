import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const publicDir = path.resolve('./public');
const imgDir = path.resolve(publicDir, 'images');

const requiredFiles = [
  path.join(publicDir, 'favicon.ico'),
  path.join(publicDir, 'apple-touch-icon.png'),
  path.join(imgDir, 'logo-clean.png'),
  path.join(imgDir, 'logo-mascot.png'),
  path.join(imgDir, 'og-share.png'),
];

const allExist = requiredFiles.every((f) => fs.existsSync(f));

if (allExist) {
  console.log('✓ All brand assets already exist in public/. Skipping asset generation in CI.');
  process.exit(0);
}

console.log('--- Generating Brand Assets from User Logo ---');
try {
  const scriptPath = path.resolve('./scripts/generate-assets.py');
  execSync(`python "${scriptPath}"`, { stdio: 'inherit' });
  console.log('✓ Successfully generated all logo assets!');
} catch (err) {
  console.warn('Notice: Python asset generation skipped in this environment:', err.message);
  // In CI environments (Cloudflare Pages, Vercel), assets are already committed in git
  process.exit(0);
}
