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
export const WEEK_NEW = "14–20 Sep";
export const WEEK_PREV_NORMAL = "7–13 Sep"; // baseline minggu penuh sebelumnya

// ─────────────── DATA HASIL PERHITUNGAN (terverifikasi dari Excel) ───────────────
// CATATAN: Minggu 14–20 Sep adalah minggu operasi intensitas tinggi.
// Konsumsi melonjak ke ~10.071 L/hari (+55,7% vs baseline 7–13 Sep).
// Stok sempat hampir habis (≈54 L EOD 16 Sep) sebelum berturut-turut
// Stock-In 9.000 (16 Sep, peminjaman BPSP), 5.000 (17 Sep), 23.000 (18 Sep),
// dan 15.918 (20 Sep, kurang 82 L). EOD 20 Sep ≈ 4.557 L — runway <1 hari.
//
// Catatan kualitas data / remark:
// • DT-068 (15 Sep): Running HM = 1,0 & KM = 1 untuk 211,5 L — first-refueling
//   style. DIKECUALIKAN dari FR.
// • DT-005 (18 Sep): Running HM = 1,0 untuk 290 L — first-refueling style.
//   Record ini DIKECUALIKAN dari FR; record 20 Sep (HM=13,7) tetap dipakai.
// • Remark "FOR MPS" (19 Sep, 65,8 L) — transfer ke PT. MPS.
// • Remark Stock-In: 16 Sep "Peminjaman" (BPSP 9.000 L); 20 Sep "Kurang 82 Liter".
// • 238/329 record bertanda remark=OK; 90 kosong; 1 "FOR MPS".
export const KPI = {
  totalWeek: 70499.4, // full week 7 hari, 329 transaksi
  totalPostResume: 70499.4,
  fleetRateExclMPS: 10071.3, // avg L/hari 14–20 Sep
  normalOpsBaseline: 6468.5, // baseline 7–13 Sep
  wowVsNormal: 55.7,
  dtFrHm: 20.37, // weighted, excl. DT-068 & DT-005 (HM=1) anomalous records
  dtFrKm: 1.203,
  excFrHm: 19.47,
  currentStock: 4556.8, // EOD 20 Sep (dari anchor user EOD 13 Sep = 22.138,15)
  runwayDaysLow: 0.4,
  runwayDaysHigh: 0.5,
};

export const CONSUMPTION_TREND = [
  { period: "Baseline\n(7-13 Sep)", rate: 6468.5 },
  { period: "Minggu Ini\n(14-20 Sep)", rate: 10071.3 },
];

export const CAT_COMPARE = [
  { cat: "Produksi", new: 9234.3, base: 5718.3, wow: 61.5 },
  { cat: "MHR", new: 672.2, base: 548.7, wow: 22.5 },
  { cat: "Pendukung", new: 164.9, base: 201.5, wow: -18.2 },
];

export const DAILY_NEW = [
  {
    date: "14/9",
    day: "Sen",
    label: "Operasi Intensif",
    prod: 9025.6,
    mhr: 794.8,
    supp: 77.2,
    total: 9897.6,
  },
  {
    date: "15/9",
    day: "Sel",
    label: "Operasi Intensif",
    prod: 8788.0,
    mhr: 551.9,
    supp: 469.4,
    total: 9809.2,
  },
  {
    date: "16/9",
    day: "Rab",
    label: "Puncak + Stock-In Peminjaman",
    prod: 10220.6,
    mhr: 1012.3,
    supp: 144.0,
    total: 11376.9,
  },
  {
    date: "17/9",
    day: "Kam",
    label: "Hari Rendah (hanya Produksi)",
    prod: 4836.1,
    mhr: 0.0,
    supp: 0.0,
    total: 4836.1,
  },
  {
    date: "18/9",
    day: "Jum",
    label: "Puncak Minggu + Stock-In Besar",
    prod: 11616.8,
    mhr: 1100.3,
    supp: 87.8,
    total: 12804.9,
  },
  {
    date: "19/9",
    day: "Sab",
    label: "Operasi Kuat",
    prod: 9411.3,
    mhr: 366.9,
    supp: 144.9,
    total: 9923.2,
  },
  {
    date: "20/9",
    day: "Min",
    label: "Operasi Kuat + Stock-In",
    prod: 10741.5,
    mhr: 879.0,
    supp: 231.0,
    total: 11851.5,
  },
];

