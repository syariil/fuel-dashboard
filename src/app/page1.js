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
  WEEK_BASE,
  WEEK_CURR,
  KPI,
  CONSUMPTION_TREND,
  CAT_COMPARE,
  DAILY_NEW,
  DAILY_BASE,
  DT_FLEET,
  EXC_FLEET,
  MHR_DATA,
  SUPPORT_DATA,
  LOCATION_DATA,
  LOCATION_COLORS,
  STOCK_DATA,
  ANALYSIS,
} from "./data-final.js";

// ─────────────── UTILITAS ───────────────
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
      {Number(pct).toFixed(1)}% WoW
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
        Kesimpulan Eksekutif — {WEEK_CURR} vs Base {WEEK_BASE} · Site BPSP
      </p>
      <p
        style={{
          color: "#fff",
          fontSize: 14,
          fontWeight: 600,
          margin: 0,
          lineHeight: 1.5,
        }}>
        {ANALYSIS.execSummary}
      </p>
    </div>

    <SectionTitle sub="Makro: tingkat operasi current week dibanding base week">
      Konsumsi & Perbandingan Minggu
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
          Total Current Week ({KPI.activeDaysCurr} hari aktif)
        </span>
        <span
          style={{
            fontSize: 34,
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.1,
            marginTop: 4,
          }}>
          {KPI.totalCurr.toLocaleString()}{" "}
          <span style={{ fontSize: 15, fontWeight: 600, color: "#B8C9D9" }}>
            L
          </span>
        </span>
        <span style={{ fontSize: 10, color: "#B8C9D9", marginTop: 8 }}>
          Base week: {KPI.totalBase.toLocaleString()} L ({KPI.activeDaysBase}{" "}
          hari, termasuk bulk {KPI.bulkBase.toLocaleString()} L)
        </span>
      </div>
      <div
        style={{ flex: "1", display: "flex", flexDirection: "column", gap: 8 }}>
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
              Fleet Rate Current
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.ink }}>
              {KPI.fleetRateCurr.toLocaleString()}{" "}
              <span style={{ fontSize: 11, fontWeight: 600, color: C.muted }}>
                L/hari
              </span>
            </div>
          </div>
          <WowChip pct={KPI.wowVsBase} />
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
              DT Fuel Ratio (L/HM)
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.ink }}>
              {KPI.dtFrHmCurr}{" "}
              <span style={{ fontSize: 11, fontWeight: 600, color: C.muted }}>
                (base {KPI.dtFrHmBase})
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            background: C.card,
            border: `1px solid ${C.border}`,
            borderLeft: `4px solid ${C.amber}`,
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
              EXC Fuel Ratio (L/HM)
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.ink }}>
              {KPI.excFrHmCurr}{" "}
              <span style={{ fontSize: 11, fontWeight: 600, color: C.muted }}>
                (base {KPI.excFrHmBase})
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            background: KPI.currentStock > 0 ? C.card : C.redLight,
            border: `1px solid ${KPI.currentStock > 0 ? C.border : C.red}`,
            borderLeft: `4px solid ${KPI.currentStock > 20000 ? C.good : C.amber}`,
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
              Stok Saat Ini (7 Sep)
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.ink }}>
              {KPI.currentStock.toLocaleString()}{" "}
              <span style={{ fontSize: 11, fontWeight: 600, color: C.muted }}>
                L
              </span>
            </div>
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.good }}>
            ~{KPI.runwayDaysLow}–{KPI.runwayDaysHigh} hari
          </span>
        </div>
      </div>
    </div>

    <SectionTitle sub={ANALYSIS.consumptionTrend}>
      Tren Konsumsi: Standby → Base → Current
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
            barSize={60}>
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
    </div>

    <SectionTitle sub={ANALYSIS.catCompare}>
      Perbandingan Kategori (Avg L/hari)
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
            name={`Base (${WEEK_BASE})`}
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
            name={`Current (${WEEK_CURR})`}
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
    </div>

    {STOCK_DATA.length > 0 && (
      <>
        <SectionTitle sub="Posisi stok harian selama (31 Agustus – 06 September) — terlihat kenaikan tajam">
          Tren Stok Current Week
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
            <ComposedChart
              data={STOCK_DATA}
              margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <XAxis
                dataKey="date"
                tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }}
              />
              <YAxis
                tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }}
                tickFormatter={(v) => (v / 1000).toFixed(0) + "k"}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (!active || !payload?.length) return null;
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
                        {label}
                      </p>
                      <p
                        style={{
                          color: C.accentBright,
                          fontSize: 11,
                          margin: "2px 0 0",
                        }}>
                        Stok: {Number(payload[0].value).toLocaleString()} L
                      </p>
                    </div>
                  );
                }}
              />
              <Line
                type="monotone"
                dataKey="lastStock"
                name="Last Stock"
                stroke={C.accent}
                strokeWidth={2.5}
                dot={{ r: 4, fill: C.accent }}
              />
              <ReferenceLine
                y={KPI.fleetRateCurr * 5}
                stroke={C.amber}
                strokeDasharray="4 2"
                label={{
                  value: "ROP ~5 hari",
                  position: "insideTopRight",
                  fontSize: 9,
                  fill: C.amber,
                }}
              />
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
                background: C.card,
                border: `1px solid ${C.good}`,
                borderRadius: 6,
                padding: "8px 10px",
              }}>
              <div style={{ fontSize: 10, color: C.good }}>
                Stok Kini (7 Sep)
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.good }}>
                {KPI.currentStock.toLocaleString()} L
              </div>
              <div style={{ fontSize: 10, color: C.muted }}>
                Runway {KPI.runwayDaysLow}–{KPI.runwayDaysHigh} hari
              </div>
            </div>
          </div>
        </div>
      </>
    )}

    <SectionTitle sub="Temuan utama berdasarkan analisis data">
      Temuan Utama & Tindakan
    </SectionTitle>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
      {ANALYSIS.findings.map((f, i) => (
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
        Auto-generated · {WEEK_CURR}
      </span>
    </div>
  </div>
);

// ─────────────── HALAMAN 2: DETAIL OPERASIONAL ───────────────
const OperationalDetail = () => {
  const dtScatter = DT_FLEET.map((d) => ({
    ...d,
    fill: d.frHm > 26 ? C.amber : d.frHm < 18 ? C.red : C.accent,
  }));

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
          Detail Operasional — {WEEK_CURR} · Site BPSP
        </p>
        <p style={{ color: "#fff", fontSize: 13, fontWeight: 500, margin: 0 }}>
          {KPI.dtUnitsCurr} unit DT dan {KPI.excUnitsCurr} unit EXC aktif (vs
          base: {KPI.dtUnitsBase} DT / {KPI.excUnitsBase} EXC). Total unit
          aktif: {KPI.unitsCurr}.
        </p>
      </div>

      <SectionTitle sub={ANALYSIS.dtFleet}>
        Armada Dump Truck — Fuel Ratio & Konsumsi
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
            }}>
            L/HM vs Total Fuel
          </p>
          <p style={{ fontSize: 10, color: C.muted, margin: "0 0 8px" }}>
            <span style={{ color: C.red }}>■</span> &lt;18 &nbsp;
            <span style={{ color: C.amber }}>■</span> &gt;26 &nbsp;
            <span style={{ color: C.accent }}>■</span> Normal
          </p>
          <ResponsiveContainer width="100%" height={220}>
            <ScatterChart margin={{ top: 5, right: 10, bottom: 5, left: -10 }}>
              <XAxis
                type="number"
                dataKey="frHm"
                name="L/HM"
                domain={[10, 30]}
                tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }}
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
                        {d?.unit}
                      </p>
                      <p
                        style={{
                          color: C.accentBright,
                          fontSize: 11,
                          margin: "2px 0 0",
                        }}>
                        {d?.frHm?.toFixed(2)} L/HM · {d?.frKm?.toFixed(3)} L/KM
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
                x={26}
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
            }}>
            12 DT Teratas (Total Fuel)
          </p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={[...DT_FLEET].slice(0, 12)}
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
                width={60}
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
                        {d?.unit}
                      </p>
                      <p
                        style={{
                          color: C.accentBright,
                          fontSize: 11,
                          margin: "2px 0 0",
                        }}>
                        {d?.fuel?.toLocaleString()} L · {d?.frHm} L/HM
                      </p>
                    </div>
                  );
                }}
              />
              <Bar
                dataKey="fuel"
                fill={C.accent}
                radius={[0, 3, 3, 0]}
                barSize={12}>
                <LabelList
                  dataKey="fuel"
                  position="right"
                  formatter={lblInt}
                  style={{ fontSize: 9, fill: C.navy, fontWeight: 700 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <SectionTitle sub={ANALYSIS.excFleet}>
        Armada Excavator — Fuel Ratio & Konsumsi
      </SectionTitle>
      <div
        style={{
          background: C.card,
          borderRadius: 8,
          padding: 14,
          border: `1px solid ${C.border}`,
          marginBottom: 14,
        }}>
        <ResponsiveContainer
          width="100%"
          height={Math.max(180, EXC_FLEET.length * 22)}>
          <BarChart
            data={[...EXC_FLEET].slice(0, 15)}
            layout="vertical"
            margin={{ left: 5, right: 50, top: 0, bottom: 0 }}>
            <XAxis
              type="number"
              tick={{ fontSize: 9, fontFamily: "Arial", fill: C.muted }}
              tickFormatter={(v) => (v / 1000).toFixed(1) + "k"}
            />
            <YAxis
              type="category"
              dataKey="unit"
              tick={{ fontSize: 9, fontFamily: "Arial", fill: C.inkAlt }}
              width={70}
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
                      {d?.unit}
                    </p>
                    <p
                      style={{
                        color: C.accentBright,
                        fontSize: 11,
                        margin: "2px 0 0",
                      }}>
                      {d?.fuel?.toLocaleString()} L · {d?.frHm} L/HM
                    </p>
                  </div>
                );
              }}
            />
            <Bar
              dataKey="fuel"
              fill={C.gold}
              radius={[0, 3, 3, 0]}
              barSize={12}>
              <LabelList
                dataKey="fuel"
                position="right"
                formatter={lblInt}
                style={{ fontSize: 9, fill: C.navy, fontWeight: 700 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <SectionTitle sub={ANALYSIS.mhr}>MHR — Qty & Fuel Ratio</SectionTitle>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10,
          marginBottom: 14,
        }}>
        {MHR_DATA.map((m) => (
          <div
            key={m.unit}
            style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              padding: "14px 16px",
            }}>
            <div
              style={{
                fontSize: 11,
                color: C.muted,
                fontWeight: 700,
                textTransform: "uppercase",
              }}>
              {m.unit}
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: C.ink,
                marginTop: 4,
              }}>
              {m.qty.toLocaleString()}{" "}
              <span style={{ fontSize: 12, color: C.muted }}>L</span>
            </div>
            <div style={{ fontSize: 13, color: C.accent, fontWeight: 700 }}>
              {m.fr} L/HM
            </div>
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
          {WEEK_CURR}
        </span>
      </div>
    </div>
  );
};

