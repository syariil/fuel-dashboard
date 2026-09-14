"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  Line,
  LineChart,
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
  LabelList,
} from "recharts";
import {
  AlertCircle,
  TrendingDown,
  TrendingUp,
  Minus,
  Truck,
  Activity,
  BarChart2,
  Fuel,
} from "lucide-react";

import {
  C,
  COMPANY,
  WEEK_NEW,
  WEEK_PREV_NORMAL,
  KPI,
  CONSUMPTION_TREND,
  CAT_COMPARE,
  DAILY_NEW,
  DT_FLEET,
  EXC_FLEET,
  MHR_DATA,
  SUPPORT_DATA,
  LOCATION_DATA,
  LOCATION_COLORS,
  STOCK_DATA,
  FINDINGS,
  DAILY_CARDS,
  ANOMALIES,
  RESTART_INSIGHTS,
  CATEGORY_SHARE,
  STOCK_TRANSITION,
} from "./data";

// ─────────────── KOMPONEN UTILITAS ───────────────
const Badge = ({ level }) => {
  const cfg = {
    HIGH: { bg: C.red, text: "#fff" },
    MEDIUM: { bg: C.amber, text: "#fff" },
    LOW: { bg: C.good, text: "#fff" },
    INFO: { bg: C.muted, text: "#fff" },
    GOOD: { bg: C.good, text: "#fff" },
  };
  const s = cfg[level] || cfg.INFO;
  return (
    <span
      style={{
        background: s.bg,
        color: s.text,
        fontSize: 10,
        fontWeight: 700,
        padding: "2px 7px",
        borderRadius: 3,
        letterSpacing: 0.5,
        fontFamily: "Arial",
      }}>
      {level}
    </span>
  );
};

const WowChip = ({ pct }) => {
  const up = pct > 0;
  const neutral = Math.abs(pct) < 0.5;
  const color = neutral ? C.muted : up ? C.gold : C.good;
  const Icon = neutral ? Minus : up ? TrendingUp : TrendingDown;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 3,
        color,
        fontSize: 12,
        fontWeight: 700,
      }}>
      <Icon size={12} />
      {up ? "+" : ""}
      {pct.toFixed(1)}% WoW
    </span>
  );
};

const SectionTitle = ({ children, sub }) => (
  <div style={{ marginBottom: 12 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div
        style={{ width: 3, height: 18, background: C.accent, borderRadius: 2 }}
      />
      <span
        style={{
          fontSize: 13,
          fontWeight: 800,
          color: C.navy,
          fontFamily: "Arial",
          textTransform: "uppercase",
          letterSpacing: 0.5,
        }}>
        {children}
      </span>
    </div>
    {sub && (
      <p
        style={{
          fontSize: 11,
          color: C.muted,
          fontFamily: "Arial",
          margin: "3px 0 0 11px",
        }}>
        {sub}
      </p>
    )}
  </div>
);

const customTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        background: C.navy,
        borderRadius: 6,
        padding: "8px 12px",
        border: `1px solid ${C.accent}`,
      }}>
      <p
        style={{
          color: "#fff",
          fontSize: 11,
          fontWeight: 700,
          margin: "0 0 4px",
          fontFamily: "Arial",
        }}>
        {label}
      </p>
      {payload.map((p, i) => (
        <p
          key={i}
          style={{
            color: p.color || "#fff",
            fontSize: 11,
            margin: "2px 0",
            fontFamily: "Arial",
          }}>
          {p.name}: {Number(p.value).toLocaleString()} L
        </p>
      ))}
    </div>
  );
};

const lblInt = (v) => Math.round(v).toLocaleString();
const lblDec1 = (v) => Number(v).toFixed(1);
const lblDec2 = (v) => Number(v).toFixed(2);
const labelStyle = {
  fontSize: 10,
  fontWeight: 700,
  fontFamily: "Arial",
  fill: C.navy,
};