// Armada DT — 26 unit tercatat; DT-068 (seluruh) & DT-005 record HM=1 dikecualikan dari FR
export const DT_FLEET = [
  { unit: "DT-021", frHm: 22.84, frKm: 1.2, fuel: 2579.1, records: 12 },
  { unit: "DT-028", frHm: 23.88, frKm: 1.242, fuel: 2478.6, records: 10 },
  { unit: "DT-030", frHm: 22.08, frKm: 1.181, fuel: 2398.4, records: 9 },
  { unit: "DT-064", frHm: 24.39, frKm: 1.255, fuel: 2392.3, records: 9 },
  { unit: "DT-058", frHm: 20.51, frKm: 1.137, fuel: 2375.2, records: 10 },
  { unit: "DT-029", frHm: 22.14, frKm: 1.196, fuel: 2337.6, records: 10 },
  { unit: "DT-020", frHm: 22.1, frKm: 1.255, fuel: 2329.1, records: 10 },
  { unit: "DT-023", frHm: 24.77, frKm: 1.295, fuel: 2291.4, records: 9 },
  { unit: "DT-069", frHm: 22.71, frKm: 1.15, fuel: 2291.0, records: 10 },
  { unit: "DT-060", frHm: 22.53, frKm: 1.288, fuel: 2165.0, records: 8 },
  { unit: "DT-024", frHm: 22.92, frKm: 1.176, fuel: 2134.1, records: 9 },
  { unit: "DT-019", frHm: 22.13, frKm: 1.236, fuel: 2062.3, records: 9 },
  { unit: "DT-067", frHm: 21.76, frKm: 1.092, fuel: 2045.1, records: 9 },
  { unit: "DT-066", frHm: 20.45, frKm: 1.095, fuel: 2039.3, records: 10 },
  { unit: "DT-062", frHm: 21.1, frKm: 1.163, fuel: 2035.8, records: 9 },
  { unit: "DT-027", frHm: 21.94, frKm: 1.199, fuel: 1963.2, records: 8 },
  { unit: "DT-063", frHm: 22.71, frKm: 1.237, fuel: 1934.7, records: 9 },
  { unit: "DT-025", frHm: 20.62, frKm: 1.079, fuel: 1785.3, records: 7 },
  { unit: "DT-065", frHm: 21.33, frKm: 1.146, fuel: 1348.0, records: 6 },
  { unit: "DT-022", frHm: 23.08, frKm: 1.322, fuel: 1336.3, records: 5 },
  { unit: "DT-011", frHm: 11.17, frKm: 1.589, fuel: 913.6, records: 5 },
  { unit: "DT-004", frHm: 9.23, frKm: 1.348, fuel: 797.8, records: 5 },
  { unit: "DT-008", frHm: 7.75, frKm: 1.332, fuel: 596.6, records: 4 },
  { unit: "DT-007", frHm: 7.94, frKm: 0.996, fuel: 569.9, records: 3 },
  // DT-005: hanya record 20 Sep (HM=13,7); record 18 Sep HM=1 dikecualikan
  { unit: "DT-005", frHm: 14.96, frKm: 1.666, fuel: 205.0, records: 1 },
];

export const EXC_FLEET = [
  { unit: "EXC-026", frHm: 26.97, fuel: 2861.0, records: 9 },
  { unit: "EXC-014", frHm: 25.63, fuel: 2138.0, records: 6 },
  { unit: "EXC-029", frHm: 26.89, fuel: 1940.0, records: 7 },
  { unit: "EXC-027", frHm: 23.81, fuel: 1663.0, records: 6 },
  { unit: "EXC-025", frHm: 15.93, fuel: 1341.0, records: 7 },
  { unit: "EXC-023", frHm: 14.86, fuel: 1214.0, records: 8 },
  { unit: "EXC-022", frHm: 17.5, fuel: 1188.0, records: 6 },
  { unit: "EXC-011", frHm: 18.47, fuel: 1162.0, records: 6 },
  { unit: "EXC-012", frHm: 18.95, fuel: 1160.0, records: 7 },
  { unit: "EXC-032", frHm: 14.14, fuel: 1140.0, records: 8 },
  { unit: "EXC-024", frHm: 13.05, fuel: 1089.0, records: 7 },
  { unit: "EXC-020", frHm: 20.64, fuel: 805.0, records: 3 },
  { unit: "EXC-001", frHm: 21.74, fuel: 400.0, records: 2 },
  { unit: "EXC-006", frHm: 10.64, fuel: 336.0, records: 1 },
  { unit: "EXC-002", frHm: 15.0, fuel: 297.0, records: 1 },
];

