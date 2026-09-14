// ─────────────── PALET MEREK — BPSP (Light / White) ───────────────
export const C = {
  bg: "#FFFFFF",
  card: "#FFFFFF",
  mist: "#F3F7FB",
  border: "#E2E8F0",
  navy: "#0D2C44",
  navyAlt: "#14415F",
  ink: "#16202A",
  inkAlt: "#4B5A6B",
  muted: "#7C8B9B",
  accent: "#0284C7",
  accentBright: "#38BDF8",
  accentSoft: "#E0F2FE",
  red: "#DC2626",
  redLight: "#FEE2E2",
  amber: "#D97706",
  amberLight: "#FEF3C7",
  good: "#059669",
  gold: "#EA580C",
};

export const COMPANY = "PT Tempopress Mining Indonesia";
export const WEEK_NEW = "7–13 Sep";
export const WEEK_PREV_NORMAL = "31 Agu–5 Sep"; // baseline minggu penuh sebelumnya

// ─────────────── DATA HASIL PERHITUNGAN (terverifikasi dari Excel) ───────────────
// CATATAN: Minggu 7–13 Sep adalah minggu operasi penuh pertama setelah restart
// akhir Agustus. Stock-In besar masuk 31 Agu–7 Sep (termasuk 22.000 L pada
// 7 Sep), sehingga posisi stok aman (~22.000 L EOD 13 Sep). Armada DT aktif
// 24 unit, EXC 12 unit — hampir kapasitas penuh.
//
// Catatan kualitas data:
// • DT-066 (7 Sep): Running HM hanya 1,0 jam untuk 338 L — hampir pasti
//   baseline HM/KM belum ter-update setelah idle (first-refueling style).
//   Record ini DIKECUALIKAN dari perhitungan fuel-ratio DT-066 dan armada.
// • Beberapa DT lama (DT-004, DT-007, DT-008) menunjukkan FR L/HM sangat
//   rendah (11–12) — perlu dicek apakah HM berjalan normal atau ada isu meter.
// • LV/Support tetap mencatat last_hm=0 (tidak relevan untuk LV); tidak
//   dihitung sebagai anomali first-refuel alat berat.
export const KPI = {
  totalWeek: 45279.36, // full week 7 hari, 225 transaksi
  totalPostResume: 45279.36, // seluruh minggu operasi penuh
  fleetRateExclMPS: 6468.5, // avg L/hari 7–13 Sep
  normalOpsBaseline: 6330.1, // baseline 31 Agu–5 Sep (6 hari)
  wowVsNormal: 2.2,
  dtFrHm: 23.18, // weighted, excl. DT-066 anomalous 7-Sep record
  dtFrKm: 1.358,
  excFrHm: 20.65,
  currentStock: 21979.0, // EOD 13 Sep (ledger reconstructed)
  runwayDaysLow: 3.0,
  runwayDaysHigh: 4.0,
};

export const CONSUMPTION_TREND = [
  { period: "Restart\n(27-30 Agu)", rate: 4233.2 },
  { period: "Baseline\n(31 Agu-5 Sep)", rate: 6330.1 },
  { period: "Minggu Ini\n(7-13 Sep)", rate: 6468.5 },
];

export const CAT_COMPARE = [
  { cat: "Produksi", new: 5795.08, base: 4358.68, wow: 32.96 },
  { cat: "MHR", new: 548.7, base: 445.8, wow: 23.1 },
  { cat: "Pendukung", new: 201.5, base: 183.8, wow: 9.7 },
];