// ─────────────── HALAMAN 1: RINGKASAN EKSEKUTIF ───────────────
const ExecSummary = () => (
  <div style={{ fontFamily: "Arial" }}>
    <div
      style={{
        background: C.navy,
        borderRadius: 8,
        padding: "12px 16px",
        marginBottom: 16,
      }}>
      <p
        style={{
          color: C.accentBright,
          fontSize: 11,
          fontWeight: 700,
          margin: "0 0 3px",
          textTransform: "uppercase",
          letterSpacing: 0.8,
        }}>
        Kesimpulan Eksekutif — Minggu 7–13 Sep 2026 · Site BPSP (Operasi Penuh)
      </p>
      <p
        style={{
          color: "#fff",
          fontSize: 14,
          fontWeight: 600,
          margin: 0,
          lineHeight: 1.5,
        }}>
        Minggu pertama operasi penuh setelah restart akhir Agustus. Konsumsi
        rata-rata <span style={{ color: C.accentBright }}>6.469 L/hari</span> —
        naik tipis <span style={{ color: C.accentBright }}>+2,2%</span> vs
        baseline 31 Agu–5 Sep (6.330 L/hari). Armada hampir penuh: 24 DT dan 12
        EXC aktif. Fuel ratio DT weighted{" "}
        <span style={{ color: C.accentBright }}>23,18 L/HM</span>. Stok EOD 13
        Sep ≈ <span style={{ color: C.accentBright }}>21.979 L</span> (runway
        3–4 hari) setelah Stock-In 22.000 L pada 7 Sep — lihat halaman Kualitas
        Data untuk anomali first-refueling DT-066.
      </p>
    </div>

    <SectionTitle sub="Tier 1 — Makro: konsumsi minggu ini dibanding baseline 31 Agu–5 Sep">
      Konsumsi & Status Operasi
    </SectionTitle>
    <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
      <div
        style={{
          flex: "1.3",
          background: C.navy,
          borderRadius: 8,
          padding: "16px 18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
        <span
          style={{
            fontSize: 11,
            color: "#B8C9D9",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}>
          Total Minggu Ini (7 hari)
        </span>
        <span
          style={{
            fontSize: 34,
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.1,
            marginTop: 4,
          }}>
          45,279{" "}
          <span style={{ fontSize: 15, fontWeight: 600, color: "#B8C9D9" }}>
            L
          </span>
        </span>
        <span style={{ fontSize: 10, color: "#B8C9D9", marginTop: 8 }}>
          225 transaksi · armada 24 DT + 12 EXC aktif
        </span>
      </div>
      <div
        style={{ flex: "1", display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{
            flex: 1,
            background: C.card,
            border: `1px solid ${C.border}`,
            borderLeft: `4px solid ${C.good}`,
            borderRadius: 6,
            padding: "10px 14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <div>
            <div
              style={{
                fontSize: 10,
                color: C.muted,
                fontWeight: 600,
                textTransform: "uppercase",
              }}>
              Tingkat Operasi (7–13 Sep)
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.ink }}>
              6,469{" "}
              <span style={{ fontSize: 11, fontWeight: 600, color: C.muted }}>
                L/hari
              </span>
            </div>
          </div>
          <WowChip pct={KPI.wowVsNormal} />
        </div>
        <div
          style={{
            flex: 1,
            background: C.card,
            border: `1px solid ${C.border}`,
            borderLeft: `4px solid ${C.accent}`,
            borderRadius: 6,
            padding: "10px 14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <div>
            <div
              style={{
                fontSize: 10,
                color: C.muted,
                fontWeight: 600,
                textTransform: "uppercase",
              }}>
              Fuel Ratio DT
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.ink }}>
              23.18{" "}
              <span style={{ fontSize: 11, fontWeight: 600, color: C.muted }}>
                L/HM
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            background: C.card,
            border: `1px solid ${C.border}`,
            borderLeft: `4px solid ${C.good}`,
            borderRadius: 6,
            padding: "10px 14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <div>
            <div
              style={{
                fontSize: 10,
                color: C.muted,
                fontWeight: 600,
                textTransform: "uppercase",
              }}>
              Stok Saat Ini (EOD 13 Sep)
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.ink }}>
              21,979{" "}
              <span style={{ fontSize: 11, fontWeight: 600, color: C.muted }}>
                L
              </span>
            </div>
          </div>
          <span style={{ fontSize: 10, color: C.good, fontWeight: 800 }}>
            ~3-4 hari
          </span>
        </div>
      </div>
    </div>

    <SectionTitle sub="Konsumsi stabil di level operasi penuh, sedikit di atas baseline minggu sebelumnya">
      Tren Konsumsi: Restart → Baseline → Minggu Ini
    </SectionTitle>
    <div
      style={{
        background: C.card,
        borderRadius: 8,
        padding: 14,
        border: `1px solid ${C.border}`,
        marginBottom: 16,
      }}>
      <ResponsiveContainer width="100%" height={190}>
        <BarChart
          data={CONSUMPTION_TREND}
          margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <XAxis
            dataKey="period"
            tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }}
          />
          <YAxis tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }} />
          <Tooltip content={customTooltip} />
          <Bar
            dataKey="rate"
            name="Avg L/hari"
            radius={[4, 4, 0, 0]}
            barSize={65}>
            <Cell fill={C.muted} />
            <Cell fill={C.accentSoft} />
            <Cell fill={C.accentBright} />
            <Cell fill={C.accent} />
            <LabelList
              dataKey="rate"
              position="top"
              formatter={lblInt}
              style={labelStyle}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p
        style={{
          fontSize: 10,
          color: C.muted,
          margin: "6px 0 0",
          fontStyle: "italic",
        }}>
        Baseline = rata-rata 31 Agu–5 Sep (6 hari). Minggu ini = rata-rata 7–13
        Sep (7 hari).
      </p>
    </div>

    <SectionTitle sub="Tier 2 — Diagnostik: Produksi stabil; MHR naik 23%; Pendukung normal">
      Perbandingan Kategori vs Baseline Operasi Normal
    </SectionTitle>
    <div
      style={{
        background: C.card,
        borderRadius: 8,
        padding: 14,
        border: `1px solid ${C.border}`,
        marginBottom: 16,
      }}>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={CAT_COMPARE}
          layout="vertical"
          margin={{ top: 5, right: 40, left: 10, bottom: 5 }}>
          <XAxis
            type="number"
            tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }}
            tickFormatter={(v) => (v / 1000).toFixed(1) + "k"}
          />
          <YAxis
            type="category"
            dataKey="cat"
            tick={{ fontSize: 11, fontFamily: "Arial", fill: C.ink }}
            width={90}
          />
          <Tooltip content={customTooltip} />
          <Legend
            wrapperStyle={{
              fontSize: 10,
              fontFamily: "Arial",
              color: C.inkAlt,
            }}
          />
          <Bar
            dataKey="base"
            name={`Baseline Normal (${WEEK_PREV_NORMAL})`}
            fill={C.muted}
            barSize={16}
            radius={[0, 3, 3, 0]}>
            <LabelList
              dataKey="base"
              position="right"
              formatter={lblInt}
              style={labelStyle}
            />
          </Bar>
          <Bar
            dataKey="new"
            name={`${WEEK_NEW} (avg/hari)`}
            fill={C.accent}
            barSize={16}
            radius={[0, 3, 3, 0]}>
            <LabelList
              dataKey="new"
              position="right"
              formatter={lblInt}
              style={labelStyle}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p
        style={{
          fontSize: 10,
          color: C.muted,
          margin: "6px 0 0",
          fontStyle: "italic",
        }}>
        Produksi nyaris datar (+0,3%). MHR naik karena aktivitas grader & water
        truck yang lebih intensif.
      </p>
    </div>

    <SectionTitle sub="Tier 3 — Tindak Lanjut Prioritas">
      Temuan Utama & Tindakan yang Direkomendasikan
    </SectionTitle>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
      {FINDINGS.map((f, i) => (
        <div
          key={i}
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderLeft: `4px solid ${
              f.level === "HIGH"
                ? C.red
                : f.level === "MEDIUM"
                  ? C.amber
                  : f.level === "GOOD"
                    ? C.good
                    : C.muted
            }`,
            borderRadius: 6,
            padding: "10px 14px",
            fontFamily: "Arial",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 5,
            }}>
            <span style={{ fontWeight: 700, fontSize: 13, color: C.ink }}>
              {f.title}
            </span>
            <Badge level={f.level} />
          </div>
          <p
            style={{
              fontSize: 12,
              color: C.inkAlt,
              margin: 0,
              lineHeight: 1.5,
            }}>
            {f.body}
          </p>
          <p
            style={{
              fontSize: 11,
              color: C.accent,
              margin: "6px 0 0",
              fontWeight: 600,
            }}>
            → {f.action}
          </p>
        </div>
      ))}
    </div>

    <div
      style={{
        marginTop: 14,
        borderTop: `1px solid ${C.border}`,
        paddingTop: 8,
        display: "flex",
        justifyContent: "space-between",
      }}>
      <span style={{ fontSize: 10, color: C.muted, fontFamily: "Arial" }}>
        Sistem Pemantauan Bahan Bakar — Site BPSP | {COMPANY}
      </span>
      <span style={{ fontSize: 10, color: C.muted, fontFamily: "Arial" }}>
        Hassan Rahmatillah · LDP Batch X · TID 614
      </span>
    </div>
  </div>
);

