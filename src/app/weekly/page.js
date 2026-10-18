"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
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
  Cell,
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
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Boxes,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Clock,
  Droplet,
  FileText,
  Filter,
  Flame,
  Fuel,
  Gauge,
  Info,
  Layers,
  LineChart as LineIcon,
  Minus,
  Package,
  RefreshCw,
  Search,
  ShieldAlert,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Truck,
  Warehouse,
  Wrench,
  Zap,
} from "lucide-react";

import {
  C,
  COMPANY,
  SITE,
  REPORT_TITLE,
  WEEK_CURR,
  WEEK_PREV,
  WEEK_CURR_LABEL,
  WEEKS,
  WEEKS_LABELS,
  KPI,
  EXECUTIVE,
  WEEKLY_TREND,
  CATEGORY_BREAKDOWN,
  STOCK_HEALTH_MATRIX,
  VELOCITY_BREAKDOWN,
  ARMADA_BREAKDOWN,
  UNIT_SCORECARD,
  REORDER_RECOMMENDATIONS,
  STOCKOUT_ITEMS,
  CRITICAL_ITEMS,
  TOP_FAST_MOVING,
  TOP_10_W4_BY_SHEET,
  ANOMALIES,
  DATA_QUALITY,
} from "./analysis";

/* ─────────────────────────── HELPERS ─────────────────────────── */
const fmt = (n, d = 0) =>
  Number(n || 0).toLocaleString("id-ID", {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
  });

const fmtPct = (n, showSign = true) =>
  `${showSign && n > 0 ? "+" : ""}${Number(n || 0).toFixed(1)}%`;

const sevColor = (s) =>
  ({
    HIGH: {
      bg: "bg-red-600",
      text: "text-white",
      badge: "bg-red-50 text-red-700 border-red-200",
      border: "border-l-red-600",
      dot: "bg-red-600",
    },
    CRITICAL: {
      bg: "bg-red-600",
      text: "text-white",
      badge: "bg-red-50 text-red-700 border-red-200",
      border: "border-l-red-600",
      dot: "bg-red-600",
    },
    MEDIUM: {
      bg: "bg-amber-600",
      text: "text-white",
      badge: "bg-amber-50 text-amber-700 border-amber-200",
      border: "border-l-amber-600",
      dot: "bg-amber-600",
    },
    LOW: {
      bg: "bg-slate-500",
      text: "text-white",
      badge: "bg-slate-100 text-slate-700 border-slate-200",
      border: "border-l-slate-500",
      dot: "bg-slate-500",
    },
    INFO: {
      bg: "bg-sky-600",
      text: "text-white",
      badge: "bg-sky-50 text-sky-700 border-sky-200",
      border: "border-l-sky-600",
      dot: "bg-sky-600",
    },
    GOOD: {
      bg: "bg-emerald-600",
      text: "text-white",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      border: "border-l-emerald-600",
      dot: "bg-emerald-600",
    },
  })[s] || {
    bg: "bg-slate-500",
    text: "text-white",
    badge: "bg-slate-100 text-slate-700 border-slate-200",
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
      ? "text-emerald-700 bg-emerald-50 border border-emerald-200"
      : "text-amber-700 bg-amber-50 border border-amber-200";
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-[11px] font-bold px-1.5 py-0.5 rounded ${color}`}>
      <Icon size={11} />
      {Math.abs(value).toFixed(1)}
      {suffix}
    </span>
  );
};

/* ─────────────────────────── SHARED UI ─────────────────────────── */
const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-xl border border-slate-200 shadow-sm ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ icon: Icon, title, sub, action }) => (
  <div className="flex items-start justify-between mb-3.5">
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
    sky: "from-sky-500 to-sky-600 text-sky-600",
    emerald: "from-emerald-500 to-emerald-600 text-emerald-600",
    amber: "from-amber-500 to-amber-600 text-amber-600",
    red: "from-red-500 to-red-600 text-red-600",
    slate: "from-slate-600 to-slate-700 text-slate-600",
    violet: "from-violet-500 to-violet-600 text-violet-600",
  };
  const colorCls = accentMap[accent] || accentMap.sky;
  const gradient = colorCls.split(" ")[0] + " " + colorCls.split(" ")[1];
  const textColor = colorCls.split(" ")[2];

  return (
    <Card
      className={`overflow-hidden relative ${
        danger ? "ring-2 ring-red-400 bg-red-50/20" : ""
      }`}>
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradient}`} />
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center">
            <Icon size={18} className={textColor} />
          </div>
          {trend != null && (
            <div
              className={`flex items-center gap-1 text-xs font-bold ${
                trend > 0 ? "text-amber-600" : "text-emerald-600"
              }`}>
              {trend > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {Math.abs(trend).toFixed(1)}%
            </div>
          )}
        </div>
        <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
          {label}
        </div>
        <div className="text-2xl font-extrabold text-slate-800 mt-0.5 leading-tight">
          {value}
          {unit && (
            <span className="text-xs font-semibold text-slate-400 ml-1">
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
    <div className="bg-slate-800 text-white text-xs rounded-lg p-2.5 shadow-xl border border-slate-700 max-w-xs">
      <div className="font-bold mb-1.5 border-b border-slate-700 pb-1 text-slate-200">
        {label}
      </div>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center justify-between gap-4 py-0.5">
          <div className="flex items-center gap-2 truncate">
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: p.color || p.fill }}
            />
            <span className="text-slate-300 truncate">{p.name}:</span>
          </div>
          <span className="font-semibold text-white shrink-0">{fmt(p.value, 1)}</span>
        </div>
      ))}
    </div>
  );
};