export const DAILY_NEW = [
  {
    date: "7/9",
    day: "Sen",
    label: "Operasi Penuh + Stock-In",
    prod: 6407.7,
    mhr: 745.0,
    supp: 563.6,
    total: 7716.3,
  },
  {
    date: "8/9",
    day: "Sel",
    label: "Operasi Penuh",
    prod: 7291.1,
    mhr: 559.0,
    supp: 61.1,
    total: 7911.3,
  },
  {
    date: "9/9",
    day: "Rab",
    label: "Operasi",
    prod: 4184.1,
    mhr: 807.2,
    supp: 89.0,
    total: 5080.3,
  },
  {
    date: "10/9",
    day: "Kam",
    label: "Operasi",
    prod: 3980.4,
    mhr: 265.9,
    supp: 125.1,
    total: 4371.5,
  },
  {
    date: "11/9",
    day: "Jum",
    label: "Operasi",
    prod: 4315.8,
    mhr: 156.0,
    supp: 232.7,
    total: 4704.5,
  },
  {
    date: "12/9",
    day: "Sab",
    label: "Operasi Kuat",
    prod: 7004.1,
    mhr: 692.5,
    supp: 232.8,
    total: 7929.3,
  },
  {
    date: "13/9",
    day: "Min",
    label: "Operasi Kuat",
    prod: 6844.8,
    mhr: 614.9,
    supp: 106.5,
    total: 7566.2,
  },
];

// Armada DT — 24 unit aktif; DT-066 record 7 Sep (HM=1.0 / 338 L) dikecualikan dari FR
export const DT_FLEET = [
  { unit: "DT-028", frHm: 24.56, frKm: 1.308, fuel: 2006.9, records: 8 },
  { unit: "DT-067", frHm: 25.84, frKm: 1.362, fuel: 1876.7, records: 8 },
  { unit: "DT-069", frHm: 27.37, frKm: 1.572, fuel: 1874.8, records: 8 },
  { unit: "DT-058", frHm: 23.4, frKm: 1.283, fuel: 1694.5, records: 6 },
  { unit: "DT-030", frHm: 25.5, frKm: 1.308, fuel: 1639.3, records: 6 },
  { unit: "DT-064", frHm: 25.38, frKm: 1.342, fuel: 1591.0, records: 7 },
  { unit: "DT-029", frHm: 22.43, frKm: 1.204, fuel: 1585.6, records: 7 },
  { unit: "DT-060", frHm: 24.13, frKm: 1.354, fuel: 1563.6, records: 6 },
  { unit: "DT-063", frHm: 23.86, frKm: 1.27, fuel: 1553.2, records: 7 },
  { unit: "DT-025", frHm: 23.53, frKm: 1.238, fuel: 1482.6, records: 5 },
  { unit: "DT-062", frHm: 24.14, frKm: 1.345, fuel: 1465.1, records: 6 },
  { unit: "DT-027", frHm: 23.7, frKm: 1.282, fuel: 1445.8, records: 6 },
  { unit: "DT-024", frHm: 24.86, frKm: 1.327, fuel: 1407.0, records: 6 },
  // DT-066: FR dihitung tanpa record 7 Sep (HM=1.0 anomali) — fuel/records di sini = 4 record bersih
  { unit: "DT-066", frHm: 28.66, frKm: 1.645, fuel: 1040.15, records: 4 },
  { unit: "DT-019", frHm: 23.41, frKm: 1.333, fuel: 1273.3, records: 6 },
  { unit: "DT-022", frHm: 22.28, frKm: 1.278, fuel: 1229.6, records: 6 },
  { unit: "DT-021", frHm: 23.75, frKm: 1.376, fuel: 1171.0, records: 4 },
  { unit: "DT-020", frHm: 22.3, frKm: 1.26, fuel: 994.4, records: 5 },
  { unit: "DT-065", frHm: 18.19, frKm: 1.295, fuel: 786.0, records: 4 },
  { unit: "DT-008", frHm: 11.95, frKm: 1.767, fuel: 576.0, records: 2 },
  { unit: "DT-004", frHm: 11.29, frKm: 1.705, fuel: 504.8, records: 4 },
  { unit: "DT-023", frHm: 22.64, frKm: 1.198, fuel: 448.2, records: 2 },
  { unit: "DT-007", frHm: 11.62, frKm: 1.531, fuel: 410.2, records: 2 },
  { unit: "DT-018", frHm: 29.99, frKm: 1.588, fuel: 350.9, records: 1 },
];

