# 🌤️ Weather App

Aplikasi cuaca berbasis web yang dibangun dengan **Next.js**, **TypeScript**, dan **Tailwind CSS**. Aplikasi ini menampilkan informasi cuaca terkini berdasarkan lokasi pengguna dengan tampilan antarmuka yang modern dan responsif.

[Kunjungi Web nya](https://abydanu-weather-app.vercel.app/)
---

## ✨ Fitur

- Menampilkan cuaca saat ini berdasarkan lokasi pengguna
- Menggunakan Geolocation API dari browser
- UI bersih dan minimalis dengan Tailwind CSS
- Dikembangkan dengan arsitektur modern Next.js 15 App Router
- Menyediakan data cuaca secara real-time

---

## 🧰 Teknologi yang Digunakan

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [WeatherAPI](https://www.weatherapi.com)

---

## 🚀 Cara Menjalankan Proyek

1. **Clone repository**

```bash
git clone https://github.com/abydanu/weather-app.git
cd weather-app
```
2. **Install dependensi**

```bash
npm install
# atau
yarn install
```
3. **Siapkan file environment**

buat file **.env** di direktori root, lalu isi seperti ini
```bash
WEATHER_API_KEY = # masukkan_api_key_anda_disini
```

4. **Jalankan aplikasi**

```bash
npm run dev
# atau
yarn dev
```
Buka http://localhost:3000 di browser

---

## 📁 Struktur Folder

```bash
├── app/
│   ├── component/       # Komponen UI
│   ├── utils/           # Fungsi utilitas
│   ├── layout.tsx       # Layout utama aplikasi
│   └── page.tsx         # Halaman utama
├── public/              # Aset publik (ikon)
├── package.json         # Konfigurasi npm dan dependensi
├── next.config.ts       # Konfigurasi Next.js
└── tsconfig.json        # Konfigurasi TypeScript

```

