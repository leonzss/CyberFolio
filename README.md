# CYBERFOLIO - Portofolio Website Bertema Cyberpunk

![CYBERFOLIO](https://via.placeholder.com/1200x630/0a0a0a/05d9e8?text=CYBERFOLIO)

## 📡 Deskripsi

CYBERFOLIO adalah website portofolio personal dengan tema cyberpunk yang menampilkan keterampilan dan proyek web development dalam tampilan futuristik yang mengesankan. Website ini dibangun menggunakan teknologi modern seperti Next.js, React, TypeScript, dan TailwindCSS dengan animasi yang menarik menggunakan Framer Motion.

## ✨ Fitur Utama

- 🌟 Desain futuristik dengan tema cyberpunk
- 🔄 Animasi halus dan efek visual menggunakan Framer Motion
- 📱 Responsif di semua ukuran perangkat
- 🌓 Efek neon dan glitch untuk meningkatkan estetika cyberpunk
- 🧩 Komponen modular yang mudah disesuaikan
- 🚀 Performa optimal dengan Next.js

## 🛠️ Teknologi yang Digunakan

- **Framework**: [Next.js](https://nextjs.org/) v14.2.24
- **Bahasa Pemrograman**: [TypeScript](https://www.typescriptlang.org/) v5
- **UI Library**: [React](https://reactjs.org/) v18
- **Styling**: [TailwindCSS](https://tailwindcss.com/) v3.4.1
- **Animasi**: 
  - [Framer Motion](https://www.framer.com/motion/) v12.5.0
  - [GSAP](https://greensock.com/gsap/) v3.12.7
- **Icons**: [Heroicons](https://heroicons.com/) v2.2.0
- **Font**: Geist Sans & Geist Mono (local fonts)

## 🚀 Cara Menjalankan Proyek

### Prasyarat

- Node.js (versi 18.x atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. Clone repositori ini
   ```bash
   git clone https://github.com/leonzss/portofolio-cyberpunk.git
   cd portofolio-cyberpunk
   ```

2. Instal dependensi
   ```bash
   npm install
   # atau
   yarn install
   ```

3. Jalankan server development
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda

## 📋 Struktur Proyek

```
portofolio-cyberpunk/
├── app/
│   ├── components/         # Komponen React
│   │   ├── Navbar.tsx      # Navigasi
│   │   ├── Hero.tsx        # Bagian hero
│   │   ├── About.tsx       # Bagian tentang
│   │   ├── Skills.tsx      # Bagian keterampilan
│   │   ├── Projects.tsx    # Bagian proyek
│   │   ├── Contact.tsx     # Bagian kontak
│   │   └── Footer.tsx      # Footer
│   ├── fonts/              # Font lokal
│   ├── globals.css         # Style global
│   ├── layout.tsx          # Layout utama
│   └── page.tsx            # Halaman utama
├── public/                 # Aset statis
├── tailwind.config.ts      # Konfigurasi Tailwind
└── package.json            # Dependensi dan skrip
```

## 🎨 Komponen

### Navbar
Navigasi responsif dengan efek hover dan animasi untuk menunjukkan bagian aktif.

### Hero
Bagian pembuka dengan animasi interaktif dan efek hover yang menarik.

### About
Bagian tentang dengan efek terminal dan animasi ketik.

### Skills
Menampilkan keterampilan teknis dengan bar progres yang dianimasikan.

### Projects
Galeri proyek dengan efek hover dan animasi border.

### Contact
Formulir kontak dengan desain terminal dan animasi pengiriman.

### Footer
Footer dengan tautan navigasi dan informasi kontak.

## ✨ Efek Visual dan Animasi

Website ini menampilkan berbagai efek visual dan animasi untuk menciptakan pengalaman cyberpunk yang imersif:

### Efek Neon
- Text shadow dan box shadow yang menyala dengan warna neon
- Efek hover dengan perubahan intensitas cahaya

### Efek Glitch
- Animasi glitch pada teks untuk efek digital distortion
- Pergeseran RGB untuk simulasi kerusakan digital

### Animasi Interaktif
- Animasi scroll-triggered menggunakan Framer Motion
- Efek parallax dan floating elements
- Animasi hover pada kartu proyek dan tombol

### Efek Terminal
- Animasi ketik (typewriter) di bagian About
- Desain terminal dengan kursor berkedip
- Simulasi command line interface

### Efek Lainnya
- Scanline overlay untuk efek layar CRT
- Gradient animasi untuk efek holografik
- Circuit board patterns untuk elemen dekoratif

## 🔧 Kustomisasi

### Mengubah Informasi Personal

Edit file komponen di direktori `app/components/` untuk mengubah:

- Nama dan deskripsi di `About.tsx`
- Keterampilan dan level di `Skills.tsx`
- Proyek di `Projects.tsx`
- Informasi kontak di `Contact.tsx` dan `Footer.tsx`

### Mengubah Warna

Warna tema cyberpunk didefinisikan di `tailwind.config.ts` dan `globals.css`. Ubah nilai warna untuk menyesuaikan tema:

```typescript
// tailwind.config.ts
colors: {
  'cyber-black': '#0a0a0a',
  'cyber-dark': '#121212',
  'cyber-gray': '#1e1e1e',
  'cyber-light': '#2a2a2a',
  'cyber-pink': '#ff2a6d',
  'cyber-blue': '#05d9e8',
  'cyber-purple': '#9d4edd',
  'cyber-green': '#39ff14',
  'cyber-yellow': '#f9c80e',
}
```

## 📱 Responsivitas

Website ini dirancang untuk bekerja dengan baik di berbagai ukuran layar:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🚀 Performa dan Optimasi

Website ini dioptimalkan untuk performa terbaik dengan menerapkan praktik-praktik berikut:

### Optimasi Gambar
- Penggunaan format gambar modern (WebP)
- Lazy loading untuk gambar
- Penggunaan placeholder dan blur-up technique

### Optimasi Font
- Font lokal untuk mengurangi request jaringan
- Font subsetting untuk mengurangi ukuran file
- Font display: swap untuk mencegah invisible text

### Optimasi JavaScript
- Code splitting otomatis dengan Next.js
- Lazy loading komponen dengan dynamic imports
- Penggunaan useCallback dan useMemo untuk optimasi render

### Optimasi CSS
- Purging CSS yang tidak digunakan dengan TailwindCSS
- Minimalisasi CSS di build production
- Penggunaan utility classes untuk mengurangi ukuran CSS

### Optimasi Rendering
- Server-side rendering dengan Next.js
- Penggunaan React.memo untuk mencegah render yang tidak perlu
- Optimasi Lighthouse score untuk Core Web Vitals

## 🚀 Deployment

### Build untuk Produksi

```bash
npm run build
# atau
yarn build
```

### Opsi Deployment

- [Vercel](https://vercel.com/) (Direkomendasikan untuk Next.js)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## 🤝 Kontribusi

Kontribusi selalu diterima! Jika Anda ingin berkontribusi:

1. Fork repositori
2. Buat branch fitur (`git checkout -b fitur-keren`)
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur keren'`)
4. Push ke branch (`git push origin fitur-keren`)
5. Buka Pull Request

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## 📞 Kontak

Jika Anda memiliki pertanyaan atau ingin terhubung:

- Email: anjasleonardi88@gmail.com
- GitHub: [github.com/leonzss](https://github.com/leonzss)
- LinkedIn: [linkedin.com/in/manjasleonardi](https://www.linkedin.com/in/manjasleonardi)

---

<p align="center">
  <img src="https://via.placeholder.com/100x100/0a0a0a/05d9e8?text=CF" alt="CYBERFOLIO Logo" width="100">
</p>