export const EXC_FLEET = [
  { unit: "EXC-026", frHm: 26.06, fuel: 1528.0, records: 8 },
  { unit: "EXC-014", frHm: 26.68, fuel: 1430.0, records: 7 },
  { unit: "EXC-024", frHm: 14.38, fuel: 1018.0, records: 7 },
  { unit: "EXC-011", frHm: 17.65, fuel: 962.0, records: 6 },
  { unit: "EXC-027", frHm: 30.21, fuel: 838.0, records: 3 },
  { unit: "EXC-029", frHm: 28.15, fuel: 837.0, records: 3 },
  { unit: "EXC-023", frHm: 15.26, fuel: 758.0, records: 5 },
  { unit: "EXC-012", frHm: 17.62, fuel: 734.0, records: 4 },
  { unit: "EXC-032", frHm: 19.69, fuel: 544.0, records: 4 },
  { unit: "EXC-025", frHm: 14.39, fuel: 441.0, records: 3 },
  { unit: "EXC-022", frHm: 17.66, fuel: 198.0, records: 1 },
  { unit: "EXC-001", frHm: 15.94, fuel: 195.0, records: 1 },
];

export const MHR_DATA = [
  { unit: "Motor Grader (MG-003)", qty: 1063.3, fr: 17.0 },
  { unit: "Water Truck (WT-003)", qty: 930.7, fr: 10.6 },
  { unit: "Motor Grader (MG-002)", qty: 675.8, fr: 16.0 },
  { unit: "Compactor (CPT-003)", qty: 524.8, fr: 10.8 },
  { unit: "Water Truck (WT-002)", qty: 517.8, fr: 7.9 },
  { unit: "Compactor (CPT-004)", qty: 111.0, fr: 7.3 },
];

export const SUPPORT_DATA = [
  { unit: "Light Vehicle (gabungan)", qty: 675.7 },
  {
    unit: "PT. MPS",
    qty: 84.7,
    note: "Transfer kecil — beda dari bulk 5.005 L minggu restart",
  },
  { unit: "Fuel Truck / FT-001", qty: 50.3 },
  { unit: "HUB", qty: 50.3 },
  { unit: "Tower Lamp / lainnya", qty: 549.8 },
];

export const LOCATION_DATA = [
  { location: "Fuel Station", records: 164, qty: 34790.4, pct: 76.8 },
  { location: "ETO", records: 27, qty: 5006.0, pct: 11.1 },
  { location: "EFO", records: 14, qty: 2900.0, pct: 6.4 },
  { location: "Jetty", records: 20, qty: 2583.0, pct: 5.7 },
];

export const LOCATION_COLORS = [C.accent, C.gold, C.good, C.amber];

// Posisi stok (direkonstruksi dari ledger Stock-In + Stock-Out)
export const STOCK_DATA = [
  { date: "31/8", lastStock: 8190.0 },
  { date: "1/9", lastStock: 21532.3 },
  { date: "2/9", lastStock: 24825.2 },
  { date: "3/9", lastStock: 18795.7 },
  { date: "4/9", lastStock: 42501.3 },
  { date: "5/9", lastStock: 45238.4 },
  { date: "6/9", lastStock: 45258.4 },
  { date: "7/9", lastStock: 59542.1 },
  { date: "8/9", lastStock: 51630.9 },
  { date: "9/9", lastStock: 46550.6 },
  { date: "10/9", lastStock: 42179.1 },
  { date: "11/9", lastStock: 37474.6 },
  { date: "12/9", lastStock: 29545.3 },
  { date: "13/9", lastStock: 21979.0 },
];

