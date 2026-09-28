"use client";

import { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  ComposedChart,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceArea,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  BarChart3,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  DollarSign,
  Droplet,
  Flame,
  Fuel,
  Gauge,
  LineChart as LineIcon,
  MapPin,
  Package,
  Search,
  ShieldAlert,
  TrendingDown,
  TrendingUp,
  Truck,
  Users,
  Warehouse,
  Wrench,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Lightbulb,
  Target,
  ClipboardCheck,
  BookOpen,
  Info,
  Flag,
  CheckSquare,
  CircleDot,
  ArrowRight,
  Anchor,
  Mountain,
} from "lucide-react";

import {
  C,
  COMPANY,
  WEEK_NEW,
  WEEK_PREV,
  KPI,
  EXECUTIVE,
  DAILY,
  FORECAST,
  DT_SCORECARD,
  EXC_SCORECARD,
  CATEGORY_BREAKDOWN,
  LOCATION_BREAKDOWN,
  SHIFT_ANALYSIS,
  OPERATORS,
  ANOMALIES,
  DATA_QUALITY,
  STOCK_SUMMARY,
  STOCK_DATA,
  VENDORS,
  LOCATION_COLORS,
  DAILY_FLEET_TREND,
  DT_DAILY_MATRIX,
  EXC_DAILY_MATRIX,
  WEEK_COMPARISON,
  DOW_COMPARISON,
  BPSP_LOAN,
  EXCLUDE_FROM_FLEET,
  OPERATIONAL_MODE,
  INTER_COMPANY,
} from "./analysis";

/* ═══════════════ KONTEKS BISNIS & ATURAN OPERASIONAL ═══════════════ */
const DAILY_ISSUES = [
  { date: "2026-09-21", issue: "n/a" },
  { date: "2026-09-22", issue: "n/a" },
  { date: "2026-09-23", issue: "n/a" },
  { date: "2026-09-24", issue: "pengisian tertinggi 15000 L" },
  { date: "2026-09-25", issue: "pengisian tertinggi 15000 L" },
  { date: "2026-09-26", issue: "hanya barging" },
  { date: "2026-09-27", issue: "hanya barging" },
];

const FR_THRESHOLD = {
  DT_NORMAL_MIN: 18,
  DT_NORMAL_MAX: 24,
  DT_EFFICIENT: 18,
  DT_BOROS: 24,
  EXC_NORMAL_MIN: 28,
  EXC_NORMAL_MAX: 32,
  EXC_EFFICIENT: 26,
  EXC_BOROS: 34,
};

/* ─────────────────────────── HELPERS ─────────────────────────── */
const fmt = (n, d = 0) =>
  Number(n).toLocaleString("id-ID", {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
  });
const fmtL = (n) => `${fmt(n)} L`;
const fmtIdr = (n) => (n ? `Rp ${Number(n).toLocaleString("id-ID")}` : "—");
const fmtPct = (n, showSign = true) =>
  `${showSign && n > 0 ? "+" : ""}${Number(n).toFixed(1)}%`;

const sevColor = (s) =>
  ({
    HIGH: {
      bg: "bg-red-600",
      text: "text-white",
      border: "border-l-red-600",
      dot: "bg-red-600",
    },
    MEDIUM: {
      bg: "bg-amber-600",
      text: "text-white",
      border: "border-l-amber-600",
      dot: "bg-amber-600",
    },
    LOW: {
      bg: "bg-slate-500",
      text: "text-white",
      border: "border-l-slate-500",
      dot: "bg-slate-500",
    },
    INFO: {
      bg: "bg-sky-600",
      text: "text-white",
      border: "border-l-sky-600",
      dot: "bg-sky-600",
    },
    GOOD: {
      bg: "bg-emerald-600",
      text: "text-white",
      border: "border-l-emerald-600",
      dot: "bg-emerald-600",
    },
    VIOLET: {
      bg: "bg-violet-600",
      text: "text-white",
      border: "border-l-violet-600",
      dot: "bg-violet-600",
    },
  })[s] || {
    bg: "bg-slate-500",
    text: "text-white",
    border: "border-l-slate-500",
    dot: "bg-slate-500",
  };

const DeltaChip = ({ value, inverse = false, suffix = "%" }) => {
  const good = inverse ? value < 0 : value > 0;
  const neutral = Math.abs(value) < 0.5;
  const Icon = neutral ? Minus : value > 0 ? ArrowUpRight : ArrowDownRight;
  const color = neutral
    ? "text-slate-500 bg-slate-100"
    : good
      ? "text-emerald-700 bg-emerald-50"
      : "text-amber-700 bg-amber-50";
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-[11px] font-bold px-1.5 py-0.5 rounded ${color}`}>
      <Icon size={11} />
      {Math.abs(value).toFixed(1)}
      {suffix}
    </span>
  );
};

/* ─────────────────────────── SHARED COMPONENTS ─────────────────────────── */
const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-xl border border-slate-200 shadow-sm ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ icon: Icon, title, sub, action }) => (
  <div className="flex items-start justify-between mb-3">
    <div className="flex items-start gap-2.5">
      {Icon && (
        <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
          <Icon size={16} className="text-sky-600" />
        </div>
      )}
      <div>
        <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide">
          {title}
        </h3>
        {sub && <p className="text-xs text-slate-500 mt-0.5">{sub}</p>}
      </div>
    </div>
    {action}
  </div>
);

const Badge = ({ level, children }) => {
  const c = sevColor(level);
  return (
    <span
      className={`${c.bg} ${c.text} text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider`}>
      {children || level}
    </span>
  );
};

const KPICard = ({
  icon: Icon,
  label,
  value,
  unit,
  sub,
  trend,
  accent = "sky",
  danger = false,
}) => {
  const accentMap = {
    sky: "from-sky-500 to-sky-600",
    emerald: "from-emerald-500 to-emerald-600",
    amber: "from-amber-500 to-amber-600",
    red: "from-red-500 to-red-600",
    slate: "from-slate-600 to-slate-700",
    violet: "from-violet-500 to-violet-600",
  };
  return (
    <Card
      className={`overflow-hidden relative ${danger ? "ring-1 ring-red-200" : ""}`}>
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentMap[accent]}`}
      />
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center">
            <Icon
              size={16}
              className={`text-${accent === "slate" ? "slate" : accent}-600`}
            />
          </div>
          {trend != null && (
            <div
              className={`flex items-center gap-1 text-xs font-bold ${trend > 0 ? "text-amber-600" : "text-emerald-600"}`}>
              {trend > 0 ? (
                <TrendingUp size={12} />
              ) : (
                <TrendingDown size={12} />
              )}
              {Math.abs(trend).toFixed(1)}%
            </div>
          )}
        </div>
        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">
          {label}
        </div>
        <div className="text-2xl font-extrabold text-slate-800 mt-0.5 leading-tight">
          {value}
          {unit && (
            <span className="text-sm font-semibold text-slate-400 ml-1">
              {unit}
            </span>
          )}
        </div>
        {sub && <div className="text-[11px] text-slate-500 mt-1">{sub}</div>}
      </div>
    </Card>
  );
};

const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-slate-800 text-white text-xs rounded-lg p-2.5 shadow-lg border border-slate-700">
      <div className="font-bold mb-1">{label}</div>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: p.color || p.fill }}
          />
          <span className="text-slate-300">{p.name}:</span>
          <span className="font-semibold">{fmt(p.value, 1)}</span>
        </div>
      ))}
    </div>
  );
};