// ─────────────── HALAMAN 2: DETAIL OPERASIONAL ───────────────
const OperationalDetail = () => {
  const dtScatter = DT_FLEET.map((d) => ({
    ...d,
    fill: d.frHm > 28 ? C.amber : d.frHm < 18 ? C.red : C.accent,
  }));
  const excSorted = [...EXC_FLEET].sort((a, b) => b.fuel - a.fuel);

  return (
    <div style={{ fontFamily: "Arial" }}>
      <div
        style={{
          background: C.navy,
          borderRadius: 8,
          padding: "10px 16px",
          marginBottom: 14,
        }}>
        <p
          style={{
            color: C.accentBright,
            fontSize: 11,
            fontWeight: 700,
            margin: "0 0 2px",
            textTransform: "uppercase",
          }}>
          Detail Operasional — Minggu 7–13 Sep 2026 · Site BPSP
        </p>
        <p style={{ color: "#fff", fontSize: 13, fontWeight: 500, margin: 0 }}>
          Armada hampir penuh: 24 unit DT dan 12 unit EXC aktif sepanjang minggu
          operasi penuh 7–13 September.
        </p>
      </div>

      <SectionTitle sub="24 unit DT aktif — FR weighted 23,18 L/HM; outlier rendah (DT-004/007/008) dan first-refuel DT-066 ditandai">
        Armada Produksi — Analisis Fuel Ratio DT (L/HM & L/KM)
      </SectionTitle>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
          marginBottom: 14,
        }}>
        <div
          style={{
            background: C.card,
            borderRadius: 8,
            padding: 14,
            border: `1px solid ${C.border}`,
          }}>
          <p
            style={{
              fontSize: 11,
              color: C.muted,
              fontWeight: 700,
              margin: "0 0 4px",
              textTransform: "uppercase",
              letterSpacing: 0.4,
            }}>
            L/HM vs Total Fuel
          </p>
          <p style={{ fontSize: 10, color: C.muted, margin: "0 0 8px" }}>
            <span style={{ color: C.red }}>■</span> Di bawah 18 &nbsp;
            <span style={{ color: C.amber }}>■</span> Di atas 28 &nbsp;
            <span style={{ color: C.accent }}>■</span> Normal
          </p>
          <ResponsiveContainer width="100%" height={200}>
            <ScatterChart margin={{ top: 5, right: 10, bottom: 5, left: -10 }}>
              <XAxis
                type="number"
                dataKey="frHm"
                name="L/HM"
                domain={[8, 38]}
                tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }}
                label={{
                  value: "L/HM",
                  position: "insideBottomRight",
                  offset: -5,
                  fontSize: 10,
                }}
              />
              <YAxis
                type="number"
                dataKey="fuel"
                name="Fuel"
                tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }}
                tickFormatter={(v) => (v / 1000).toFixed(1) + "k"}
              />
              <ZAxis range={[40, 80]} />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;
                  const d = payload[0]?.payload;
                  return (
                    <div
                      style={{
                        background: C.navy,
                        borderRadius: 6,
                        padding: "8px 12px",
                      }}>
                      <p
                        style={{
                          color: "#fff",
                          fontSize: 11,
                          fontWeight: 700,
                          margin: 0,
                        }}>
                        {d?.unit} DT
                      </p>
                      <p
                        style={{
                          color: C.accentBright,
                          fontSize: 11,
                          margin: "2px 0 0",
                        }}>
                        {d?.frHm?.toFixed(2)} L/HM · {d?.frKm?.toFixed(2)} L/KM
                      </p>
                      <p
                        style={{
                          color: "#B8C9D9",
                          fontSize: 10,
                          margin: "2px 0 0",
                        }}>
                        {d?.fuel?.toLocaleString()} L · {d?.records} records
                      </p>
                    </div>
                  );
                }}
              />
              <ReferenceLine
                x={18}
                stroke={C.red}
                strokeDasharray="4 2"
                strokeWidth={1}
              />
              <ReferenceLine
                x={28}
                stroke={C.amber}
                strokeDasharray="4 2"
                strokeWidth={1}
              />
              <Scatter data={dtScatter} fill={C.accent}>
                {dtScatter.map((d, i) => (
                  <Cell key={i} fill={d.fill} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <div
          style={{
            background: C.card,
            borderRadius: 8,
            padding: 14,
            border: `1px solid ${C.border}`,
          }}>
          <p
            style={{
              fontSize: 11,
              color: C.muted,
              fontWeight: 700,
              margin: "0 0 8px",
              textTransform: "uppercase",
              letterSpacing: 0.4,
            }}>
            10 DT Teratas Berdasarkan Total Fuel (L)
          </p>
          <ResponsiveContainer width="100%" height={205}>
            <BarChart
              data={[...DT_FLEET].sort((a, b) => b.fuel - a.fuel).slice(0, 10)}
              layout="vertical"
              margin={{ left: 5, right: 40, top: 0, bottom: 0 }}>
              <XAxis
                type="number"
                tick={{ fontSize: 9, fontFamily: "Arial", fill: C.muted }}
                tickFormatter={(v) => (v / 1000).toFixed(1) + "k"}
              />
              <YAxis
                type="category"
                dataKey="unit"
                tick={{ fontSize: 9, fontFamily: "Arial", fill: C.inkAlt }}
                width={54}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;
                  const d = payload[0]?.payload;
                  return (
                    <div
                      style={{
                        background: C.navy,
                        borderRadius: 6,
                        padding: "6px 10px",
                      }}>
                      <p
                        style={{
                          color: "#fff",
                          fontSize: 11,
                          fontWeight: 700,
                          margin: 0,
                        }}>
                        {d?.unit} DT
                      </p>
                      <p
                        style={{
                          color: C.accentBright,
                          fontSize: 10,
                          margin: "2px 0 0",
                        }}>
                        {d?.fuel.toLocaleString()} L · {d?.frHm.toFixed(2)} L/HM
                      </p>
                    </div>
                  );
                }}
              />
              <Bar dataKey="fuel" barSize={13} radius={[0, 3, 3, 0]}>
                {[...DT_FLEET]
                  .sort((a, b) => b.fuel - a.fuel)
                  .slice(0, 10)
                  .map((d, i) => (
                    <Cell
                      key={i}
                      fill={
                        d.frHm < 18 ? C.red : d.frHm > 28 ? C.amber : C.accent
                      }
                    />
                  ))}
                <LabelList
                  dataKey="fuel"
                  position="right"
                  formatter={lblInt}
                  style={{ ...labelStyle, fontSize: 9 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <SectionTitle sub="12 unit EXC aktif — FR weighted 20,65 L/HM, rentang 14–30 L/HM">
        Fuel Ratio Excavator
      </SectionTitle>
      <div
        style={{
          background: C.card,
          borderRadius: 8,
          padding: 14,
          border: `1px solid ${C.border}`,
          marginBottom: 14,
        }}>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart
            data={excSorted}
            layout="vertical"
            margin={{ left: 5, right: 40, top: 0, bottom: 0 }}>
            <XAxis
              type="number"
              tick={{ fontSize: 9, fontFamily: "Arial", fill: C.muted }}
            />
            <YAxis
              type="category"
              dataKey="unit"
              tick={{ fontSize: 9, fontFamily: "Arial", fill: C.inkAlt }}
              width={54}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const d = payload[0]?.payload;
                return (
                  <div
                    style={{
                      background: C.navy,
                      borderRadius: 6,
                      padding: "6px 10px",
                    }}>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 11,
                        fontWeight: 700,
                        margin: 0,
                      }}>
                      {d?.unit} EXC
                    </p>
                    <p
                      style={{
                        color: C.accentBright,
                        fontSize: 10,
                        margin: "2px 0 0",
                      }}>
                      {d?.frHm.toFixed(2)} L/HM · {d?.fuel.toLocaleString()} L
                    </p>
                  </div>
                );
              }}
            />
            <Bar
              dataKey="frHm"
              name="L/HM"
              barSize={13}
              radius={[0, 3, 3, 0]}
              fill={C.gold}>
              <LabelList
                dataKey="frHm"
                position="right"
                formatter={lblDec1}
                style={{ ...labelStyle, fontSize: 9 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p style={{ fontSize: 10, color: C.muted, margin: "6px 0 0" }}>
          Rata-rata armada berbobot: {KPI.excFrHm.toFixed(2)} L/HM. Rasio EXC
          bervariasi antar unit; beberapa unit (EXC-027, EXC-029) di atas 28
          L/HM — pantau jika konsisten.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
          marginBottom: 14,
        }}>
        <div>
          <SectionTitle sub="Motor grader & water truck aktif kuat — MHR +23% vs baseline">
            Detail Peralatan MHR
          </SectionTitle>
          <div
            style={{
              background: C.card,
              borderRadius: 8,
              padding: 14,
              border: `1px solid ${C.border}`,
            }}>
            {MHR_DATA.map((m) => (
              <div
                key={m.unit}
                style={{
                  marginBottom: 10,
                  paddingBottom: 10,
                  borderBottom: `1px solid ${C.border}`,
                }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.ink }}>
                    {m.unit}
                  </span>
                  <span
                    style={{ fontSize: 14, fontWeight: 800, color: C.accent }}>
                    {m.qty.toLocaleString()} L
                  </span>
                </div>
                <p style={{ fontSize: 11, color: C.muted, margin: "2px 0 0" }}>
                  {m.fr} L/HM
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionTitle sub="LV dominan; PT. MPS hanya 84,7 L (bukan bulk transfer)">
            Detail Peralatan Pendukung
          </SectionTitle>
          <div
            style={{
              background: C.card,
              borderRadius: 8,
              padding: 14,
              border: `1px solid ${C.border}`,
            }}>
            {SUPPORT_DATA.map((s) => (
              <div
                key={s.unit}
                style={{
                  marginBottom: 10,
                  paddingBottom: 10,
                  borderBottom: `1px solid ${C.border}`,
                }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: s.note ? C.amber : C.ink,
                    }}>
                    {s.unit}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: s.note ? C.amber : C.accent,
                    }}>
                    {s.qty.toLocaleString()} L
                  </span>
                </div>
                {s.note && (
                  <p
                    style={{
                      fontSize: 10,
                      color: C.muted,
                      margin: "2px 0 0",
                      fontStyle: "italic",
                    }}>
                    {s.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 10,
          borderTop: `1px solid ${C.border}`,
          paddingTop: 8,
          display: "flex",
          justifyContent: "space-between",
        }}>
        <span style={{ fontSize: 10, color: C.muted, fontFamily: "Arial" }}>
          Sistem Pemantauan Bahan Bakar — Site BPSP | {COMPANY}
        </span>
        <span style={{ fontSize: 10, color: C.muted, fontFamily: "Arial" }}>
          Hassan Rahmatillah · LDP Batch X · TID 614
        </span>
      </div>
    </div>
  );
};

// ─────────────── HALAMAN 3: LOG HARIAN ───────────────
const DailyLog = () => {
  const [expanded, setExpanded] = useState(6);

  const d = DAILY_CARDS[expanded];
  const color =
    d.severity === "HIGH"
      ? C.red
      : d.severity === "MEDIUM"
        ? C.amber
        : d.severity === "GOOD"
          ? C.good
          : C.muted;

  return (
    <div style={{ fontFamily: "Arial" }}>
      <div
        style={{
          background: C.navy,
          borderRadius: 8,
          padding: "10px 16px",
          marginBottom: 14,
        }}>
        <p
          style={{
            color: C.accentBright,
            fontSize: 11,
            fontWeight: 700,
            margin: "0 0 2px",
            textTransform: "uppercase",
          }}>
          Daily Issue Deep Dive — Week 7–13 Sep 2026 · Site BPSP
        </p>
        <p style={{ color: "#fff", fontSize: 13, fontWeight: 500, margin: 0 }}>
          Operasi penuh stabil dengan Stock-In 22.000 L di hari pertama — ketuk
          hari untuk detail lengkap.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 6,
          marginBottom: 14,
          overflowX: "auto",
          paddingBottom: 4,
        }}>
        {DAILY_CARDS.map((c, i) => {
          const active = expanded === i;
          const cColor =
            c.severity === "HIGH"
              ? C.red
              : c.severity === "MEDIUM"
                ? C.amber
                : C.good;
          return (
            <button
              key={i}
              onClick={() => setExpanded(i)}
              style={{
                flex: "1",
                minWidth: 85,
                background: active ? C.navy : C.card,
                border: `1.5px solid ${active ? C.navy : C.border}`,
                borderRadius: 20,
                padding: "8px 6px",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.15s",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: active ? "#fff" : C.ink,
                }}>
                {c.date.split(" ")[0]} {c.date.split(" ")[1]}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: active ? C.accentBright : C.ink,
                }}>
                {c.total >= 1000
                  ? (c.total / 1000).toFixed(1) + "k"
                  : c.total.toFixed(0)}{" "}
                L
              </div>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: cColor,
                }}
              />
            </button>
          );
        })}
      </div>

      <div
        style={{
          background: C.card,
          border: `1.5px solid ${color}`,
          borderRadius: 10,
          padding: 16,
          marginBottom: 14,
        }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 10,
          }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Badge level={d.severity} />
              <span style={{ fontSize: 14, fontWeight: 800, color: C.ink }}>
                {d.title}
              </span>
            </div>
            <p style={{ fontSize: 11, color: C.muted, margin: "3px 0 0" }}>
              {d.date}
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: C.ink }}>
              {d.total.toLocaleString()} L
            </div>
          </div>
        </div>

        <p
          style={{
            fontSize: 12,
            color: C.inkAlt,
            lineHeight: 1.6,
            margin: "0 0 12px",
          }}>
          {d.narrative}
        </p>

        <div style={{ marginBottom: 10 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: C.ink,
              marginBottom: 5,
              textTransform: "uppercase",
              letterSpacing: 0.4,
            }}>
            Sorotan Utama
          </div>
          {d.highlights.map((h, i) => (
            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 4 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: C.accent,
                  minWidth: 170,
                }}>
                {h.label}:
              </span>
              <span style={{ fontSize: 11, color: C.inkAlt }}>{h.value}</span>
            </div>
          ))}
        </div>

        <div
          style={{ background: C.navy, borderRadius: 6, padding: "8px 12px" }}>
          <span
            style={{ fontSize: 11, fontWeight: 700, color: C.accentBright }}>
            → Tindakan yang Direkomendasikan:{" "}
          </span>
          <span style={{ fontSize: 11, color: "#fff" }}>{d.actions}</span>
        </div>
      </div>

      <SectionTitle sub="Pola 7 hari — komposisi kategori per hari">
        Ringkasan Narasi Minggu Ini
      </SectionTitle>
      <div
        style={{
          background: C.card,
          borderRadius: 8,
          padding: 14,
          border: `1px solid ${C.border}`,
        }}>
        <ResponsiveContainer width="100%" height={190}>
          <BarChart data={DAILY_NEW} margin={{ top: 20, left: 0, right: 10 }}>
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }}
            />
            <YAxis
              tick={{ fontSize: 9, fontFamily: "Arial", fill: C.muted }}
              tickFormatter={(v) => (v / 1000).toFixed(0) + "k"}
            />
            <Tooltip content={customTooltip} />
            <Legend
              wrapperStyle={{
                fontSize: 10,
                fontFamily: "Arial",
                color: C.inkAlt,
              }}
            />
            <Bar dataKey="prod" name="Produksi" stackId="a" fill={C.accent} />
            <Bar dataKey="mhr" name="MHR" stackId="a" fill={C.gold} />
            <Bar
              dataKey="supp"
              name="Pendukung"
              stackId="a"
              fill={C.muted}
              radius={[3, 3, 0, 0]}>
              <LabelList
                dataKey="total"
                position="top"
                formatter={lblInt}
                style={labelStyle}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          marginTop: 8,
          borderTop: `1px solid ${C.border}`,
          paddingTop: 8,
          display: "flex",
          justifyContent: "space-between",
        }}>
        <span style={{ fontSize: 10, color: C.muted, fontFamily: "Arial" }}>
          Sistem Pemantauan Bahan Bakar — Site BPSP | {COMPANY}
        </span>
        <span style={{ fontSize: 10, color: C.muted, fontFamily: "Arial" }}>
          Hassan Rahmatillah · LDP Batch X · TID 614
        </span>
      </div>
    </div>
  );
};

