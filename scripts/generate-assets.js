import { execSync } from 'child_process';
import path from 'path';

console.log('--- Generating Brand Assets from User Logo ---');
try {
  const scriptPath = path.resolve('./scripts/generate-assets.py');
  execSync(`python "${scriptPath}"`, { stdio: 'inherit' });
  console.log('✓ Successfully generated all logo assets!');
} catch (err) {
  console.error('Error executing Python asset generator:', err.message);
  process.exit(1);
}
