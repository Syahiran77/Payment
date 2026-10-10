# Skrip & Material — "Bil Elektrik Tiba-tiba Tinggi? Semak Sebelum Bayar" (30 s)

Gaya: lihat `style_guide.md`. Animasi contoh: `output/bil_tnb_30s.mp4`.

> ⚠️ **Sahkan dengan TNB sebelum terbit:** nombor Careline (15454 / 1-300-88-5454), langkah permohonan
> pemeriksaan/penukaran meter dalam app myTNB, dan sama ada ada caj jika meter didapati tepat.
> Langkah SOP di bawah ialah ringkasan umum, bukan teks rasmi TNB.

---

## Skrip (Suara Latar + Teks Skrin)

| Masa | Babak | Suara latar (VO) | Teks di skrin | Visual |
|---|---|---|---|---|
| 0–3 s | **HOOK** | "Bil letrik bulan ni tiba-tiba RM387? Tunggu, jangan bayar dulu!" | Bil elektrik tiba-tiba **RM387?!** / *Jangan bayar dulu…* | Angka merah "slam", watak terkejut |
| 3–8 s | **RELATE** | "Rumah sama, guna barang sama… tapi bil naik mendadak. Rasa macam kena tipu, kan?" | Rumah sama. Guna sama. Tapi bil **naik?** | Cip perkakas: Aircon, Peti Sejuk, Water Heater, Mesin Basuh, Pam Air |
| 8–11 s | **SEMAK 1** | "Satu: banding nombor pada meter dengan bacaan dalam bil." | ① Banding bacaan meter vs bil | Bingkai telefon: SS bil (bacaan meter) |
| 11–14 s | **SEMAK 2** | "Dua: buka app myTNB, tengok graf kWh. Ada lonjakan luar biasa?" | ② Semak graf kWh di myTNB | Bingkai telefon: SS graf penggunaan |
| 14–17 s | **SEMAK 3** | "Tiga: tutup semua suis. Meter masih bergerak? Mungkin meter rosak!" | ③ Tutup semua suis → meter masih bergerak? | Cip "Meter rosak?" merah |
| 17–25 s | **SOLUSI (SOP)** | "Jangan risau. Buat aduan di myTNB atau Careline 15454. TNB akan jadualkan lawatan, juruteknik uji dan tukar meter, dan bil diselaraskan kalau memang meter bermasalah." | SOP Tukar Meter TNB: 1 Lapor (myTNB / 15454) · 2 TNB jadual lawatan · 3 Uji & tukar meter · 4 Bil diselaras | 4 cip bernombor masuk satu-satu, tanda ✓ hijau |
| 25–30 s | **CTA** | "Simpan video ni, kongsi dengan family. Follow untuk tips jimat bil!" | **Simpan & Kongsi!** | Cip Simpan / Kongsi / Follow, watak tunjuk |

**Kapsyen post (cadangan):**
> Bil letrik naik mendadak padahal guna sama? 😤 Semak 3 benda ni dulu sebelum bayar — dan ini SOP kalau meter rosak. Simpan & share! ⚡ #BilElektrik #TNB #TipsJimat

### Versi 15 s (jika perlu)
Hook (0–2.5) → Semak 1-2-3 serentak dalam satu skrin (2.5–7) → SOP 4 cip (7–12.5) → CTA (12.5–15).

---

## Material Diperlukan

### A. Tangkapan skrin sebenar (anda sediakan sendiri)
Letak dalam `video-bil-tnb/assets/` dengan nama tepat ini — video akan guna secara automatik
(jika tiada, kotak "GANTI" dipaparkan):

| Fail | Isi | Nota |
|---|---|---|
| `ss1.png` | Bil TNB — bahagian bacaan meter (semasa & sebelum) | **Kaburkan** nama, alamat, no. akaun |
| `ss2.png` | App myTNB — graf penggunaan kWh bulanan | Tunjuk satu bulan yang melonjak |
| `ss3.png` (pilihan) | App myTNB — skrin "Buat Aduan / Lapor" | Untuk babak SOP |
| `meter.jpg` (pilihan) | Foto meter sebenar di rumah | Boleh ganti SS1 |

Saiz cadangan: tangkapan skrin telefon menegak (contoh 1080 × 2340).

### B. Jenama
- Logo anda (PNG lutsinar) → ganti teks `[Logo Anda]` di kiri atas.
- Nama akaun / handle untuk babak CTA.

### C. Audio
- Suara latar 30 s (rakam guna skrip di atas; nada santai, laju sederhana ~150 patah perkataan/minit).
- Muzik latar bebas royalti, upbeat 100–110 BPM.
- SFX: pop (cip), whoosh (potongan), "ding" (tanda ✓).

### D. Watak
- Video ini guna **watak ilustrasi asal** (wanita bertudung, berkaca mata, kardigan) supaya tidak menyalin
  orang sebenar dalam video rujukan.
- Jika mahu orang sebenar: rakam diri sendiri/talent dengan latar kosong → buang latar (CapCut "Remove BG")
  → tambah garis luar putih 10 px.

### E. Alat
- Edit akhir: CapCut / Premiere (masukkan VO, muzik, SFX atas MP4 ini).
- Render semula animasi: `node render.js` (lihat README).