export const MHR_DATA = [
  { unit: "Motor Grader (MG-003)", qty: 1316.9, fr: 16.9 },
  { unit: "Water Truck (WT-003)", qty: 1152.6, fr: 11.0 },
  { unit: "Compactor (CPT-003)", qty: 814.6, fr: 9.0 },
  { unit: "Water Truck (WT-002)", qty: 679.2, fr: 7.8 },
  { unit: "Motor Grader (MG-002)", qty: 574.5, fr: 15.0 },
  { unit: "Compactor (CPT-004)", qty: 149.0, fr: 4.9 },
];

export const SUPPORT_DATA = [
  { unit: "Fuel Truck (FT-001)", qty: 362.5 },
  { unit: "Light Vehicle (gabungan)", qty: 579.3 },
  {
    unit: "PT. MPS",
    qty: 65.8,
    note: "Remark: FOR MPS — transfer ke PT. MPS (19 Sep)",
  },
  { unit: "Tower Lamp (TL-001/002/003)", qty: 146.7 },
];

export const LOCATION_DATA = [
  { location: "Fuel Station", records: 228, qty: 50058.7, pct: 71.0 },
  { location: "EFO", records: 46, qty: 9332.7, pct: 13.2 },
  { location: "ETO", records: 28, qty: 7378.0, pct: 10.5 },
  { location: "Jetty", records: 25, qty: 3335.0, pct: 4.7 },
  { location: "Mess TMI", records: 2, qty: 395.0, pct: 0.6 },
];

export const LOCATION_COLORS = [C.accent, C.gold, C.good, C.amber, C.muted];

// Posisi stok (dari anchor user EOD 13 Sep = 22.138,15 L + Stock-In − Stock-Out)
export const STOCK_DATA = [
  { date: "13/9", lastStock: 22138.2 },
  { date: "14/9", lastStock: 12240.6 },
  { date: "15/9", lastStock: 2431.3 },
  { date: "16/9", lastStock: 54.4 },
  { date: "17/9", lastStock: 218.3 },
  { date: "18/9", lastStock: 10413.4 },
  { date: "19/9", lastStock: 5490.2 },
  { date: "20/9", lastStock: 7556.75 },
];