/* ═══════════════════ NARRATIVE GENERATOR ═══════════════════ */
const generateNarratives = () => {
  const out = [];
  const d = WEEK_COMPARISON.deltas;
  const prev = WEEK_COMPARISON.prev;
  const curr = WEEK_COMPARISON.curr;

  // ── N-00 (BARU): BPSP Loan Ledger ───────────────────────────
  out.push({
    id: "N-00",
    category: "BPSP Loan",
    severity: "VIOLET",
    title: `BPSP loan 9.000 L — siklus tertutup, net 0`,
    why:
      `Sheet stock in mencatat BPSP meminjamkan 9.000 L ke site pada 16 Sep ` +
      `("peminjaman fuel"). Sheet stock out mencatat pengembalian bertahap: ` +
      `20 Sep (2.000 L), 21 Sep (2.000 L), 23 Sep (2.000 L), 24 Sep (3.000 L) — ` +
      `total 9.000 L. Net balance = 0 L.`,
    impact:
      `Selisih gross ledger curr vs prev week (−7,8%) MENYEMBUNYIKAN penurunan ` +
      `sebenarnya. Setelah di-net, konsumsi fleet turun ` +
      `${Math.abs(KPI.wowNet).toFixed(1)}% (bukan −7,8%). Angka net lebih akurat ` +
      `untuk analisis armada & efisiensi.`,
    actions: [
      "Pisahkan kategori 'BPSP Loan' di master data (jangan campur Support)",
      "Tampilkan dual view di dashboard: gross (ledger) + net (fleet)",
      "Tambahkan validasi: entry BPSP harus punya pasangan in/out",
    ],
  });

  // ── N-01: Konteks bisnis ────────────────────────────────────
  out.push({
    id: "N-01",
    category: "Konteks",
    severity: "INFO",
    title: `Operasi Site BPSP hanya terdiri dari Hauling + Barging`,
    why:
      `Site BPSP menjalankan 2 aktivitas utama: ` +
      `(1) HAULING — pengangkutan material dengan Dump Truck, ` +
      `(2) BARGING — pemuatan ke tongkang dengan Excavator. ` +
      `Tidak ada aktivitas drilling/blasting/loading tambahan. ` +
      `Konsekuensinya: variasi harian sangat bergantung pada ` +
      `apakah hauling dan barging jalan bersamaan atau hanya salah satu.`,
    impact:
      `FR normal untuk DT ~${FR_THRESHOLD.DT_NORMAL_MIN}-${FR_THRESHOLD.DT_NORMAL_MAX} L/HM ` +
      `dan EXC ~${FR_THRESHOLD.EXC_NORMAL_MIN}-${FR_THRESHOLD.EXC_NORMAL_MAX} L/HM. ` +
      `Hari dengan salah satu aktivitas OFF akan menunjukkan pola konsumsi yang sangat berbeda.`,
    actions: [
      "Klasifikasikan hari operasi: FULL (hauling+barging) vs PARTIAL (hanya salah satu)",
      "Sertakan kolom 'jenis operasi' di sheet Daily Issue untuk konteks analitik",
      "Gunakan baseline khusus hari FULL-ops saat mengukur efisiensi",
    ],
  });

  // ── N-02 (REVISI): Penurunan net karena mix operasi ─────────
  const d25 = DAILY.find((x) => x.date === "25/9");
  const d26 = DAILY.find((x) => x.date === "26/9");
  const d27 = DAILY.find((x) => x.date === "27/9");
  const bargingDaysTotal = (d26?.total || 0) + (d27?.total || 0);
  out.push({
    id: "N-02",
    category: "Produksi",
    severity: "GOOD",
    title: `Penurunan ${Math.abs(KPI.wowNet).toFixed(1)}% net = mix operasi, bukan efisiensi`,
    why:
      `Setelah di-net dari BPSP loan, konsumsi fleet turun ` +
      `${Math.abs(KPI.wowNet).toFixed(1)}% (${fmt(KPI.totalWeekNet)} L vs ${fmt(KPI.totalPrevWeekNet)} L). ` +
      `Penyebab utama: (a) 26–27 Sep = barging only → DT stop total ` +
      `(hanya ${fmt(d26?.total)} L & ${fmt(d27?.total)} L); (b) 25 Sep = partial ` +
      `→ hauling sebagian off (${fmt(d25?.total)} L). Bila 3 hari tersebut di-exclude, ` +
      `konsumsi hari FULL-OPS ≈ ${fmt((curr.total - bargingDaysTotal - (d25?.total || 0)) / 4)} L/hari — ` +
      `hampir identik dengan prev week.`,
    impact:
      `Fleet TIDAK lebih efisien. Penurunan murni kalender operasi. ` +
      `Benchmark efisiensi harus pakai baseline FULL-OPS saja.`,
    actions: [
      "Update Daily Issue sheet dengan kolom 'mode operasi' (FULL/PARTIAL/BARGING)",
      "Hitung FR benchmark hanya dari hari FULL-OPS",
    ],
  });

  // ── N-03: Support proporsional ──────────────────────────────
  const suppCurr = DAILY.filter((x) => x.week === "curr").reduce(
    (s, x) => s + (x.supp || 0),
    0,
  );
  out.push({
    id: "N-03",
    category: "Support",
    severity: "INFO",
    title: `Support naik ${d.supp.toFixed(1)}% sebagian besar karena BPSP loan return`,
    why:
      `Konsumsi Support minggu ini ${fmt(suppCurr)} L vs minggu lalu ${fmt(prev.supp)} L. ` +
      `Kenaikan ini sebagian besar karena pengembalian BPSP (7.000 L curr vs 2.000 L prev) ` +
      `yang tercatat di kategori Support. Exclude BPSP, Support operasional murni turun.`,
    impact:
      `Support murni (excl. BPSP) hanya ~${(((suppCurr - 7000) / (curr.total - 7000)) * 100).toFixed(1)}% ` +
      `dari total konsumsi fleet net. Fokus efisiensi tetap pada Production (DT + EXC).`,
    actions: [
      "Pisahkan kategori 'Support Operasional' vs 'BPSP Loan Return'",
      "Monitor konsumsi genset & tower lamp secara terpisah untuk efisiensi",
    ],
  });

  // ── N-04: EXC FR di bawah range normal ──────────────────────
  const excNormal = EXC_SCORECARD.filter(
    (u) =>
      u.frHm >= FR_THRESHOLD.EXC_NORMAL_MIN &&
      u.frHm <= FR_THRESHOLD.EXC_NORMAL_MAX,
  );
  const excOver = EXC_SCORECARD.filter(
    (u) => u.frHm > FR_THRESHOLD.EXC_NORMAL_MAX,
  );
  const excUnder = EXC_SCORECARD.filter(
    (u) => u.frHm > 0 && u.frHm < FR_THRESHOLD.EXC_NORMAL_MIN,
  );
  out.push({
    id: "N-04",
    category: "Excavator",
    severity: "MEDIUM",
    title: `FR Excavator aktual 14–22 L/HM — di bawah range 28–32 L/HM`,
    why:
      `Hanya ${excNormal.length} unit dalam range normal (${excNormal.map((u) => u.unit).join(", ") || "—"}). ` +
      `${excOver.length} unit > ${FR_THRESHOLD.EXC_NORMAL_MAX} L/HM (${excOver.map((u) => `${u.unit}=${u.frHm}`).join(", ") || "—"}) ` +
      `dan ${excUnder.length} unit < ${FR_THRESHOLD.EXC_NORMAL_MIN} L/HM (${excUnder
        .slice(0, 3)
        .map((u) => `${u.unit}=${u.frHm}`)
        .join(", ")}). ` +
      `Seluruh fleet avg ${curr.excFrHm} L/HM, jauh di bawah range normal.`,
    impact:
      `Indikasi kuat HM meter EXC tidak akurat (idle tidak terdeteksi) ATAU range "normal" ` +
      `28–32 L/HM perlu direvisi berdasarkan data aktual September 2026. ` +
      `Benchmark FR EXC tidak valid sampai kalibrasi meter dilakukan.`,
    actions: [
      "Audit HM meter 5 unit EXC terendah (EXC-024, EXC-022, EXC-012, EXC-011, EXC-006)",
      "Review ulang rentang FR normal EXC — kemungkinan 14–22 L/HM lebih realistis",
      "Cross-check dengan log manual operator",
    ],
  });

  // ── N-05: DT FR membaik ────────────────────────────────────
  if (d.dtFrHm < -3) {
    out.push({
      id: "N-05",
      category: "Dump Truck",
      severity: "GOOD",
      title: `Efisiensi DT membaik ${Math.abs(d.dtFrHm).toFixed(1)}% — tapi bukan karena efisiensi nyata`,
      why:
        `FR DT turun dari ${prev.dtFrHm} ke ${curr.dtFrHm} L/HM. Untuk aktivitas hauling, ` +
        `FR normal DT ~${FR_THRESHOLD.DT_NORMAL_MIN}-${FR_THRESHOLD.DT_NORMAL_MAX} L/HM. ` +
        `Namun perlu dicatat: penurunan ini sebagian karena hari barging-only di mana DT idle.`,
      impact:
        `Penghematan implicit: ~${fmt((prev.dtFrHm - curr.dtFrHm) * (curr.dtQty / curr.dtFrHm))} L ` +
        `bila volume HM sama dengan minggu lalu. Perlu verifikasi apakah ini benar-benar efisiensi ` +
        `atau artefak dari idle days.`,
      actions: [
        "Bandingkan FR DT hanya dari hari FULL-OPS",
        "Identifikasi unit DT dengan FR terbaik untuk benchmark internal",
      ],
    });
  }

  // ── N-06: Stock recovery ──────────────────────────────────
  const stockStart = STOCK_SUMMARY.startStock || 0;
  const stockEnd = STOCK_SUMMARY.endStock || 0;
  const fullOpsAvg = (curr.total - bargingDaysTotal) / 5;
  out.push({
    id: "N-06",
    category: "Stok",
    severity: stockEnd < 10000 ? "MEDIUM" : "INFO",
    title: `Stok: ${fmt(stockStart)} → ${fmt(stockEnd)} L (net +${fmt(stockEnd - stockStart)} L)`,
    why:
      `Awal minggu stok di ${fmt(stockStart)} L. ` +
      `Total Stock-In minggu ini ${fmt(STOCK_SUMMARY.totalInCurrWeekRecorded)} L dari ` +
      `${STOCK_SUMMARY.stockInEvents.length} pengiriman vendor. ` +
      `Total konsumsi gross ${fmt(STOCK_SUMMARY.totalOutGross)} L, sehingga net perubahan ` +
      `+${fmt(stockEnd - stockStart)} L.`,
    impact:
      `Runway saat ini ~${KPI.runwayDaysHigh} hari (aman). ` +
      `Pola konsumsi hari FULL-ops ~${fmt(fullOpsAvg)} L/hari ` +
      `perlu di-cover oleh jadwal Stock-In rutin.`,
    actions: [
      `Set ROP minimal 3 hari konsumsi FULL-ops = ~${fmt(fullOpsAvg * 3)} L`,
      "Jadwalkan Stock-In 2×/minggu reguler, hindari pola reaktif",
      "Auto-alert ketika runway < 3 hari",
    ],
  });

  // ── N-07: First-refueling ──────────────────────────────────
  const firstRefuel = ANOMALIES.filter((a) =>
    a.issue.includes("First-refueling"),
  );
  if (firstRefuel.length >= 3) {
    out.push({
      id: "N-07",
      category: "Data Quality",
      severity: "MEDIUM",
      title: `${firstRefuel.length} unit first-refueling berulang — SOP perlu perbaikan`,
      why:
        `Unit ${firstRefuel.map((a) => a.unit).join(", ")} terdeteksi ` +
        `dengan HM_diff = 1 jam saat pengisian. Ini artinya Last Refueling (HM) ` +
        `belum di-update sebelum nozzle dipasang, sehingga sistem menganggap ` +
        `ini pengisian pertama kali. Kasus berulang = SOP tidak konsisten.`,
      impact:
        `FR unit-unit ini tidak akurat. Bila tidak diperbaiki, cost analysis ` +
        `bisa overstated untuk unit baru, dan maintenance scheduling berdasarkan HM bisa salah.`,
      actions: [
        "Checklist wajib di fuel station: verifikasi Last HM/KM unit baru",
        "Tambahkan validasi sistem: HM_diff=1 dengan qty >200 L → warning",
      ],
    });
  }

  // ── N-08: Vendor short delivery ────────────────────────────
  out.push({
    id: "N-08",
    category: "Vendor",
    severity: "MEDIUM",
    title: `3× vendor short delivery terdeteksi bulan ini`,
    why:
      `PT. CENTRAL OIL INDONESIA NICON: "Kurang 15 Liter" (27 Sep). ` +
      `PT. REBETSYA ALTA MANDIRI: "Kurang 74 Liter" (21 Sep, diganti 22 Sep). ` +
      `PT. SUMBER KARYA ANUGERAH: "Kurang 82 Liter" (20 Sep). ` +
      `Total shortage bulan September: 171 L dari 5 vendor.`,
    impact:
      `Shortage kecil (< 0,1%) tapi konsisten. Bila tidak ditindak, vendor ` +
      `cenderung mengulang. Stok ledger menjadi tidak akurat jika tidak direkonsiliasi.`,
    actions: [
      "Kirim surat peringatan resmi ke 3 vendor dengan data shortage",
      "Tambahkan klausul penalty 2× shortage di PO berikutnya",
      "Wajibkan timbangan ulang di lokasi sebelum unloading",
    ],
  });

  return out;
};

const NARRATIVES = generateNarratives();