// ─────────────── DATA NARASI / KONTEN HALAMAN ───────────────
export const FINDINGS = [
  {
    level: "GOOD",
    title: "Operasi Penuh & Stok Terkendali",
    body: "Konsumsi rata-rata 6.469 L/hari (+2,2% vs baseline 31 Agu–5 Sep). Stok EOD 13 Sep ≈ 21.979 L setelah Stock-In besar 31 Agu–7 Sep (termasuk 22.000 L pada 7 Sep). Runway ≈ 3–4 hari.",
    action:
      "Pertahankan ritme Stock-In; pantau agar tidak kembali ke pola 'stok menipis dulu baru pesan'.",
  },
  {
    level: "GOOD",
    title: "Armada Hampir Full Capacity",
    body: "24 unit DT dan 12 unit EXC aktif minggu ini — lonjakan signifikan dibanding 15 DT / 6 EXC pada minggu restart (27–30 Agu). Fuel ratio DT weighted 23,18 L/HM masih dalam rentang wajar.",
    action: "Tidak ada tindakan efisiensi mendesak pada level armada.",
  },
  {
    level: "MEDIUM",
    title: "First-Refueling / Baseline HM Anomali (DT-066)",
    body: "DT-066 pada 7 Sep tercatat Running HM hanya 1,0 jam untuk 338 L (dan KM +1). Hampir pasti baseline HM/KM belum ter-update setelah unit kembali beroperasi. Record dikecualikan dari perhitungan FR.",
    action:
      "Pastikan setiap unit yang baru diaktifkan kembali mencatat Last Refueling HM/KM yang benar sebelum pengisian pertama.",
  },
  {
    level: "MEDIUM",
    title: "DT dengan FR L/HM Sangat Rendah (11–12)",
    body: "DT-004 (11,29), DT-007 (11,62), DT-008 (11,95) jauh di bawah rentang normal armada (~22–26 L/HM). Bisa indikasi meter HM bermasalah, idle berlebih, atau data input salah.",
    action:
      "Cek fisik meter HM dan pola operasi ketiga unit; bandingkan dengan Running KM.",
  },
  {
    level: "LOW",
    title: "DT-018 & DT-066 (tanpa anomali hari-1) FR Tinggi",
    body: "DT-018 (1 record) 29,99 L/HM; DT-066 (setelah exclude 7 Sep) ≈ 28,7 L/HM. Masih dalam zona pantauan, belum kritis.",
    action: "Pantau minggu depan; jika konsisten tinggi, review kondisi unit.",
  },
  {
    level: "INFO",
    title: "MHR Naik 23% vs Baseline",
    body: "Konsumsi MHR 549 L/hari (+23% vs 446 L/hari baseline). Motor grader dan water truck aktif kuat — sejalan dengan intensitas produksi yang stabil.",
    action: "Normal untuk fase operasi penuh; tidak memerlukan eskalasi.",
  },
];