// ─────────────── DATA NARASI / KONTEN HALAMAN ───────────────
export const FINDINGS = [
  {
    level: "HIGH",
    title: "Stok Kritis — Hampir Habis 16 Sep",
    body: "Stok anjlok dari 22.138 L (EOD 13 Sep) ke ≈54 L (EOD 16 Sep). Diselamatkan Stock-In beruntun: 9.000 L (16 Sep peminjaman BPSP), 5.000 L (17 Sep), 23.000 L (18 Sep), 15.918 L (20 Sep). EOD 20 Sep hanya ≈4.557 L — runway <1 hari.",
    action:
      "MENDESAK: pastikan Stock-In lanjutan segera. Jangan biarkan pola 'hampir habis baru datang' berulang.",
  },
  {
    level: "HIGH",
    title: "Konsumsi Melonjak +55,7%",
    body: "Rata-rata 10.071 L/hari vs baseline 6.469 L/hari. Produksi naik 61,5% (9.234 vs 5.718 L/hari). Armada 26 DT + 15 EXC — intensitas operasi tertinggi sejak pelacakan dimulai.",
    action:
      "Sesuaikan ROP dan jadwal Stock-In ke level konsumsi baru (~10.000 L/hari), bukan baseline lama.",
  },
  {
    level: "MEDIUM",
    title: "First-Refueling Anomali (DT-068 & DT-005)",
    body: "DT-068 (15 Sep): HM=1,0 / KM=1 untuk 211,5 L. DT-005 (18 Sep): HM=1,0 untuk 290 L. Keduanya first-refueling style — dikecualikan dari FR.",
    action:
      "Checklist wajib: update Last Refueling HM/KM sebelum pengisian pertama unit yang baru/idle lama.",
  },
  {
    level: "MEDIUM",
    title: "DT FR Rendah Persisten (4 unit)",
    body: "DT-004 (9,23), DT-007 (7,94), DT-008 (7,75), DT-011 (11,17) L/HM — jauh di bawah rentang normal ~20–25. Sudah muncul minggu sebelumnya.",
    action:
      "Cek meter HM & pola operasi keempat unit. Bandingkan dengan Running KM.",
  },
  {
    level: "INFO",
    title: "Remark Stock-In & Transfer",
    body: "16 Sep: peminjaman 9.000 L dari BPSP. 20 Sep: pengiriman SKA 15.918 L (kurang 82 L). 19 Sep: transfer PT. MPS 65,8 L (remark FOR MPS).",
    action:
      "Catat peminjaman BPSP sebagai utang stok; pantau kekurangan 82 L apakah diganti.",
  },
  {
    level: "LOW",
    title: "Hari 17 Sep Hanya Produksi",
    body: "Konsumsi 4.836 L — terendah minggu ini; nol MHR dan Support. 21 record, semuanya kategori Produksi. Kemungkinan partial ops / hari terbatas.",
    action: "Konfirmasi ke site apakah ada batasan operasi pada 17 Sep.",
  },
];