/* ─────────────────────────── PAGE 1: EXECUTIVE ─────────────────────────── */
function ExecutivePage() {
  const {
    headline,
    headlineGross,
    riskLevel,
    keyPoints,
    dtEfficiency,
    costEstimate,
  } = EXECUTIVE;
  const [view, setView] = useState("net");
  const isNet = view === "net";

  const total = isNet ? KPI.totalWeekNet : KPI.totalWeekGross;
  const totalPrev = isNet ? KPI.totalPrevWeekNet : KPI.totalPrevWeekGross;
  const wow = isNet ? KPI.wowNet : KPI.wowGross;
  const fleetRate = isNet ? KPI.fleetRateNet : KPI.fleetRateGross;
  const fleetRatePrev = isNet ? KPI.fleetRatePrevNet : KPI.fleetRatePrevGross;

  const riskCfg = {
    HIGH: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
      icon: ShieldAlert,
    },
    MEDIUM: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-700",
      icon: AlertTriangle,
    },
    LOW: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-700",
      icon: CheckCircle2,
    },
  }[riskLevel];
  const RiskIcon = riskCfg.icon;

  const prevDays = DAILY.filter((d) => d.week === "prev");
  const currDays = DAILY.filter((d) => d.week === "curr");
  const currStartLabel = currDays[0]?.date;

  return (
    <div className="space-y-5">
      {/* Headline */}
      <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-0 text-white">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <Activity size={24} className="text-sky-400" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
              <div className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                Executive Summary — {WEEK_NEW}
              </div>
              <div className="flex gap-1 bg-white/10 rounded-lg p-0.5">
                {[
                  { k: "net", label: "NET (Fleet)" },
                  { k: "gross", label: "GROSS (Ledger)" },
                ].map((v) => (
                  <button
                    key={v.k}
                    onClick={() => setView(v.k)}
                    className={`text-[10px] font-bold px-2.5 py-1 rounded transition-all ${
                      view === v.k
                        ? "bg-sky-500 text-white shadow-sm"
                        : "text-slate-300 hover:text-white"
                    }`}>
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-lg font-semibold leading-relaxed">
              {isNet ? headline : headlineGross}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {keyPoints.map((k, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 backdrop-blur px-2.5 py-1 rounded-full">
                  {k}
                </span>
              ))}
            </div>
            {isNet && (
              <div className="mt-3 text-[11px] text-sky-200/80 italic">
                ℹ️ Net = exclude 7.000 L pengembalian BPSP loan dari gross
                ledger {fmt(KPI.totalWeekGross)} L.
              </div>
            )}
          </div>
          <div
            className={`hidden lg:flex flex-col items-center justify-center px-4 py-3 rounded-xl ${riskCfg.bg} ${riskCfg.border} border`}>
            <RiskIcon size={24} className={riskCfg.text} />
            <span
              className={`text-[10px] font-bold uppercase mt-1 ${riskCfg.text}`}>
              Risk
            </span>
            <span className={`text-lg font-extrabold ${riskCfg.text}`}>
              {riskLevel}
            </span>
          </div>
        </div>
      </Card>

      {/* Operational context bar */}
      <Card className="p-4 bg-gradient-to-r from-sky-50 to-indigo-50 border-sky-200">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center">
              <Mountain size={16} className="text-sky-700" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-sky-700 uppercase tracking-wider">
                Hauling
              </div>
              <div className="text-xs font-bold text-slate-800">Dump Truck</div>
            </div>
          </div>
          <div className="w-px h-8 bg-sky-200" />
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center">
              <Anchor size={16} className="text-indigo-700" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider">
                Barging
              </div>
              <div className="text-xs font-bold text-slate-800">
                Excavator → Tongkang
              </div>
            </div>
          </div>
          <div className="ml-auto text-[10px] text-slate-500 max-w-xs leading-relaxed">
            Site BPSP <strong>hanya beroperasi hauling + barging</strong>. Hari
            dengan salah satu aktivitas off akan menunjukkan pola konsumsi yang
            berbeda — bukan anomali.
          </div>
        </div>
      </Card>

      {/* BPSP LOAN LEDGER CARD */}
      <Card className="p-5 border-l-4 border-l-violet-500 bg-violet-50/30">
        <SectionTitle
          icon={ArrowRight}
          title="BPSP Loan Ledger — Inter-Company Transfer"
          sub={BPSP_LOAN.note}
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-3">
          <div className="p-3 rounded-lg bg-violet-100 border border-violet-200 col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 mb-1">
              <ArrowDownRight size={12} className="text-violet-700" />
              <span className="text-[10px] font-bold text-violet-700 uppercase">
                16 Sep
              </span>
            </div>
            <div className="text-lg font-extrabold text-slate-800">
              +{fmt(BPSP_LOAN.borrowQty)} L
            </div>
            <div className="text-[10px] text-violet-700">Peminjaman fuel</div>
          </div>

          {BPSP_LOAN.repayments.map((r) => (
            <div
              key={r.date}
              className={`p-3 rounded-lg border ${
                r.week === "curr"
                  ? "bg-amber-50 border-amber-200"
                  : "bg-slate-50 border-slate-200"
              }`}>
              <div className="flex items-center gap-1.5 mb-1">
                <ArrowUpRight
                  size={12}
                  className={
                    r.week === "curr" ? "text-amber-700" : "text-slate-600"
                  }
                />
                <span
                  className={`text-[10px] font-bold uppercase ${
                    r.week === "curr" ? "text-amber-700" : "text-slate-600"
                  }`}>
                  {r.date.split("-")[2]} Sep · {r.week}
                </span>
              </div>
              <div className="text-lg font-extrabold text-slate-800">
                −{fmt(r.qty)} L
              </div>
              <div className="text-[10px] text-slate-500">Pengembalian</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="p-3 rounded-lg bg-white border border-slate-200">
            <div className="text-[10px] font-bold text-slate-500 uppercase">
              Total Borrow
            </div>
            <div className="text-xl font-extrabold text-violet-700">
              +{fmt(BPSP_LOAN.borrowQty)} L
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white border border-slate-200">
            <div className="text-[10px] font-bold text-slate-500 uppercase">
              Total Repay
            </div>
            <div className="text-xl font-extrabold text-amber-700">
              −{fmt(BPSP_LOAN.totalRepay)} L
            </div>
          </div>
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
            <div className="text-[10px] font-bold text-emerald-700 uppercase">
              Net Balance
            </div>
            <div className="text-xl font-extrabold text-emerald-700">0 L</div>
            <div className="text-[10px] text-emerald-600">
              Siklus tertutup ✓
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-white border border-violet-200">
          <div className="flex items-start gap-2">
            <Info size={14} className="text-violet-600 mt-0.5 shrink-0" />
            <div className="text-xs text-slate-700 leading-relaxed">
              <strong>Dampak ke analisis:</strong> Repayment{" "}
              <strong>curr week 7.000 L</strong> vs{" "}
              <strong>prev week 2.000 L</strong>. Karena curr week mengembalikan
              lebih banyak, selisih WoW gross (−7,8%){" "}
              <strong>terdistorsi</strong>. Setelah dikurangi repayment,
              konsumsi fleet turun{" "}
              <strong>{Math.abs(KPI.wowNet).toFixed(1)}%</strong> — bukan −7,8%.
            </div>
          </div>
        </div>
      </Card>

      {/* KPI Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KPICard
          icon={Droplet}
          label={isNet ? "Konsumsi Fleet Net" : "Konsumsi Gross Ledger"}
          value={fmt(total)}
          unit="L"
          trend={wow}
          accent={isNet ? "sky" : "slate"}
          sub={isNet ? "Exclude BPSP loan return" : "As-recorded"}
        />
        <KPICard
          icon={Gauge}
          label="Rate Harian"
          value={fmt(fleetRate)}
          unit="L/hari"
          trend={wow}
          accent="amber"
          sub={`Prev: ${fmt(fleetRatePrev)} L/hari`}
        />
        <KPICard
          icon={Flame}
          label="Fuel Ratio DT"
          value={KPI.dtFrHm.toFixed(2)}
          unit="L/HM"
          accent="emerald"
          sub={`Normal: ${FR_THRESHOLD.DT_NORMAL_MIN}–${FR_THRESHOLD.DT_NORMAL_MAX} L/HM`}
        />
        <KPICard
          icon={Warehouse}
          label="Stok EOD"
          value={fmt(KPI.currentStock)}
          unit="L"
          accent={KPI.runwayDaysHigh < 2 ? "red" : "slate"}
          danger={KPI.runwayDaysHigh < 2}
          sub={`Runway ~${KPI.runwayDaysHigh.toFixed(1)} hari`}
        />
      </div>

      {/* Key Findings */}
      <Card className="p-5 border-l-4 border-l-sky-500">
        <SectionTitle
          icon={Lightbulb}
          title="Key Findings Minggu Ini"
          sub="Ringkasan 3 insight paling penting (lihat tab Deep Analysis untuk lengkap)"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          {NARRATIVES.slice(0, 3).map((n) => (
            <div
              key={n.id}
              className={`p-3 rounded-lg border ${
                n.severity === "GOOD"
                  ? "bg-emerald-50 border-emerald-200"
                  : n.severity === "MEDIUM"
                    ? "bg-amber-50 border-amber-200"
                    : n.severity === "VIOLET"
                      ? "bg-violet-50 border-violet-200"
                      : "bg-sky-50 border-sky-200"
              }`}>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                {n.category}
              </div>
              <div className="text-xs font-bold text-slate-800 leading-snug mb-1.5">
                {n.title}
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {n.impact}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Daily Issues */}
      <Card className="p-5">
        <SectionTitle
          icon={Calendar}
          title="Daily Issue — Konteks Operasional"
          sub="Catatan operasional harian yang mempengaruhi konsumsi fuel"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-3">
          {DAILY_ISSUES.filter(
            (issue) =>
              new Date(issue.date) >= new Date(DAILY[0]?.isoDate) &&
              issue.issue !== "n/a",
          ).map((issue) => {
            const d = new Date(issue.date);
            const isBarging = issue.issue.toLowerCase().includes("barging");
            return (
              <div
                key={issue.date}
                className={`p-3 rounded-lg border ${
                  isBarging
                    ? "bg-indigo-50 border-indigo-200"
                    : "bg-amber-50 border-amber-200"
                }`}>
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${
                      isBarging ? "text-indigo-700" : "text-amber-700"
                    }`}>
                    {d.getDate()}/{d.getMonth() + 1}/{d.getFullYear()}
                  </span>
                  {isBarging && (
                    <Anchor size={12} className="text-indigo-600" />
                  )}
                </div>
                <div
                  className={`text-xs font-bold ${isBarging ? "text-indigo-900" : "text-amber-900"}`}>
                  {issue.issue}
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-[11px] text-slate-500 mt-3 italic">
          Catatan: Hari dengan keterangan "hanya barging" menunjukkan konsumsi
          jauh lebih rendah karena aktivitas hauling DT dihentikan sementara.
          Ini sesuai rencana, bukan anomali.
        </p>
      </Card>

      {/* Perbandingan mingguan */}
      <Card className="p-5">
        <SectionTitle
          icon={Calendar}
          title="Perbandingan Mingguan"
          sub={`${WEEK_PREV} (prev) vs ${WEEK_NEW} (curr) — Gross & Net`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Minggu Lalu
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                {WEEK_PREV}
              </span>
            </div>
            <div className="text-2xl font-extrabold text-slate-800">
              {fmt(WEEK_COMPARISON.prev.total)} L
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Avg <strong>{fmt(WEEK_COMPARISON.prev.avgDaily)} L/hari</strong>
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {WEEK_COMPARISON.prev.records} rec · {WEEK_COMPARISON.prev.units}{" "}
              unit · {WEEK_COMPARISON.prev.activeDays} hari
            </div>
            <div className="text-[10px] text-violet-700 mt-2 pt-2 border-t border-slate-200">
              BPSP repay prev: −{fmt(WEEK_COMPARISON.prev.bpspRepay)} L
            </div>
          </div>

          <div className="p-4 rounded-lg bg-sky-50 border border-sky-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider">
                Minggu Ini
              </span>
              <span className="text-[10px] font-bold text-sky-500">
                {WEEK_NEW}
              </span>
            </div>
            <div className="text-2xl font-extrabold text-slate-800">
              {fmt(WEEK_COMPARISON.curr.total)} L
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Avg <strong>{fmt(WEEK_COMPARISON.curr.avgDaily)} L/hari</strong>
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {WEEK_COMPARISON.curr.records} rec · {WEEK_COMPARISON.curr.units}{" "}
              unit · {WEEK_COMPARISON.curr.activeDays} hari
            </div>
            <div className="text-[10px] text-violet-700 mt-2 pt-2 border-t border-sky-200">
              BPSP repay curr: −{fmt(WEEK_COMPARISON.curr.bpspRepay)} L
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-800 text-white">
            <div className="text-[10px] font-bold text-sky-400 uppercase tracking-wider mb-1">
              Delta (Curr vs Prev)
            </div>
            <div
              className={`text-3xl font-extrabold ${WEEK_COMPARISON.deltas.total > 0 ? "text-amber-400" : "text-emerald-400"}`}>
              {fmtPct(WEEK_COMPARISON.deltas.total)}
            </div>
            <div className="text-[11px] text-slate-400 mb-2">Gross WoW</div>
            <div className="bg-white/10 rounded p-2">
              <div className="text-[10px] text-sky-300 uppercase">Net WoW</div>
              <div className="text-xl font-extrabold text-emerald-400">
                {fmtPct(WEEK_COMPARISON.deltas.totalNet)}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            {
              label: "Production",
              prevKey: "prod",
              currKey: "prod",
              color: C.accent,
              delta: WEEK_COMPARISON.deltas.prod,
            },
            {
              label: "MHR",
              prevKey: "mhr",
              currKey: "mhr",
              color: C.gold,
              delta: WEEK_COMPARISON.deltas.mhr,
            },
            {
              label: "Support",
              prevKey: "supp",
              currKey: "supp",
              color: C.muted,
              delta: WEEK_COMPARISON.deltas.supp,
            },
            {
              label: "Total Fleet (DT+EXC)",
              prevKey: null,
              currKey: null,
              color: C.navy,
              prevVal:
                (WEEK_COMPARISON.prev.dtQty || 0) +
                (WEEK_COMPARISON.prev.excQty || 0),
              currVal:
                (WEEK_COMPARISON.curr.dtQty || 0) +
                (WEEK_COMPARISON.curr.excQty || 0),
              delta: WEEK_COMPARISON.deltas.dtQty,
            },
          ].map((row) => {
            const pv =
              row.prevVal != null
                ? row.prevVal
                : WEEK_COMPARISON.prev[row.prevKey];
            const cv =
              row.currVal != null
                ? row.currVal
                : WEEK_COMPARISON.curr[row.currKey];
            const max = Math.max(pv, cv) || 1;
            return (
              <div
                key={row.label}
                className="p-3 rounded-lg border border-slate-200 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide truncate">
                    {row.label}
                  </span>
                  <DeltaChip value={row.delta} />
                </div>
                <div className="space-y-1.5">
                  <div>
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Prev</span>
                      <span className="font-bold">{fmt(pv)} L</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded mt-0.5 overflow-hidden">
                      <div
                        className="h-full bg-slate-400 rounded"
                        style={{ width: `${(pv / max) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] text-sky-600">
                      <span>Curr</span>
                      <span className="font-bold">{fmt(cv)} L</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded mt-0.5 overflow-hidden">
                      <div
                        className="h-full rounded"
                        style={{
                          width: `${(cv / max) * 100}%`,
                          background: row.color,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Tren konsumsi */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Card className="lg:col-span-2 p-5">
          <SectionTitle
            icon={LineIcon}
            title={`Tren Konsumsi ${prevDays.length + currDays.length} Hari`}
            sub={`${WEEK_PREV} (abu) + ${WEEK_NEW} (biru) · barging-only days ditandai`}
          />
          <ResponsiveContainer width="100%" height={260}>
            <ComposedChart data={FORECAST.history}>
              <defs>
                <linearGradient id="gradAct" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={C.accent} stopOpacity={0.4} />
                  <stop offset="100%" stopColor={C.accent} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" tick={{ fontSize: 10, fill: C.muted }} />
              <YAxis
                tick={{ fontSize: 10, fill: C.muted }}
                tickFormatter={(v) => (v / 1000).toFixed(0) + "k"}
              />
              <Tooltip content={<ChartTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              {currStartLabel && (
                <ReferenceArea
                  x1={currStartLabel}
                  x2={currDays[currDays.length - 1]?.date}
                  fill={C.accent}
                  fillOpacity={0.06}
                />
              )}
              <ReferenceLine
                y={KPI.fleetRatePrevNet}
                stroke={C.muted}
                strokeDasharray="4 4"
                label={{ value: "Prev net avg", fontSize: 10, fill: C.muted }}
              />
              <Area
                type="monotone"
                dataKey="actual"
                name="Aktual"
                stroke={C.accent}
                strokeWidth={2}
                fill="url(#gradAct)"
                dot={{ r: 2 }}
              />
              <Line
                type="monotone"
                dataKey="ma7"
                name="MA-7"
                stroke={C.gold}
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 3"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-5">
          <SectionTitle
            icon={DollarSign}
            title="Estimasi Biaya"
            sub={`Harga acuan: ${fmtIdr(costEstimate.pricePerL)}/L`}
          />
          <div className="mb-4">
            <div className="text-3xl font-extrabold text-slate-800">
              {costEstimate.idrText}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              untuk {fmtL(total)}
            </div>
            <div className="mt-2 inline-flex">
              <DeltaChip value={wow} />
              <span className="text-[11px] text-slate-500 ml-2 self-center">
                vs minggu lalu
              </span>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Efisiensi DT terbaik
              </span>
              <span className="text-xs font-bold text-emerald-600">
                {dtEfficiency.best?.unit} · {dtEfficiency.best?.frHm} L/HM
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Rata-rata DT fleet</span>
              <span className="text-xs font-bold text-slate-700">
                {dtEfficiency.avg} L/HM
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">DT paling boros</span>
              <span className="text-xs font-bold text-red-600">
                {dtEfficiency.worst?.unit} · {dtEfficiency.worst?.frHm} L/HM
              </span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <span className="text-xs text-slate-500">Δ FR DT (WoW)</span>
              <DeltaChip value={WEEK_COMPARISON.deltas.dtFrHm} inverse />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Δ FR EXC (WoW)</span>
              <DeltaChip value={WEEK_COMPARISON.deltas.excFrHm} inverse />
            </div>
          </div>
        </Card>
      </div>

      {/* DOW */}
      <Card className="p-5">
        <SectionTitle
          icon={Calendar}
          title="Pola Harian (Hari dalam Minggu)"
          sub="Total konsumsi per hari — prev vs curr week"
        />
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={DOW_COMPARISON}>
            <XAxis dataKey="day" tick={{ fontSize: 11, fill: C.ink }} />
            <YAxis
              tick={{ fontSize: 10, fill: C.muted }}
              tickFormatter={(v) => (v / 1000).toFixed(0) + "k"}
            />
            <Tooltip content={<ChartTooltip />} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Bar
              dataKey="prev"
              name={`Prev (${WEEK_PREV})`}
              fill={C.muted}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="curr"
              name={`Curr (${WEEK_NEW})`}
              fill={C.accent}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Category + Location */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="p-5">
          <SectionTitle
            icon={BarChart3}
            title="Breakdown Kategori"
            sub="Volume per kategori & sub-jenis (minggu ini)"
          />
          <div className="space-y-4">
            {CATEGORY_BREAKDOWN.map((c) => {
              const pct = (c.qty / KPI.totalWeekGross) * 100;
              const colorMap = {
                Production: C.accent,
                MHR: C.gold,
                Support: C.muted,
              };
              return (
                <div key={c.cat}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-slate-700">{c.cat}</span>
                    <span className="font-extrabold text-slate-800">
                      {fmt(c.qty)} L{" "}
                      <span className="text-slate-400 font-normal">
                        ({pct.toFixed(1)}%)
                      </span>
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded overflow-hidden">
                    <div
                      className="h-full rounded"
                      style={{ width: `${pct}%`, background: colorMap[c.cat] }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {c.subBreakdown.map((s) => (
                      <span
                        key={s.jenis}
                        className="text-[10px] bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded text-slate-600">
                        {s.jenis} · {fmt(s.qty)} L · {s.units}u
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-5">
          <SectionTitle
            icon={MapPin}
            title="Sebaran Lokasi Refueling"
            sub="Volume & rata-rata per transaksi"
          />
          <div className="space-y-2.5">
            {LOCATION_BREAKDOWN.slice(0, 6).map((l, i) => {
              const pct = (l.qty / KPI.totalWeekGross) * 100;
              return (
                <div key={l.location} className="flex items-center gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{
                      background: LOCATION_COLORS[i % LOCATION_COLORS.length],
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-slate-700">
                        {l.location}
                      </span>
                      <span className="font-bold text-slate-800">
                        {fmt(l.qty)} L
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded mt-1 overflow-hidden">
                      <div
                        className="h-full rounded"
                        style={{
                          width: `${pct}%`,
                          background:
                            LOCATION_COLORS[i % LOCATION_COLORS.length],
                        }}
                      />
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {l.records} transaksi · rata-rata {fmt(l.avgPerRec, 1)} L
                      · {l.units} unit
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ═══════════════════ PAGE 1B: DEEP ANALYSIS ═══════════════════ */
function AnalysisPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const categories = [
    "ALL",
    "BPSP Loan",
    "Konteks",
    "Produksi",
    "Support",
    "Excavator",
    "Dump Truck",
    "Stok",
    "Data Quality",
    "Vendor",
  ];

  const filtered =
    activeFilter === "ALL"
      ? NARRATIVES
      : NARRATIVES.filter((n) => n.category === activeFilter);

  const sevBadge = (s) =>
    ({
      HIGH: {
        bg: "bg-red-100",
        text: "text-red-700",
        icon: AlertTriangle,
        label: "KRITIS",
      },
      MEDIUM: {
        bg: "bg-amber-100",
        text: "text-amber-700",
        icon: AlertCircle,
        label: "PERHATIAN",
      },
      INFO: {
        bg: "bg-sky-100",
        text: "text-sky-700",
        icon: Info,
        label: "INFO",
      },
      GOOD: {
        bg: "bg-emerald-100",
        text: "text-emerald-700",
        icon: CheckCircle2,
        label: "BAIK",
      },
      VIOLET: {
        bg: "bg-violet-100",
        text: "text-violet-700",
        icon: ArrowRight,
        label: "TRANSFER",
      },
    })[s] || {
      bg: "bg-slate-100",
      text: "text-slate-600",
      icon: Info,
      label: "INFO",
    };

  const actionGroups = [
    {
      priority: "IMMEDIATE",
      label: "Immediate (24 jam)",
      color: "red",
      icon: AlertTriangle,
      items: [
        {
          task: "Rekonsiliasi BPSP loan ledger (16 Sep in, 20–24 Sep out)",
          why: "Pastikan net balance 0 di master data. Ini menyembunyikan penurunan sebenarnya jika tidak di-net.",
          owner: "Finance + Ops",
        },
        {
          task: "Audit HM meter 5 unit EXC terendah",
          why: `FR EXC aktual 14–22 L/HM di bawah range "normal" 28–32 L/HM. Kemungkinan sensor HM rusak.`,
          owner: "Maintenance",
        },
      ],
    },
    {
      priority: "SHORT_TERM",
      label: "Short-term (1 minggu)",
      color: "amber",
      icon: Clock,
      items: [
        {
          task: `Set ROP otomatis 3 hari full-ops = ~30.000 L`,
          why: "Cegah pola 'stock-in panik' yang muncul 2 minggu berturut-turut.",
          owner: "Supply Chain",
        },
        {
          task: "Kirim surat peringatan ke 3 vendor dengan data shortage",
          why: "Total 171 L shortage bulan Sept — perlu tindakan resmi.",
          owner: "Procurement",
        },
      ],
    },
    {
      priority: "MEDIUM_TERM",
      label: "Medium-term (1 bulan)",
      color: "sky",
      icon: Target,
      items: [
        {
          task: "Pisahkan kategori BPSP Loan & Inter-company dari Support",
          why: "Agar Support mencerminkan konsumsi operasional murni.",
          owner: "Data Governance",
        },
        {
          task: "Update Daily Issue sheet dengan kolom 'mode operasi' (FULL/PARTIAL/BARGING)",
          why: "Baseline FR lebih akurat bila dipisah per mode operasi.",
          owner: "Data Governance",
        },
        {
          task: "Standarisasi penamaan unit + validasi sistem",
          why: "Masih ada entri lama 'TMI xxx' style & unit dengan FR invalid.",
          owner: "Data Governance",
        },
      ],
    },
  ];

  const priorityColor = (c) =>
    ({
      red: {
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-700",
        dot: "bg-red-500",
      },
      amber: {
        bg: "bg-amber-50",
        border: "border-amber-200",
        text: "text-amber-700",
        dot: "bg-amber-500",
      },
      sky: {
        bg: "bg-sky-50",
        border: "border-sky-200",
        text: "text-sky-700",
        dot: "bg-sky-500",
      },
    })[c];

  return (
    <div className="space-y-5">
      <Card className="p-6 bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 border-0 text-white">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <BookOpen size={24} className="text-indigo-300" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-1">
              Deep Analysis — Konteks & Insight Operasional
            </div>
            <p className="text-base font-medium leading-relaxed text-indigo-50">
              Setiap insight sudah mempertimbangkan konteks operasional
              (hauling/barging) dan BPSP loan ledger sehingga Anda tidak salah
              membaca data sebagai anomali.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-5">
              <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                <div className="text-[10px] font-bold text-indigo-200 uppercase">
                  Total Insight
                </div>
                <div className="text-2xl font-extrabold">
                  {NARRATIVES.length}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                <div className="text-[10px] font-bold text-indigo-200 uppercase">
                  Action Items
                </div>
                <div className="text-2xl font-extrabold">
                  {actionGroups.reduce((s, g) => s + g.items.length, 0)}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                <div className="text-[10px] font-bold text-indigo-200 uppercase">
                  Prioritas
                </div>
                <div className="text-2xl font-extrabold">P0–P2</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wide mr-2">
            Filter:
          </span>
          {categories.map((c) => {
            const count =
              c === "ALL"
                ? NARRATIVES.length
                : NARRATIVES.filter((n) => n.category === c).length;
            if (count === 0 && c !== "ALL") return null;
            return (
              <button
                key={c}
                onClick={() => setActiveFilter(c)}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                  activeFilter === c
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}>
                {c} <span className="opacity-70 ml-1">({count})</span>
              </button>
            );
          })}
        </div>
      </Card>

      <div className="space-y-4">
        {filtered.map((n) => {
          const cfg = sevBadge(n.severity);
          const SeviIcon = cfg.icon;
          return (
            <Card key={n.id} className="overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 flex items-start gap-3">
                <div
                  className={`w-9 h-9 rounded-lg ${cfg.bg} flex items-center justify-center shrink-0`}>
                  <SeviIcon size={16} className={cfg.text} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span
                      className={`text-[10px] font-bold ${cfg.bg} ${cfg.text} px-2 py-0.5 rounded uppercase tracking-wider`}>
                      {cfg.label}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase tracking-wider">
                      {n.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {n.id}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-800 leading-snug">
                    {n.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div className="flex gap-3">
                  <div className="shrink-0 w-24">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Mengapa?
                    </div>
                  </div>
                  <p className="flex-1 text-xs text-slate-700 leading-relaxed">
                    {n.why}
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="shrink-0 w-24">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Dampak
                    </div>
                  </div>
                  <p className="flex-1 text-xs text-slate-700 leading-relaxed">
                    {n.impact}
                  </p>
                </div>

                <div className="flex gap-3 pt-2 border-t border-slate-100">
                  <div className="shrink-0 w-24">
                    <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider flex items-center gap-1">
                      <ClipboardCheck size={11} /> Tindakan
                    </div>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {n.actions.map((a, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <ArrowRight
                          size={12}
                          className="text-indigo-500 mt-1 shrink-0"
                        />
                        <span className="text-xs text-slate-700">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-5">
        <SectionTitle
          icon={Flag}
          title="Action Plan — Prioritas"
          sub={`${actionGroups.reduce((s, g) => s + g.items.length, 0)} item · diurutkan berdasarkan urgensi`}
        />

        <div className="space-y-4 mt-4">
          {actionGroups.map((group) => {
            const cfg = priorityColor(group.color);
            const Icon = group.icon;
            return (
              <div
                key={group.priority}
                className={`rounded-xl border ${cfg.border} overflow-hidden`}>
                <div
                  className={`${cfg.bg} px-4 py-2.5 flex items-center gap-2 border-b ${cfg.border}`}>
                  <Icon size={14} className={cfg.text} />
                  <span
                    className={`text-xs font-extrabold ${cfg.text} uppercase tracking-wider`}>
                    {group.label}
                  </span>
                  <span className="text-[10px] text-slate-500 ml-auto">
                    {group.items.length} item
                  </span>
                </div>
                <div className="divide-y divide-slate-100 bg-white">
                  {group.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 flex items-start gap-3 hover:bg-slate-50/50 transition-colors">
                      <div
                        className={`w-6 h-6 rounded-lg ${cfg.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <CheckSquare size={12} className={cfg.text} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-slate-800 mb-1">
                          {item.task}
                        </div>
                        <div className="text-[11px] text-slate-500 mb-1.5">
                          {item.why}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px]">
                          <CircleDot size={9} className="text-slate-400" />
                          <span className="font-bold text-slate-500 uppercase tracking-wider">
                            Owner:
                          </span>
                          <span className="text-slate-600">{item.owner}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card className="p-5 border-l-4 border-l-indigo-500 bg-indigo-50/30">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
            <Info size={14} className="text-indigo-600" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-indigo-800 uppercase tracking-wider mb-1.5">
              Metodologi & Konteks Operasional
            </div>
            <ul className="text-xs text-slate-700 space-y-1 leading-relaxed">
              <li>
                • <strong>Operasi site:</strong> hanya hauling (DT) + barging
                (EXC) — tidak ada aktivitas drilling/blasting/loading tambahan.
              </li>
              <li>
                • <strong>FR Normal:</strong> DT {FR_THRESHOLD.DT_NORMAL_MIN}–
                {FR_THRESHOLD.DT_NORMAL_MAX} L/HM · EXC{" "}
                {FR_THRESHOLD.EXC_NORMAL_MIN}–{FR_THRESHOLD.EXC_NORMAL_MAX}{" "}
                L/HM.
              </li>
              <li>
                • <strong>BPSP loan:</strong> 9.000 L (16 Sep in) dikembalikan
                20–24 Sep (2k+2k+2k+3k) — net 0, bukan konsumsi fleet.
              </li>
              <li>
                • <strong>Hari barging-only</strong> (26–27 Sep) menyebabkan
                konsumsi drop — dikecualikan dari baseline full-ops.
              </li>
              <li>
                • Narasi di-generate otomatis dari perbandingan metrik (bukan
                hardcode).
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ─────────────────────────── PAGE 2: OPERATIONS ─────────────────────────── */
const UnitDayHeatmap = ({ matrix, unitLabel = "Unit" }) => {
  if (!matrix?.rows?.length)
    return <p className="text-xs text-slate-400">Tidak ada data.</p>;
  const { dates, rows, maxQty } = matrix;

  const bgFor = (v) => {
    if (!v) return "rgba(241,245,249,1)";
    const pct = Math.min(1, v / (maxQty || 1));
    return `rgba(2,132,199,${0.08 + pct * 0.85})`;
  };

  return (
    <div className="overflow-x-auto -mx-5 px-5">
      <div className="inline-block min-w-full">
        <div className="flex">
          <div className="w-20 shrink-0" />
          {dates.map((d) => (
            <div
              key={d}
              className="w-12 shrink-0 text-center text-[10px] font-bold text-slate-500 pb-1">
              {d}
            </div>
          ))}
        </div>

        {rows.map((row) => (
          <div key={row.unit} className="flex items-center">
            <div className="w-20 shrink-0 text-[11px] font-bold text-slate-700 pr-2 truncate">
              {row.unit}
            </div>
            {row.values.map((v, i) => (
              <div
                key={i}
                className="w-12 shrink-0 h-7 m-[1px] rounded flex items-center justify-center text-[10px] font-bold transition-all hover:ring-2 hover:ring-sky-400"
                style={{
                  background: bgFor(v.qty),
                  color: v.qty / (maxQty || 1) > 0.5 ? "#fff" : C.ink,
                }}
                title={`${row.unit} · ${v.date} · ${v.qty} L`}>
                {v.qty > 0
                  ? v.qty >= 1000
                    ? (v.qty / 1000).toFixed(1) + "k"
                    : Math.round(v.qty)
                  : ""}
              </div>
            ))}
          </div>
        ))}

        <div className="flex items-center gap-2 mt-3 text-[10px] text-slate-500">
          <span>0 L</span>
          <div className="flex">
            {[0, 0.15, 0.3, 0.5, 0.7, 0.85, 1].map((p, i) => (
              <div
                key={i}
                className="w-5 h-3"
                style={{ background: `rgba(2,132,199,${0.08 + p * 0.85})` }}
              />
            ))}
          </div>
          <span>{maxQty} L</span>
        </div>
      </div>
    </div>
  );
};

function OperationsPage() {
  const [selectedCat, setSelectedCat] = useState("Production");
  const [heatTab, setHeatTab] = useState("DT");

  const currStartLabel = DAILY_FLEET_TREND.find((d) => d.week === "curr")?.date;
  const currEndLabel = DAILY_FLEET_TREND.filter((d) => d.week === "curr").slice(
    -1,
  )[0]?.date;
  const totalDays = DAILY_FLEET_TREND.length;

  return (
    <div className="space-y-5">
      <Card className="p-5">
        <SectionTitle
          icon={LineIcon}
          title="Tren Harian Pengisian DT (Hauling) & EXC (Barging)"
          sub={`Volume L/hari per jenis unit (${totalDays} hari — prev + curr week)`}
        />
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={DAILY_FLEET_TREND}>
            <defs>
              <linearGradient id="gradDT" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={C.accent} stopOpacity={0.35} />
                <stop offset="100%" stopColor={C.accent} stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="gradEXC" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={C.gold} stopOpacity={0.35} />
                <stop offset="100%" stopColor={C.gold} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" tick={{ fontSize: 10, fill: C.muted }} />
            <YAxis
              tick={{ fontSize: 10, fill: C.muted }}
              tickFormatter={(v) => (v / 1000).toFixed(0) + "k"}
            />
            <Tooltip content={<ChartTooltip />} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            {currStartLabel && currEndLabel && (
              <ReferenceArea
                x1={currStartLabel}
                x2={currEndLabel}
                fill={C.accent}
                fillOpacity={0.06}
              />
            )}
            <Area
              type="monotone"
              dataKey="dtQty"
              name="Dump Truck (L)"
              stroke={C.accent}
              strokeWidth={2}
              fill="url(#gradDT)"
              dot={{ r: 2 }}
            />
            <Area
              type="monotone"
              dataKey="excQty"
              name="Excavator (L)"
              stroke={C.gold}
              strokeWidth={2}
              fill="url(#gradEXC)"
              dot={{ r: 2 }}
            />
            <Line
              type="monotone"
              dataKey="dtUnits"
              name="Unit DT aktif"
              stroke={C.accent}
              strokeWidth={2}
              strokeDasharray="4 3"
              dot={{ r: 2 }}
              yAxisId={0}
            />
            <Line
              type="monotone"
              dataKey="excUnits"
              name="Unit EXC aktif"
              stroke={C.gold}
              strokeWidth={2}
              strokeDasharray="4 3"
              dot={{ r: 2 }}
              yAxisId={0}
            />
          </ComposedChart>
        </ResponsiveContainer>
        <div className="text-[10px] text-slate-400 mt-2 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <span className="w-3 h-2 rounded-sm bg-slate-300/50" /> Prev week
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="w-3 h-2 rounded-sm bg-sky-300/40" /> Curr week
          </span>
          <span className="inline-flex items-center gap-1">
            <Anchor size={10} className="text-indigo-600" /> Barging only (26–27
            Sep): konsumsi DT drop
          </span>
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <SectionTitle
            icon={Gauge}
            title="Heatmap Pengisian Unit × Hari"
            sub={`Top 15 unit · minggu ini (7 hari) · warna lebih pekat = volume lebih tinggi`}
          />
          <div className="flex gap-1">
            {["DT", "EXC"].map((t) => (
              <button
                key={t}
                onClick={() => setHeatTab(t)}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg ${heatTab === t ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                {t === "DT" ? "Dump Truck (Hauling)" : "Excavator (Barging)"}
              </button>
            ))}
          </div>
        </div>

        <UnitDayHeatmap
          matrix={heatTab === "DT" ? DT_DAILY_MATRIX : EXC_DAILY_MATRIX}
        />
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="p-5">
          <SectionTitle
            icon={Truck}
            title="Rata-rata DT / Hari (Hauling)"
            sub={`Target ${FR_THRESHOLD.DT_NORMAL_MIN}–${FR_THRESHOLD.DT_NORMAL_MAX} L/HM`}
          />
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                label: "Avg L/hari",
                value: fmt(
                  DAILY_FLEET_TREND.reduce((a, b) => a + b.dtQty, 0) /
                    (DAILY_FLEET_TREND.filter((d) => d.dtQty > 0).length || 1),
                ),
                unit: "L",
              },
              {
                label: "Avg unit aktif",
                value: (
                  DAILY_FLEET_TREND.reduce((a, b) => a + b.dtUnits, 0) /
                  (DAILY_FLEET_TREND.length || 1)
                ).toFixed(1),
                unit: "unit",
              },
              {
                label: "Avg FR",
                value: (
                  DAILY_FLEET_TREND.filter((d) => d.dtFrHm > 0).reduce(
                    (a, b) => a + b.dtFrHm,
                    0,
                  ) /
                  (DAILY_FLEET_TREND.filter((d) => d.dtFrHm > 0).length || 1)
                ).toFixed(2),
                unit: "L/HM",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="p-3 rounded-lg bg-sky-50 border border-sky-100">
                <div className="text-[10px] font-bold text-sky-700 uppercase">
                  {s.label}
                </div>
                <div className="text-lg font-extrabold text-slate-800">
                  {s.value}
                  <span className="text-xs font-medium text-slate-500 ml-1">
                    {s.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <SectionTitle
            icon={Wrench}
            title="Rata-rata EXC / Hari (Barging)"
            sub={`Target ${FR_THRESHOLD.EXC_NORMAL_MIN}–${FR_THRESHOLD.EXC_NORMAL_MAX} L/HM`}
          />
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                label: "Avg L/hari",
                value: fmt(
                  DAILY_FLEET_TREND.reduce((a, b) => a + b.excQty, 0) /
                    (DAILY_FLEET_TREND.filter((d) => d.excQty > 0).length || 1),
                ),
                unit: "L",
              },
              {
                label: "Avg unit aktif",
                value: (
                  DAILY_FLEET_TREND.reduce((a, b) => a + b.excUnits, 0) /
                  (DAILY_FLEET_TREND.length || 1)
                ).toFixed(1),
                unit: "unit",
              },
              {
                label: "Avg FR",
                value: (
                  DAILY_FLEET_TREND.filter((d) => d.excFrHm > 0).reduce(
                    (a, b) => a + b.excFrHm,
                    0,
                  ) /
                  (DAILY_FLEET_TREND.filter((d) => d.excFrHm > 0).length || 1)
                ).toFixed(2),
                unit: "L/HM",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="p-3 rounded-lg bg-amber-50 border border-amber-100">
                <div className="text-[10px] font-bold text-amber-700 uppercase">
                  {s.label}
                </div>
                <div className="text-lg font-extrabold text-slate-800">
                  {s.value}
                  <span className="text-xs font-medium text-slate-500 ml-1">
                    {s.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-5">
        <SectionTitle
          icon={BarChart3}
          title="Konsumsi Harian per Kategori"
          sub={`Stacked: Production / MHR / Support — ${totalDays} hari`}
        />
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={DAILY}>
            <XAxis dataKey="date" tick={{ fontSize: 10, fill: C.muted }} />
            <YAxis
              tick={{ fontSize: 10, fill: C.muted }}
              tickFormatter={(v) => (v / 1000).toFixed(0) + "k"}
            />
            <Tooltip content={<ChartTooltip />} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            {currStartLabel && currEndLabel && (
              <ReferenceArea
                x1={currStartLabel}
                x2={currEndLabel}
                fill={C.accent}
                fillOpacity={0.04}
              />
            )}
            <Bar dataKey="prod" name="Production" stackId="a" fill={C.accent} />
            <Bar dataKey="mhr" name="MHR" stackId="a" fill={C.gold} />
            <Bar
              dataKey="supp"
              name="Support"
              stackId="a"
              fill={C.muted}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-[11px] text-slate-500 mt-2 italic">
          Lonjakan Support pada 20–24 Sep sebagian besar adalah pengembalian
          fuel BPSP (bukan konsumsi alat).
        </p>
      </Card>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <SectionTitle
            icon={Truck}
            title="Analisis per Kategori"
            sub="Pilih kategori untuk detail (minggu ini)"
          />
          <div className="flex gap-1.5">
            {["Production", "MHR", "Support"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                  selectedCat === cat
                    ? "bg-sky-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {(() => {
          const c = CATEGORY_BREAKDOWN.find((x) => x.cat === selectedCat);
          if (!c) return null;
          return (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-sky-50 border border-sky-100">
                <div className="text-[10px] font-bold text-sky-700 uppercase">
                  Total Volume
                </div>
                <div className="text-xl font-extrabold text-slate-800">
                  {fmt(c.qty)} L
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-[10px] font-bold text-slate-500 uppercase">
                  Transaksi
                </div>
                <div className="text-xl font-extrabold text-slate-800">
                  {c.records}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-[10px] font-bold text-slate-500 uppercase">
                  Unit Aktif
                </div>
                <div className="text-xl font-extrabold text-slate-800">
                  {c.units}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-[10px] font-bold text-slate-500 uppercase">
                  FR / Avg per Rec
                </div>
                <div className="text-xl font-extrabold text-slate-800">
                  {c.frHm > 0 ? `${c.frHm} L/HM` : `${fmt(c.avgPerRec, 1)} L`}
                </div>
              </div>

              {c.subBreakdown.length > 0 && (
                <div className="md:col-span-4 mt-2">
                  <div className="text-xs font-bold text-slate-600 uppercase mb-2">
                    Sub-jenis Unit
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {c.subBreakdown
                      .sort((a, b) => b.qty - a.qty)
                      .map((s) => (
                        <div
                          key={s.jenis}
                          className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
                          <span className="text-xs text-slate-700 truncate">
                            {s.jenis}
                          </span>
                          <span className="text-xs font-bold text-slate-800 ml-2">
                            {fmt(s.qty)} L
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          );
        })()}
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="p-5">
          <SectionTitle
            icon={Clock}
            title="Analisis Shift"
            sub="Perbandingan volume antar shift"
          />
          {SHIFT_ANALYSIS.length ? (
            <div className="space-y-3">
              {SHIFT_ANALYSIS.map((s) => (
                <div
                  key={s.shift}
                  className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
                        <Clock size={14} className="text-sky-600" />
                      </div>
                      <span className="font-bold text-slate-700">
                        Shift {s.shift}
                      </span>
                    </div>
                    <span className="text-lg font-extrabold text-slate-800">
                      {fmt(s.qty)} L
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-400">Rec:</span>{" "}
                      <strong>{s.records}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400">Unit:</span>{" "}
                      <strong>{s.units}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400">Avg:</span>{" "}
                      <strong>{fmt(s.avgPerRec, 1)} L</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-400">Tidak ada data shift.</p>
          )}
        </Card>

        <Card className="p-5">
          <SectionTitle
            icon={Users}
            title="Top Operators"
            sub="Berdasarkan total refueling"
          />
          <div className="space-y-2">
            {OPERATORS.map((o, i) => (
              <div
                key={o.operator}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold ${
                    i === 0
                      ? "bg-amber-100 text-amber-700"
                      : i === 1
                        ? "bg-slate-200 text-slate-700"
                        : i === 2
                          ? "bg-orange-100 text-orange-700"
                          : "bg-slate-100 text-slate-500"
                  }`}>
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-700 truncate">
                    {o.operator}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {o.refuels} refuels · {o.units} unit
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-extrabold text-slate-800">
                    {fmt(o.qty)} L
                  </div>
                  <div className="text-[10px] text-slate-400">
                    avg {fmt(o.avgPerRec, 1)} L
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ─────────────────────────── PAGE 3: UNIT SCORECARD ─────────────────────────── */
function UnitScorecardPage() {
  const [tab, setTab] = useState("DT");
  const [sortKey, setSortKey] = useState("fuel");
  const [sortDir, setSortDir] = useState("desc");
  const [search, setSearch] = useState("");

  const data = tab === "DT" ? DT_SCORECARD : EXC_SCORECARD;

  const sorted = useMemo(() => {
    let rows = [...data];
    if (search)
      rows = rows.filter((r) =>
        r.unit.toLowerCase().includes(search.toLowerCase()),
      );
    rows.sort((a, b) => {
      const av = a[sortKey],
        bv = b[sortKey];
      if (typeof av === "string")
        return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      return sortDir === "asc" ? av - bv : bv - av;
    });
    return rows;
  }, [data, sortKey, sortDir, search]);

  const toggleSort = (k) => {
    if (sortKey === k) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(k);
      setSortDir("desc");
    }
  };

  const quartileColor = (q) =>
    ({
      "Q1 (Efisien)": "bg-emerald-100 text-emerald-700",
      Q2: "bg-sky-100 text-sky-700",
      Q3: "bg-amber-100 text-amber-700",
      "Q4 (Boros)": "bg-red-100 text-red-700",
    })[q] || "bg-slate-100 text-slate-600";

  const frColor = (fr, cat) => {
    if (fr <= 0) return "text-slate-400";
    if (cat === "DT") {
      if (fr < FR_THRESHOLD.DT_NORMAL_MIN) return "text-red-600";
      if (fr > FR_THRESHOLD.DT_NORMAL_MAX) return "text-amber-600";
      return "text-emerald-600";
    }
    if (cat === "EXC") {
      if (fr < FR_THRESHOLD.EXC_NORMAL_MIN) return "text-red-600";
      if (fr > FR_THRESHOLD.EXC_NORMAL_MAX) return "text-amber-600";
      return "text-emerald-600";
    }
    return "text-slate-600";
  };

  const Th = ({ k, children, align = "right" }) => (
    <th
      onClick={() => toggleSort(k)}
      className={`text-${align} text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3 py-2.5 cursor-pointer hover:bg-slate-100 select-none`}>
      <span className="inline-flex items-center gap-1">
        {children}
        {sortKey === k && (
          <ChevronRight
            size={10}
            className={sortDir === "asc" ? "-rotate-90" : "rotate-90"}
          />
        )}
      </span>
    </th>
  );

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KPICard
          icon={Truck}
          label="Unit DT aktif"
          value={DT_SCORECARD.length}
          accent="sky"
          sub={`Normal FR ${FR_THRESHOLD.DT_NORMAL_MIN}–${FR_THRESHOLD.DT_NORMAL_MAX} L/HM`}
        />
        <KPICard
          icon={Wrench}
          label="Unit EXC aktif"
          value={EXC_SCORECARD.length}
          accent="amber"
          sub={`Target FR ${FR_THRESHOLD.EXC_NORMAL_MIN}–${FR_THRESHOLD.EXC_NORMAL_MAX} L/HM`}
        />
        <KPICard
          icon={CheckCircle2}
          label="DT Efisien (Q1)"
          value={
            DT_SCORECARD.filter((u) => u.quartile === "Q1 (Efisien)").length
          }
          accent="emerald"
        />
        <KPICard
          icon={AlertTriangle}
          label="DT Boros (Q4)"
          value={DT_SCORECARD.filter((u) => u.quartile === "Q4 (Boros)").length}
          accent="red"
        />
      </div>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <SectionTitle
            icon={Gauge}
            title="Unit Scorecard"
            sub={`Perbandingan efisiensi & utilisasi per unit (minggu ini)`}
          />
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Cari unit…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-xs pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-500 w-40"
              />
            </div>
            <div className="flex gap-1">
              {["DT", "EXC"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg ${tab === t ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                  {t === "DT" ? "Dump Truck" : "Excavator"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto -mx-5">
          <table className="w-full min-w-[900px]">
            <thead className="bg-slate-50 border-y border-slate-200">
              <tr>
                <Th k="unit" align="left">
                  Unit
                </Th>
                <Th k="fuel">Total (L)</Th>
                <Th k="frHm">FR L/HM</Th>
                {tab === "DT" && <Th k="frKm">FR L/KM</Th>}
                <Th k="hmTotal">HM Total</Th>
                <Th k="kmTotal">KM Total</Th>
                <Th k="records">Recs</Th>
                <Th k="percentile">Percentile</Th>
                <Th k="quartile" align="left">
                  Kuartil
                </Th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((u) => (
                <tr
                  key={u.unit}
                  className="border-b border-slate-100 hover:bg-sky-50/50 transition-colors">
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center">
                        <Truck size={12} className="text-slate-500" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">
                          {u.unit}
                        </div>
                        {u.firstRefuel && (
                          <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-1 rounded">
                            FIRST REFUEL
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-right">
                    <span className="text-xs font-extrabold text-slate-800">
                      {fmt(u.fuel)}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right">
                    <span
                      className={`text-xs font-bold ${frColor(u.frHm, tab)}`}>
                      {u.frHm > 0 ? u.frHm.toFixed(2) : "—"}
                    </span>
                  </td>
                  {tab === "DT" && (
                    <td className="px-3 py-2.5 text-right text-xs text-slate-600">
                      {u.frKm > 0 ? u.frKm.toFixed(3) : "—"}
                    </td>
                  )}
                  <td className="px-3 py-2.5 text-right text-xs text-slate-600">
                    {fmt(u.hmTotal, 1)}
                  </td>
                  <td className="px-3 py-2.5 text-right text-xs text-slate-600">
                    {fmt(u.kmTotal)}
                  </td>
                  <td className="px-3 py-2.5 text-right text-xs text-slate-600">
                    {u.records}
                  </td>
                  <td className="px-3 py-2.5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-14 h-1.5 bg-slate-100 rounded overflow-hidden">
                        <div
                          className="h-full bg-sky-500 rounded"
                          style={{ width: `${u.percentile}%` }}
                        />
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 w-8 text-right">
                        {u.percentile}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2.5">
                    {u.quartile && (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${quartileColor(u.quartile)}`}>
                        {u.quartile}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-slate-500 mt-3 italic">
          {tab === "DT"
            ? `Kategori FR: merah < ${FR_THRESHOLD.DT_NORMAL_MIN} L/HM · hijau ${FR_THRESHOLD.DT_NORMAL_MIN}–${FR_THRESHOLD.DT_NORMAL_MAX} · amber > ${FR_THRESHOLD.DT_NORMAL_MAX}`
            : `Target FR: hijau ${FR_THRESHOLD.EXC_NORMAL_MIN}–${FR_THRESHOLD.EXC_NORMAL_MAX} L/HM. Catatan: banyak unit aktual di bawah range — perlu audit HM meter.`}
        </p>
      </Card>
    </div>
  );
}

/* ─────────────────────────── PAGE 4: ANOMALIES ─────────────────────────── */
function AnomaliesPage() {
  const [filter, setFilter] = useState("ALL");
  const filtered =
    filter === "ALL"
      ? ANOMALIES
      : ANOMALIES.filter((a) => a.severity === filter);

  const sevCounts = ANOMALIES.reduce((acc, a) => {
    acc[a.severity] = (acc[a.severity] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KPICard
          icon={Package}
          label="Total Records"
          value={fmt(DATA_QUALITY.totalRecords)}
          accent="sky"
        />
        <KPICard
          icon={CheckCircle2}
          label="Kelengkapan HM"
          value={`${DATA_QUALITY.completePct}%`}
          accent="emerald"
          sub={`${DATA_QUALITY.missingHM} missing`}
        />
        <KPICard
          icon={AlertCircle}
          label="HM Anomali"
          value={DATA_QUALITY.zeroOrNegHM + DATA_QUALITY.hmOver50}
          accent="amber"
          sub={`${DATA_QUALITY.hmOver50} di atas 50 jam`}
        />
        <KPICard
          icon={ShieldAlert}
          label="Anomali HIGH"
          value={sevCounts.HIGH || 0}
          accent={sevCounts.HIGH ? "red" : "emerald"}
          danger={!!sevCounts.HIGH}
        />
      </div>

      {/* BPSP LOAN EVENT LOG */}
      <Card className="p-5 border-l-4 border-l-violet-500">
        <SectionTitle
          icon={ArrowRight}
          title="BPSP Loan — Event Log"
          sub="Inter-company transfer, net 0 — bukan konsumsi fleet"
        />
        <div className="space-y-2">
          {STOCK_SUMMARY.bpspEvents.map((e, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 p-2.5 rounded-lg border ${
                e.direction === "IN"
                  ? "bg-violet-50 border-violet-200"
                  : "bg-amber-50 border-amber-200"
              }`}>
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  e.direction === "IN" ? "bg-violet-100" : "bg-amber-100"
                }`}>
                {e.direction === "IN" ? (
                  <ArrowDownRight size={14} className="text-violet-700" />
                ) : (
                  <ArrowUpRight size={14} className="text-amber-700" />
                )}
              </div>
              <span className="text-xs font-bold text-slate-700 min-w-[60px]">
                {e.date}
              </span>
              <span className="text-xs text-slate-600 flex-1">{e.note}</span>
              <span
                className={`text-sm font-extrabold ${e.direction === "IN" ? "text-violet-700" : "text-amber-700"}`}>
                {e.direction === "IN" ? "+" : "−"}
                {fmt(e.qty)} L
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wide mr-2">
            Filter:
          </span>
          {[
            { k: "ALL", label: `Semua (${ANOMALIES.length})` },
            { k: "HIGH", label: `HIGH (${sevCounts.HIGH || 0})` },
            { k: "MEDIUM", label: `MEDIUM (${sevCounts.MEDIUM || 0})` },
            { k: "LOW", label: `LOW (${sevCounts.LOW || 0})` },
            { k: "INFO", label: `INFO (${sevCounts.INFO || 0})` },
          ].map((f) => (
            <button
              key={f.k}
              onClick={() => setFilter(f.k)}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                filter === f.k
                  ? "bg-slate-800 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}>
              {f.label}
            </button>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <SectionTitle
          icon={ShieldAlert}
          title="Log Anomali"
          sub={`${filtered.length} item · hanya dalam window prev + curr week`}
        />
        <div className="space-y-2">
          {filtered.slice(0, 30).map((a) => {
            const cfg = sevColor(a.severity);
            return (
              <div
                key={a.id}
                className={`bg-white border border-slate-200 ${cfg.border} border-l-4 rounded-lg p-3 flex items-center gap-3 hover:bg-slate-50 transition-colors`}>
                <span className="text-[10px] font-bold text-sky-600 font-mono min-w-[55px]">
                  {a.id}
                </span>
                <span className="text-[11px] font-bold text-slate-700 min-w-[100px] truncate">
                  {a.unit}
                </span>
                <span className="text-[11px] text-slate-400 min-w-[70px]">
                  {a.date}
                </span>
                <span className="text-[11px] text-slate-600 flex-1">
                  {a.issue}
                </span>
                <Badge level={a.severity} />
              </div>
            );
          })}
          {!filtered.length && (
            <div className="text-center py-8 text-slate-400 text-sm">
              Tidak ada anomali untuk filter ini.
            </div>
          )}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="p-5">
          <SectionTitle
            icon={Wrench}
            title="Kualitas Data Detail"
            sub="Per-metrik kelengkapan (minggu ini)"
          />
          <div className="space-y-3">
            {[
              { label: "HM Kelengkapan", pct: DATA_QUALITY.completePct },
              {
                label: "Missing Operator",
                value: DATA_QUALITY.missingOperator,
              },
              {
                label: "Missing Location",
                value: DATA_QUALITY.missingLocation,
              },
              { label: "Bulk rows (PT.)", value: DATA_QUALITY.bulkRows },
              { label: "Remark terisi", value: DATA_QUALITY.remarkFilled },
              { label: "KM ≤ 0 atau invalid", value: DATA_QUALITY.zeroOrNegKM },
            ].map((r) => (
              <div
                key={r.label}
                className="flex items-center justify-between text-xs">
                <span className="text-slate-600">{r.label}</span>
                <span className="font-bold text-slate-800">
                  {r.pct != null ? `${r.pct}%` : fmt(r.value)}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <SectionTitle
            icon={Building2}
            title="Vendor Stock-In"
            sub="Distribusi suplai dari vendor"
          />
          {VENDORS.length ? (
            <div className="space-y-3">
              {VENDORS.map((v) => (
                <div
                  key={v.vendor}
                  className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-start justify-between mb-1">
                    <div className="text-xs font-bold text-slate-700 flex-1 pr-2">
                      {v.vendor}
                    </div>
                    <div className="text-sm font-extrabold text-slate-800">
                      {fmt(v.totalQty)} L
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {v.deliveries} pengiriman · avg {fmt(v.avgQty)} L
                  </div>
                  {v.remarks.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {v.remarks.slice(0, 3).map((r, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-amber-50 text-amber-700 border border-amber-100 px-1.5 py-0.5 rounded">
                          {r}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-400">Tidak ada data vendor.</p>
          )}
        </Card>
      </div>
    </div>
  );
}

/* ─────────────────────────── PAGE 5: FORECAST & STOCK ─────────────────────────── */
function ForecastPage() {
  const [stockView, setStockView] = useState("net");
  const isNet = stockView === "net";

  const combinedData = [
    ...FORECAST.history.map((d) => ({ ...d, isForecast: false })),
    ...FORECAST.forecast.map((d) => ({ ...d, actual: null, isForecast: true })),
  ];

  const prevDays = DAILY.filter((d) => d.week === "prev").length;
  const currDays = DAILY.filter((d) => d.week === "curr").length;
  const totalDays = prevDays + currDays;

  const bargingOnlyDates = DAILY_ISSUES.filter((i) =>
    i.issue.toLowerCase().includes("barging"),
  ).map((i) => i.date);
  const fullOpsDays = DAILY.filter(
    (d) => d.week === "curr" && !bargingOnlyDates.includes(d.isoDate),
  );
  const fullOpsAvg = fullOpsDays.length
    ? fullOpsDays.reduce((s, d) => s + d.total, 0) / fullOpsDays.length
    : 0;

  const totalIn = isNet
    ? STOCK_SUMMARY.totalInVendorOnly
    : STOCK_SUMMARY.totalInRecorded;
  const totalOut = isNet
    ? STOCK_SUMMARY.totalOutFleetNet
    : STOCK_SUMMARY.totalOutGross;

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KPICard
          icon={Warehouse}
          label="Stok Awal Minggu"
          value={fmt(STOCK_SUMMARY.startStock)}
          unit="L"
          accent="slate"
        />
        <KPICard
          icon={TrendingUp}
          label={isNet ? "Total Stock-In (Vendor)" : "Total Stock-In (Ledger)"}
          value={fmt(totalIn)}
          unit="L"
          accent="emerald"
          sub={isNet ? "Exclude BPSP loan 9.000 L" : "Termasuk loan BPSP"}
        />
        <KPICard
          icon={TrendingDown}
          label={isNet ? "Konsumsi Net" : "Konsumsi Gross"}
          value={fmt(totalOut)}
          unit="L"
          accent="amber"
        />
        <KPICard
          icon={Fuel}
          label="Stok EOD"
          value={fmt(STOCK_SUMMARY.endStock)}
          unit="L"
          accent={STOCK_SUMMARY.endStock < 5000 ? "red" : "sky"}
          danger={STOCK_SUMMARY.endStock < 5000}
          sub={`Min: ${fmt(STOCK_SUMMARY.minStock)} L (${STOCK_SUMMARY.minStockDate})`}
        />
      </div>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <SectionTitle
            icon={Warehouse}
            title="Pergerakan Stok & Konsumsi"
            sub={`Ledger ${totalDays} hari (prev + curr week)`}
          />
          <div className="flex gap-1 bg-slate-100 rounded-lg p-0.5">
            {["net", "gross"].map((v) => (
              <button
                key={v}
                onClick={() => setStockView(v)}
                className={`text-[10px] font-bold px-2.5 py-1 rounded ${
                  stockView === v
                    ? "bg-white shadow-sm text-sky-600"
                    : "text-slate-600"
                }`}>
                {v === "net" ? "NET (Fleet)" : "GROSS (Ledger)"}
              </button>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart
            data={STOCK_DATA.map((d, i) => ({
              ...d,
              consumption: DAILY[i]?.total || 0,
            }))}>
            <defs>
              <linearGradient id="gradStock" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={C.accent} stopOpacity={0.3} />
                <stop offset="100%" stopColor={C.accent} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" tick={{ fontSize: 10, fill: C.muted }} />
            <YAxis
              tick={{ fontSize: 10, fill: C.muted }}
              tickFormatter={(v) => (v / 1000).toFixed(0) + "k"}
            />
            <Tooltip content={<ChartTooltip />} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <ReferenceArea y1={0} y2={5000} fill={C.red} fillOpacity={0.05} />
            <Area
              type="monotone"
              dataKey="lastStock"
              name="Stok EOD"
              stroke={C.accent}
              strokeWidth={2.5}
              fill="url(#gradStock)"
              dot={{ r: 3 }}
            />
            <Bar
              dataKey="consumption"
              name="Konsumsi Harian"
              fill={C.gold}
              opacity={0.5}
              radius={[3, 3, 0, 0]}
            />
          </ComposedChart>
        </ResponsiveContainer>
        <div className="text-[11px] text-slate-500 mt-2 italic">
          Zona merah = level stok kritis (&lt;5.000 L). View:{" "}
          <strong>{isNet ? "NET (exclude BPSP)" : "GROSS (ledger)"}</strong>.
        </div>
      </Card>

      {/* BPSP stock events timeline */}
      <Card className="p-5 border-l-4 border-l-violet-500 bg-violet-50/20">
        <SectionTitle
          icon={ArrowRight}
          title="BPSP Loan Events di Stock Ledger"
          sub="16 Sep in + 20–24 Sep out — net 0"
        />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-2">
          {STOCK_SUMMARY.bpspEvents.map((e, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg border ${
                e.direction === "IN"
                  ? "bg-violet-100 border-violet-200"
                  : "bg-amber-50 border-amber-200"
              }`}>
              <div className="text-[10px] font-bold uppercase text-slate-600 mb-1">
                {e.date}
              </div>
              <div
                className={`text-base font-extrabold ${e.direction === "IN" ? "text-violet-700" : "text-amber-700"}`}>
                {e.direction === "IN" ? "+" : "−"}
                {fmt(e.qty)} L
              </div>
              <div className="text-[10px] text-slate-500">{e.note}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <SectionTitle
          icon={LineIcon}
          title="Forecast 7 Hari ke Depan"
          sub={`Proyeksi linear regression dari ${totalDays} hari`}
        />
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart data={combinedData}>
            <defs>
              <linearGradient id="gradFc" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={C.gold} stopOpacity={0.3} />
                <stop offset="100%" stopColor={C.gold} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" tick={{ fontSize: 10, fill: C.muted }} />
            <YAxis
              tick={{ fontSize: 10, fill: C.muted }}
              tickFormatter={(v) => (v / 1000).toFixed(0) + "k"}
            />
            <Tooltip content={<ChartTooltip />} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Area
              type="monotone"
              dataKey="actual"
              name="Aktual"
              stroke={C.accent}
              strokeWidth={2.5}
              fill="url(#gradFc)"
              connectNulls={false}
              dot={{ r: 2 }}
            />
            <Line
              type="monotone"
              dataKey="projected"
              name="Proyeksi"
              stroke={C.gold}
              strokeWidth={2.5}
              strokeDasharray="6 3"
              dot={{ r: 3, fill: C.gold }}
              connectNulls
            />
          </ComposedChart>
        </ResponsiveContainer>
        <div className="mt-3 p-3 rounded-lg bg-amber-50 border border-amber-100">
          <div className="flex items-start gap-2">
            <Zap size={14} className="text-amber-600 mt-0.5 shrink-0" />
            <div className="text-xs text-amber-800">
              <strong>Insight:</strong> Untuk hari <strong>full-ops</strong>{" "}
              (hauling + barging), rata-rata konsumsi ~{fmt(fullOpsAvg)} L/hari.
              Bila konsumsi tetap di level ini dan stok EOD{" "}
              {fmt(KPI.currentStock)} L, runway ~{KPI.runwayDaysHigh.toFixed(1)}{" "}
              hari tanpa Stock-In tambahan.
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-5">
        <SectionTitle
          icon={Package}
          title="Riwayat Stock-In Minggu Ini"
          sub={`Total ${fmt(STOCK_SUMMARY.totalInCurrWeekRecorded)} L dari ${STOCK_SUMMARY.stockInEvents.length} pengiriman vendor`}
        />
        {STOCK_SUMMARY.stockInEvents.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {STOCK_SUMMARY.stockInEvents.map((e, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                <div className="text-[10px] font-bold text-emerald-700 uppercase">
                  {e.date}
                </div>
                <div className="text-lg font-extrabold text-slate-800">
                  +{fmt(e.qty)} L
                </div>
                <div className="text-[10px] text-slate-500 truncate">
                  {e.vendor}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-400">
            Tidak ada stock-in minggu ini.
          </p>
        )}
      </Card>
    </div>
  );
}

/* ─────────────────────────── MAIN APP ─────────────────────────── */
export default function App() {
  const [page, setPage] = useState(0);

  const pages = [
    { label: "Executive", icon: BarChart3, component: ExecutivePage },
    { label: "Deep Analysis", icon: BookOpen, component: AnalysisPage },
    { label: "Operations", icon: Truck, component: OperationsPage },
    { label: "Unit Scorecard", icon: Gauge, component: UnitScorecardPage },
    { label: "Anomalies", icon: ShieldAlert, component: AnomaliesPage },
    { label: "Forecast & Stock", icon: LineIcon, component: ForecastPage },
  ];

  const ActivePage = pages[page].component;

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white sticky top-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 backdrop-blur flex items-center justify-center border border-sky-500/30">
              <Fuel size={20} className="text-sky-400" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">
                {COMPANY}
              </div>
              <div className="text-sm font-extrabold">
                Fuel Analytics — Site BPSP
              </div>
              <div className="text-[10px] text-slate-400">
                Hauling + Barging Operations
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 text-right">
            <div>
              <div className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">
                Periode
              </div>
              <div className="text-xs font-extrabold">{WEEK_NEW}</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">
                vs Prev
              </div>
              <div className="text-xs font-extrabold">{WEEK_PREV}</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">
                Risk
              </div>
              <div
                className={`text-xs font-extrabold ${
                  EXECUTIVE.riskLevel === "HIGH"
                    ? "text-red-400"
                    : EXECUTIVE.riskLevel === "MEDIUM"
                      ? "text-amber-400"
                      : "text-emerald-400"
                }`}>
                {EXECUTIVE.riskLevel}
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-slate-200 sticky top-[68px] z-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex gap-1 overflow-x-auto">
            {pages.map((p, i) => {
              const Icon = p.icon;
              const active = page === i;
              return (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`flex items-center gap-2 px-4 py-3 text-xs font-bold whitespace-nowrap transition-all relative ${
                    active
                      ? "text-sky-600"
                      : "text-slate-500 hover:text-slate-800"
                  }`}>
                  <Icon size={14} />
                  {p.label}
                  {active && (
                    <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-sky-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-5 py-6">
        <ActivePage />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between text-[11px] text-slate-500">
          <span>Sistem Pemantauan Bahan Bakar — Site BPSP | {COMPANY}</span>
          <span>develop by Muhammad Syahril</span>
        </div>
      </footer>
    </div>
  );
}
