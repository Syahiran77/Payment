// Render video.html → output/bil_tnb_30s.mp4 (1080x1920, 30fps)
// Guna: node render.js [saat=30] [fps=30]
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DUR = +(process.argv[2] || 30);
const FPS = +(process.argv[3] || 30);
const dir = __dirname;
const frames = path.join(dir, 'output', 'frames');

(async () => {
  fs.rmSync(frames, { recursive: true, force: true });
  fs.mkdirSync(frames, { recursive: true });
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  await page.goto('file://' + path.join(dir, 'video.html'));
  await page.evaluate(() => Promise.all([document.fonts.ready, window.assetsReady]));

  const total = Math.round(DUR * FPS);
  for (let i = 0; i < total; i++) {
    await page.evaluate(t => window.render(t), i / FPS);
    await page.screenshot({ path: path.join(frames, `f${String(i).padStart(4, '0')}.jpg`), type: 'jpeg', quality: 92 });
    if (i % 150 === 0) console.log(`frame ${i}/${total}`);
  }
  await browser.close();

  const out = path.join(dir, 'output', `bil_tnb_${DUR}s.mp4`);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS),
    '-i', path.join(frames, 'f%04d.jpg'), '-c:v', 'libx264', '-pix_fmt', 'yuv420p',
    '-crf', '20', '-movflags', '+faststart', out], { stdio: 'inherit' });
  fs.rmSync(frames, { recursive: true, force: true });
  console.log('Siap:', out);
})();