export const DAILY_CARDS = [
  {
    date: "14 Sep (Sen)",
    total: 9897.6,
    severity: "MEDIUM",
    title: "Operasi Intensif — Stok Mulai Turun Tajam",
    narrative:
      "Konsumsi 9.898 L tanpa Stock-In. Stok turun dari 22.138 L ke ≈12.241 L dalam satu hari. Armada penuh beroperasi.",
    highlights: [
      { label: "Produksi", value: "9.026 L" },
      { label: "Stok EOD", value: "≈ 12.241 L" },
      { label: "Stock-In", value: "Nol" },
    ],
    actions:
      "Pantau stok — laju penurunan ~10.000 L/hari tidak sustainable tanpa IN.",
  },
  {
    date: "15 Sep (Sel)",
    total: 9809.2,
    severity: "HIGH",
    title: "Stok Menuju Titik Kritis + First-Refuel DT-068",
    narrative:
      "Konsumsi 9.809 L. Stok EOD ≈ 2.431 L. DT-068 tercatat HM=1,0 untuk 211,5 L (first-refueling). Support tinggi karena LV.",
    highlights: [
      { label: "Stok EOD", value: "≈ 2.431 L — mendekati habis" },
      { label: "Anomali", value: "DT-068 HM=1,0 / 211,5 L" },
      { label: "Support", value: "469 L (LV aktif)" },
    ],
    actions: "Eskalasi Stock-In segera. Kecualikan DT-068 dari FR.",
  },
  {
    date: "16 Sep (Rab)",
    total: 11376.9,
    severity: "HIGH",
    title: "‼ Stok ≈54 L + Peminjaman BPSP 9.000 L",
    narrative:
      "Hari konsumsi tertinggi sejauh itu (11.377 L). Stok sempat menyentuh ≈54 L sebelum Stock-In peminjaman BPSP 9.000 L masuk. MHR puncak 1.012 L.",
    highlights: [
      { label: "Stok terendah", value: "≈ 54 L EOD — hampir habis" },
      { label: "Stock-In", value: "9.000 L peminjaman BPSP" },
      { label: "MHR", value: "1.012 L — tertinggi minggu" },
    ],
    actions:
      "Catat utang peminjaman BPSP. Pastikan pengiriman vendor menyusul.",
  },
  {
    date: "17 Sep (Kam)",
    total: 4836.1,
    severity: "INFO",
    title: "Hari Rendah — Hanya Produksi + Stock-In 5.000 L",
    narrative:
      "Hanya 21 record, semuanya Produksi (4.836 L). Nol MHR/Support. Stock-In 5.000 L dari PT. Rebetsya. Stok EOD ≈ 218 L — masih sangat tipis.",
    highlights: [
      { label: "Pola", value: "Hanya Produksi — partial ops?" },
      { label: "Stock-In", value: "5.000 L (PT. Rebetsya)" },
      { label: "Stok EOD", value: "≈ 218 L" },
    ],
    actions: "Konfirmasi status operasi 17 Sep ke site.",
  },
  {
    date: "18 Sep (Jum)",
    total: 12804.9,
    severity: "MEDIUM",
    title: "Puncak Minggu 12.805 L + Stock-In 23.000 L",
    narrative:
      "Konsumsi tertinggi minggu ini. Stock-In ganda: 8.000 L (Central Oil) + 15.000 L (Junama) = 23.000 L. Stok pulih ke ≈10.413 L. DT-005 first-refuel (HM=1,0 / 290 L).",
    highlights: [
      { label: "Produksi", value: "11.617 L — puncak" },
      { label: "Stock-In", value: "23.000 L (2 vendor)" },
      { label: "Anomali", value: "DT-005 HM=1,0 / 290 L" },
    ],
    actions: "Kecualikan record DT-005 (18 Sep) dari FR.",
  },
  {
    date: "19 Sep (Sab)",
    total: 9923.2,
    severity: "HIGH",
    title: "Stok-In 5000 L + Transfer MPS",
    narrative:
      "Konsumsi 9.923 L dan Stock-In 5000 L. Stok EOD ≈ 5490 L. Remark FOR MPS (65,8 L) — transfer ke PT. MPS.",
    highlights: [
      { label: "Stok EOD", value: "≈ 5490 L" },
      { label: "Remark", value: "FOR MPS 65,8 L" },
      { label: "Stock-In", value: "5000" },
    ],
    actions: "Stock-In mendesak. Pisahkan pencatatan transfer MPS.",
  },
  {
    date: "20 Sep (Min)",
    total: 11851.5,
    severity: "HIGH",
    title: "Stock-In 15.918 L (kurang 82 L) — Stok EOD ≈7.556 L",
    narrative:
      "Konsumsi 11.852 L. Stock-In PT. Sumber Karya Anugerah 15.918 L (remark: kurang 82 L). Stok ditutup ≈7.556 L — runway <1 hari pada laju ~10.000 L/hari.",
    highlights: [
      { label: "Stock-In", value: "15.918 L (kurang 82 L)" },
      { label: "Stok EOD", value: "≈ 7.556 L" },
      { label: "Runway", value: "< 1 hari" },
    ],
    actions:
      "MENDESAK: jadwalkan Stock-In berikutnya segera. Pantau penggantian kekurangan 82 L.",
  },
];

