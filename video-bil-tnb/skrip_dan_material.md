# Skrip & Material — "Bil Elektrik Tiba-tiba Tinggi? Semak Sebelum Bayar" (30 s)

Gaya: lihat `style_guide.md`. Animasi contoh: `output/bil_tnb_30s.mp4`.

> ✅ **Disemak dengan audio Prof JJ (v2):** semakan meter oleh TNB **tanpa caj** (07:56), bacaan 30 minit di portal web (06:07),
> bandingkan kWh, bukan RM (03:28). Lihat `semakan_v2.md`.
> ⚠️ Masih perlu disahkan dengan TNB: nombor Careline, dan langkah "meter rosak → ditukar" (Prof JJ tidak sebut secara langsung).

---

## Skrip (Suara Latar + Teks Skrin)

| Masa | Babak | Suara latar (VO) | Teks di skrin | Visual |
|---|---|---|---|---|
| 0–3 s | **HOOK** | "Bil letrik bulan ni tiba-tiba RM387? Tunggu, jangan bayar dulu!" | Bil elektrik tiba-tiba **RM387?!** / *Jangan bayar dulu…* | Angka merah "slam", watak terkejut |
| 3–8 s | **RELATE** | "Rumah sama, guna barang sama… tapi bil naik mendadak. Rasa macam kena tipu, kan?" | Rumah sama. Guna sama. Tapi bil **naik?** | Cip perkakas: Aircon, Peti Sejuk, Water Heater, Mesin Basuh, Pam Air |
| 8–11 s | **SEMAK 1** | "Satu: jangan tengok RM dulu. Banding kWh bulan ini dengan bulan lepas." | ① Banding kWh bulan ini vs lepas | Bingkai telefon: SS bil (bacaan meter) |
| 11–14 s | **SEMAK 2** | "Dua: smart meter rekod penggunaan setiap 30 minit. App myTNB tunjuk harian; portal web myTNB tunjuk setiap 30 minit. Ada lonjakan masa tiada orang di rumah?" | ② Semak bacaan 30 min di myTNB | Bingkai telefon: SS graf penggunaan |
| 14–17 s | **SEMAK 3** | "Tiga: tutup semua suis. Meter masih bergerak? Mungkin ada arus bocor, atau meter rosak!" | ③ Tutup semua suis → meter masih bergerak? | Cip "Meter rosak?" merah |
| 17–25 s | **SOLUSI (SOP)** | "Jangan risau. Hubungi TNB dan tunjuk bil dua bulan. TNB akan datang semak meter, tanpa sebarang caj. Kalau meter memang rosak, ia ditukar." | SOP Tukar Meter TNB: 1 Hubungi TNB, tunjuk 2 bil · 2 TNB datang semak meter · 3 Meter rosak → ditukar · 4 Semakan meter tanpa caj | 4 cip bernombor masuk satu-satu, tanda ✓ hijau |
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
