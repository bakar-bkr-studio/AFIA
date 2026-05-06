import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, basename, extname } from 'path';

const IMAGES_DIR = './public/images';

const files = await readdir(IMAGES_DIR);
const pngFiles = files.filter(f => extname(f).toLowerCase() === '.png');

console.log(`\n🔧 Compression de ${pngFiles.length} images...\n`);

for (const file of pngFiles) {
  const inputPath = join(IMAGES_DIR, file);
  const outputName = basename(file, '.png') + '.webp';
  const outputPath = join(IMAGES_DIR, outputName);

  const before = (await stat(inputPath)).size;

  await sharp(inputPath)
    .webp({ quality: 85, effort: 6 })
    .toFile(outputPath);

  const after = (await stat(outputPath)).size;
  const savings = (((before - after) / before) * 100).toFixed(1);
  const beforeKB = (before / 1024).toFixed(0);
  const afterKB = (after / 1024).toFixed(0);

  console.log(`  ✅ ${file}`);
  console.log(`     ${beforeKB} KB → ${afterKB} KB  (−${savings}%)\n`);
}

console.log('✅ Compression terminée ! Les fichiers .webp sont dans public/images/');