export const DAILY_CARDS = [
  {
    date: "7 Sep (Sen)",
    total: 7716.3,
    severity: "GOOD",
    title: "Stock-In 22.000 L + Operasi Penuh",
    narrative:
      "Hari pembuka minggu dengan konsumsi kuat (7.716 L) dan Stock-In besar 22.000 L dari PT. Central Oil. Stok melonjak ke ~59.500 L. Termasuk record anomali DT-066 (HM=1,0).",
    highlights: [
      { label: "Stock-In", value: "22.000 L (PT. Central Oil)" },
      { label: "Produksi", value: "6.408 L — armada DT/EXC aktif penuh" },
      {
        label: "Anomali",
        value: "DT-066 HM=1,0 untuk 338 L (first-refuel style)",
      },
    ],
    actions:
      "Catat dan kecualikan record DT-066 dari FR; pastikan baseline HM unit baru diaktifkan.",
  },
  {
    date: "8 Sep (Sel)",
    total: 7911.3,
    severity: "GOOD",
    title: "Hari Tertinggi Minggu Ini",
    narrative:
      "Konsumsi puncak 7.911 L dengan produksi 7.291 L. Tidak ada Stock-In. Operasi stabil di level penuh.",
    highlights: [
      { label: "Produksi", value: "7.291 L — hari produksi tertinggi" },
      { label: "Stok EOD", value: "~51.631 L" },
    ],
    actions: "Tidak ada tindakan khusus.",
  },
  {
    date: "9 Sep (Rab)",
    total: 5080.3,
    severity: "GOOD",
    title: "Konsumsi Menengah, MHR Tinggi",
    narrative:
      "Total turun ke 5.080 L, namun MHR mencapai 807 L (tertinggi minggu ini) — aktivitas pemeliharaan jalan intensif.",
    highlights: [
      { label: "MHR", value: "807 L — puncak minggu" },
      { label: "Produksi", value: "4.184 L" },
    ],
    actions: "Tidak ada tindakan khusus.",
  },
  {
    date: "10 Sep (Kam)",
    total: 4371.5,
    severity: "GOOD",
    title: "Hari Terendah Minggu Ini",
    narrative:
      "Konsumsi 4.372 L — terendah dalam 7 hari. MHR juga rendah (266 L). Pola fluktuasi harian normal.",
    highlights: [
      { label: "Total", value: "4.372 L — terendah minggu" },
      { label: "Stok EOD", value: "~42.179 L" },
    ],
    actions: "Tidak ada tindakan khusus.",
  },
  {
    date: "11 Sep (Jum)",
    total: 4704.5,
    severity: "INFO",
    title: "Operasi Stabil + Entri PT. MPS Kecil",
    narrative:
      "Total 4.705 L. Ada entri PT. MPS 84,7 L (bukan bulk transfer besar seperti 28 Agu). Support relatif tinggi karena LV.",
    highlights: [
      { label: "PT. MPS", value: "84,7 L — transfer kecil, bukan bulk" },
      { label: "Support", value: "233 L (termasuk LV)" },
    ],
    actions: "Tetap pisahkan pencatatan transfer vs konsumsi alat.",
  },
  {
    date: "12 Sep (Sab)",
    total: 7929.3,
    severity: "GOOD",
    title: "Operasi Kuat Akhir Pekan",
    narrative:
      "Hampir menyamai puncak Senin/Selasa: 7.929 L dengan produksi 7.004 L dan MHR 693 L. Armada tetap penuh.",
    highlights: [
      { label: "Produksi", value: "7.004 L" },
      { label: "MHR", value: "693 L" },
      { label: "Stok EOD", value: "~29.545 L" },
    ],
    actions: "Pantau laju penurunan stok menjelang akhir minggu.",
  },
  {
    date: "13 Sep (Min)",
    total: 7566.2,
    severity: "INFO",
    title: "Tutup Minggu — Stok ~22.000 L",
    narrative:
      "Konsumsi tetap kuat 7.566 L. Stok ditutup ≈ 21.979 L. Runway 3–4 hari pada laju saat ini. Belum ada Stock-In sejak 7 Sep.",
    highlights: [
      { label: "Stok EOD", value: "≈ 21.979 L" },
      { label: "Runway", value: "Estimasi 3–4 hari" },
      { label: "Stock-In sejak 7 Sep", value: "Nol" },
    ],
    actions:
      "Rencanakan Stock-In minggu depan sebelum stok mendekati ROP operasi normal.",
  },
];