// ─────────────── HALAMAN 4: KUALITAS DATA ───────────────
const DataQuality = () => {
  return (
    <div style={{ fontFamily: "Arial" }}>
      <div
        style={{
          background: C.navy,
          borderRadius: 8,
          padding: "10px 16px",
          marginBottom: 14,
        }}>
        <p
          style={{
            color: C.accentBright,
            fontSize: 11,
            fontWeight: 700,
            margin: "0 0 2px",
            textTransform: "uppercase",
          }}>
          Kualitas Data & Konteks — Minggu 7–13 Sep 2026 · Site BPSP
        </p>
        <p style={{ color: "#fff", fontSize: 13, fontWeight: 500, margin: 0 }}>
          Stok sudah pulih setelah Stock-In besar 31 Agu–7 Sep. Fokus minggu
          ini: anomali first-refueling DT-066 dan unit FR outlier.
        </p>
      </div>

      <SectionTitle sub="Ledger direkonstruksi dari Stock-In + Stock-Out — stok aman setelah pengiriman 22.000 L pada 7 Sep">
        Posisi Stok — Pemulihan & Penurunan Bertahap
      </SectionTitle>
      <div
        style={{
          background: C.card,
          borderRadius: 8,
          padding: 14,
          border: `1px solid ${C.border}`,
          marginBottom: 14,
        }}>
        <ResponsiveContainer width="100%" height={210}>
          <ComposedChart
            data={STOCK_DATA}
            margin={{ top: 20, left: 0, right: 10 }}>
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fontFamily: "Arial", fill: C.muted }}
            />
            <YAxis
              tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }}
              tickFormatter={(v) => (v / 1000).toFixed(0) + "k"}
              domain={[0, 65000]}
            />
            <Tooltip content={customTooltip} />
            <ReferenceArea
              x1="8/9"
              x2="13/9"
              fill={C.amber}
              fillOpacity={0.06}
            />
            <Line
              dataKey="lastStock"
              name="Stok Terakhir (ledger)"
              stroke={C.red}
              strokeWidth={2.5}
              dot={{ r: 4, fill: C.red }}>
              <LabelList
                dataKey="lastStock"
                position="top"
                formatter={(v) => (v / 1000).toFixed(1) + "k"}
                style={{ ...labelStyle, fill: C.red }}
              />
            </Line>
          </ComposedChart>
        </ResponsiveContainer>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
            marginTop: 10,
          }}>
          <div
            style={{
              background: C.redLight,
              borderRadius: 6,
              padding: "8px 10px",
            }}>
            <div style={{ fontSize: 10, color: C.amber }}>
              Perubahan Stok Minggu Ini
            </div>
            <div style={{ fontSize: 16, fontWeight: 800, color: C.ink }}>
              −23.279 L
            </div>
            <div style={{ fontSize: 10, color: C.muted }}>
              45.258 L (6 Sep) → 21.979 L (13 Sep)
            </div>
          </div>
          <div
            style={{
              background: C.redLight,
              borderRadius: 6,
              padding: "8px 10px",
            }}>
            <div style={{ fontSize: 10, color: C.muted }}>Estimasi Runway</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: C.good }}>
              3-4 hari
            </div>
            <div style={{ fontSize: 10, color: C.muted }}>
              Pada tingkat konsumsi ~6.469 L/hari
            </div>
          </div>
          <div
            style={{
              background: C.mist,
              borderRadius: 6,
              padding: "8px 10px",
            }}>
            <div style={{ fontSize: 10, color: C.muted }}>
              Stock-In Minggu Ini
            </div>
            <div style={{ fontSize: 16, fontWeight: 800, color: C.ink }}>
              22.000 L
            </div>
            <div style={{ fontSize: 10, color: C.muted }}>
              7 Sep (PT. Central Oil) — nol sejak itu
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
          marginBottom: 14,
        }}>
        <div>
          <SectionTitle sub="Fuel Station 77%; ETO/EFO/Jetty melayani EXC & unit lapangan">
            Pengisian Bahan Bakar Berdasarkan Lokasi
          </SectionTitle>
          <div
            style={{
              background: C.card,
              borderRadius: 8,
              padding: 14,
              border: `1px solid ${C.border}`,
              display: "flex",
              alignItems: "center",
            }}>
            <ResponsiveContainer width="50%" height={160}>
              <PieChart>
                <Pie
                  data={LOCATION_DATA}
                  dataKey="qty"
                  nameKey="location"
                  cx="50%"
                  cy="50%"
                  innerRadius={38}
                  outerRadius={62}
                  paddingAngle={2}>
                  {LOCATION_DATA.map((d, i) => (
                    <Cell key={i} fill={LOCATION_COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (!active || !payload?.length) return null;
                    const d = payload[0]?.payload;
                    return (
                      <div
                        style={{
                          background: C.navy,
                          borderRadius: 6,
                          padding: "6px 10px",
                        }}>
                        <p
                          style={{
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: 700,
                            margin: 0,
                          }}>
                          {d?.location}
                        </p>
                        <p
                          style={{
                            color: C.accentBright,
                            fontSize: 10,
                            margin: "2px 0 0",
                          }}>
                          {d?.qty.toLocaleString()} L ({d?.pct}%)
                        </p>
                      </div>
                    );
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}>
              {LOCATION_DATA.map((l, i) => (
                <div
                  key={l.location}
                  style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: 2,
                      background: LOCATION_COLORS[i],
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 10,
                      color: C.ink,
                      fontWeight: 600,
                      flex: 1,
                    }}>
                    {l.location}
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 800, color: C.ink }}>
                    {l.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <SectionTitle sub="Produksi ~88% dari total; MHR dan Pendukung proporsional">
            Pangsa Kategori Minggu Ini
          </SectionTitle>
          <div
            style={{
              background: C.card,
              borderRadius: 8,
              padding: 14,
              border: `1px solid ${C.border}`,
            }}>
            {CATEGORY_SHARE.map((c) => (
              <div key={c.label} style={{ marginBottom: 10 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 12,
                    marginBottom: 4,
                  }}>
                  <span style={{ color: C.ink, fontWeight: 600 }}>
                    {c.label}
                  </span>
                  <span style={{ color: C.ink, fontWeight: 800 }}>
                    {c.qty.toLocaleString()} L
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 8,
                    background: C.border,
                    borderRadius: 4,
                  }}>
                  <div
                    style={{
                      width: `${(c.qty / KPI.totalWeek) * 100}%`,
                      height: "100%",
                      background: c.color,
                      borderRadius: 4,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SectionTitle sub="Anomali data dan konteks operasional yang memerlukan tindak lanjut">
        Log Anomali
      </SectionTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          marginBottom: 10,
        }}>
        {ANOMALIES.map((a) => {
          const sevColor =
            a.severity === "HIGH"
              ? C.red
              : a.severity === "MEDIUM"
                ? C.amber
                : C.good;
          return (
            <div
              key={a.id}
              style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderLeft: `4px solid ${sevColor}`,
                borderRadius: 6,
                padding: "9px 14px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: C.accent,
                  fontFamily: "Arial",
                  minWidth: 55,
                }}>
                {a.id}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: C.ink,
                  fontFamily: "Arial",
                  minWidth: 90,
                  fontWeight: 600,
                }}>
                {a.unit}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: C.muted,
                  fontFamily: "Arial",
                  minWidth: 85,
                }}>
                {a.date}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: C.inkAlt,
                  fontFamily: "Arial",
                  flex: 1,
                }}>
                {a.issue}
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Arial",
                  color: a.status === "RESOLVED" ? C.good : C.amber,
                  minWidth: 50,
                }}>
                {a.status}
              </span>
              <Badge level={a.severity} />
            </div>
          );
        })}
      </div>

      <div
        style={{
          background: C.amberLight,
          borderRadius: 7,
          padding: "10px 14px",
          border: `1px solid ${C.amber}`,
          display: "flex",
          gap: 10,
          alignItems: "flex-start",
        }}>
        <AlertCircle
          size={16}
          color={C.amber}
          style={{ flexShrink: 0, marginTop: 1 }}
        />
        <div>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: C.ink,
              margin: "0 0 4px",
            }}>
            Catatan Metodologi
          </p>
          <p
            style={{
              fontSize: 11,
              color: C.inkAlt,
              margin: 0,
              lineHeight: 1.6,
            }}>
            • DT-066 (7 Sep): Running HM = 1,0 jam & Running KM = 1 untuk 338 L
            — dikecualikan dari perhitungan fuel-ratio unit dan armada
            (first-refueling / baseline HM belum di-update).
            <br />
            • Baseline operasi = rata-rata harian 31 Agu–5 Sep (6 hari). Minggu
            ini = rata-rata 7–13 Sep (7 hari). WoW dihitung dari perbandingan
            kedua rata-rata tersebut.
            <br />
            • Running HM dihitung dari (Now HM − Last HM) bila keduanya valid;
            nilai yang terkorupsi format Excel di-decode sebelum dipakai.
            <br />• Estimasi runway (3–4 hari) = stok EOD 13 Sep (21.979 L) /
            konsumsi harian ~6.469 L. Stock-In terakhir 22.000 L pada 7 Sep.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: 12,
          borderTop: `1px solid ${C.border}`,
          paddingTop: 8,
          display: "flex",
          justifyContent: "space-between",
        }}>
        <span style={{ fontSize: 10, color: C.muted, fontFamily: "Arial" }}>
          Sistem Pemantauan Bahan Bakar — Site BPSP | {COMPANY}
        </span>
        <span style={{ fontSize: 10, color: C.muted, fontFamily: "Arial" }}>
          Hassan Rahmatillah · LDP Batch X · TID 614
        </span>
      </div>
    </div>
  );
};

