# Style Guide — Video Pendek "Kad Kuning"

> **Sumber rujukan:** frame yang dimuat naik (latar kuning bergrid, tajuk hitam tebal, cip berbentuk pil).
> Pautan YouTube (`S4tnEyljXgY`) dan Facebook tidak dapat dibuka dari persekitaran ini (proxy menyekatnya).
> Jadi bahagian **kelajuan potongan** dan **cara video keluar** ialah anggaran berdasarkan gaya reel
> "explainer" yang sama jenis. Semak dengan video asal dan ubah nilai di bawah jika berbeza.
>
> Kita tiru **gaya** sahaja. Jangan guna logo, watak sebenar, ayat atau isi video asal.

---

## 1. Format

| Perkara | Nilai |
|---|---|
| Nisbah | 9:16 menegak (1080 × 1920) |
| FPS | 30 |
| Panjang | 30 s (versi pendek: 15 s) |
| Zon selamat | 120 px atas, 260 px bawah (kapsyen IG/TikTok), 64 px kiri/kanan |

## 2. Warna

| Token | Hex | Kegunaan |
|---|---|---|
| `--bg` | `#F7BD23` | Latar kuning penuh |
| `--grid` | `rgba(0,0,0,0.06)` | Garisan grid 60 px di atas latar |
| `--ink` | `#151515` | Semua teks, bingkai cip, bayang keras |
| `--paper` | `#FFFFFF` | Isi cip, garis luar pelekat watak, coretan hiasan |
| `--alert` | `#E5432D` | Hanya untuk angka "masalah" (RM, amaran) |
| `--ok` | `#1E9E5A` | Hanya untuk tanda ✓ / penyelesaian |

Peraturan: kuning + hitam + putih ialah 90% skrin. Merah dan hijau ialah aksen, sekali sahaja setiap babak.

## 3. Fon

- **Tajuk:** sans-serif geometri yang sangat tebal (Black/900), huruf kecil + besar biasa, jarak huruf rapat (`-0.03em`).
  Dalam asal kelihatan seperti *Poppins Black / Archivo Black*. Fail ini guna **Inter Black** (ada dalam sistem).
- **Saiz:** tajuk 96–140 px; perkataan kunci boleh 1.3× lebih besar daripada perkataan lain dalam baris sama.
- **Cip:** sama keluarga fon, ExtraBold 800, 38–44 px.
- Teks sentiasa rata kiri, bermula pada x = 64 px (seperti "Tapi anda cuma").

## 4. Elemen grafik

1. **Cip pil** — latar putih, bingkai hitam 4 px, bucu bulat penuh, **bayang keras** `6px 6px 0 #151515` (tiada blur), ikon garis kecil di kiri. Setiap cip senget rawak −4° hingga +4°.
2. **Coretan putih** — garisan pensel putih bersilang di bucu kanan atas (hiasan tetap).
3. **Pelekat logo** — kotak kecil berbingkai + nama jenama di kiri atas, sepanjang video.
4. **Watak pelekat** — watak potong (cut-out) dengan **garis luar putih tebal ~10 px**, sentiasa di bahagian bawah kanan, separuh badan, memandang kamera. Pose: tunjuk ke atas, terkejut, tangan di dagu.
5. **Bingkai telefon** — untuk tangkapan skrin sebenar: bucu 48 px, bingkai hitam 12 px, bayang keras sama seperti cip.

## 5. Gerakan teks

- **Perkataan demi perkataan:** setiap perkataan "pop" (skala 0 → 1.12 → 1, ease *back-out*) dengan jarak **80 ms**.
- **Perkataan kunci:** "slam" — masuk dari skala 1.8 ke 1 dalam 200 ms + goncangan kecil 2 kitaran.
- Tiada fade perlahan. Semua masuk < 300 ms.
- Teks kekal pegun selepas masuk (tiada gerakan berterusan) supaya mudah dibaca.

## 6. Gerakan cip & watak

- Cip masuk satu demi satu (jarak 100–150 ms), pop dengan overshoot, kemudian **terapung** perlahan (±4 px, kitaran 2 s, fasa berbeza setiap cip).
- Watak masuk dengan lompatan dari bawah (translateY 100% → 0, 350 ms, back-out), kemudian "bernafas" (skala 1 ↔ 1.015).
- Tukar pose watak = potongan terus (tiada animasi peralihan).

## 7. Kelajuan potongan & peralihan

- **Potongan keras** (hard cut) antara babak, tiada dissolve.
- Panjang babak: **1.5–3 s** untuk hook, **3–5 s** untuk isi, CTA 4–5 s.
- Latar kuning, grid, logo dan coretan **tidak pernah berubah** — hanya kandungan yang bertukar. Ini yang menjadikan potongan pantas terasa lancar.
- Bunyi: "pop" ringan setiap cip, "whoosh" pada setiap potongan, muzik lo-fi/upbeat 100–110 BPM, suara latar santai bahasa harian.

## 8. Cara video keluar (penutup)

- Babak CTA: tajuk besar + 3 cip tindakan (Simpan / Kongsi / Follow) + watak menunjuk.
- 0.5 s terakhir: semua elemen kekal pegun (frame boleh jadi thumbnail), tiada fade ke hitam.

## 9. Jangan

- Jangan guna gradien, bayang kabur atau lebih daripada 2 warna aksen.
- Jangan letak lebih daripada 6 cip dalam satu skrin.
- Jangan guna logo, wajah atau ayat dari video rujukan.