export const ANOMALIES = [
  {
    id: "ANO-01",
    unit: "Seluruh Site",
    date: "14-20 Sep",
    issue:
      "Stok hampir habis berulang: EOD 16 Sep ≈54 L, EOD 19 Sep ≈5490 L. EOD 20 Sep ≈7.556 L dengan runway <1 hari pada laju konsumsi ~10.000 L/hari.",
    status: "OPEN",
    severity: "HIGH",
  },
  {
    id: "ANO-02",
    unit: "DT-068",
    date: "15 Sep",
    issue:
      "First-refueling: Running HM=1,0 & Running KM=1 untuk qty 211,5 L. Remark kosong. Record dikecualikan dari FR.",
    status: "OPEN",
    severity: "MEDIUM",
  },
  {
    id: "ANO-03",
    unit: "DT-005",
    date: "18 Sep",
    issue:
      "First-refueling: Running HM=1,0 untuk qty 290 L. Remark=OK. Record dikecualikan dari FR; record 20 Sep (HM=13,7) tetap dipakai.",
    status: "OPEN",
    severity: "MEDIUM",
  },
  {
    id: "ANO-04",
    unit: "DT-004 / DT-007 / DT-008 / DT-011",
    date: "14-20 Sep",
    issue:
      "FR L/HM sangat rendah (7,8–11,2) — konsisten dengan minggu sebelumnya. Kemungkinan meter HM bermasalah atau pola idle.",
    status: "OPEN",
    severity: "MEDIUM",
  },
  {
    id: "ANO-05",
    unit: "PT. MPS",
    date: "19 Sep",
    issue: "Remark: FOR MPS — transfer 65,8 L ke PT. MPS. Bukan konsumsi alat.",
    status: "OPEN",
    severity: "LOW",
  },
  {
    id: "ANO-06",
    unit: "Stock-In BPSP",
    date: "16 Sep",
    issue:
      "Remark: Peminjaman — 9.000 L dari BPSP. Perlu dicatat sebagai utang stok / pinjaman antar-site.",
    status: "OPEN",
    severity: "INFO",
  },
  {
    id: "ANO-07",
    unit: "Stock-In SKA",
    date: "20 Sep",
    issue:
      "Remark: Kurang 82 Liter — pengiriman PT. Sumber Karya Anugerah 15.918 L (seharusnya 16.000?). Pantau apakah kekurangan diganti.",
    status: "OPEN",
    severity: "INFO",
  },
  {
    id: "ANO-08",
    unit: "Seluruh Site",
    date: "17 Sep",
    issue:
      "Hanya 21 record, semuanya kategori Produksi — nol MHR dan Support. Pola partial ops / hari terbatas.",
    status: "OPEN",
    severity: "LOW",
  },
  {
    id: "ANO-09",
    unit: "Pencatatan Remark",
    date: "14-20 Sep",
    issue:
      "Dari 329 transaksi: 238 remark=OK, 90 kosong, 1 FOR MPS. 90 record tanpa validasi remark perlu dilengkapi ke depan.",
    status: "OPEN",
    severity: "LOW",
  },
];

export const RESTART_INSIGHTS = [
  {
    title: "ROP Harus Naik ke Level Konsumsi Baru",
    body: "Konsumsi sekarang ~10.000 L/hari, hampir 1,6× baseline minggu lalu. ROP dan jadwal Stock-In masih seolah konsumsi 6.500 L/hari — akibatnya stok hampir habis dua kali dalam seminggu.",
    action:
      "Set ROP minimal 3–4 hari buffer (= 30.000–40.000 L) dan picu Stock-In otomatis saat stok < ROP.",
  },
  {
    title: "Peminjaman BPSP — Jangan Jadi Ketergantungan",
    body: "9.000 L peminjaman BPSP pada 16 Sep menyelamatkan operasi, tetapi ini sinyal perencanaan suplai yang terlambat.",
    action:
      "Catat sebagai utang; susun jadwal vendor tetap agar tidak mengandalkan pinjaman antar-site.",
  },
  {
    title: "First-Refueling Masih Berulang",
    body: "DT-068 dan DT-005 lagi-lagi masuk dengan HM≈1. Prosedur update Last HM/KM sebelum isi pertama belum konsisten dijalankan.",
    action:
      "Checklist wajib di fuel station: verifikasi Last HM/KM unit baru/idle sebelum nozzle dipasang.",
  },
  {
    title: "Unit FR Rendah Perlu Intervensi Lapangan",
    body: "Empat DT (004/007/008/011) FR 8–11 L/HM selama 2 minggu berturut-turut. Bukan fluktuasi — pola sistematis.",
    action:
      "Inspeksi meter HM + review operator. Jika meter rusak, ganti; jika idle, evaluasi alokasi unit.",
  },
];

export const CATEGORY_SHARE = [
  { label: "Produksi", qty: 71484.87, color: C.accent },
  { label: "MHR", qty: 5296.76, color: C.gold },
  { label: "Pendukung", qty: 1218.21, color: C.muted },
];

export const STOCK_TRANSITION = {
  startStandby: 32885,
  endStandby: 27770,
  endRestart: 5507,
  weekDropPct: -80.2,
  stockStartWeek: 22138.2, // EOD 13 Sep (anchor user)
  stockEndWeek: 7556.8, // EOD 20 Sep
  stockInThisWeek: 57918, // 9k+5k+8k+15k+15.918
};