// ─────────────── HALAMAN 5: ANALISIS TRANSISI RESTART ───────────────
const RestartTransition = () => {
  return (
    <div style={{ fontFamily: "Arial" }}>
      <div
        style={{
          background: C.navy,
          borderRadius: 8,
          padding: "12px 16px",
          marginBottom: 16,
        }}>
        <p
          style={{
            color: C.accentBright,
            fontSize: 11,
            fontWeight: 700,
            margin: "0 0 3px",
            textTransform: "uppercase",
            letterSpacing: 0.8,
          }}>
          Analisis Operasi Penuh — Minggu 7–13 Sep 2026 · Site BPSP
        </p>
        <p
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            margin: 0,
            lineHeight: 1.5,
          }}>
          Minggu pertama operasi penuh setelah restart. Armada hampir kapasitas
          penuh (24 DT + 12 EXC), konsumsi stabil (+2,2% vs baseline), dan stok
          sudah dipulihkan lewat Stock-In 31 Agu–7 Sep.{" "}
          <span style={{ color: C.accentBright }}>
            Fokus ke depan: jaga ritme Stock-In dan perketat prosedur
            first-refueling
          </span>{" "}
          agar data FR tetap andal saat unit diaktifkan kembali.
        </p>
      </div>

      <SectionTitle sub="Restart akhir Agustus → baseline minggu lalu → operasi penuh minggu ini">
        Tingkat Konsumsi di Seluruh Periode Terlacak
      </SectionTitle>
      <div
        style={{
          background: C.card,
          borderRadius: 8,
          padding: 14,
          border: `1px solid ${C.border}`,
          marginBottom: 16,
        }}>
        <ResponsiveContainer width="100%" height={210}>
          <LineChart
            data={CONSUMPTION_TREND}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <XAxis
              dataKey="period"
              tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }}
              interval={0}
            />
            <YAxis
              tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }}
            />
            <Tooltip content={customTooltip} />
            <ReferenceLine
              y={KPI.normalOpsBaseline}
              stroke={C.muted}
              strokeDasharray="3 2"
              label={{
                value: "Baseline operasi normal",
                position: "insideTopLeft",
                fontSize: 9,
                fill: C.muted,
              }}
            />
            <Line
              type="monotone"
              dataKey="rate"
              name="Avg L/hari"
              stroke={C.accent}
              strokeWidth={2.5}
              dot={{ r: 6, fill: C.accent }}>
              <LabelList
                dataKey="rate"
                position="top"
                formatter={lblInt}
                style={labelStyle}
              />
            </Line>
          </LineChart>
        </ResponsiveContainer>
        <p
          style={{
            fontSize: 11,
            color: C.good,
            margin: "8px 0 0",
            fontWeight: 600,
          }}>
          Konsumsi minggu ini (6.469 L/hari) mendarat sedikit di atas baseline
          31 Agu–5 Sep (6.330 L/hari) — operasi penuh stabil dan terkendali.
        </p>
      </div>

      <SectionTitle sub="Stok sudah pulih; pantau laju penurunan sejak Stock-In terakhir 7 Sep">
        Posisi Stok — Pemulihan Setelah Krisis Akhir Agustus
      </SectionTitle>
      <div
        style={{
          background: C.redLight,
          border: `1px solid ${C.red}`,
          borderRadius: 8,
          padding: 14,
          marginBottom: 16,
        }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 10,
          }}>
          <div>
            <div style={{ fontSize: 10, color: C.muted, fontWeight: 600 }}>
              EOD 6 Sep (awal minggu)
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: C.ink }}>
              {STOCK_TRANSITION.stockStartWeek.toLocaleString()} L
            </div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: C.muted, fontWeight: 600 }}>
              Stock-In 7 Sep
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: C.good }}>
              +{STOCK_TRANSITION.stockInThisWeek.toLocaleString()} L
            </div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: C.muted, fontWeight: 600 }}>
              EOD 13 Sep
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: C.ink }}>
              {STOCK_TRANSITION.stockEndWeek.toLocaleString()} L
            </div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: C.muted, fontWeight: 600 }}>
              Net minggu ini
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: C.amber }}>
              −23.279 L
            </div>
          </div>
        </div>
        <p
          style={{
            fontSize: 11,
            color: C.ink,
            margin: "10px 0 0",
            lineHeight: 1.5,
          }}>
          Stock-In 22.000 L pada 7 Sep menaikkan stok ke puncak ~59.500 L. Tanpa
          pengiriman lanjutan, stok turun ke ~22.000 L dalam 6 hari operasi.
          Belum kritis, tetapi ritme Stock-In perlu dijaga agar tidak mengulang
          krisis akhir Agustus.
        </p>
      </div>

      <SectionTitle sub="Rekomendasi untuk menjaga operasi penuh tetap stabil dan data FR andal">
        Insight Utama — Pelajaran Minggu Operasi Penuh
      </SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {RESTART_INSIGHTS.map((f, i) => (
          <div
            key={i}
            style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              borderLeft: `4px solid ${C.accent}`,
              borderRadius: 6,
              padding: "10px 14px",
              fontFamily: "Arial",
            }}>
            <span style={{ fontWeight: 700, fontSize: 13, color: C.ink }}>
              {f.title}
            </span>
            <p
              style={{
                fontSize: 12,
                color: C.inkAlt,
                margin: "5px 0 0",
                lineHeight: 1.5,
              }}>
              {f.body}
            </p>
            <p
              style={{
                fontSize: 11,
                color: C.accent,
                margin: "6px 0 0",
                fontWeight: 600,
              }}>
              → {f.action}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 14,
          borderTop: `1px solid ${C.border}`,
          paddingTop: 8,
          display: "flex",
          justifyContent: "space-between",
        }}>
        <span style={{ fontSize: 10, color: C.muted, fontFamily: "Arial" }}>
          Sistem Pemantauan Bahan Bakar — Site BPSP | {COMPANY}
        </span>
        <span style={{ fontSize: 10, color: C.muted, fontFamily: "Arial" }}>
          Hassan Rahmatillah · LDP Batch X · TID 614
        </span>
      </div>
    </div>
  );
};

