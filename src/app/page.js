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
  FR_THRESHOLD,
} from "./analysis";

/* ═══════════════ KONTEKS BISNIS & ATURAN OPERASIONAL ═══════════════ */
const DAILY_ISSUES = [
  { date: "2026-09-28", mode: "FULL", issue: "n/a" },
  { date: "2026-09-29", mode: "FULL", issue: "n/a" },
  { date: "2026-09-30", mode: "FULL", issue: "n/a" },
  { date: "2026-10-01", mode: "FULL", issue: "n/a" },
  {
    date: "2026-10-02",
    mode: "PARTIAL",
    issue: "pergantian shift — unit malam off 22:00",
  },
  { date: "2026-10-03", mode: "FULL", issue: "n/a" },
  { date: "2026-10-04", mode: "FULL", issue: "n/a" },
];

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

  // ── N-00: Mode operasional base week ─────────────────────
  out.push({
    id: "N-00",
    category: "Konteks Operasional",
    severity: "INFO",
    title: "Base week (21–27 Sep) terdistorsi mode operasional + BPSP repay",
    why:
      `Base week punya 2 hari BARGING_ONLY (26–27 Sep) + 1 PARTIAL (25 Sep) ` +
      `dan mengandung 7.000 L BPSP repay (bukan konsumsi fleet). ` +
      `Current week hanya 1 PARTIAL (2 Okt).`,
    impact: `Perbandingan gross WoW (−15,2%). ` + `Bandingkan fleet (−5,3%).`,
    actions: [
      "Filter perbandingan hanya hari FULL-ops",
      "Pisahkan interco (BPSP/HUB/MPS) dari metrik fleet",
      "Gunakan baseline FULL-ops (~9.276 L/hari) untuk target efisiensi",
    ],
  });

  // ── N-02: Penurunan konsumsi ───────────────────────────────
  const fullOpsDays = DAILY.filter(
    (x) => x.week === "curr" && x.mode === "FULL",
  );
  const fullOpsAvg = fullOpsDays.length
    ? fullOpsDays.reduce((s, x) => s + x.total, 0) / fullOpsDays.length
    : KPI.fullOpsAvg;
  out.push({
    id: "N-02",
    category: "Produksi",
    severity: "MEDIUM",
    title: `Fleet turun −${Math.abs(KPI.wowFleet).toFixed(1)}% — gross −${Math.abs(KPI.wowGross).toFixed(1)}% terdistorsi BPSP`,
    why:
      `Fleet current ${fmt(KPI.totalWeekFleet)} L vs base ${fmt(KPI.totalPrevWeekFleet)} L (−5,3%). ` +
      `Gross current ${fmt(KPI.totalWeekGross)} L vs base ${fmt(KPI.totalPrevWeekGross)} L (−15,2%). ` +
      `Rata-rata FULL-ops current = ${fmt(fullOpsAvg)} L/hari. ` +
      `DT qty −3,5%, EXC −28,5%. FR DT sehat di ${KPI.dtFrHm} L/HM.`,
    impact:
      `Penurunan gross BUKAN sinyal efisiensi besar — 7.000 L adalah BPSP repay. ` +
      `Fleet turun moderat; fokus jaga FR dalam range normal.`,
    actions: [
      "Korelasikan dengan target produksi (BCM/ton) per mode",
      "Monitor FR per unit — jangan sampai turun qty = naik FR",
    ],
  });

  // ── N-03: Support ──────────────────────────────────────────
  out.push({
    id: "N-03",
    category: "Support",
    severity: "INFO",
    title: `Support ${fmt(curr.supp)} L (~${((curr.supp / curr.fleet) * 100).toFixed(1)}% fleet)`,
    why:
      `Support operasional (FT + LV + Tower Lamp + Genset) = ${fmt(curr.supp)} L. ` +
      `HUB transfer 130 L (1 Okt) dipisah ke Inter-company, bukan Support.`,
    impact: `Proporsi kecil. Fokus efisiensi tetap pada Production (DT + EXC).`,
    actions: [
      "Pisahkan kategori Support Operasional vs Site Transfer",
      "Monitor genset & tower lamp terpisah",
    ],
  });

  // ── N-04: EXC FR ───────────────────────────────────────────
  out.push({
    id: "N-04",
    category: "Excavator",
    severity: "HIGH",
    title: `FR Excavator: 2 anomali meter kritis`,
    why:
      `EXC-001 (3–4 Okt): HM meter jump 329,6 → 1550 antar refuel. ` +
      `EXC-002 (1 Okt): HM_diff 72,4 jam → FR tidak valid. ` +
      `EXC 215 series mayoritas 14–17 L/HM (di bawah range 18–22). ` +
      `EXC-026 (360) = 29,68 L/HM (dalam range 28–32).`,
    impact:
      `Benchmark FR EXC 215 tidak valid sampai kalibrasi meter. ` +
      `Cost analysis & maintenance scheduling bisa salah.`,
    actions: [
      "Audit HM meter EXC-001 & EXC-002 segera",
      "Cross-check log manual operator untuk EXC 215",
      "Revisi range normal berdasarkan data aktual setelah kalibrasi",
    ],
  });

  // ── N-05: DT FR stabil ─────────────────────────────────────
  out.push({
    id: "N-05",
    category: "Dump Truck",
    severity: "GOOD",
    title: `Efisiensi DT stabil di range normal (${curr.dtFrHm} L/HM)`,
    why:
      `FR DT current ${curr.dtFrHm} L/HM (dalam range ${FR_THRESHOLD.DT_NORMAL_MIN}–${FR_THRESHOLD.DT_NORMAL_MAX}). ` +
      `Top efisien: DT-044 (7,78), DT-011 (8,53), DT-008 (8,54). ` +
      `Top boros: DT-028 (21,27), DT-064 (20,81), DT-025 (20,33).`,
    impact:
      `Fleet DT sehat. Gap efisiensi terbaik vs terburuk ~2,7×. ` +
      `Peluang penghematan dari coaching Q4: ~10–15% konsumsi unit boros.`,
    actions: [
      "Benchmark internal dari operator DT-044",
      "Coaching untuk unit Q4 (DT-028, DT-064, DT-025)",
      "Review pola driving/idling untuk outlier",
    ],
  });

  // ── N-06: Stock recovery ──────────────────────────────────
  out.push({
    id: "N-06",
    category: "Stok",
    severity: "GOOD",
    title: `Stok: ${fmt(STOCK_SUMMARY.startStock)} → ${fmt(STOCK_SUMMARY.endStock)} L (net +${fmt(STOCK_SUMMARY.netChange)} L)`,
    why:
      `Total Stock-In current week ${fmt(STOCK_SUMMARY.totalInCurrWeekRecorded)} L dari 6 pengiriman. ` +
      `Total konsumsi gross ${fmt(STOCK_SUMMARY.totalOutGross)} L. Net +${fmt(STOCK_SUMMARY.netChange)} L. ` +
      `Stok terendah 29 Sep (${fmt(STOCK_SUMMARY.minStock)} L), puncak 3 Okt (122.328 L).`,
    impact:
      `Runway saat ini ~${KPI.runwayDaysHigh.toFixed(1)} hari (aman). ` +
      `Pola konsumsi FULL-ops ~${fmt(fullOpsAvg)} L/hari. ` +
      `Tidak ada stock-in 4 Okt — monitor 5–6 Okt jika konsumsi tinggi.`,
    actions: [
      `Set ROP minimal 3 hari full-ops = ~${fmt(fullOpsAvg * 3)} L`,
      "Jadwalkan Stock-In 2×/minggu reguler",
      "Auto-alert ketika runway < 3 hari",
    ],
  });

  // ── N-07: Anomali HM ──────────────────────────────────────
  out.push({
    id: "N-07",
    category: "Data Quality",
    severity: "HIGH",
    title: `2 anomali HM kritis — SOP perlu diperbaiki`,
    why:
      `EXC-001: meter jump 329→1550 antar refuel (3–4 Okt). ` +
      `EXC-002: HM_diff=72,4 jam (1 Okt). ` +
      `EXC-031 first-refueling FR 50 L/HM.`,
    impact: `FR unit-unit ini tidak akurat. Cost analysis overstated, maintenance scheduling bisa salah.`,
    actions: [
      "Checklist wajib update Last HM/KM sebelum nozzle",
      "Sistem warning otomatis: HM_diff=0 atau >50 jam",
      "Kalibrasi ulang HM meter EXC-001 & EXC-002",
      "SOP khusus untuk unit baru (first-refueling)",
    ],
  });

  // ── N-02: Penurunan konsumsi ───────────────────────────────
  out.push({
    id: "N-08",
    category: "Produksi",
    severity: "MEDIUM",
    title: `Di mana uang fuel benar-benar terbakar?`,
    why: `90,5% fleet = Production. Di dalamnya DT ~40,2 kL dan EXC ~15,0 kL. Satu poin perbaikan FR di DT Q4 berdampak lebih besar daripada mengutak-atik Support (hanya 2,2%).`,
    impact: ``,
    actions: [""],
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

  const total = isNet ? KPI.totalWeekFleet : KPI.totalWeekGross;
  const totalPrev = isNet ? KPI.totalPrevWeekFleet : KPI.totalPrevWeekGross;
  const wow = isNet ? KPI.wowFleet : KPI.wowGross;
  const fleetRate = isNet ? KPI.fleetRateFleet : KPI.fleetRateGross;
  const fleetRatePrev = isNet ? KPI.fleetRatePrevFleet : KPI.fleetRatePrevGross;

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
                  { k: "net", label: "FLEET (Ops)" },
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
                ℹ️ Fleet = exclude interco (BPSP / HUB / MPS / ALKON). Current
                week interco hanya HUB 130 L. Base week fleet = 64.373 L.
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
            Site BPSP <strong>hanya beroperasi hauling + barging</strong>. FR
            normal: DT {FR_THRESHOLD.DT_NORMAL_MIN}–{FR_THRESHOLD.DT_NORMAL_MAX}{" "}
            · EXC 360 {FR_THRESHOLD.EXC_360_NORMAL_MIN}–
            {FR_THRESHOLD.EXC_360_NORMAL_MAX} · EXC 215{" "}
            {FR_THRESHOLD.EXC_215_NORMAL_MIN}–{FR_THRESHOLD.EXC_215_NORMAL_MAX}{" "}
            L/HM.
          </div>
        </div>
      </Card>

      {/* BPSP Loan note */}
      <Card className="p-5 border-l-4 border-l-violet-500 bg-violet-50/30">
        <SectionTitle
          icon={ArrowRight}
          title="BPSP Loan — CLOSED (tidak di-net)"
          sub={BPSP_LOAN.note}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
          <div className="p-3 rounded-lg bg-white border border-violet-200">
            <div className="text-[10px] font-bold text-violet-700 uppercase">
              Borrow 16 Sep
            </div>
            <div className="text-xl font-extrabold text-slate-800">
              +{fmt(BPSP_LOAN.borrowQty)} L
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white border border-amber-200">
            <div className="text-[10px] font-bold text-amber-700 uppercase">
              Repay Base Week
            </div>
            <div className="text-xl font-extrabold text-slate-800">
              −{fmt(BPSP_LOAN.repayInBaseWeek)} L
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white border border-slate-200">
            <div className="text-[10px] font-bold text-slate-500 uppercase">
              Repay Current Week
            </div>
            <div className="text-xl font-extrabold text-slate-800">0 L</div>
          </div>
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
            <div className="text-[10px] font-bold text-emerald-700 uppercase">
              Net Balance
            </div>
            <div className="text-xl font-extrabold text-emerald-700">0 L ✓</div>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-white border border-violet-200">
          <div className="flex items-start gap-2">
            <Info size={14} className="text-violet-600 mt-0.5 shrink-0" />
            <div className="text-xs text-slate-700 leading-relaxed">
              <strong>Dampak:</strong> Base week punya 7.000 L BPSP repay yang
              menggelembungkan gross. Current week 0 L.{" "}
              <strong>Fleet (exclude interco)</strong> turun{" "}
              <strong>{KPI.wowFleet.toFixed(1)}%</strong> — jauh lebih moderat
              daripada gross −15,2%. Gunakan fleet / FULL-ops untuk baseline.
            </div>
          </div>
        </div>
      </Card>

      {/* KPI Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KPICard
          icon={Droplet}
          label={isNet ? "Konsumsi Fleet (Ops)" : "Konsumsi Gross Ledger"}
          value={fmt(total)}
          unit="L"
          trend={wow}
          accent={isNet ? "sky" : "slate"}
          sub={isNet ? "Exclude interco" : "As-recorded"}
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
          accent="slate"
          sub={`Runway ~${KPI.runwayDaysHigh.toFixed(1)} hari`}
        />
      </div>

      {/* Key Findings */}
      <Card className="p-5 border-l-4 border-l-sky-500">
        <SectionTitle
          icon={Lightbulb}
          title="Key Findings Minggu Ini"
          sub="Ringkasan 3 insight paling penting"
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
          {DAILY_ISSUES.filter((i) => i.issue !== "n/a").map((issue) => {
            const d = new Date(issue.date);
            const isPartial = issue.mode === "PARTIAL";
            const isBarging = issue.mode === "BARGING_ONLY";
            return (
              <div
                key={issue.date}
                className={`p-3 rounded-lg border ${
                  isPartial
                    ? "bg-amber-50 border-amber-200"
                    : isBarging
                      ? "bg-indigo-50 border-indigo-200"
                      : "bg-slate-50 border-slate-200"
                }`}>
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${
                      isPartial
                        ? "text-amber-700"
                        : isBarging
                          ? "text-indigo-700"
                          : "text-slate-600"
                    }`}>
                    {d.getDate()}/{d.getMonth() + 1}/{d.getFullYear()}
                  </span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-white">
                    {issue.mode}
                  </span>
                </div>
                <div
                  className={`text-xs font-bold ${
                    isPartial
                      ? "text-amber-900"
                      : isBarging
                        ? "text-indigo-900"
                        : "text-slate-700"
                  }`}>
                  {issue.issue}
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-[11px] text-slate-500 mt-3 italic">
          Catatan: 2 Okt = PARTIAL (pergantian shift, unit malam off 22:00).
          Konsumsi lebih rendah dari biasanya.
        </p>
      </Card>

      {/* Perbandingan mingguan */}
      <Card className="p-5">
        <SectionTitle
          icon={Calendar}
          title="Perbandingan Mingguan"
          sub={`${WEEK_PREV} (base) vs ${WEEK_NEW} (curr) — Gross & Net`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Base Week
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
              BPSP repay: −{fmt(WEEK_COMPARISON.prev.bpspRepay)} L
            </div>
          </div>

          <div className="p-4 rounded-lg bg-sky-50 border border-sky-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider">
                Current Week
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
              BPSP repay: 0 L
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
              <div className="text-[10px] text-sky-300 uppercase">
                Fleet WoW
              </div>
              <div
                className={`text-xl font-extrabold ${WEEK_COMPARISON.deltas.fleet > 0 ? "text-amber-400" : "text-emerald-400"}`}>
                {fmtPct(WEEK_COMPARISON.deltas.fleet)}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Category + Location */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="p-5">
          <SectionTitle
            icon={BarChart3}
            title="Breakdown Kategori"
            sub="Volume per kategori (current week)"
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
          task: "Audit HM meter EXC-001 + 5 EXC 215 terendah",
          why: "Anomali HM NOT MATCH (72,4 jam) & NOT TRACKING (1.219,4 jam)",
          owner: "Maintenance",
        },
        {
          task: "Investigasi DT-062 HM_diff=0 di 4 Okt",
          why: "188 L diisi tanpa increment HM — potensi fraud/error",
          owner: "Data + Ops",
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
          task: "Set ROP otomatis 26.000 L (3 hari full-ops)",
          why: "Cegah pola stock-in gap",
          owner: "Supply Chain",
        },
        {
          task: "Coaching operator unit Q4 (DT-062, DT-028, DT-064)",
          why: "FR 20,81–21,28 L/HM — 2,7× gap dengan unit terbaik",
          owner: "Ops + Training",
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
          task: "Pisahkan BPSP Loan & Inter-company dari Support",
          why: "Agar Support mencerminkan konsumsi operasional murni",
          owner: "Data Governance",
        },
        {
          task: "Update Daily Issue dengan kolom mode operasi",
          why: "Baseline FR lebih akurat per mode",
          owner: "Data Governance",
        },
        {
          task: "Revisi range FR EXC 215 berdasarkan data aktual",
          why: "Range 18–22 L/HM perlu verifikasi",
          owner: "Engineering",
        },
      ],
    },
  ];

  const priorityColor = (c) =>
    ({
      red: { bg: "bg-red-50", border: "border-red-200", text: "text-red-700" },
      amber: {
        bg: "bg-amber-50",
        border: "border-amber-200",
        text: "text-amber-700",
      },
      sky: { bg: "bg-sky-50", border: "border-sky-200", text: "text-sky-700" },
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
              (hauling/barging) dan BPSP loan ledger. Anomali HM/KM ditandai
              khusus.
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

      <div className="space-y-2 grid grid-cols-2 gap-4  justify-center">
        {filtered.map((n) => {
          const cfg = sevBadge(n.severity);
          const SeviIcon = cfg.icon;
          return (
            <Card key={n.id} className="overflow-hidden">
              <div className="px-3 py-2 border-b border-slate-100 flex items-start gap-3">
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
              <div className="py-2 px-5 space-y-1">
                <div className="flex gap-1">
                  <div className="shrink-0 w-24">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Mengapa?
                    </div>
                  </div>
                  <p className="flex-1 text-xs text-slate-700 leading-relaxed">
                    {n.why}
                  </p>
                </div>
                <div className="flex gap-1">
                  <div className="shrink-0 w-24">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Dampak
                    </div>
                  </div>
                  <p className="flex-1 text-xs text-slate-700 leading-relaxed">
                    {n.impact}
                  </p>
                </div>
                <div className="flex gap-1 pt-2 border-t border-slate-100">
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
          sub={`${actionGroups.reduce((s, g) => s + g.items.length, 0)} item`}
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
                      className="p-4 flex items-start gap-3 hover:bg-slate-50/50">
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
    </div>
  );
}

/* ─────────────────────────── PAGE 2: OPERATIONS ─────────────────────────── */
const UnitDayHeatmap = ({ matrix }) => {
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

  return (
    <div className="space-y-5">
      <Card className="p-5">
        <SectionTitle
          icon={LineIcon}
          title="Tren Harian Pengisian DT & EXC"
          sub="Volume L/hari per jenis unit (14 hari)"
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
              name="Unit DT"
              stroke={C.accent}
              strokeWidth={1.5}
              strokeDasharray="4 3"
              dot={{ r: 1.5 }}
            />
            <Line
              type="monotone"
              dataKey="excUnits"
              name="Unit EXC"
              stroke={C.gold}
              strokeWidth={1.5}
              strokeDasharray="4 3"
              dot={{ r: 1.5 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <SectionTitle
            icon={Gauge}
            title="Heatmap Pengisian Unit × Hari"
            sub="Top 15 unit · current week"
          />
          <div className="flex gap-1">
            {["DT", "EXC"].map((t) => (
              <button
                key={t}
                onClick={() => setHeatTab(t)}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg ${heatTab === t ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                {t === "DT" ? "Dump Truck" : "Excavator"}
              </button>
            ))}
          </div>
        </div>
        <UnitDayHeatmap
          matrix={heatTab === "DT" ? DT_DAILY_MATRIX : EXC_DAILY_MATRIX}
        />
      </Card>

      <Card className="p-5">
        <SectionTitle
          icon={BarChart3}
          title="Konsumsi Harian per Kategori"
          sub="Stacked: Production / MHR / Support — 14 hari"
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
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="p-5">
          <SectionTitle
            icon={Clock}
            title="Analisis Shift"
            sub="Perbandingan volume antar shift"
          />
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

  const frColor = (fr, cat, model) => {
    if (fr <= 0) return "text-slate-400";
    if (cat === "DT") {
      if (fr < FR_THRESHOLD.DT_NORMAL_MIN) return "text-red-600";
      if (fr > FR_THRESHOLD.DT_NORMAL_MAX) return "text-amber-600";
      return "text-emerald-600";
    }
    if (cat === "EXC") {
      const min =
        model === "SANY 360"
          ? FR_THRESHOLD.EXC_360_NORMAL_MIN
          : FR_THRESHOLD.EXC_215_NORMAL_MIN;
      const max =
        model === "SANY 360"
          ? FR_THRESHOLD.EXC_360_NORMAL_MAX
          : FR_THRESHOLD.EXC_215_NORMAL_MAX;
      if (fr < min) return "text-red-600";
      if (fr > max) return "text-amber-600";
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
          sub={`Normal ${FR_THRESHOLD.DT_NORMAL_MIN}–${FR_THRESHOLD.DT_NORMAL_MAX} L/HM`}
        />
        <KPICard
          icon={Wrench}
          label="Unit EXC aktif"
          value={EXC_SCORECARD.length}
          accent="amber"
          sub="360 & 215 series"
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
            sub="Perbandingan efisiensi & utilisasi per unit"
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
                  className="border-b border-slate-100 hover:bg-sky-50/50">
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
                      className={`text-xs font-bold ${frColor(u.frHm, tab, u.model)}`}>
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
            ? `FR kategori: merah < ${FR_THRESHOLD.DT_NORMAL_MIN} · hijau ${FR_THRESHOLD.DT_NORMAL_MIN}–${FR_THRESHOLD.DT_NORMAL_MAX} · amber > ${FR_THRESHOLD.DT_NORMAL_MAX} L/HM`
            : `FR target: 360 series ${FR_THRESHOLD.EXC_360_NORMAL_MIN}–${FR_THRESHOLD.EXC_360_NORMAL_MAX} · 215 series ${FR_THRESHOLD.EXC_215_NORMAL_MIN}–${FR_THRESHOLD.EXC_215_NORMAL_MAX} L/HM`}
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
          label="Kelengkapan"
          value={`${DATA_QUALITY.completePct}%`}
          accent="emerald"
          sub={`${DATA_QUALITY.missingHM} missing HM`}
        />
        <KPICard
          icon={AlertCircle}
          label="HM Anomali"
          value={DATA_QUALITY.zeroOrNegHM + DATA_QUALITY.hmOver50}
          accent="amber"
        />
        <KPICard
          icon={ShieldAlert}
          label="Anomali HIGH"
          value={sevCounts.HIGH || 0}
          accent={sevCounts.HIGH ? "red" : "emerald"}
          danger={!!sevCounts.HIGH}
        />
      </div>

      <Card className="p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wide mr-2">
            Filter:
          </span>
          {[
            { k: "ALL", label: `Semua (${ANOMALIES.length})` },
            { k: "HIGH", label: `HIGH (${sevCounts.HIGH || 0})` },
            { k: "MEDIUM", label: `MEDIUM (${sevCounts.MEDIUM || 0})` },
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
          sub={`${filtered.length} item · window current + base`}
        />
        <div className="space-y-2">
          {filtered.map((a) => {
            const cfg = sevColor(a.severity);
            return (
              <div
                key={a.id}
                className={`bg-white border border-slate-200 ${cfg.border} border-l-4 rounded-lg p-3 flex items-center gap-3 hover:bg-slate-50`}>
                <span className="text-[10px] font-bold text-sky-600 font-mono min-w-[55px]">
                  {a.id}
                </span>
                <span className="text-[11px] font-bold text-slate-700 min-w-[130px] truncate">
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
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="p-5">
          <SectionTitle
            icon={Wrench}
            title="Kualitas Data Detail"
            sub="Per-metrik kelengkapan"
          />
          <div className="space-y-3">
            {[
              { label: "HM Kelengkapan", pct: DATA_QUALITY.completePct },
              { label: "Missing HM", value: DATA_QUALITY.missingHM },
              { label: "Missing KM", value: DATA_QUALITY.missingKM },
              { label: "HM ≤ 0 atau invalid", value: DATA_QUALITY.zeroOrNegHM },
              { label: "HM > 50 jam", value: DATA_QUALITY.hmOver50 },
              { label: "Remark terisi", value: DATA_QUALITY.remarkFilled },
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
            sub="Distribusi suplai"
          />
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

  const fullOpsDays = DAILY.filter(
    (d) => d.week === "curr" && d.mode === "FULL",
  );
  const fullOpsAvg = fullOpsDays.length
    ? fullOpsDays.reduce((s, d) => s + d.total, 0) / fullOpsDays.length
    : 0;

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KPICard
          icon={Warehouse}
          label="Stok Awal"
          value={fmt(STOCK_SUMMARY.startStock)}
          unit="L"
          accent="slate"
        />
        <KPICard
          icon={TrendingUp}
          label="Total Stock-In"
          value={fmt(STOCK_SUMMARY.totalInCurrWeekRecorded)}
          unit="L"
          accent="emerald"
        />
        <KPICard
          icon={TrendingDown}
          label="Konsumsi Net"
          value={fmt(STOCK_SUMMARY.totalOutGross)}
          unit="L"
          accent="amber"
        />
        <KPICard
          icon={Fuel}
          label="Stok EOD"
          value={fmt(STOCK_SUMMARY.endStock)}
          unit="L"
          accent="sky"
          sub={`+${fmt(STOCK_SUMMARY.netChange)} L`}
        />
      </div>

      <Card className="p-5">
        <SectionTitle
          icon={Warehouse}
          title="Pergerakan Stok & Konsumsi"
          sub={`Ledger ${totalDays} hari`}
        />
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
              <strong>Insight:</strong> Hari full-ops current week avg ~
              {fmt(fullOpsAvg)} L/hari. Stok EOD {fmt(KPI.currentStock)} L →
              runway ~{KPI.runwayDaysHigh.toFixed(1)} hari tanpa stock-in
              tambahan.
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-5">
        <SectionTitle
          icon={Package}
          title="Riwayat Stock-In Current Week"
          sub={`Total ${fmt(STOCK_SUMMARY.totalInCurrWeekRecorded)} L dari ${STOCK_SUMMARY.stockInEvents.length} pengiriman`}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
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
                vs Base
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