export const ANOMALIES = [
  {
    id: "ANO-01",
    unit: "DT-066",
    date: "7 Sep",
    issue:
      "First-refueling / baseline HM anomali: Running HM = 1,0 jam & Running KM = 1 untuk qty 338 L. Hampir pasti Last Refueling HM/KM belum di-update setelah unit kembali beroperasi. Record dikecualikan dari FR.",
    status: "OPEN",
    severity: "MEDIUM",
  },
  {
    id: "ANO-02",
    unit: "DT-004 / DT-007 / DT-008",
    date: "7-13 Sep",
    issue:
      "Fuel ratio L/HM sangat rendah (11,3–12,0) dibanding rentang armada ~22–26. Kemungkinan meter HM bermasalah, idle tinggi, atau input data salah.",
    status: "OPEN",
    severity: "MEDIUM",
  },
  {
    id: "ANO-03",
    unit: "DT-018",
    date: "7 Sep",
    issue:
      "Hanya 1 record, FR 29,99 L/HM — sampel tipis, pantau jika muncul lagi.",
    status: "OPEN",
    severity: "LOW",
  },
  {
    id: "ANO-04",
    unit: "Seluruh Site",
    date: "8-13 Sep",
    issue:
      "Tidak ada Stock-In sejak 7 Sep. Stok turun dari ~59.500 L ke ~22.000 L dalam 6 hari operasi. Belum kritis, tetapi perlu dijadwalkan pengiriman berikutnya.",
    status: "OPEN",
    severity: "INFO",
  },
  {
    id: "ANO-05",
    unit: "PT. MPS",
    date: "11 Sep",
    issue:
      "Entri 84,7 L atas nama PT. MPS — skala kecil, beda dari bulk 5.005 L minggu restart. Tetap disarankan kategori terpisah untuk transfer.",
    status: "OPEN",
    severity: "LOW",
  },
  {
    id: "ANO-06",
    unit: "LV (berbagai)",
    date: "7-13 Sep",
    issue:
      "Light Vehicle rutin mencatat Last HM = 0 (field tidak relevan untuk LV). Bukan anomali operasional, hanya noise pencatatan.",
    status: "RESOLVED",
    severity: "LOW",
  },
];

export const RESTART_INSIGHTS = [
  {
    title: "Stok Sudah Pulih — Jaga Ritme Stock-In",
    body: "Setelah krisis stok akhir Agustus, pengiriman 31 Agu–7 Sep berhasil menaikkan stok ke level aman. Namun sejak 7 Sep tidak ada lagi Stock-In; stok turun ~37.500 L dalam 6 hari.",
    action:
      "Jadwalkan Stock-In proaktif (jangan tunggu stok kritis). Target pertahankan buffer minimal 2–3 minggu operasi.",
  },
  {
    title: "Armada Hampir Penuh — Efisiensi Tetap Baik",
    body: "24 DT + 12 EXC aktif. FR DT weighted 23,18 L/HM sedikit di atas minggu restart (20,45), masih wajar untuk operasi penuh dan mix unit yang lebih beragam.",
    action:
      "Dokumentasikan FR baseline operasi penuh ini sebagai acuan minggu-minggu berikutnya.",
  },
  {
    title: "Prosedur First-Refueling Perlu Diperkuat",
    body: "Kasus DT-066 (HM=1,0) menunjukkan risiko data saat unit diaktifkan kembali setelah idle. Tanpa Last HM/KM yang benar, FR menjadi tidak bermakna.",
    action:
      "Checklist wajib: update Last Refueling HM/KM sebelum pengisian pertama unit yang baru kembali beroperasi.",
  },
  {
    title: "Pantau Unit dengan FR Outlier",
    body: "Tiga DT dengan FR ~11–12 L/HM dan satu dengan FR ~30 perlu dicek meter dan pola kerja. Outlier yang konsisten bisa menandakan masalah teknis.",
    action:
      "Review lapangan DT-004, DT-007, DT-008, dan pantau DT-018 / DT-066 minggu depan.",
  },
];

export const CATEGORY_SHARE = [
  { label: "Produksi", qty: 40027.9, color: C.accent },
  { label: "MHR", qty: 3840.6, color: C.gold },
  { label: "Pendukung", qty: 1410.8, color: C.muted },
];

export const STOCK_TRANSITION = {
  startStandby: 32885,
  endStandby: 27770,
  endRestart: 5507,
  weekDropPct: -80.2,
  stockStartWeek: 45258.4, // EOD 6 Sep
  stockEndWeek: 21979.0, // EOD 13 Sep
  stockInThisWeek: 22000, // 7 Sep only
};