// ─────────────── HALAMAN 3: LOG HARIAN ───────────────
const DailyLog = () => (
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
        Log Harian — {WEEK_CURR}
      </p>
      <p style={{ color: "#fff", fontSize: 13, fontWeight: 500, margin: 0 }}>
        Breakdown konsumsi harian Production / MHR / Support
      </p>
    </div>

    <SectionTitle sub="Current week — stacked by category">
      Konsumsi Harian Current Week
    </SectionTitle>
    <div
      style={{
        background: C.card,
        borderRadius: 8,
        padding: 14,
        border: `1px solid ${C.border}`,
        marginBottom: 16,
      }}>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart
          data={DAILY_NEW}
          margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
          <XAxis
            dataKey="date"
            tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }}
          />
          <YAxis tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }} />
          <Tooltip content={customTooltip} />
          <Legend wrapperStyle={{ fontSize: 10, fontFamily: "Arial" }} />
          <Bar dataKey="prod" name="Produksi" stackId="a" fill={C.accent} />
          <Bar dataKey="mhr" name="MHR" stackId="a" fill={C.gold} />
          <Bar
            dataKey="supp"
            name="Pendukung"
            stackId="a"
            fill={C.muted}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <SectionTitle sub="Base week untuk pembanding">
      Konsumsi Harian Base Week
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
          data={DAILY_BASE}
          margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
          <XAxis
            dataKey="date"
            tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }}
          />
          <YAxis tick={{ fontSize: 10, fontFamily: "Arial", fill: C.muted }} />
          <Tooltip content={customTooltip} />
          <Legend wrapperStyle={{ fontSize: 10, fontFamily: "Arial" }} />
          <Bar dataKey="prod" name="Produksi" stackId="a" fill={C.accent} />
          <Bar dataKey="mhr" name="MHR" stackId="a" fill={C.gold} />
          <Bar
            dataKey="supp"
            name="Pendukung"
            stackId="a"
            fill={C.muted}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <SectionTitle sub={ANALYSIS.location}>
      Lokasi Pengisian (Current Week)
    </SectionTitle>
    <div
      style={{
        background: C.card,
        borderRadius: 8,
        padding: 14,
        border: `1px solid ${C.border}`,
        display: "flex",
        alignItems: "center",
        marginBottom: 14,
      }}>
      <ResponsiveContainer width="45%" height={180}>
        <PieChart>
          <Pie
            data={LOCATION_DATA}
            dataKey="qty"
            nameKey="location"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={70}
            paddingAngle={2}>
            {LOCATION_DATA.map((d, i) => (
              <Cell
                key={i}
                fill={LOCATION_COLORS[i % LOCATION_COLORS.length]}
              />
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
                    {d?.qty?.toLocaleString()} L ({d?.pct}%)
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
          gap: 8,
        }}>
        {LOCATION_DATA.map((l, i) => (
          <div
            key={l.location}
            style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                background: LOCATION_COLORS[i % LOCATION_COLORS.length],
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 12,
                color: C.ink,
                fontWeight: 600,
                flex: 1,
              }}>
              {l.location}
            </span>
            <span style={{ fontSize: 12, fontWeight: 800, color: C.ink }}>
              {l.qty.toLocaleString()} L
            </span>
            <span style={{ fontSize: 11, color: C.muted, minWidth: 36 }}>
              {l.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>

    {SUPPORT_DATA.length > 0 && (
      <>
        <SectionTitle sub="Support & transfer (jika ada)">
          Support Data
        </SectionTitle>
        <div
          style={{
            background: C.card,
            borderRadius: 8,
            padding: 14,
            border: `1px solid ${C.border}`,
            marginBottom: 14,
          }}>
          {SUPPORT_DATA.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "6px 0",
                borderBottom:
                  i < SUPPORT_DATA.length - 1
                    ? `1px solid ${C.border}`
                    : "none",
              }}>
              <span style={{ fontSize: 12, color: C.ink, fontWeight: 600 }}>
                {s.unit}
                {s.note && (
                  <span
                    style={{
                      display: "block",
                      fontSize: 10,
                      color: C.muted,
                      fontWeight: 400,
                    }}>
                    {s.note}
                  </span>
                )}
              </span>
              <span style={{ fontSize: 13, fontWeight: 800, color: C.ink }}>
                {s.qty.toLocaleString()} L
              </span>
            </div>
          ))}
        </div>
      </>
    )}

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
        {WEEK_CURR}
      </span>
    </div>
  </div>
);

