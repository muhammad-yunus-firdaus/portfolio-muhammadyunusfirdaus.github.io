/**
 * compress-images.js
 * ──────────────────
 * Mengompres semua gambar PNG & JPG di folder public/ menggunakan sharp.
 * - PNG  → WebP (quality 82)
 * - JPG  → WebP (quality 85)
 * 
 * File asli TIDAK dihapus. File .webp baru dibuat di sebelah file lama.
 * Jalankan: node scripts/compress-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const QUALITY_PNG = 82;
const QUALITY_JPG = 85;

// Rekursif cari semua file PNG/JPG
function getAllImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllImages(fullPath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

async function compressImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  // Skip jika output sudah ada
  if (fs.existsSync(outputPath)) {
    console.log(`  ⏭  Skipped (already exists): ${path.basename(outputPath)}`);
    return null;
  }

  const beforeSize = fs.statSync(inputPath).size;
  const quality = ext === '.png' ? QUALITY_PNG : QUALITY_JPG;

  await sharp(inputPath)
    .webp({ quality })
    .toFile(outputPath);

  const afterSize = fs.statSync(outputPath).size;
  const savedKB = ((beforeSize - afterSize) / 1024).toFixed(1);
  const savedPct = ((1 - afterSize / beforeSize) * 100).toFixed(0);

  return { inputPath, outputPath, beforeSize, afterSize, savedKB, savedPct };
}

async function main() {
  console.log('\n🗜️  Image Compression Script (PNG/JPG → WebP)\n');
  
  const images = getAllImages(PUBLIC_DIR);
  console.log(`Found ${images.length} images to process...\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  const results = [];

  for (const imgPath of images) {
    const rel = path.relative(PUBLIC_DIR, imgPath);
    process.stdout.write(`  Processing: ${rel}... `);
    
    try {
      const result = await compressImage(imgPath);
      if (result) {
        totalBefore += result.beforeSize;
        totalAfter += result.afterSize;
        results.push(result);
        console.log(`✅ -${result.savedKB}KB (${result.savedPct}% smaller)`);
      }
    } catch (err) {
      console.log(`❌ Error: ${err.message}`);
    }
  }

  console.log('\n─────────────────────────────────────────');
  console.log(`📦 Total before: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📦 Total after:  ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Total saved:  ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(2)} MB`);
  console.log('─────────────────────────────────────────');
  console.log('\n✅ Done! WebP files created next to originals.');
  console.log('   Next step: Update image paths in portfolioData.js & Certificates component');
  console.log('   to use .webp extension instead of .png/.jpg\n');
}

main().catch(console.error);