/* ═══════════════════ TAB 1: EXECUTIVE SUMMARY ═══════════════════ */
function ExecutiveTab({ onNavigateTab }) {
  const { headline, riskLevel, keyPoints, procurementSummary } = EXECUTIVE;

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

  return (
    <div className="space-y-5">
      {/* Executive Headline Banner */}
      <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-0 text-white shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <Warehouse size={24} className="text-sky-400" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
              <div className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                Executive Overview — {WEEK_CURR} ({SITE})
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] bg-red-500/20 text-red-300 px-2.5 py-0.5 rounded-full border border-red-500/30 font-bold">
                  28 SKU Urgent / Kritis
                </span>
                <span className="text-[11px] bg-sky-500/20 text-sky-300 px-2.5 py-0.5 rounded-full border border-sky-500/30 font-bold">
                  743 SKU Terpantau
                </span>
              </div>
            </div>
            <p className="text-lg font-semibold leading-relaxed mt-1 text-slate-100">
              {headline}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {keyPoints.map((k, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 backdrop-blur px-2.5 py-1 rounded-full text-slate-200">
                  {k}
                </span>
              ))}
            </div>
          </div>
          <div
            className={`hidden lg:flex flex-col items-center justify-center px-4 py-3 rounded-xl ${riskCfg.bg} ${riskCfg.border} border shrink-0`}>
            <RiskIcon size={24} className={riskCfg.text} />
            <span
              className={`text-[10px] font-bold uppercase mt-1 ${riskCfg.text}`}>
              Risk Level
            </span>
            <span className={`text-lg font-extrabold ${riskCfg.text}`}>
              {riskLevel}
            </span>
          </div>
        </div>
      </Card>

      {/* Top 10 Week 4 Quick Navigation Callout */}
      <Card className="p-4 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent border-sky-200">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-sm shrink-0">
              <Flame size={20} className="text-amber-300" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-sky-900 uppercase tracking-wide flex items-center gap-1.5">
                <span>Top 10 Barang Terbanyak Keluar — Periode 12 – 18 Oktober</span>
                <span className="bg-sky-600 text-white text-[10px] px-1.5 py-0.2 rounded font-bold">
                  Baru
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Lihat 10 suku cadang dan unit pengambil terbesar untuk tiap sheet lengkap dengan visualisasi grafik interaktif.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigateTab(1)}
            className="flex items-center gap-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm transition-all whitespace-nowrap">
            <span>Buka Tampilan Top 10 & Grafik</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </Card>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        <KPICard
          icon={Boxes}
          label="Total Katalog SKU"
          value={fmt(KPI.totalSkus)}
          unit="SKU"
          sub="4 Kategori Gudang"
          accent="sky"
        />
        <KPICard
          icon={Warehouse}
          label="Stock On Hand (SOH)"
          value={fmt(KPI.totalSoh)}
          unit="Unit/L"
          sub="Total fisik gudang"
          accent="slate"
        />
        <KPICard
          icon={TrendingUp}
          label="Pengeluaran W4"
          value={fmt(KPI.totalOutW4)}
          unit="Item"
          trend={KPI.wowOut}
          sub="12 – 18 Oktober"
          accent="amber"
        />
        <KPICard
          icon={Gauge}
          label="AWD Gudang"
          value={fmt(KPI.avgWeeklyDemand)}
          unit="Item/W"
          sub="Rata-rata mingguan"
          accent="violet"
        />
        <KPICard
          icon={ShieldAlert}
          label="Stockout & Kritis"
          value={fmt(KPI.urgentSkus)}
          unit="SKU"
          danger={true}
          sub="28 SKU Prioritas"
          accent="red"
        />
        <KPICard
          icon={Package}
          label="Saran Reorder"
          value={fmt(KPI.totalSuggestedOrder)}
          unit="Unit/L"
          sub="34 SKU butuh PO"
          accent="emerald"
        />
      </div>

      {/* 4-Week Trend & Category Mix Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Card className="p-5 lg:col-span-2">
          <SectionTitle
            icon={LineIcon}
            title="Tren Pengeluaran Gudang (W1 – W4)"
            sub="Riwayat konsumsi suku cadang, pelumas & ban per minggu operasional"
          />
          <ResponsiveContainer width="100%" height={260}>
            <ComposedChart data={WEEKLY_TREND}>
              <XAxis dataKey="weekLabel" tick={{ fontSize: 11, fill: C.muted }} />
              <YAxis tick={{ fontSize: 11, fill: C.muted }} />
              <Tooltip content={<ChartTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="DT" name="Dump Truck" fill={C.accent} stackId="a" />
              <Bar dataKey="OIL" name="Oil & Grease" fill={C.gold} stackId="a" />
              <Bar dataKey="HE" name="Heavy Equipment" fill={C.violet} stackId="a" />
              <Bar dataKey="TYRE" name="Tyre" fill={C.amber} stackId="a" />
              <Line
                type="monotone"
                dataKey="total"
                name="Total Pengeluaran"
                stroke={C.ink}
                strokeWidth={2.5}
                dot={{ r: 4, fill: C.ink }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </Card>

        {/* Armada Consumption Share */}
        <Card className="p-5">
          <SectionTitle
            icon={Truck}
            title="Sebaran Requisition W4"
            sub="Persentase pemakaian suku cadang per armada (12–18 Okt)"
          />
          <div className="space-y-3 mt-4">
            {ARMADA_BREAKDOWN.map((arm, i) => (
              <div key={i}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-slate-700">{arm.armada}</span>
                  <span className="font-bold text-slate-800">
                    {fmt(arm.qty)} item ({arm.sharePct}%)
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${arm.sharePct}%`,
                      backgroundColor:
                        i === 0
                          ? C.accent
                          : i === 1
                            ? C.gold
                            : i === 2
                              ? C.violet
                              : i === 3
                                ? C.amber
                                : C.muted,
                    }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                  <span>{arm.units} unit operasional</span>
                  <span>{arm.freq} transaksi</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ═══════════════════ TAB 2: TOP 10 PER SHEET (WEEK 4: 12 - 18 OKT) ═══════════════════ */
function Top10Week4Tab() {
  const [selectedSheet, setSelectedSheet] = useState("SOH_DT");

  const sheetOptions = [
    { key: "SOH_DT", label: "Dump Truck (DT)", icon: Truck, count: "758 Pcs" },
    { key: "SOH_HE", label: "Heavy Equipment (HE)", icon: CircleDot, count: "41 Pcs" },
    { key: "SOH_OIL & GREASE", label: "Oil & Grease", icon: Droplet, count: "978 Ltr" },
    { key: "SOH_TYRE", label: "Tyre (Ban)", icon: Package, count: "66 Set" },
    { key: "UNIT_CONSUMPTION_W4", label: "Konsumsi Unit Armada", icon: Warehouse, count: "1.980 item" },
  ];

  const currentSheetData = TOP_10_W4_BY_SHEET[selectedSheet] || TOP_10_W4_BY_SHEET["SOH_DT"];
  const isUnitSheet = selectedSheet === "UNIT_CONSUMPTION_W4";

  return (
    <div className="space-y-5">
      {/* Header Banner */}
      <Card className="p-5 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white shadow-md">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                <Sparkles size={11} />
                <span>Minggu ke-4</span>
              </span>
              <span className="text-xs text-sky-300 font-semibold">
                Periode: 12 – 18 Oktober 2026
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-white">
              Top 10 Barang Terbanyak Keluar Tiap Sheet
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Peringkat 10 barang / unit dengan kuantitas pengeluaran tertinggi khusus pada <strong>Minggu ke-4 (12 – 18 Oktober 2026)</strong> beserta visualisasi grafik komparatif.
            </p>
          </div>
          <div className="bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 text-right backdrop-blur">
            <div className="text-[10px] uppercase font-bold text-sky-300">
              Sheet Aktif
            </div>
            <div className="text-base font-extrabold text-white">
              {currentSheetData.sheetTitle}
            </div>
          </div>
        </div>
      </Card>

      {/* Sheet Switcher Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {sheetOptions.map((opt) => {
          const Icon = opt.icon;
          const active = selectedSheet === opt.key;
          return (
            <button
              key={opt.key}
              onClick={() => setSelectedSheet(opt.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shadow-xs ${
                active
                  ? "bg-sky-600 text-white shadow-md ring-2 ring-sky-300"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
              }`}>
              <Icon size={16} className={active ? "text-white" : "text-sky-600"} />
              <span>{opt.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                  active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                }`}>
                {opt.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sheet Top 10 Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Card className="p-4 border-l-4 border-l-sky-500">
          <div className="text-[10px] text-slate-400 uppercase font-bold">
            Total Volume Top 10 (W4)
          </div>
          <div className="text-2xl font-extrabold text-slate-800 mt-1">
            {fmt(currentSheetData.top10Volume)}{" "}
            <span className="text-xs font-semibold text-slate-400">
              {currentSheetData.unitMeasure}
            </span>
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Periode 12 – 18 Oktober
          </div>
        </Card>

        <Card className="p-4 border-l-4 border-l-emerald-500">
          <div className="text-[10px] text-slate-400 uppercase font-bold">
            Dominasi / Share Top 10
          </div>
          <div className="text-2xl font-extrabold text-emerald-600 mt-1">
            {currentSheetData.top10SharePct}%
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Dari total {fmt(currentSheetData.totalVolume)} {currentSheetData.unitMeasure} sheet
          </div>
        </Card>

        <Card className="p-4 border-l-4 border-l-red-500">
          <div className="text-[10px] text-slate-400 uppercase font-bold">
            {isUnitSheet ? "Armada Terbanyak" : "Item Kritis / Stockout"}
          </div>
          <div className="text-2xl font-extrabold text-red-600 mt-1">
            {isUnitSheet
              ? "Workshop (836)"
              : `${currentSheetData.urgentCount || 0} SKU`}
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            {isUnitSheet ? "35,8% dari total unit" : "Memerlukan restock darurat"}
          </div>
        </Card>

        <Card className="p-4 border-l-4 border-l-amber-500">
          <div className="text-[10px] text-slate-400 uppercase font-bold">
            {isUnitSheet ? "Total Transaksi Top 10" : "Saran Reorder Top 10"}
          </div>
          <div className="text-2xl font-extrabold text-slate-800 mt-1">
            {isUnitSheet
              ? `${currentSheetData.items.reduce((acc, u) => acc + u.freq, 0)}x Tx`
              : `+${fmt(currentSheetData.suggestedOrderSum || 0)}`}
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            {isUnitSheet ? "Di minggu ke-4" : "Kuantitas PO yang disarankan"}
          </div>
        </Card>
      </div>

      {/* GRAFIK TOP 10 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Grafik 1: Perbandingan Kuantitas Pengeluaran W4 Top 10 */}
        <Card className="p-5">
          <SectionTitle
            icon={BarChart3}
            title={`Grafik Pengeluaran W4 (12–18 Okt) — ${currentSheetData.sheetCategory}`}
            sub={`Perbandingan kuantitas keluar 10 item teratas dalam satuan ${currentSheetData.unitMeasure}`}
          />
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              layout="vertical"
              data={currentSheetData.chartData}
              margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
              <XAxis type="number" tick={{ fontSize: 10, fill: C.muted }} />
              <YAxis
                type="category"
                dataKey={isUnitSheet ? "name" : "shortName"}
                width={130}
                tick={{ fontSize: 10, fill: C.ink }}
              />
              <Tooltip content={<ChartTooltip />} />
              <Bar
                dataKey={isUnitSheet ? "qty" : "w4Out"}
                name="Pengeluaran W4 (12-18 Okt)"
                radius={[0, 4, 4, 0]}>
                {currentSheetData.chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      index === 0
                        ? C.accent
                        : index === 1
                          ? C.gold
                          : index === 2
                            ? C.violet
                            : C.accentBright
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Grafik 2: Komparasi SOH vs AWD atau Tx vs SKU */}
        <Card className="p-5">
          <SectionTitle
            icon={Layers}
            title={
              isUnitSheet
                ? "Grafik Frekuensi Transaksi & Variasi SKU"
                : "Grafik SOH Fisik vs Pengeluaran W4 vs AWD"
            }
            sub={
              isUnitSheet
                ? "Aktivitas intensitas pengambilan barang per unit di W4"
                : "Deteksi ketahanan buffer stok saat menghadapi lonjakan permintaan W4"
            }
          />
          <ResponsiveContainer width="100%" height={320}>
            {isUnitSheet ? (
              <BarChart
                data={currentSheetData.chartData}
                margin={{ top: 10, right: 20, left: 0, bottom: 25 }}>
                <XAxis
                  dataKey="shortName"
                  tick={{ fontSize: 9, fill: C.muted }}
                  angle={-25}
                  textAnchor="end"
                />
                <YAxis tick={{ fontSize: 10, fill: C.muted }} />
                <Tooltip content={<ChartTooltip />} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="freq" name="Frekuensi Transaksi" fill={C.gold} />
                <Bar dataKey="sku" name="Variasi SKU Unik" fill={C.violet} />
              </BarChart>
            ) : (
              <BarChart
                data={currentSheetData.chartData}
                margin={{ top: 10, right: 20, left: 0, bottom: 25 }}>
                <XAxis
                  dataKey="shortName"
                  tick={{ fontSize: 9, fill: C.muted }}
                  angle={-25}
                  textAnchor="end"
                />
                <YAxis tick={{ fontSize: 10, fill: C.muted }} />
                <Tooltip content={<ChartTooltip />} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="w4Out" name="Pengeluaran W4" fill={C.accent} />
                <Bar dataKey="soh" name="SOH Fisik Gudang" fill={C.slate} />
                <Bar dataKey="awd" name="Rata-rata AWD" fill={C.gold} />
              </BarChart>
            )}
          </ResponsiveContainer>
        </Card>
      </div>

      {/* TABEL LEADERBOARD TOP 10 */}
      <Card className="overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between flex-wrap gap-2">
          <div>
            <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide flex items-center gap-2">
              <span>Tabel Detail Top 10 — {currentSheetData.sheetTitle}</span>
              <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                12 – 18 Oktober 2026
              </span>
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Rincian metrik kuantitas, status ketahanan, dan porsi pengeluaran masing-masing item
            </p>
          </div>
          <span className="text-xs text-slate-500 font-semibold">
            10 Baris Ditampilkan
          </span>
        </div>

        <div className="overflow-x-auto">
          {isUnitSheet ? (
            /* Unit Scorecard Table */
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 w-14 text-center">Rank</th>
                  <th className="py-3 px-4">Unit / Use For</th>
                  <th className="py-3 px-4">Tipe Armada</th>
                  <th className="py-3 px-4 text-right font-extrabold text-slate-900">
                    Total Qty (12-18 Okt)
                  </th>
                  <th className="py-3 px-4 text-center">Frekuensi Tx</th>
                  <th className="py-3 px-4 text-center">Variasi SKU</th>
                  <th className="py-3 px-4 text-right">Rata-rata/Tx</th>
                  <th className="py-3 px-4 text-right">Porsi (%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {currentSheetData.items.map((u, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-50 transition-colors ${
                      idx < 3 ? "bg-sky-50/20" : ""
                    }`}>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-extrabold ${
                          idx === 0
                            ? "bg-amber-100 text-amber-800 ring-1 ring-amber-300"
                            : idx === 1
                              ? "bg-slate-200 text-slate-700"
                              : idx === 2
                                ? "bg-amber-50 text-amber-900 border border-amber-200"
                                : "text-slate-500 font-bold"
                        }`}>
                        {idx + 1}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-900 text-sm">
                      {u.unit}
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                        {u.armada}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right font-extrabold text-slate-900 text-sm">
                      {fmt(u.qty)} item
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-slate-700">
                      {u.freq}x
                    </td>
                    <td className="py-3 px-4 text-center font-semibold text-slate-700">
                      {u.sku} SKU
                    </td>
                    <td className="py-3 px-4 text-right text-slate-600">
                      {u.avgPerTx} item
                    </td>
                    <td className="py-3 px-4 text-right">
                      <span className="font-extrabold text-sky-700">
                        {u.sharePct}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            /* SOH Parts Top 10 Table */
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 w-12 text-center">Rank</th>
                  <th className="py-3 px-4">Part Number</th>
                  <th className="py-3 px-4">Deskripsi Part</th>
                  <th className="py-3 px-4 text-right font-extrabold text-sky-800">
                    Keluar W4 (12–18 Okt)
                  </th>
                  <th className="py-3 px-4 text-right">SOH Fisik</th>
                  <th className="py-3 px-4 text-right">AWD</th>
                  <th className="py-3 px-4 text-center">Ketahanan (WOS)</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4 text-right">Saran Order</th>
                  <th className="py-3 px-4 text-right">Share W4</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {currentSheetData.items.map((p, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-50 transition-colors ${
                      p.statusKey === "STOCKOUT"
                        ? "bg-red-50/30"
                        : p.statusKey === "KRITIS"
                          ? "bg-amber-50/20"
                          : ""
                    }`}>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-extrabold ${
                          idx === 0
                            ? "bg-amber-100 text-amber-800 ring-1 ring-amber-300"
                            : idx === 1
                              ? "bg-slate-200 text-slate-700"
                              : idx === 2
                                ? "bg-amber-50 text-amber-900 border border-amber-200"
                                : "text-slate-500 font-bold"
                        }`}>
                        {idx + 1}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-slate-900">
                      {p.partNumber}
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-800 max-w-xs truncate">
                      {p.partName}
                    </td>
                    <td className="py-3 px-4 text-right font-extrabold text-sky-800 text-sm">
                      {fmt(p.w4)} {p.uom}
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-slate-800">
                      {fmt(p.soh)} {p.uom}
                    </td>
                    <td className="py-3 px-4 text-right text-slate-600">
                      {fmt(p.awd, 1)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                          p.weeksOfSupply <= 0
                            ? "bg-red-100 text-red-800 font-extrabold"
                            : p.weeksOfSupply < 1.0
                              ? "bg-red-50 text-red-700 border border-red-200"
                              : p.weeksOfSupply <= 2.0
                                ? "bg-amber-100 text-amber-800"
                                : "bg-emerald-50 text-emerald-700"
                        }`}>
                        {p.weeksOfSupply.toFixed(2)} mgg
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                          p.statusKey === "STOCKOUT"
                            ? "bg-red-600 text-white"
                            : p.statusKey === "KRITIS"
                              ? "bg-red-100 text-red-800 font-extrabold"
                              : p.statusKey === "LOW_STOCK"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-emerald-100 text-emerald-800"
                        }`}>
                        {p.statusKey}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      {p.suggestedOrder > 0 ? (
                        <span className="font-extrabold text-red-600">
                          +{fmt(p.suggestedOrder)} {p.uom}
                        </span>
                      ) : (
                        <span className="text-slate-400 font-normal">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right font-extrabold text-slate-800">
                      {p.shareW4}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Card>
    </div>
  );
}

/* ═══════════════════ TAB 3: STOCK HEALTH & CATEGORIES ═══════════════════ */
function StockHealthTab() {
  const [selectedStatus, setSelectedStatus] = useState("ALL");

  return (
    <div className="space-y-5">
      {/* Stock Health Matrix */}
      <Card className="p-5">
        <SectionTitle
          icon={Gauge}
          title="Matriks Ketahanan Persediaan (Buffer Health)"
          sub="Klasifikasi 743 SKU berdasarkan minggu ketahanan (Weeks of Supply)"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2.5 mt-4">
          {STOCK_HEALTH_MATRIX.map((s, i) => (
            <button
              key={i}
              onClick={() => setSelectedStatus(selectedStatus === s.key ? "ALL" : s.key)}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedStatus === s.key
                  ? "ring-2 ring-sky-500 border-sky-400 bg-sky-50/40 shadow-sm"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}>
              <div className="flex items-center justify-between mb-1">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: s.color }}
                />
                <span className="text-[10px] font-bold text-slate-400">
                  {s.pct}%
                </span>
              </div>
              <div className="text-xl font-extrabold text-slate-800">
                {s.count}
              </div>
              <div className="text-[11px] font-bold text-slate-700 truncate mt-0.5">
                {s.label}
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                SOH: {fmt(s.soh)}
              </div>
            </button>
          ))}
        </div>
      </Card>

      {/* Category Deep Dive Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {CATEGORY_BREAKDOWN.map((cat, idx) => (
          <Card key={idx} className="p-5">
            <div className="flex items-start justify-between mb-3 border-b border-slate-100 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="w-3.5 h-3.5 rounded-md"
                    style={{ backgroundColor: cat.color }}
                  />
                  <h4 className="text-base font-extrabold text-slate-800">
                    {cat.label}
                  </h4>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Total {cat.totalSkus} SKU | AWD: {cat.awd} per minggu
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase font-bold text-slate-400">
                  Reorder Urgent
                </div>
                <div className="text-base font-extrabold text-red-600">
                  +{fmt(cat.suggestedOrder)} unit
                </div>
              </div>
            </div>

            {/* Health pill indicators */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs mb-4">
              <div className="p-2 rounded-lg bg-red-50 border border-red-100">
                <div className="text-[10px] font-bold text-red-700 uppercase">
                  Stockout
                </div>
                <div className="text-lg font-extrabold text-red-700">
                  {cat.statusCounts.STOCKOUT}
                </div>
              </div>
              <div className="p-2 rounded-lg bg-amber-50 border border-amber-100">
                <div className="text-[10px] font-bold text-amber-700 uppercase">
                  Kritis / Low
                </div>
                <div className="text-lg font-extrabold text-amber-700">
                  {cat.statusCounts.KRITIS + cat.statusCounts.LOW_STOCK}
                </div>
              </div>
              <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100">
                <div className="text-[10px] font-bold text-emerald-700 uppercase">
                  Healthy
                </div>
                <div className="text-lg font-extrabold text-emerald-700">
                  {cat.statusCounts.HEALTHY}
                </div>
              </div>
            </div>

            {/* Top parts in category for W4 */}
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Top Part Pengeluaran W4 (12–18 Okt)
              </div>
              <div className="space-y-1.5">
                {cat.topPartsW4.slice(0, 5).map((tp, pidx) => (
                  <div
                    key={pidx}
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-xs hover:bg-slate-100 transition-colors">
                    <div className="truncate pr-2">
                      <div className="font-bold text-slate-800 truncate">
                        {tp.partName || tp.partNumber}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        {tp.partNumber} · SOH: {tp.soh} {tp.uom}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-extrabold text-sky-700">
                        {fmt(tp.w4)} {tp.uom}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Total 4M: {tp.totalOut}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════ TAB 4: KONSUMSI ARMADA ═══════════════════ */
function FleetConsumptionTab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArmada, setSelectedArmada] = useState("ALL");

  const filteredUnits = useMemo(() => {
    return UNIT_SCORECARD.filter((u) => {
      const matchSearch =
        u.unit.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.armada.toLowerCase().includes(searchTerm.toLowerCase());
      const matchArmada =
        selectedArmada === "ALL" || u.armada === selectedArmada;
      return matchSearch && matchArmada;
    });
  }, [searchTerm, selectedArmada]);

  const armadaOptions = useMemo(() => {
    const set = new Set(UNIT_SCORECARD.map((u) => u.armada));
    return ["ALL", ...Array.from(set)];
  }, []);

  return (
    <div className="space-y-5">
      {/* Armada Requisition Header Card */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {ARMADA_BREAKDOWN.map((arm, i) => (
          <Card
            key={i}
            onClick={() => setSelectedArmada(arm.armada)}
            className={`p-3.5 cursor-pointer transition-all ${
              selectedArmada === arm.armada
                ? "ring-2 ring-sky-500 border-sky-400 bg-sky-50/30"
                : "hover:border-slate-300"
            }`}>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {arm.armada}
            </div>
            <div className="text-xl font-extrabold text-slate-800 mt-0.5">
              {fmt(arm.qty)} <span className="text-xs font-normal">item</span>
            </div>
            <div className="flex justify-between items-center text-[11px] text-slate-500 mt-1">
              <span>{arm.units} unit</span>
              <span className="font-bold text-sky-600">{arm.sharePct}%</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Search & Filter Bar */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full md:w-80 relative">
            <Search size={16} className="text-slate-400 absolute left-3" />
            <input
              type="text"
              placeholder="Cari Unit / Alat (misal: DT 023, Workshop)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
            {armadaOptions.map((a, i) => (
              <button
                key={i}
                onClick={() => setSelectedArmada(a)}
                className={`text-[11px] font-bold px-3 py-1 rounded-lg transition-all whitespace-nowrap ${
                  selectedArmada === a
                    ? "bg-sky-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}>
                {a === "ALL" ? "Semua Armada" : a}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Unit Scorecard Table */}
      <Card className="overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <SectionTitle
            icon={Truck}
            title="Scorecard Konsumsi Suku Cadang Per Unit (Week 4: 12 – 18 Okt)"
            sub={`Menampilkan ${filteredUnits.length} dari ${UNIT_SCORECARD.length} entitas unit operasional`}
          />
          <div className="text-xs text-slate-500 font-semibold">
            Total Qty Terambil:{" "}
            <strong className="text-slate-800">
              {filteredUnits.reduce((acc, u) => acc + u.qty, 0).toLocaleString()} item
            </strong>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 w-12 text-center">Rank</th>
                <th className="py-3 px-4">Unit / Use For</th>
                <th className="py-3 px-4">Tipe Armada</th>
                <th className="py-3 px-4 text-right">Total Qty</th>
                <th className="py-3 px-4 text-center">Frekuensi Tx</th>
                <th className="py-3 px-4 text-center">Variasi SKU</th>
                <th className="py-3 px-4 text-right">Rata-rata/Tx</th>
                <th className="py-3 px-4 text-right">Porsi (%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredUnits.map((u, i) => (
                <tr
                  key={i}
                  className="hover:bg-slate-50/80 transition-colors font-medium">
                  <td className="py-2.5 px-4 text-center">
                    <span
                      className={`inline-block w-5 h-5 rounded-full text-[10px] font-bold leading-5 ${
                        u.rank <= 3
                          ? "bg-amber-100 text-amber-800 font-extrabold"
                          : "text-slate-500"
                      }`}>
                      {u.rank}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 font-bold text-slate-800">
                    {u.unit}
                  </td>
                  <td className="py-2.5 px-4">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                        u.armada.includes("DT")
                          ? "bg-sky-50 text-sky-700"
                          : u.armada.includes("HE")
                            ? "bg-violet-50 text-violet-700"
                            : u.armada.includes("Workshop")
                              ? "bg-amber-50 text-amber-700"
                              : "bg-slate-100 text-slate-600"
                      }`}>
                      {u.armada}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-right font-extrabold text-slate-800">
                    {fmt(u.qty)}
                  </td>
                  <td className="py-2.5 px-4 text-center font-semibold">
                    {u.freq}x
                  </td>
                  <td className="py-2.5 px-4 text-center font-semibold">
                    {u.sku} SKU
                  </td>
                  <td className="py-2.5 px-4 text-right text-slate-600">
                    {u.avgPerTx} item
                  </td>
                  <td className="py-2.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-sky-500 h-full rounded-full"
                          style={{ width: `${Math.min(100, u.sharePct * 3)}%` }}
                        />
                      </div>
                      <span className="font-bold text-slate-800 w-10 text-right">
                        {u.sharePct}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

/* ═══════════════════ TAB 5: PROCUREMENT & REORDERS ═══════════════════ */
function ProcurementTab() {
  const [priorityFilter, setPriorityFilter] = useState("ALL");
  const [catFilter, setCatFilter] = useState("ALL");
  const [searchPart, setSearchPart] = useState("");

  const filteredReorders = useMemo(() => {
    return REORDER_RECOMMENDATIONS.filter((item) => {
      const matchPrio =
        priorityFilter === "ALL" || item.priority === priorityFilter;
      const matchCat =
        catFilter === "ALL" || item.categoryKey === catFilter;
      const matchSearch =
        item.partNumber.toLowerCase().includes(searchPart.toLowerCase()) ||
        item.partName.toLowerCase().includes(searchPart.toLowerCase());
      return matchPrio && matchCat && matchSearch;
    });
  }, [priorityFilter, catFilter, searchPart]);

  return (
    <div className="space-y-5">
      {/* Reorder Summary Header */}
      <Card className="p-5 bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-lg">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-red-200">
              Procurement & Reorder Action Plan
            </div>
            <h3 className="text-2xl font-extrabold mt-0.5">
              {REORDER_RECOMMENDATIONS.length} SKU Perlu Pengadaan Segera
            </h3>
            <p className="text-xs text-red-100 mt-1 max-w-2xl leading-relaxed">
              Daftar rekomendasi order suku cadang dan pelumas berdasarkan konsumsi AWD (Average Weekly Demand) dan batas buffer keselamatan.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur text-right">
              <div className="text-[10px] uppercase font-bold text-red-200">
                Total Kuantitas Order
              </div>
              <div className="text-2xl font-extrabold text-white">
                {KPI.totalSuggestedOrder.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Filter and Search Bar */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full md:w-80 relative">
            <Search size={16} className="text-slate-400 absolute left-3" />
            <input
              type="text"
              placeholder="Cari Part Number atau Nama Part..."
              value={searchPart}
              onChange={(e) => setSearchPart(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg">
              {[
                { k: "ALL", l: "Semua Prioritas" },
                { k: "CRITICAL", l: "🚨 Critical" },
                { k: "HIGH", l: "🟠 High" },
              ].map((p) => (
                <button
                  key={p.k}
                  onClick={() => setPriorityFilter(p.k)}
                  className={`text-[11px] font-bold px-2.5 py-1 rounded transition-all ${
                    priorityFilter === p.k
                      ? "bg-white text-slate-800 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}>
                  {p.l}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg">
              {[
                { k: "ALL", l: "Semua Kategori" },
                { k: "OIL", l: "Oil & Grease" },
                { k: "DT", l: "Dump Truck" },
                { k: "TYRE", l: "Tyre" },
                { k: "HE", l: "Heavy Equipment" },
              ].map((c) => (
                <button
                  key={c.k}
                  onClick={() => setCatFilter(c.k)}
                  className={`text-[11px] font-bold px-2.5 py-1 rounded transition-all ${
                    catFilter === c.k
                      ? "bg-white text-slate-800 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}>
                  {c.l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Reorder Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Prioritas</th>
                <th className="py-3 px-4">Part Number</th>
                <th className="py-3 px-4">Deskripsi Part</th>
                <th className="py-3 px-4">Kategori</th>
                <th className="py-3 px-4 text-right">SOH</th>
                <th className="py-3 px-4 text-right">AWD</th>
                <th className="py-3 px-4 text-center">Ketahanan (WOS)</th>
                <th className="py-3 px-4 text-right">Saran Order</th>
                <th className="py-3 px-4">Catatan Operasional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {filteredReorders.map((item, i) => (
                <tr
                  key={i}
                  className={`hover:bg-slate-50 transition-colors ${
                    item.priority === "CRITICAL" ? "bg-red-50/20" : ""
                  }`}>
                  <td className="py-2.5 px-4">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                        item.priority === "CRITICAL"
                          ? "bg-red-600 text-white"
                          : "bg-amber-500 text-white"
                      }`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-900">
                    {item.partNumber}
                  </td>
                  <td className="py-2.5 px-4 font-bold text-slate-800 max-w-xs truncate">
                    {item.partName}
                  </td>
                  <td className="py-2.5 px-4">
                    <span className="text-[11px] text-slate-600">
                      {item.category}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-right font-bold text-slate-800">
                    {fmt(item.soh)} {item.uom}
                  </td>
                  <td className="py-2.5 px-4 text-right text-slate-600">
                    {fmt(item.awd, 1)}
                  </td>
                  <td className="py-2.5 px-4 text-center">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.weeksOfSupply < 0.5
                          ? "bg-red-100 text-red-800 font-extrabold"
                          : item.weeksOfSupply <= 1.0
                            ? "bg-amber-100 text-amber-800"
                            : "bg-slate-100 text-slate-700"
                      }`}>
                      {item.weeksOfSupply.toFixed(2)} mgg
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-right">
                    <span className="text-sm font-extrabold text-red-600">
                      +{fmt(item.suggestedOrder)} {item.uom}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-[11px] text-slate-500 max-w-sm truncate">
                    {item.urgencyNote}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

/* ═══════════════════ TAB 6: VELOCITY & DEAD STOCK ═══════════════════ */
function VelocityTab() {
  return (
    <div className="space-y-5">
      {/* Velocity Quadrant Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {VELOCITY_BREAKDOWN.map((v, i) => (
          <Card key={i} className="p-4 border-l-4" style={{ borderLeftColor: v.color }}>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {v.velocity}
            </div>
            <div className="text-2xl font-extrabold text-slate-800 mt-1">
              {v.count} <span className="text-xs font-normal text-slate-400">SKU</span>
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-1">
              {v.pct}% dari total inventaris
            </div>
          </Card>
        ))}
      </div>

      {/* Dead Stock Crisis Card */}
      <Card className="p-6 border-l-4 border-l-amber-500 bg-amber-50/20">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
            <Clock size={20} className="text-amber-700" />
          </div>
          <div>
            <h4 className="text-base font-extrabold text-slate-800">
              Analisis Dead Stock & Modal Tertimbun: {KPI.deadStockSkus} SKU (73,1%)
            </h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Sebanyak <strong>543 SKU (73,1%)</strong> tidak mengalami pergerakan pengeluaran selama 4 minggu observasi penuh. 
              Komposisi dead stock terbesar terdapat pada suku cadang <strong>Heavy Equipment (269 SKU)</strong> dan <strong>Dump Truck (259 SKU)</strong>. 
              Kondisi ini menyerap kapasitas rak gudang Site BPSP serta membekukan modal kerja perusahaan.
            </p>
          </div>
        </div>
      </Card>

      {/* Top 20 Fast Moving Table */}
      <Card className="overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <SectionTitle
            icon={Zap}
            title="Top 20 Fast Moving Items (Konsumsi Terbesar 4 Minggu)"
            sub="Item penggerak operasional utama Site BPSP"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 w-12 text-center">No</th>
                <th className="py-3 px-4">Part Number</th>
                <th className="py-3 px-4">Nama Part</th>
                <th className="py-3 px-4">Kategori</th>
                <th className="py-3 px-4 text-right">21-27 Sep</th>
                <th className="py-3 px-4 text-right">28 Sep-4 Okt</th>
                <th className="py-3 px-4 text-right">05-11 Okt</th>
                <th className="py-3 px-4 text-right font-bold text-sky-700">12-18 Okt</th>
                <th className="py-3 px-4 text-right font-extrabold">Total Out</th>
                <th className="py-3 px-4 text-right">SOH</th>
                <th className="py-3 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {TOP_FAST_MOVING.map((p, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-2.5 px-4 text-center font-bold text-slate-400">
                    {idx + 1}
                  </td>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-800">
                    {p.partNumber}
                  </td>
                  <td className="py-2.5 px-4 font-bold text-slate-800 max-w-xs truncate">
                    {p.partName}
                  </td>
                  <td className="py-2.5 px-4 text-slate-500">
                    {p.category}
                  </td>
                  <td className="py-2.5 px-4 text-right text-slate-500">{fmt(p.w1)}</td>
                  <td className="py-2.5 px-4 text-right text-slate-500">{fmt(p.w2)}</td>
                  <td className="py-2.5 px-4 text-right text-slate-500">{fmt(p.w3)}</td>
                  <td className="py-2.5 px-4 text-right font-bold text-sky-700">{fmt(p.w4)}</td>
                  <td className="py-2.5 px-4 text-right font-extrabold text-slate-900">
                    {fmt(p.totalOut)} {p.uom}
                  </td>
                  <td className="py-2.5 px-4 text-right font-bold text-slate-800">
                    {fmt(p.soh)} {p.uom}
                  </td>
                  <td className="py-2.5 px-4 text-center">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                        p.statusKey === "STOCKOUT"
                          ? "bg-red-100 text-red-800"
                          : p.statusKey === "KRITIS"
                            ? "bg-red-50 text-red-700 border border-red-200"
                            : p.statusKey === "LOW_STOCK"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-emerald-50 text-emerald-700"
                      }`}>
                      {p.statusKey}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

/* ═══════════════════ TAB 7: ANOMALIES & AUDITS ═══════════════════ */
function AnomaliesTab() {
  const [filterSev, setFilterSev] = useState("ALL");

  const filtered = useMemo(() => {
    return ANOMALIES.filter(
      (a) => filterSev === "ALL" || a.severity === filterSev
    );
  }, [filterSev]);

  return (
    <div className="space-y-5">
      {/* Audit Banner */}
      <Card className="p-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h3 className="text-base font-extrabold text-slate-800">
              Daftar Temuan Audit & Anomali Gudang Site BPSP
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Identifikasi deviasi stok, risiko kritis, dan rekomendasi mitigasi operasional
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            {[
              { k: "ALL", l: "Semua (10)" },
              { k: "HIGH", l: "🔴 High (5)" },
              { k: "MEDIUM", l: "🟠 Medium (3)" },
              { k: "INFO", l: "🔵 Info (2)" },
            ].map((f) => (
              <button
                key={f.k}
                onClick={() => setFilterSev(f.k)}
                className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all ${
                  filterSev === f.k
                    ? "bg-slate-800 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}>
                {f.l}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Anomaly Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item, i) => {
          const cfg = sevColor(item.severity);
          return (
            <Card
              key={i}
              className={`p-5 border-l-4 ${cfg.border} hover:shadow-md transition-shadow`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {item.id}
                  </span>
                  <Badge level={item.severity}>{item.severity}</Badge>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  {item.status}
                </span>
              </div>

              <h4 className="text-sm font-extrabold text-slate-800 mb-1">
                {item.category}: {item.unit}
              </h4>
              <div className="text-[11px] font-mono text-slate-500 mb-2">
                Part Ref: {item.partNumber}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {item.issue}
              </p>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  Rekomendasi Tindakan:
                </div>
                <div className="font-semibold text-slate-800">
                  {item.action}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

/* ═══════════════════ MAIN DASHBOARD APP ═══════════════════ */
export default function WeeklyDashboardPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Executive", icon: BarChart3, component: ExecutiveTab },
    { label: "Top 10 Minggu ke-4 (12–18 Okt)", icon: Flame, component: Top10Week4Tab },
    { label: "Stock Health & Kategori", icon: Layers, component: StockHealthTab },
    { label: "Konsumsi Armada", icon: Truck, component: FleetConsumptionTab },
    { label: "Rencana Pengadaan (Reorder)", icon: Package, component: ProcurementTab },
    { label: "Velocity & Dead Stock", icon: Clock, component: VelocityTab },
    { label: "Anomali & Audit", icon: ShieldAlert, component: AnomaliesTab },
  ];

  const ActiveComponent = tabs[activeTab].component;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Top Header */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white sticky top-0 z-20 shadow-lg">
        <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 backdrop-blur flex items-center justify-center border border-sky-500/30">
              <Boxes size={20} className="text-sky-400" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">
                {COMPANY}
              </div>
              <div className="text-sm font-extrabold">
                {REPORT_TITLE} — {SITE}
              </div>
              <div className="text-[10px] text-slate-400">
                Suku Cadang, Pelumas, Ban & Konsumsi Armada
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 text-right">
              <div>
                <div className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">
                  Periode
                </div>
                <div className="text-xs font-extrabold">{WEEK_CURR}</div>
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
                <div className="text-xs font-extrabold text-red-400">
                  {EXECUTIVE.riskLevel}
                </div>
              </div>
            </div>

            {/* Quick Switch to Fuel Dashboard */}
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs font-bold bg-white/10 hover:bg-white/20 text-sky-300 px-3 py-1.5 rounded-lg border border-white/10 transition-colors">
              <Fuel size={14} />
              <span>Fuel Analytics</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Sticky Tab Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-[68px] z-10 shadow-xs">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((t, idx) => {
              const Icon = t.icon;
              const active = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-4 py-3 text-xs font-bold whitespace-nowrap transition-all relative ${
                    active
                      ? "text-sky-600 font-extrabold"
                      : "text-slate-500 hover:text-slate-800"
                  }`}>
                  <Icon size={14} className={active ? "text-sky-600" : "text-slate-400"} />
                  <span>{t.label}</span>
                  {active && (
                    <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-sky-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content View */}
      <main className="max-w-7xl mx-auto px-5 py-6">
        <ActiveComponent onNavigateTab={(tabIdx) => setActiveTab(tabIdx)} />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between text-[11px] text-slate-500 flex-wrap gap-2">
          <span>
            Sistem Manajemen Inventaris & Spare Parts — {SITE} | {COMPANY}
          </span>
          <span>Analisis data weekly.xlsx • Periode 12 – 18 Oktober 2026 (Minggu ke-4)</span>
        </div>
      </footer>
    </div>
  );
}