// ─────────────── HALAMAN 4: KUALITAS DATA ───────────────
const DataQuality = () => (
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
        Kualitas Data & Metodologi
      </p>
      <p style={{ color: "#fff", fontSize: 13, fontWeight: 500, margin: 0 }}>
        {ANALYSIS.dataQuality}
      </p>
    </div>

    <SectionTitle sub="Ringkasan filter & aturan yang diterapkan">
      Metodologi Perhitungan
    </SectionTitle>
    <div
      style={{
        background: C.amberLight,
        borderRadius: 8,
        padding: "12px 16px",
        border: `1px solid ${C.amber}`,
        marginBottom: 16,
      }}>
      <pre
        style={{
          fontSize: 12,
          color: C.ink,
          margin: 0,
          whiteSpace: "pre-wrap",
          fontFamily: "Arial",
          lineHeight: 1.7,
        }}>
        {ANALYSIS.methodology}
      </pre>
    </div>

    <SectionTitle sub="KPI ringkas kedua periode">Snapshot KPI</SectionTitle>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10,
        marginBottom: 16,
      }}>
      <div
        style={{
          background: C.card,
          border: `1px solid ${C.border}`,
          borderRadius: 8,
          padding: 14,
        }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: C.muted,
            textTransform: "uppercase",
            marginBottom: 8,
          }}>
          Base Week ({WEEK_BASE})
        </div>
        {[
          ["Total (incl bulk)", `${KPI.totalBase.toLocaleString()} L`],
          ["Fleet rate", `${KPI.fleetRateBase.toLocaleString()} L/hari`],
          ["Active days", KPI.activeDaysBase],
          [
            "Units",
            `${KPI.unitsBase} (DT ${KPI.dtUnitsBase} / EXC ${KPI.excUnitsBase})`,
          ],
          ["DT FR L/HM", KPI.dtFrHmBase],
          ["EXC FR L/HM", KPI.excFrHmBase],
          ["Bulk", `${KPI.bulkBase.toLocaleString()} L`],
        ].map(([k, v]) => (
          <div
            key={k}
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 12,
              padding: "3px 0",
              borderBottom: `1px solid ${C.border}`,
            }}>
            <span style={{ color: C.inkAlt }}>{k}</span>
            <span style={{ fontWeight: 700, color: C.ink }}>{v}</span>
          </div>
        ))}
      </div>
      <div
        style={{
          background: C.card,
          border: `1px solid ${C.border}`,
          borderRadius: 8,
          padding: 14,
        }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: C.muted,
            textTransform: "uppercase",
            marginBottom: 8,
          }}>
          Current Week ({WEEK_CURR})
        </div>
        {[
          ["Total", `${KPI.totalCurr.toLocaleString()} L`],
          ["Fleet rate", `${KPI.fleetRateCurr.toLocaleString()} L/hari`],
          ["Active days", KPI.activeDaysCurr],
          [
            "Units",
            `${KPI.unitsCurr} (DT ${KPI.dtUnitsCurr} / EXC ${KPI.excUnitsCurr})`,
          ],
          ["DT FR L/HM", KPI.dtFrHmCurr],
          ["EXC FR L/HM", KPI.excFrHmCurr],
          ["Bulk", `${KPI.bulkCurr.toLocaleString()} L`],
        ].map(([k, v]) => (
          <div
            key={k}
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 12,
              padding: "3px 0",
              borderBottom: `1px solid ${C.border}`,
            }}>
            <span style={{ color: C.inkAlt }}>{k}</span>
            <span style={{ fontWeight: 700, color: C.ink }}>{v}</span>
          </div>
        ))}
      </div>
    </div>

    {STOCK_DATA.length === 0 ? (
      <div
        style={{
          background: C.redLight,
          border: `1px solid ${C.red}`,
          borderRadius: 8,
          padding: "12px 16px",
          marginBottom: 14,
          display: "flex",
          gap: 10,
          alignItems: "flex-start",
        }}>
        <AlertCircle
          size={16}
          color={C.red}
          style={{ flexShrink: 0, marginTop: 2 }}
        />
        <div>
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: C.red,
              margin: "0 0 4px",
            }}>
            STOCK_DATA kosong
          </p>
          <p style={{ fontSize: 12, color: C.ink, margin: 0, lineHeight: 1.5 }}>
            Tidak ditemukan kolom stok di file sumber. Runway tidak tersedia.
          </p>
        </div>
      </div>
    ) : (
      <div
        style={{
          background: C.card,
          border: `1px solid ${C.border}`,
          borderRadius: 8,
          padding: 14,
          marginBottom: 14,
        }}>
        <SectionTitle sub="Posisi stok & estimasi runway berdasarkan fleet rate current">
          Status Stok
        </SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
          }}>
          <div
            style={{
              background: C.mist,
              borderRadius: 6,
              padding: "10px 12px",
            }}>
            <div style={{ fontSize: 10, color: C.muted, fontWeight: 600 }}>
              STOK SAAT INI
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.ink }}>
              {KPI.currentStock.toLocaleString()} L
            </div>
            <div style={{ fontSize: 10, color: C.muted }}>
              per 7 September 2026
            </div>
          </div>
          <div
            style={{
              background: C.mist,
              borderRadius: 6,
              padding: "10px 12px",
            }}>
            <div style={{ fontSize: 10, color: C.muted, fontWeight: 600 }}>
              RUNWAY
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.good }}>
              {KPI.runwayDaysLow}–{KPI.runwayDaysHigh} hari
            </div>
            <div style={{ fontSize: 10, color: C.muted }}>
              @ {KPI.fleetRateCurr.toLocaleString()} L/hari
            </div>
          </div>
          <div
            style={{
              background: C.mist,
              borderRadius: 6,
              padding: "10px 12px",
            }}>
            <div style={{ fontSize: 10, color: C.muted, fontWeight: 600 }}>
              TITIK STOK TERCATAT
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.ink }}>
              {STOCK_DATA.length}
            </div>
            <div style={{ fontSize: 10, color: C.muted }}>
              {STOCK_DATA[0]?.date} → {STOCK_DATA[STOCK_DATA.length - 1]?.date}
            </div>
          </div>
        </div>
      </div>
    )}

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
        {WEEK_CURR}
      </span>
    </div>
  </div>
);

// ─────────────── APLIKASI UTAMA ───────────────
export default function App() {
  const [activePage, setActivePage] = useState(0);
  const pages = [
    { label: "Ringkasan Eksekutif", icon: BarChart2 },
    { label: "Detail Operasional", icon: Truck },
    { label: "Log Harian", icon: Activity },
    { label: "Kualitas Data", icon: AlertCircle },
  ];

  const PageComponent = [ExecSummary, OperationalDetail, DailyLog, DataQuality][
    activePage
  ];

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
            Current: {WEEK_CURR} &nbsp;|&nbsp; Base: {WEEK_BASE} &nbsp;|&nbsp;
            Fleet rate {KPI.fleetRateCurr.toLocaleString()} L/hari (
            {KPI.wowVsBase > 0 ? "+" : ""}
            {KPI.wowVsBase}% vs base)
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 11, color: C.accentBright, fontWeight: 700 }}>
            LAPORAN MINGGUAN
          </div>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>
            {WEEK_CURR}
          </div>
          <div style={{ fontSize: 10, color: "#B8C9D9" }}>
            vs base {WEEK_BASE}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${pages.length}, 1fr)`,
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
