const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const certDir = path.join(__dirname, '..', 'public', 'certificates');

const files = [
  path.join(certDir, 'Panitia Kegiatan Ramadhan.webp'),
  path.join(certDir, 'Panitia_Riding The Waves Of Cyber Space _Muhammad Yunus Firdaus.webp')
];

async function recompress(file) {
  const before = fs.statSync(file).size;
  const tmp = file.replace('.webp', '_compressed.webp');

  const buffer = fs.readFileSync(file);
  await sharp(buffer)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 70, effort: 6 })
    .toFile(tmp);

  // Use copyFile + unlink of tmp, overwrite original via copyFile
  fs.copyFileSync(tmp, file);
  fs.unlinkSync(tmp);

  const after = fs.statSync(file).size;
  const name = path.basename(file);
  console.log('✅ ' + name.slice(0, 50));
  console.log('   ' + Math.round(before/1024) + ' KB → ' + Math.round(after/1024) + ' KB  (saved ' + Math.round((before-after)/1024) + ' KB, -' + Math.round((1-after/before)*100) + '%)');
}

(async () => {
  for (const f of files) {
    await recompress(f);
  }
  console.log('\nDone!');
})().catch(console.error);