// ─────────────── APLIKASI UTAMA ───────────────
export default function App() {
  const [activePage, setActivePage] = useState(0);
  const pages = [
    { label: "Ringkasan Eksekutif", icon: BarChart2 },
    { label: "Detail Operasional", icon: Truck },
    { label: "Log Harian", icon: Activity },
    { label: "Kualitas Data", icon: AlertCircle },
    { label: "Operasi Penuh", icon: Fuel },
  ];

  const PageComponent = [
    ExecSummary,
    OperationalDetail,
    DailyLog,
    DataQuality,
    RestartTransition,
  ][activePage];

  return (
    <div
      style={{
        background: C.bg,
        minHeight: "100vh",
        padding: 16,
        fontFamily: "Arial",
      }}>
      <div
        style={{
          background: C.navy,
          borderRadius: 10,
          padding: "12px 18px",
          marginBottom: 14,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <div>
          <div
            style={{
              fontSize: 11,
              color: C.accentBright,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}>
            {COMPANY}
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.2,
            }}>
            Sistem Pemantauan Bahan Bakar — Site BPSP
          </div>
          <div style={{ fontSize: 11, color: "#B8C9D9", marginTop: 1 }}>
            Periode: 7–13 September 2026 &nbsp;|&nbsp; Operasi penuh
            &nbsp;|&nbsp; 225 transaksi
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 11, color: C.accentBright, fontWeight: 700 }}>
            LAPORAN MINGGUAN
          </div>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>
            M7–13 SEP 2026
          </div>
          <div style={{ fontSize: 10, color: "#B8C9D9" }}>
            vs baseline 31 Agu–5 Sep
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 6,
          marginBottom: 14,
        }}>
        {pages.map((p, i) => {
          const Icon = p.icon;
          const active = activePage === i;
          return (
            <button
              key={i}
              onClick={() => setActivePage(i)}
              style={{
                background: active ? C.accent : C.card,
                color: active ? "#fff" : C.ink,
                border: `1.5px solid ${active ? C.accent : C.border}`,
                borderRadius: 7,
                padding: "9px 8px",
                cursor: "pointer",
                fontFamily: "Arial",
                fontWeight: 700,
                fontSize: 11,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                transition: "all 0.15s",
              }}>
              <Icon size={13} />
              {p.label}
            </button>
          );
        })}
      </div>

      <div style={{ background: C.bg }}>
        <PageComponent />
      </div>
    </div>
  );
}
