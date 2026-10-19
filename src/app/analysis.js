// AUTO-GENERATED — Analisis Fuel Site BPSP
// Source: fuel.xlsx stock-out + stock-in (verified 2026-10-19)
// Base week (prev): 2026-10-05 → 2026-10-11 (5–11 Okt)
// Curr week (new):  2026-10-12 → 2026-10-18 (12–18 Okt)
//
// DEFINISI METRIK (konsisten di seluruh file):
//   GROSS  = semua transaksi stock-out (termasuk MPS)
//   FLEET  = konsumsi unit operasional (exclude MPS, BPSP, ALKON WT — HUB masuk Support)

export const C = {
  "bg": "#FFFFFF",
  "card": "#FFFFFF",
  "mist": "#F3F7FB",
  "border": "#E2E8F0",
  "navy": "#0D2C44",
  "navyAlt": "#14415F",
  "ink": "#16202A",
  "inkAlt": "#4B5A6B",
  "muted": "#7C8B9B",
  "accent": "#0284C7",
  "accentBright": "#38BDF8",
  "accentSoft": "#E0F2FE",
  "red": "#DC2626",
  "redLight": "#FEE2E2",
  "amber": "#D97706",
  "amberLight": "#FEF3C7",
  "good": "#059669",
  "gold": "#EA580C",
  "violet": "#7C3AED",
  "violetLight": "#EDE9FE"
};

export const COMPANY = "PT Tempopress Mining Indonesia";
export const WEEK_NEW = "12–18 Okt";
export const WEEK_PREV = "5–11 Okt";
export const PERIOD_START = "2026-10-12";
export const PERIOD_END = "2026-10-18";
export const PERIOD_PREV_START = "2026-10-05";
export const PERIOD_PREV_END = "2026-10-11";
export const PERIOD_CURR_START = "2026-10-12";
export const PERIOD_CURR_END = "2026-10-18";

export const FR_THRESHOLD = {
  "DT_NORMAL_MIN": 18,
  "DT_NORMAL_MAX": 24,
  "DT_EFFICIENT": 18,
  "DT_BOROS": 24,
  "EXC_360_NORMAL_MIN": 28,
  "EXC_360_NORMAL_MAX": 32,
  "EXC_215_NORMAL_MIN": 18,
  "EXC_215_NORMAL_MAX": 22
};
export const OPERATIONAL_MODE = [
  {
    "isoDate": "2026-10-05",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-06",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-07",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-08",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-09",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-10",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-11",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-12",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-13",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-14",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-15",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-16",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-17",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-18",
    "mode": "FULL",
    "note": ""
  }
];
export const BPSP_LOAN = {
  "note": "BPSP loan cycle CLOSED (Sep). Tidak ada loan baru di periode ini.",
  "borrowDate": "2026-09-16",
  "borrowQty": 9000,
  "repayments": [
    {
      "date": "2026-09-20",
      "qty": 2000
    },
    {
      "date": "2026-09-21",
      "qty": 2000
    },
    {
      "date": "2026-09-23",
      "qty": 2000
    },
    {
      "date": "2026-09-24",
      "qty": 3000
    }
  ],
  "totalRepay": 9000,
  "repayInBaseWeek": 0,
  "repayInCurrWeek": 0,
  "netBalance": 0
};
export const EXCLUDE_FROM_FLEET = [
  "BPSP",
  "MPS",
  "PT. MPS",
  "ALKON WT"
];

export const KPI = {
  "totalWeekGross": 84433.14,
  "totalPrevWeekGross": 84406.42,
  "wowGross": 0.03,
  "totalWeekFleet": 84347.6,
  "totalPrevWeekFleet": 82773.83,
  "wowFleet": 1.9,
  "totalWeekNet": 84347.6,
  "totalPrevWeekNet": 82773.83,
  "wowNet": 1.9,
  "fleetRateGross": 12061.9,
  "fleetRatePrevGross": 12058.1,
  "fleetRateFleet": 12049.7,
  "fleetRatePrevFleet": 11824.8,
  "dtFrHm": 19.11,
  "dtFrKm": 1.072,
  "excFrHm": 19.74,
  "currentStock": 63623.54,
  "runwayDaysLow": 4.2,
  "runwayDaysHigh": 5.3,
  "fullOpsAvg": 12049.7,
  "activeDaysCurr": 7,
  "activeDaysPrev": 7,
  "activeUnitsCurr": 66,
  "activeUnitsPrev": 64,
  "recordsCurr": 433,
  "recordsPrev": 425,
  "estCostIdr": 0,
  "bpspNote": "BPSP loan CLOSED. Gross = as-recorded. Fleet = exclude interco (PT. MPS). HUB masuk Support."
};
export const EXECUTIVE = {
  "headline": "Konsumsi fleet operasional stabil di 84.348 L (+1,9% WoW vs 82.774 L base week), dengan rata-rata harian 12.050 L/hari pada seluruh 7 hari beroperasi FULL-ops (termasuk HUB 132 L pada kategori Support). Efisiensi armada Dump Truck membaik dengan Fuel Ratio turun menjadi 19,11 L/HM (dari 20,39 L/HM pada base week), sementara Excavator tercatat 19,74 L/HM. Krisis stok berhasil diatasi: setelah sempat anjlok ke 37.288 L pada 14 Okt akibat gap pengiriman awal pekan, masuknya pasokan 75.000 L dari PT. Central Oil Indonesia Nicon pada 15–18 Okt memulihkan stok akhir ke 63.624 L dengan runway aman 5,3 hari.",
  "headlineGross": "Gross ledger transaksi tercatat 84.433 L (+0,03% WoW vs 84.406 L base week). Volume inter-company menyusut tajam menjadi 86 L (hanya PT. MPS, karena HUB masuk ke Support) seiring tuntasnya mobilisasi armada PT. MPS. Aktivitas produksi mendominasi 92,1% total konsumsi fleet (DT 58.115 L dan EXC 19.608 L), didukung penambahan armada baru (DT-017, DT-077, DT-078) yang mulai beroperasi.",
  "riskLevel": "MEDIUM",
  "keyPoints": [
    "✅ Fleet stabil +1,9% WoW (84.348 L vs 82.774 L) dengan efisiensi DT membaik ke 19,11 L/HM (turun dari 20,39 L/HM)",
    "⛽ Suplai 75.000 L tiba tepat waktu (15–18 Okt) setelah stok sempat anjlok ke level kritis 37.288 L pada 14 Okt",
    "🚛 3 unit Dump Truck baru masuk operasi (DT-017, DT-077, DT-078) dengan total konsumsi first-refuel 570 L",
    "📉 Interco transfer murni hanya PT. MPS 85,5 L (mobilisasi tuntas), sedangkan HUB 132 L masuk ke Support"
  ],
  "dtEfficiency": {
    "avg": 19.11,
    "best": {
      "unit": "DT-011",
      "frHm": 9.53
    },
    "worst": {
      "unit": "DT-019",
      "frHm": 32.99
    }
  },
  "costEstimate": {
    "idr": 0,
    "idrText": "—",
    "pricePerL": 0
  }
};
export const DAILY = [
  {
    "date": "5/10",
    "isoDate": "2026-10-05",
    "day": "Sen",
    "dayIdx": 0,
    "week": "prev",
    "prod": 12471.5,
    "mhr": 879.3,
    "supp": 10.0,
    "interco": 55.5,
    "total": 13416.3,
    "fleet": 13360.8,
    "records": 62,
    "units": 44,
    "mode": "FULL"
  },
  {
    "date": "6/10",
    "isoDate": "2026-10-06",
    "day": "Sel",
    "dayIdx": 1,
    "week": "prev",
    "prod": 11975.1,
    "mhr": 507.4,
    "supp": 270.0,
    "interco": 1458.0,
    "total": 14210.5,
    "fleet": 12752.5,
    "records": 77,
    "units": 45,
    "mode": "FULL"
  },
  {
    "date": "7/10",
    "isoDate": "2026-10-07",
    "day": "Rab",
    "dayIdx": 2,
    "week": "prev",
    "prod": 10700.0,
    "mhr": 1264.3,
    "supp": 84.1,
    "interco": 0.0,
    "total": 12048.3,
    "fleet": 12048.4,
    "records": 59,
    "units": 42,
    "mode": "FULL"
  },
  {
    "date": "8/10",
    "isoDate": "2026-10-08",
    "day": "Kam",
    "dayIdx": 3,
    "week": "prev",
    "prod": 10726.4,
    "mhr": 840.9,
    "supp": 94.9,
    "interco": 52.5,
    "total": 11714.7,
    "fleet": 11662.2,
    "records": 61,
    "units": 42,
    "mode": "FULL"
  },
  {
    "date": "9/10",
    "isoDate": "2026-10-09",
    "day": "Jum",
    "dayIdx": 4,
    "week": "prev",
    "prod": 9850.0,
    "mhr": 537.5,
    "supp": 182.6,
    "interco": 0.0,
    "total": 10570.1,
    "fleet": 10570.1,
    "records": 51,
    "units": 40,
    "mode": "FULL"
  },
  {
    "date": "10/10",
    "isoDate": "2026-10-10",
    "day": "Sab",
    "dayIdx": 5,
    "week": "prev",
    "prod": 8866.6,
    "mhr": 851.3,
    "supp": 156.3,
    "interco": 66.6,
    "total": 9940.9,
    "fleet": 9874.2,
    "records": 52,
    "units": 41,
    "mode": "FULL"
  },
  {
    "date": "11/10",
    "isoDate": "2026-10-11",
    "day": "Min",
    "dayIdx": 6,
    "week": "prev",
    "prod": 11124.5,
    "mhr": 993.9,
    "supp": 387.3,
    "interco": 0.0,
    "total": 12505.7,
    "fleet": 12505.7,
    "records": 63,
    "units": 43,
    "mode": "FULL"
  },
  {
    "date": "12/10",
    "isoDate": "2026-10-12",
    "day": "Sen",
    "dayIdx": 0,
    "week": "curr",
    "prod": 10291.1,
    "mhr": 816.5,
    "supp": 56.9,
    "interco": 0.0,
    "total": 11164.5,
    "fleet": 11164.5,
    "records": 57,
    "units": 34,
    "mode": "FULL"
  },
  {
    "date": "13/10",
    "isoDate": "2026-10-13",
    "day": "Sel",
    "dayIdx": 1,
    "week": "curr",
    "prod": 10855.9,
    "mhr": 695.5,
    "supp": 148.8,
    "interco": 0.0,
    "total": 11700.2,
    "fleet": 11700.2,
    "records": 60,
    "units": 42,
    "mode": "FULL"
  },
  {
    "date": "14/10",
    "isoDate": "2026-10-14",
    "day": "Rab",
    "dayIdx": 2,
    "week": "curr",
    "prod": 11918.6,
    "mhr": 734.9,
    "supp": 250.0,
    "interco": 0.0,
    "total": 12903.6,
    "fleet": 12903.5,
    "records": 65,
    "units": 45,
    "mode": "FULL"
  },
  {
    "date": "15/10",
    "isoDate": "2026-10-15",
    "day": "Kam",
    "dayIdx": 3,
    "week": "curr",
    "prod": 12547.4,
    "mhr": 1173.3,
    "supp": 159.7,
    "interco": 45.7,
    "total": 13926.0,
    "fleet": 13880.4,
    "records": 72,
    "units": 49,
    "mode": "FULL"
  },
  {
    "date": "16/10",
    "isoDate": "2026-10-16",
    "day": "Jum",
    "dayIdx": 4,
    "week": "curr",
    "prod": 11207.2,
    "mhr": 379.0,
    "supp": 221.5,
    "interco": 0.0,
    "total": 11807.6,
    "fleet": 11807.7,
    "records": 59,
    "units": 45,
    "mode": "FULL"
  },
  {
    "date": "17/10",
    "isoDate": "2026-10-17",
    "day": "Sab",
    "dayIdx": 5,
    "week": "curr",
    "prod": 8572.5,
    "mhr": 766.5,
    "supp": 249.7,
    "interco": 0.0,
    "total": 9588.7,
    "fleet": 9588.7,
    "records": 52,
    "units": 43,
    "mode": "FULL"
  },
  {
    "date": "18/10",
    "isoDate": "2026-10-18",
    "day": "Min",
    "dayIdx": 6,
    "week": "curr",
    "prod": 12330.3,
    "mhr": 684.4,
    "supp": 288.1,
    "interco": 39.9,
    "total": 13342.6,
    "fleet": 13302.8,
    "records": 68,
    "units": 46,
    "mode": "FULL"
  }
];
export const FORECAST = {
  "history": [
    {
      "date": "5/10",
      "isoDate": "2026-10-05",
      "day": "Sen",
      "week": "prev",
      "actual": 13416.3,
      "ma7": 13416.3
    },
    {
      "date": "6/10",
      "isoDate": "2026-10-06",
      "day": "Sel",
      "week": "prev",
      "actual": 14210.5,
      "ma7": 13813.4
    },
    {
      "date": "7/10",
      "isoDate": "2026-10-07",
      "day": "Rab",
      "week": "prev",
      "actual": 12048.3,
      "ma7": 13225.0
    },
    {
      "date": "8/10",
      "isoDate": "2026-10-08",
      "day": "Kam",
      "week": "prev",
      "actual": 11714.7,
      "ma7": 12847.5
    },
    {
      "date": "9/10",
      "isoDate": "2026-10-09",
      "day": "Jum",
      "week": "prev",
      "actual": 10570.1,
      "ma7": 12392.0
    },
    {
      "date": "10/10",
      "isoDate": "2026-10-10",
      "day": "Sab",
      "week": "prev",
      "actual": 9940.9,
      "ma7": 11983.5
    },
    {
      "date": "11/10",
      "isoDate": "2026-10-11",
      "day": "Min",
      "week": "prev",
      "actual": 12505.7,
      "ma7": 12058.1
    },
    {
      "date": "12/10",
      "isoDate": "2026-10-12",
      "day": "Sen",
      "week": "curr",
      "actual": 11164.5,
      "ma7": 11736.4
    },
    {
      "date": "13/10",
      "isoDate": "2026-10-13",
      "day": "Sel",
      "week": "curr",
      "actual": 11700.2,
      "ma7": 11377.8
    },
    {
      "date": "14/10",
      "isoDate": "2026-10-14",
      "day": "Rab",
      "week": "curr",
      "actual": 12903.6,
      "ma7": 11500.0
    },
    {
      "date": "15/10",
      "isoDate": "2026-10-15",
      "day": "Kam",
      "week": "curr",
      "actual": 13926.0,
      "ma7": 11815.9
    },
    {
      "date": "16/10",
      "isoDate": "2026-10-16",
      "day": "Jum",
      "week": "curr",
      "actual": 11807.6,
      "ma7": 11992.6
    },
    {
      "date": "17/10",
      "isoDate": "2026-10-17",
      "day": "Sab",
      "week": "curr",
      "actual": 9588.7,
      "ma7": 11942.3
    },
    {
      "date": "18/10",
      "isoDate": "2026-10-18",
      "day": "Min",
      "week": "curr",
      "actual": 13342.6,
      "ma7": 12061.9
    }
  ],
  "forecast": [
    {
      "date": "19/10",
      "isoDate": "2026-10-19",
      "projected": 11682.8
    },
    {
      "date": "20/10",
      "isoDate": "2026-10-20",
      "projected": 11632.5
    },
    {
      "date": "21/10",
      "isoDate": "2026-10-21",
      "projected": 11582.2
    },
    {
      "date": "22/10",
      "isoDate": "2026-10-22",
      "projected": 11532.0
    },
    {
      "date": "23/10",
      "isoDate": "2026-10-23",
      "projected": 11481.7
    },
    {
      "date": "24/10",
      "isoDate": "2026-10-24",
      "projected": 11431.4
    },
    {
      "date": "25/10",
      "isoDate": "2026-10-25",
      "projected": 11381.1
    }
  ]
};
export const WEEK_COMPARISON = {
  "prev": {
    "label": "5–11 Okt",
    "total": 84406.42,
    "fleet": 82773.83,
    "avgDaily": 12058.1,
    "avgFleetDaily": 11824.8,
    "records": 425,
    "units": 64,
    "activeDays": 7,
    "prod": 75714.1,
    "mhr": 5874.6,
    "supp": 1185.2,
    "interco": 1632.6,
    "dtQty": 54571.2,
    "excQty": 21142.9,
    "dtFrHm": 20.39,
    "excFrHm": 20.22,
    "bpspRepay": 0
  },
  "curr": {
    "label": "12–18 Okt",
    "total": 84433.14,
    "fleet": 84347.6,
    "avgDaily": 12061.9,
    "avgFleetDaily": 12049.7,
    "records": 433,
    "units": 66,
    "activeDays": 7,
    "prod": 77723.0,
    "mhr": 5249.9,
    "supp": 1374.7,
    "interco": 85.5,
    "dtQty": 58114.9,
    "excQty": 19608.1,
    "dtFrHm": 19.11,
    "excFrHm": 19.74,
    "bpspRepay": 0
  },
  "deltas": {
    "total": 0.03,
    "fleet": 1.9,
    "avgDaily": 0.03,
    "records": 1.88,
    "units": 3.12,
    "prod": 2.65,
    "mhr": -10.63,
    "supp": 15.99,
    "dtQty": 6.49,
    "excQty": -7.26,
    "dtFrHm": -6.28,
    "excFrHm": -2.37
  }
};
export const DOW_COMPARISON = [
  {
    "day": "Sen",
    "dayIdx": 0,
    "prev": 13416.2,
    "curr": 11164.5,
    "delta": -16.8
  },
  {
    "day": "Sel",
    "dayIdx": 1,
    "prev": 14210.5,
    "curr": 11700.2,
    "delta": -17.7
  },
  {
    "day": "Rab",
    "dayIdx": 2,
    "prev": 12048.3,
    "curr": 12903.6,
    "delta": 7.1
  },
  {
    "day": "Kam",
    "dayIdx": 3,
    "prev": 11714.7,
    "curr": 13926.0,
    "delta": 18.9
  },
  {
    "day": "Jum",
    "dayIdx": 4,
    "prev": 10570.1,
    "curr": 11807.6,
    "delta": 11.7
  },
  {
    "day": "Sab",
    "dayIdx": 5,
    "prev": 9940.9,
    "curr": 9588.7,
    "delta": -3.5
  },
  {
    "day": "Min",
    "dayIdx": 6,
    "prev": 12505.7,
    "curr": 13342.6,
    "delta": 6.7
  }
];
export const DAILY_FLEET_TREND = [
  {
    "date": "5/10",
    "isoDate": "2026-10-05",
    "day": "Sen",
    "week": "prev",
    "dtQty": 8397.1,
    "excQty": 4074.3,
    "dtUnits": 24,
    "excUnits": 13,
    "dtFrHm": 17.82,
    "excFrHm": 21.56
  },
  {
    "date": "6/10",
    "isoDate": "2026-10-06",
    "day": "Sel",
    "week": "prev",
    "dtQty": 8809.3,
    "excQty": 3165.8,
    "dtUnits": 24,
    "excUnits": 11,
    "dtFrHm": 21.0,
    "excFrHm": 21.71
  },
  {
    "date": "7/10",
    "isoDate": "2026-10-07",
    "day": "Rab",
    "week": "prev",
    "dtQty": 7333.1,
    "excQty": 3366.8,
    "dtUnits": 22,
    "excUnits": 11,
    "dtFrHm": 20.92,
    "excFrHm": 18.84
  },
  {
    "date": "8/10",
    "isoDate": "2026-10-08",
    "day": "Kam",
    "week": "prev",
    "dtQty": 7868.4,
    "excQty": 2858.0,
    "dtUnits": 23,
    "excUnits": 11,
    "dtFrHm": 20.97,
    "excFrHm": 21.42
  },
  {
    "date": "9/10",
    "isoDate": "2026-10-09",
    "day": "Jum",
    "week": "prev",
    "dtQty": 7020.0,
    "excQty": 2830.0,
    "dtUnits": 23,
    "excUnits": 11,
    "dtFrHm": 20.12,
    "excFrHm": 20.95
  },
  {
    "date": "10/10",
    "isoDate": "2026-10-10",
    "day": "Sab",
    "week": "prev",
    "dtQty": 6970.6,
    "excQty": 1896.0,
    "dtUnits": 24,
    "excUnits": 8,
    "dtFrHm": 22.53,
    "excFrHm": 19.37
  },
  {
    "date": "11/10",
    "isoDate": "2026-10-11",
    "day": "Min",
    "week": "prev",
    "dtQty": 8172.5,
    "excQty": 2952.0,
    "dtUnits": 23,
    "excUnits": 11,
    "dtFrHm": 20.32,
    "excFrHm": 17.82
  },
  {
    "date": "12/10",
    "isoDate": "2026-10-12",
    "day": "Sen",
    "week": "curr",
    "dtQty": 7958.1,
    "excQty": 2333.1,
    "dtUnits": 21,
    "excUnits": 6,
    "dtFrHm": 20.63,
    "excFrHm": 20.79
  },
  {
    "date": "13/10",
    "isoDate": "2026-10-13",
    "day": "Sel",
    "week": "curr",
    "dtQty": 8502.9,
    "excQty": 2353.0,
    "dtUnits": 25,
    "excUnits": 10,
    "dtFrHm": 18.53,
    "excFrHm": 21.05
  },
  {
    "date": "14/10",
    "isoDate": "2026-10-14",
    "day": "Rab",
    "week": "curr",
    "dtQty": 9036.6,
    "excQty": 2882.0,
    "dtUnits": 25,
    "excUnits": 10,
    "dtFrHm": 19.53,
    "excFrHm": 17.43
  },
  {
    "date": "15/10",
    "isoDate": "2026-10-15",
    "day": "Kam",
    "week": "curr",
    "dtQty": 9101.4,
    "excQty": 3446.0,
    "dtUnits": 27,
    "excUnits": 11,
    "dtFrHm": 18.04,
    "excFrHm": 20.68
  },
  {
    "date": "16/10",
    "isoDate": "2026-10-16",
    "day": "Jum",
    "week": "curr",
    "dtQty": 8073.2,
    "excQty": 3134.0,
    "dtUnits": 27,
    "excUnits": 11,
    "dtFrHm": 19.37,
    "excFrHm": 19.65
  },
  {
    "date": "17/10",
    "isoDate": "2026-10-17",
    "day": "Sab",
    "week": "curr",
    "dtQty": 6674.5,
    "excQty": 1898.0,
    "dtUnits": 25,
    "excUnits": 9,
    "dtFrHm": 19.3,
    "excFrHm": 19.02
  },
  {
    "date": "18/10",
    "isoDate": "2026-10-18",
    "day": "Min",
    "week": "curr",
    "dtQty": 8768.3,
    "excQty": 3562.0,
    "dtUnits": 27,
    "excUnits": 11,
    "dtFrHm": 18.83,
    "excFrHm": 20.03
  }
];

export const DT_DAILY_MATRIX = {
  "units": [
    "DT-028",
    "DT-063",
    "DT-072",
    "DT-024",
    "DT-075",
    "DT-029",
    "DT-076",
    "DT-030",
    "DT-064",
    "DT-073",
    "DT-067",
    "DT-070",
    "DT-074",
    "DT-071",
    "DT-058"
  ],
  "dates": [
    "12/10",
    "13/10",
    "14/10",
    "15/10",
    "16/10",
    "17/10",
    "18/10"
  ],
  "rows": [
    {
      "unit": "DT-028",
      "total": 2999.0,
      "values": [
        {
          "date": "12/10",
          "qty": 498.0
        },
        {
          "date": "13/10",
          "qty": 451.6
        },
        {
          "date": "14/10",
          "qty": 435.5
        },
        {
          "date": "15/10",
          "qty": 426.4
        },
        {
          "date": "16/10",
          "qty": 420.5
        },
        {
          "date": "17/10",
          "qty": 278.9
        },
        {
          "date": "18/10",
          "qty": 488.6
        }
      ]
    },
    {
      "unit": "DT-063",
      "total": 2768.0,
      "values": [
        {
          "date": "12/10",
          "qty": 460.8
        },
        {
          "date": "13/10",
          "qty": 394.6
        },
        {
          "date": "14/10",
          "qty": 437.6
        },
        {
          "date": "15/10",
          "qty": 452.8
        },
        {
          "date": "16/10",
          "qty": 313.4
        },
        {
          "date": "17/10",
          "qty": 299.4
        },
        {
          "date": "18/10",
          "qty": 409.6
        }
      ]
    },
    {
      "unit": "DT-072",
      "total": 2669.0,
      "values": [
        {
          "date": "12/10",
          "qty": 518.7
        },
        {
          "date": "13/10",
          "qty": 402.4
        },
        {
          "date": "14/10",
          "qty": 381.3
        },
        {
          "date": "15/10",
          "qty": 377.6
        },
        {
          "date": "16/10",
          "qty": 379.1
        },
        {
          "date": "17/10",
          "qty": 229.6
        },
        {
          "date": "18/10",
          "qty": 380.3
        }
      ]
    },
    {
      "unit": "DT-024",
      "total": 2663.0,
      "values": [
        {
          "date": "12/10",
          "qty": 388.7
        },
        {
          "date": "13/10",
          "qty": 419.3
        },
        {
          "date": "14/10",
          "qty": 383.7
        },
        {
          "date": "15/10",
          "qty": 368.4
        },
        {
          "date": "16/10",
          "qty": 426.5
        },
        {
          "date": "17/10",
          "qty": 252.8
        },
        {
          "date": "18/10",
          "qty": 424.0
        }
      ]
    },
    {
      "unit": "DT-075",
      "total": 2583.0,
      "values": [
        {
          "date": "12/10",
          "qty": 406.4
        },
        {
          "date": "13/10",
          "qty": 470.6
        },
        {
          "date": "14/10",
          "qty": 395.6
        },
        {
          "date": "15/10",
          "qty": 247.5
        },
        {
          "date": "16/10",
          "qty": 289.9
        },
        {
          "date": "17/10",
          "qty": 343.3
        },
        {
          "date": "18/10",
          "qty": 429.3
        }
      ]
    },
    {
      "unit": "DT-029",
      "total": 2498.0,
      "values": [
        {
          "date": "12/10",
          "qty": 416.5
        },
        {
          "date": "13/10",
          "qty": 370.5
        },
        {
          "date": "14/10",
          "qty": 387.5
        },
        {
          "date": "15/10",
          "qty": 400.1
        },
        {
          "date": "16/10",
          "qty": 251.8
        },
        {
          "date": "17/10",
          "qty": 251.6
        },
        {
          "date": "18/10",
          "qty": 420.4
        }
      ]
    },
    {
      "unit": "DT-076",
      "total": 2467.0,
      "values": [
        {
          "date": "12/10",
          "qty": 271.3
        },
        {
          "date": "13/10",
          "qty": 383.7
        },
        {
          "date": "14/10",
          "qty": 386.3
        },
        {
          "date": "15/10",
          "qty": 362.0
        },
        {
          "date": "16/10",
          "qty": 385.0
        },
        {
          "date": "17/10",
          "qty": 257.7
        },
        {
          "date": "18/10",
          "qty": 421.3
        }
      ]
    },
    {
      "unit": "DT-030",
      "total": 2445.0,
      "values": [
        {
          "date": "12/10",
          "qty": 417.5
        },
        {
          "date": "13/10",
          "qty": 404.5
        },
        {
          "date": "14/10",
          "qty": 200.4
        },
        {
          "date": "15/10",
          "qty": 397.5
        },
        {
          "date": "16/10",
          "qty": 351.2
        },
        {
          "date": "17/10",
          "qty": 270.0
        },
        {
          "date": "18/10",
          "qty": 404.2
        }
      ]
    },
    {
      "unit": "DT-064",
      "total": 2403.0,
      "values": [
        {
          "date": "12/10",
          "qty": 339.1
        },
        {
          "date": "13/10",
          "qty": 189.5
        },
        {
          "date": "14/10",
          "qty": 437.5
        },
        {
          "date": "15/10",
          "qty": 443.2
        },
        {
          "date": "16/10",
          "qty": 350.9
        },
        {
          "date": "17/10",
          "qty": 262.0
        },
        {
          "date": "18/10",
          "qty": 380.4
        }
      ]
    },
    {
      "unit": "DT-073",
      "total": 2374.0,
      "values": [
        {
          "date": "12/10",
          "qty": 281.4
        },
        {
          "date": "13/10",
          "qty": 391.3
        },
        {
          "date": "14/10",
          "qty": 395.4
        },
        {
          "date": "15/10",
          "qty": 331.6
        },
        {
          "date": "16/10",
          "qty": 267.5
        },
        {
          "date": "17/10",
          "qty": 312.8
        },
        {
          "date": "18/10",
          "qty": 394.2
        }
      ]
    },
    {
      "unit": "DT-067",
      "total": 2369.0,
      "values": [
        {
          "date": "12/10",
          "qty": 383.4
        },
        {
          "date": "13/10",
          "qty": 311.1
        },
        {
          "date": "14/10",
          "qty": 397.3
        },
        {
          "date": "15/10",
          "qty": 397.6
        },
        {
          "date": "16/10",
          "qty": 200.0
        },
        {
          "date": "17/10",
          "qty": 336.9
        },
        {
          "date": "18/10",
          "qty": 342.9
        }
      ]
    },
    {
      "unit": "DT-070",
      "total": 2319.0,
      "values": [
        {
          "date": "12/10",
          "qty": 389.9
        },
        {
          "date": "13/10",
          "qty": 388.8
        },
        {
          "date": "14/10",
          "qty": 380.0
        },
        {
          "date": "15/10",
          "qty": 315.3
        },
        {
          "date": "16/10",
          "qty": 362.1
        },
        {
          "date": "17/10",
          "qty": 239.0
        },
        {
          "date": "18/10",
          "qty": 244.0
        }
      ]
    },
    {
      "unit": "DT-074",
      "total": 2289.0,
      "values": [
        {
          "date": "12/10",
          "qty": 381.0
        },
        {
          "date": "13/10",
          "qty": 350.8
        },
        {
          "date": "14/10",
          "qty": 302.0
        },
        {
          "date": "15/10",
          "qty": 354.1
        },
        {
          "date": "16/10",
          "qty": 378.3
        },
        {
          "date": "17/10",
          "qty": 238.0
        },
        {
          "date": "18/10",
          "qty": 284.5
        }
      ]
    },
    {
      "unit": "DT-071",
      "total": 2280.0,
      "values": [
        {
          "date": "12/10",
          "qty": 430.3
        },
        {
          "date": "13/10",
          "qty": 352.6
        },
        {
          "date": "14/10",
          "qty": 443.7
        },
        {
          "date": "15/10",
          "qty": 451.1
        },
        {
          "date": "16/10",
          "qty": 279.1
        },
        {
          "date": "17/10",
          "qty": 323.5
        },
        {
          "date": "18/10",
          "qty": 0.0
        }
      ]
    },
    {
      "unit": "DT-058",
      "total": 2235.0,
      "values": [
        {
          "date": "12/10",
          "qty": 310.6
        },
        {
          "date": "13/10",
          "qty": 376.4
        },
        {
          "date": "14/10",
          "qty": 418.5
        },
        {
          "date": "15/10",
          "qty": 368.5
        },
        {
          "date": "16/10",
          "qty": 200.4
        },
        {
          "date": "17/10",
          "qty": 160.0
        },
        {
          "date": "18/10",
          "qty": 400.3
        }
      ]
    }
  ],
  "maxQty": 519.0,
  "daysBack": 7
};
export const EXC_DAILY_MATRIX = {
  "units": [
    "EXC-026",
    "EXC-014",
    "EXC-029",
    "EXC-012",
    "EXC-022",
    "EXC-023",
    "EXC-031",
    "EXC-024",
    "EXC-025",
    "EXC-027",
    "EXC-001",
    "EXC-030",
    "EXC-011"
  ],
  "dates": [
    "12/10",
    "13/10",
    "14/10",
    "15/10",
    "16/10",
    "17/10",
    "18/10"
  ],
  "rows": [
    {
      "unit": "EXC-026",
      "total": 3617.0,
      "values": [
        {
          "date": "12/10",
          "qty": 617.0
        },
        {
          "date": "13/10",
          "qty": 453.0
        },
        {
          "date": "14/10",
          "qty": 560.0
        },
        {
          "date": "15/10",
          "qty": 573.0
        },
        {
          "date": "16/10",
          "qty": 531.0
        },
        {
          "date": "17/10",
          "qty": 365.0
        },
        {
          "date": "18/10",
          "qty": 518.0
        }
      ]
    },
    {
      "unit": "EXC-014",
      "total": 3449.0,
      "values": [
        {
          "date": "12/10",
          "qty": 510.0
        },
        {
          "date": "13/10",
          "qty": 530.0
        },
        {
          "date": "14/10",
          "qty": 535.0
        },
        {
          "date": "15/10",
          "qty": 548.0
        },
        {
          "date": "16/10",
          "qty": 500.0
        },
        {
          "date": "17/10",
          "qty": 346.0
        },
        {
          "date": "18/10",
          "qty": 480.0
        }
      ]
    },
    {
      "unit": "EXC-029",
      "total": 1750.0,
      "values": [
        {
          "date": "12/10",
          "qty": 0.0
        },
        {
          "date": "13/10",
          "qty": 0.0
        },
        {
          "date": "14/10",
          "qty": 365.0
        },
        {
          "date": "15/10",
          "qty": 340.0
        },
        {
          "date": "16/10",
          "qty": 447.0
        },
        {
          "date": "17/10",
          "qty": 192.0
        },
        {
          "date": "18/10",
          "qty": 406.0
        }
      ]
    },
    {
      "unit": "EXC-012",
      "total": 1668.0,
      "values": [
        {
          "date": "12/10",
          "qty": 343.0
        },
        {
          "date": "13/10",
          "qty": 213.0
        },
        {
          "date": "14/10",
          "qty": 264.0
        },
        {
          "date": "15/10",
          "qty": 287.0
        },
        {
          "date": "16/10",
          "qty": 126.0
        },
        {
          "date": "17/10",
          "qty": 180.0
        },
        {
          "date": "18/10",
          "qty": 255.0
        }
      ]
    },
    {
      "unit": "EXC-022",
      "total": 1521.0,
      "values": [
        {
          "date": "12/10",
          "qty": 334.0
        },
        {
          "date": "13/10",
          "qty": 247.0
        },
        {
          "date": "14/10",
          "qty": 239.0
        },
        {
          "date": "15/10",
          "qty": 243.0
        },
        {
          "date": "16/10",
          "qty": 169.0
        },
        {
          "date": "17/10",
          "qty": 0.0
        },
        {
          "date": "18/10",
          "qty": 289.0
        }
      ]
    },
    {
      "unit": "EXC-023",
      "total": 1335.0,
      "values": [
        {
          "date": "12/10",
          "qty": 0.0
        },
        {
          "date": "13/10",
          "qty": 129.0
        },
        {
          "date": "14/10",
          "qty": 244.0
        },
        {
          "date": "15/10",
          "qty": 165.0
        },
        {
          "date": "16/10",
          "qty": 373.0
        },
        {
          "date": "17/10",
          "qty": 99.0
        },
        {
          "date": "18/10",
          "qty": 325.0
        }
      ]
    },
    {
      "unit": "EXC-031",
      "total": 1324.0,
      "values": [
        {
          "date": "12/10",
          "qty": 0.0
        },
        {
          "date": "13/10",
          "qty": 123.0
        },
        {
          "date": "14/10",
          "qty": 161.0
        },
        {
          "date": "15/10",
          "qty": 340.0
        },
        {
          "date": "16/10",
          "qty": 242.0
        },
        {
          "date": "17/10",
          "qty": 174.0
        },
        {
          "date": "18/10",
          "qty": 284.0
        }
      ]
    },
    {
      "unit": "EXC-024",
      "total": 1188.0,
      "values": [
        {
          "date": "12/10",
          "qty": 0.0
        },
        {
          "date": "13/10",
          "qty": 140.0
        },
        {
          "date": "14/10",
          "qty": 175.0
        },
        {
          "date": "15/10",
          "qty": 301.0
        },
        {
          "date": "16/10",
          "qty": 225.0
        },
        {
          "date": "17/10",
          "qty": 145.0
        },
        {
          "date": "18/10",
          "qty": 202.0
        }
      ]
    },
    {
      "unit": "EXC-025",
      "total": 1160.0,
      "values": [
        {
          "date": "12/10",
          "qty": 361.1
        },
        {
          "date": "13/10",
          "qty": 105.0
        },
        {
          "date": "14/10",
          "qty": 93.0
        },
        {
          "date": "15/10",
          "qty": 122.0
        },
        {
          "date": "16/10",
          "qty": 118.0
        },
        {
          "date": "17/10",
          "qty": 186.0
        },
        {
          "date": "18/10",
          "qty": 175.0
        }
      ]
    },
    {
      "unit": "EXC-027",
      "total": 1048.0,
      "values": [
        {
          "date": "12/10",
          "qty": 0.0
        },
        {
          "date": "13/10",
          "qty": 171.0
        },
        {
          "date": "14/10",
          "qty": 0.0
        },
        {
          "date": "15/10",
          "qty": 309.0
        },
        {
          "date": "16/10",
          "qty": 195.0
        },
        {
          "date": "17/10",
          "qty": 0.0
        },
        {
          "date": "18/10",
          "qty": 373.0
        }
      ]
    },
    {
      "unit": "EXC-001",
      "total": 840.0,
      "values": [
        {
          "date": "12/10",
          "qty": 168.0
        },
        {
          "date": "13/10",
          "qty": 0.0
        },
        {
          "date": "14/10",
          "qty": 246.0
        },
        {
          "date": "15/10",
          "qty": 218.0
        },
        {
          "date": "16/10",
          "qty": 208.0
        },
        {
          "date": "17/10",
          "qty": 0.0
        },
        {
          "date": "18/10",
          "qty": 0.0
        }
      ]
    },
    {
      "unit": "EXC-030",
      "total": 466.0,
      "values": [
        {
          "date": "12/10",
          "qty": 0.0
        },
        {
          "date": "13/10",
          "qty": 0.0
        },
        {
          "date": "14/10",
          "qty": 0.0
        },
        {
          "date": "15/10",
          "qty": 0.0
        },
        {
          "date": "16/10",
          "qty": 0.0
        },
        {
          "date": "17/10",
          "qty": 211.0
        },
        {
          "date": "18/10",
          "qty": 255.0
        }
      ]
    },
    {
      "unit": "EXC-011",
      "total": 242.0,
      "values": [
        {
          "date": "12/10",
          "qty": 0.0
        },
        {
          "date": "13/10",
          "qty": 242.0
        },
        {
          "date": "14/10",
          "qty": 0.0
        },
        {
          "date": "15/10",
          "qty": 0.0
        },
        {
          "date": "16/10",
          "qty": 0.0
        },
        {
          "date": "17/10",
          "qty": 0.0
        },
        {
          "date": "18/10",
          "qty": 0.0
        }
      ]
    }
  ],
  "maxQty": 617.0,
  "daysBack": 7
};
export const DT_SCORECARD = [
  {
    "unit": "DT-028",
    "frHm": 22.88,
    "frKm": 1.13,
    "fuel": 2999.0,
    "records": 13,
    "hmTotal": 131.1,
    "kmTotal": 2665.0,
    "firstRefuel": false,
    "percentile": 97.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-063",
    "frHm": 21.8,
    "frKm": 1.09,
    "fuel": 2768.0,
    "records": 14,
    "hmTotal": 127.0,
    "kmTotal": 2550.0,
    "firstRefuel": false,
    "percentile": 94.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-072",
    "frHm": 19.05,
    "frKm": 1.0,
    "fuel": 2669.0,
    "records": 14,
    "hmTotal": 140.1,
    "kmTotal": 2661.0,
    "firstRefuel": false,
    "percentile": 53.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-024",
    "frHm": 21.58,
    "frKm": 1.06,
    "fuel": 2663.0,
    "records": 13,
    "hmTotal": 123.4,
    "kmTotal": 2507.0,
    "firstRefuel": false,
    "percentile": 88.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-075",
    "frHm": 20.83,
    "frKm": 1.1,
    "fuel": 2583.0,
    "records": 12,
    "hmTotal": 124.0,
    "kmTotal": 2350.0,
    "firstRefuel": false,
    "percentile": 81.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-029",
    "frHm": 20.28,
    "frKm": 1.12,
    "fuel": 2498.0,
    "records": 13,
    "hmTotal": 123.2,
    "kmTotal": 2238.0,
    "firstRefuel": false,
    "percentile": 75.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-076",
    "frHm": 19.26,
    "frKm": 0.99,
    "fuel": 2467.0,
    "records": 12,
    "hmTotal": 128.1,
    "kmTotal": 2492.0,
    "firstRefuel": false,
    "percentile": 62.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-030",
    "frHm": 17.97,
    "frKm": 0.94,
    "fuel": 2445.0,
    "records": 12,
    "hmTotal": 136.1,
    "kmTotal": 2609.0,
    "firstRefuel": false,
    "percentile": 28.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-064",
    "frHm": 21.74,
    "frKm": 1.14,
    "fuel": 2403.0,
    "records": 12,
    "hmTotal": 110.5,
    "kmTotal": 2112.0,
    "firstRefuel": false,
    "percentile": 91.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-073",
    "frHm": 18.65,
    "frKm": 1.05,
    "fuel": 2374.0,
    "records": 12,
    "hmTotal": 127.3,
    "kmTotal": 2263.0,
    "firstRefuel": false,
    "percentile": 41.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-067",
    "frHm": 20.34,
    "frKm": 1.04,
    "fuel": 2369.0,
    "records": 13,
    "hmTotal": 116.5,
    "kmTotal": 2287.0,
    "firstRefuel": false,
    "percentile": 78.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-070",
    "frHm": 19.04,
    "frKm": 1.02,
    "fuel": 2319.0,
    "records": 12,
    "hmTotal": 121.8,
    "kmTotal": 2273.0,
    "firstRefuel": false,
    "percentile": 50.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-074",
    "frHm": 20.13,
    "frKm": 1.09,
    "fuel": 2289.0,
    "records": 12,
    "hmTotal": 113.7,
    "kmTotal": 2101.0,
    "firstRefuel": false,
    "percentile": 72.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-071",
    "frHm": 21.02,
    "frKm": 1.1,
    "fuel": 2280.0,
    "records": 11,
    "hmTotal": 108.5,
    "kmTotal": 2067.0,
    "firstRefuel": false,
    "percentile": 84.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-058",
    "frHm": 19.48,
    "frKm": 1.0,
    "fuel": 2235.0,
    "records": 11,
    "hmTotal": 114.7,
    "kmTotal": 2244.0,
    "firstRefuel": false,
    "percentile": 66.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-062",
    "frHm": 16.39,
    "frKm": 0.93,
    "fuel": 2193.0,
    "records": 11,
    "hmTotal": 133.8,
    "kmTotal": 2348.0,
    "firstRefuel": false,
    "percentile": 19.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-065",
    "frHm": 19.23,
    "frKm": 1.04,
    "fuel": 2100.0,
    "records": 9,
    "hmTotal": 109.2,
    "kmTotal": 2013.0,
    "firstRefuel": false,
    "percentile": 59.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-027",
    "frHm": 19.71,
    "frKm": 1.06,
    "fuel": 2091.0,
    "records": 10,
    "hmTotal": 106.1,
    "kmTotal": 1974.0,
    "firstRefuel": false,
    "percentile": 69.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-069",
    "frHm": 18.89,
    "frKm": 0.94,
    "fuel": 2011.0,
    "records": 10,
    "hmTotal": 106.5,
    "kmTotal": 2147.0,
    "firstRefuel": false,
    "percentile": 44.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-023",
    "frHm": 18.93,
    "frKm": 1.04,
    "fuel": 1757.0,
    "records": 9,
    "hmTotal": 92.8,
    "kmTotal": 1685.0,
    "firstRefuel": false,
    "percentile": 47.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-066",
    "frHm": 18.47,
    "frKm": 1.07,
    "fuel": 1536.0,
    "records": 8,
    "hmTotal": 83.2,
    "kmTotal": 1440.0,
    "firstRefuel": false,
    "percentile": 34.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-068",
    "frHm": 18.58,
    "frKm": 0.94,
    "fuel": 1364.0,
    "records": 7,
    "hmTotal": 73.4,
    "kmTotal": 1445.0,
    "firstRefuel": false,
    "percentile": 38.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-077",
    "frHm": 27.42,
    "frKm": 1.44,
    "fuel": 1157.0,
    "records": 6,
    "hmTotal": 42.2,
    "kmTotal": 805.0,
    "firstRefuel": true,
    "percentile": 100,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-078",
    "frHm": 27.0,
    "frKm": 1.46,
    "fuel": 1104.0,
    "records": 5,
    "hmTotal": 40.9,
    "kmTotal": 759.0,
    "firstRefuel": true,
    "percentile": 100,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-060",
    "frHm": 19.1,
    "frKm": 1.08,
    "fuel": 940.0,
    "records": 5,
    "hmTotal": 49.2,
    "kmTotal": 872.0,
    "firstRefuel": false,
    "percentile": 56.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-011",
    "frHm": 9.53,
    "frKm": 1.25,
    "fuel": 830.0,
    "records": 5,
    "hmTotal": 87.1,
    "kmTotal": 664.0,
    "firstRefuel": false,
    "percentile": 3.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-007",
    "frHm": 9.84,
    "frKm": 1.17,
    "fuel": 820.0,
    "records": 5,
    "hmTotal": 83.3,
    "kmTotal": 703.0,
    "firstRefuel": false,
    "percentile": 6.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-008",
    "frHm": 10.33,
    "frKm": 2.1,
    "fuel": 567.0,
    "records": 3,
    "hmTotal": 54.9,
    "kmTotal": 270.0,
    "firstRefuel": false,
    "percentile": 9.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-017",
    "frHm": 25.23,
    "frKm": 1.83,
    "fuel": 446.0,
    "records": 2,
    "hmTotal": 17.7,
    "kmTotal": 244.0,
    "firstRefuel": true,
    "percentile": 100,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-025",
    "frHm": 17.1,
    "frKm": 1.03,
    "fuel": 443.0,
    "records": 2,
    "hmTotal": 25.9,
    "kmTotal": 431.0,
    "firstRefuel": false,
    "percentile": 25.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-004",
    "frHm": 11.68,
    "frKm": 1.46,
    "fuel": 406.0,
    "records": 2,
    "hmTotal": 34.8,
    "kmTotal": 278.0,
    "firstRefuel": false,
    "percentile": 12.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-019",
    "frHm": 32.99,
    "frKm": 1.22,
    "fuel": 304.0,
    "records": 2,
    "hmTotal": 9.2,
    "kmTotal": 249.0,
    "firstRefuel": false,
    "percentile": 100.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-020",
    "frHm": 18.34,
    "frKm": 1.17,
    "fuel": 281.0,
    "records": 2,
    "hmTotal": 15.3,
    "kmTotal": 240.0,
    "firstRefuel": false,
    "percentile": 31.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-044",
    "frHm": 12.09,
    "frKm": 4.9,
    "fuel": 201.0,
    "records": 1,
    "hmTotal": 16.6,
    "kmTotal": 41.0,
    "firstRefuel": false,
    "percentile": 16.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-015",
    "frHm": 16.43,
    "frKm": 1.12,
    "fuel": 200.0,
    "records": 1,
    "hmTotal": 12.2,
    "kmTotal": 179.0,
    "firstRefuel": false,
    "percentile": 22.0,
    "quartile": "Q1 (Efisien)"
  }
];
export const EXC_SCORECARD = [
  {
    "unit": "EXC-026",
    "model": "SY365H",
    "frHm": 29.52,
    "frKm": 0,
    "fuel": 3617.0,
    "records": 8,
    "hmTotal": 122.5,
    "firstRefuel": false,
    "percentile": 100.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "EXC-014",
    "model": "SY365H",
    "frHm": 27.89,
    "frKm": 0,
    "fuel": 3449.0,
    "records": 8,
    "hmTotal": 123.7,
    "firstRefuel": false,
    "percentile": 92.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "EXC-029",
    "model": "SY365H",
    "frHm": 25.83,
    "frKm": 0,
    "fuel": 1750.0,
    "records": 5,
    "hmTotal": 67.7,
    "firstRefuel": false,
    "percentile": 77.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "EXC-012",
    "model": "SY215C",
    "frHm": 16.45,
    "frKm": 0,
    "fuel": 1668.0,
    "records": 9,
    "hmTotal": 101.4,
    "firstRefuel": false,
    "percentile": 54.0,
    "quartile": "Q3"
  },
  {
    "unit": "EXC-022",
    "model": "SY215C",
    "frHm": 16.2,
    "frKm": 0,
    "fuel": 1521.0,
    "records": 9,
    "hmTotal": 93.9,
    "firstRefuel": false,
    "percentile": 46.0,
    "quartile": "Q2"
  },
  {
    "unit": "EXC-023",
    "model": "SY215C",
    "frHm": 15.36,
    "frKm": 0,
    "fuel": 1335.0,
    "records": 8,
    "hmTotal": 86.9,
    "firstRefuel": false,
    "percentile": 31.0,
    "quartile": "Q2"
  },
  {
    "unit": "EXC-031",
    "model": "SY215C",
    "frHm": 15.68,
    "frKm": 0,
    "fuel": 1324.0,
    "records": 8,
    "hmTotal": 84.4,
    "firstRefuel": false,
    "percentile": 38.0,
    "quartile": "Q2"
  },
  {
    "unit": "EXC-024",
    "model": "SY215C",
    "frHm": 14.05,
    "frKm": 0,
    "fuel": 1188.0,
    "records": 8,
    "hmTotal": 84.5,
    "firstRefuel": false,
    "percentile": 15.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "EXC-025",
    "model": "SY215C",
    "frHm": 16.49,
    "frKm": 0,
    "fuel": 1160.0,
    "records": 8,
    "hmTotal": 70.4,
    "firstRefuel": false,
    "percentile": 62.0,
    "quartile": "Q3"
  },
  {
    "unit": "EXC-027",
    "model": "SY365H",
    "frHm": 26.56,
    "frKm": 0,
    "fuel": 1048.0,
    "records": 4,
    "hmTotal": 39.5,
    "firstRefuel": false,
    "percentile": 85.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "EXC-001",
    "model": "XE215C",
    "frHm": 11.13,
    "frKm": 0,
    "fuel": 840.0,
    "records": 4,
    "hmTotal": 75.5,
    "firstRefuel": false,
    "percentile": 8.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "EXC-030",
    "model": "SY215C",
    "frHm": 14.77,
    "frKm": 0,
    "fuel": 466.0,
    "records": 2,
    "hmTotal": 31.5,
    "firstRefuel": false,
    "percentile": 23.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "EXC-011",
    "model": "XE215C",
    "frHm": 21.61,
    "frKm": 0,
    "fuel": 242.0,
    "records": 1,
    "hmTotal": 11.2,
    "firstRefuel": false,
    "percentile": 69.0,
    "quartile": "Q3"
  }
];

export const CATEGORY_BREAKDOWN = [
  {
    "cat": "Production",
    "qty": 77723.0,
    "records": 373,
    "units": 48,
    "frHm": 19.3,
    "avgPerRec": 208.4,
    "subBreakdown": [
      {
        "jenis": "DUMP TRUCK",
        "qty": 58114.9,
        "units": 35
      },
      {
        "jenis": "EXCAVATOR",
        "qty": 19608.1,
        "units": 13
      }
    ]
  },
  {
    "cat": "MHR",
    "qty": 5249.9,
    "records": 34,
    "units": 7,
    "frHm": 10.1,
    "avgPerRec": 154.4,
    "subBreakdown": [
      {
        "jenis": "MOTOR GRADER",
        "qty": 2146.9,
        "units": 2
      },
      {
        "jenis": "WATER TRUCK",
        "qty": 1584.2,
        "units": 2
      },
      {
        "jenis": "COMPACTOR",
        "qty": 1381.8,
        "units": 2
      },
      {
        "jenis": "WHEEL LOADER",
        "qty": 137.0,
        "units": 1
      }
    ]
  },
  {
    "cat": "Support",
    "qty": 1374.7,
    "records": 24,
    "units": 11,
    "frHm": 4.0,
    "avgPerRec": 57.3,
    "subBreakdown": [
      {
        "jenis": "TOYOTA HILUX",
        "qty": 661.0,
        "units": 5
      },
      {
        "jenis": "FUEL TRUCK",
        "qty": 227.9,
        "units": 1
      },
      {
        "jenis": "TOWER LAMP",
        "qty": 134.0,
        "units": 2
      },
      {
        "jenis": "HUB",
        "qty": 132.1,
        "units": 1
      },
      {
        "jenis": "MANHOUL",
        "qty": 126.7,
        "units": 1
      },
      {
        "jenis": "GENSET",
        "qty": 93.0,
        "units": 1
      }
    ]
  }
];
export const LOCATION_BREAKDOWN = [
  {
    "location": "Fuel Station",
    "qty": 62771.7,
    "records": 327,
    "units": 51,
    "avgPerRec": 192.0,
    "catMix": {
      "Interco": 85.5,
      "MHR": 3394.5,
      "Production": 58050.9,
      "Support": 1240.7
    }
  },
  {
    "location": "ETO",
    "qty": 10532.0,
    "records": 39,
    "units": 11,
    "avgPerRec": 270.1,
    "catMix": {
      "MHR": 1546.0,
      "Production": 8916.0,
      "Support": 70.0
    }
  },
  {
    "location": "EFO",
    "qty": 7140.1,
    "records": 43,
    "units": 9,
    "avgPerRec": 166.0,
    "catMix": {
      "MHR": 137.0,
      "Production": 6939.1,
      "Support": 64.0
    }
  },
  {
    "location": "Jetty",
    "qty": 3989.4,
    "records": 24,
    "units": 6,
    "avgPerRec": 166.2,
    "catMix": {
      "MHR": 172.4,
      "Production": 3817.0
    }
  }
];
export const SHIFT_ANALYSIS = [
  {
    "shift": "DS",
    "qty": 84305.4,
    "records": 432,
    "units": 67,
    "avgPerRec": 195.2
  },
  {
    "shift": "NS",
    "qty": 127.7,
    "records": 1,
    "units": 1,
    "avgPerRec": 127.7
  }
];
export const OPERATORS = [
  {
    "operator": "Rusdin",
    "refuels": 22,
    "qty": 4289.1,
    "avgPerRec": 195.0,
    "units": 17
  },
  {
    "operator": "Robi Menden",
    "refuels": 8,
    "qty": 3617.0,
    "avgPerRec": 452.1,
    "units": 1
  },
  {
    "operator": "Pande Sanjaya Putra",
    "refuels": 7,
    "qty": 2823.6,
    "avgPerRec": 403.4,
    "units": 2
  },
  {
    "operator": "Andri Paulo",
    "refuels": 13,
    "qty": 2750.1,
    "avgPerRec": 211.5,
    "units": 3
  },
  {
    "operator": "Yusril Ihza Mahendra",
    "refuels": 11,
    "qty": 2547.2,
    "avgPerRec": 231.6,
    "units": 3
  },
  {
    "operator": "I Kadek Dwi Frendita",
    "refuels": 12,
    "qty": 2412.1,
    "avgPerRec": 201.0,
    "units": 3
  },
  {
    "operator": "Noldi Mangasa",
    "refuels": 11,
    "qty": 2333.0,
    "avgPerRec": 212.1,
    "units": 3
  },
  {
    "operator": "Samsul Yanto",
    "refuels": 11,
    "qty": 2080.4,
    "avgPerRec": 189.1,
    "units": 4
  },
  {
    "operator": "Alfait Halim",
    "refuels": 9,
    "qty": 2058.2,
    "avgPerRec": 228.7,
    "units": 2
  },
  {
    "operator": "Hasanudin",
    "refuels": 9,
    "qty": 2012.0,
    "avgPerRec": 223.6,
    "units": 1
  }
];
export const ANOMALIES = [
  {
    "id": "ANO-01",
    "type": "STOCK",
    "unit": "STOCK SITE BPSP",
    "date": "14 Okt",
    "issue": "Stok EOD anjlok ke 37.288 L (titik terendah) akibat gap stock-in 12–14 Okt (3 hari kosong). Runway sempat tersisa ~3,1 hari sebelum suplai masuk.",
    "severity": "HIGH",
    "status": "CLOSED"
  },
  {
    "id": "ANO-02",
    "type": "UNIT",
    "unit": "DT-017",
    "date": "15 Okt",
    "issue": "First-refueling: HM_diff=1,0 jam dengan pengisian 169,78 L (FR 169,8 L/HM). Unit baru masuk operasi, dikecualikan dari ranking efisiensi.",
    "severity": "MEDIUM",
    "status": "OPEN"
  },
  {
    "id": "ANO-03",
    "type": "UNIT",
    "unit": "DT-077 / DT-078",
    "date": "16 Okt",
    "issue": "First-refueling armada baru: DT-077 (200,4 L, HM=1) & DT-078 (200,25 L, HM=1). HM_diff=1,0 jam, dikecualikan dari scorecard FR.",
    "severity": "MEDIUM",
    "status": "OPEN"
  },
  {
    "id": "ANO-04",
    "type": "UNIT",
    "unit": "DT-019",
    "date": "18 Okt",
    "issue": "Short-interval top-up: Qty 103,0 L vs HM_diff 1,9 jam (FR 54,2 L/HM). Pengisian berjarak terlalu rapat dari refuel sebelumnya.",
    "severity": "MEDIUM",
    "status": "OPEN"
  },
  {
    "id": "ANO-05",
    "type": "UNIT",
    "unit": "DT-028",
    "date": "15 Okt",
    "issue": "FR outlier 59,5 L/HM (Qty 226,0 L vs HM_diff 3,8 jam). Periksa jam standby/idling tinggi atau ketidaksesuaian pencatatan HM.",
    "severity": "MEDIUM",
    "status": "OPEN"
  },
  {
    "id": "ANO-06",
    "type": "UNIT",
    "unit": "DT-069",
    "date": "18 Okt",
    "issue": "HM interval panjang: HM_diff=16,9 jam dengan refuel 101,5 L (FR 6,0 L/HM). Indikasi keterlambatan pencatatan refuel antara.",
    "severity": "LOW",
    "status": "OPEN"
  },
  {
    "id": "ANO-07",
    "type": "INTERCO",
    "unit": "PT. MPS",
    "date": "15 & 18 Okt",
    "issue": "2 transaksi interco PT. MPS total 85,54 L (15 Okt: 45,66 L; 18 Okt: 39,88 L). Sudah di-exclude dari metrik fleet.",
    "severity": "INFO",
    "status": "CLOSED"
  },
  {
    "id": "ANO-08",
    "type": "SUPPORT",
    "unit": "HUB",
    "date": "17 Okt",
    "issue": "1 transaksi pengisian HUB 132,14 L di Fuel Station diklasifikasikan ke dalam kategori Support operasional.",
    "severity": "INFO",
    "status": "CLOSED"
  },
  {
    "id": "ANO-09",
    "type": "VENDOR",
    "unit": "PT. CENTRAL OIL INDONESIA NICON",
    "date": "15–18 Okt",
    "issue": "Pasokan intensif 75.000 L dalam 4 pengiriman berturut-turut (24.900, 20.970, 20.130, 9.000 L) berhasil memulihkan buffer stok site.",
    "severity": "GOOD",
    "status": "CLOSED"
  },
  {
    "id": "ANO-10",
    "type": "DATA",
    "unit": "TOYOTA HILUX (LV)",
    "date": "12–18 Okt",
    "issue": "15 transaksi kendaraan LV (Hilux) HM_diff=0 karena armada LV hanya menggunakan odometer (KM). Tidak ada isu integritas data.",
    "severity": "INFO",
    "status": "CLOSED"
  }
];
export const DATA_QUALITY = {
  "totalRecords": 433,
  "missingHM": 0,
  "missingKM": 0,
  "zeroOrNegHM": 15,
  "hmOver50": 0,
  "zeroOrNegKM": 118,
  "missingOperator": 0,
  "missingLocation": 0,
  "bulkRows": 0,
  "remarkFilled": 433,
  "completePct": 99.8
};
export const STOCK_SUMMARY = {
  "startStock": 73056.68,
  "endStock": 63623.54,
  "minStock": 37288.44,
  "minStockDate": "14/10",
  "totalInRecorded": 75000.0,
  "totalInCurrWeekRecorded": 75000.0,
  "totalOutGross": 84433.14,
  "bpspLoanIn": 0,
  "bpspRepayOutPrev": 0,
  "bpspRepayOutCurr": 0,
  "totalInVendorOnly": 75000.0,
  "totalInCurrWeekVendorOnly": 75000.0,
  "totalOutFleetNet": 84347.6,
  "netChange": -9433.14,
  "netChangeFleet": -9347.6,
  "stockInEvents": [
    {
      "date": "15/10",
      "qty": 24900.0,
      "type": "vendor",
      "vendor": "PT. CENTRAL OIL INDONESIA NICON",
      "remarks": "DONE"
    },
    {
      "date": "16/10",
      "qty": 20970.0,
      "type": "vendor",
      "vendor": "PT. CENTRAL OIL INDONESIA NICON",
      "remarks": "DONE"
    },
    {
      "date": "17/10",
      "qty": 20130.0,
      "type": "vendor",
      "vendor": "PT. CENTRAL OIL INDONESIA NICON",
      "remarks": "DONE"
    },
    {
      "date": "18/10",
      "qty": 9000.0,
      "type": "vendor",
      "vendor": "PT. CENTRAL OIL INDONESIA NICON",
      "remarks": "DONE"
    }
  ],
  "bpspEvents": []
};
export const STOCK_DATA = [
  {
    "date": "5/10",
    "lastStock": 108046.85
  },
  {
    "date": "6/10",
    "lastStock": 121836.38
  },
  {
    "date": "7/10",
    "lastStock": 109788.05
  },
  {
    "date": "8/10",
    "lastStock": 98073.32
  },
  {
    "date": "9/10",
    "lastStock": 87503.24
  },
  {
    "date": "10/10",
    "lastStock": 77562.35
  },
  {
    "date": "11/10",
    "lastStock": 73056.68
  },
  {
    "date": "12/10",
    "lastStock": 61892.18
  },
  {
    "date": "13/10",
    "lastStock": 50192.01
  },
  {
    "date": "14/10",
    "lastStock": 37288.44
  },
  {
    "date": "15/10",
    "lastStock": 48262.43
  },
  {
    "date": "16/10",
    "lastStock": 57424.79
  },
  {
    "date": "17/10",
    "lastStock": 67966.12
  },
  {
    "date": "18/10",
    "lastStock": 63623.54
  }
];
export const VENDORS = [
  {
    "vendor": "PT. CENTRAL OIL INDONESIA NICON",
    "deliveries": 4,
    "totalQty": 75000.0,
    "avgQty": 18750.0,
    "remarks": [
      "DONE"
    ]
  }
];
export const INTER_COMPANY = {
  "note": "Entry MPS (85,54 L) pada 15 & 18 Okt dicatat sebagai inter-company transfer dan sudah di-exclude dari metrik fleet. Transaksi HUB (132,14 L) dimasukkan ke dalam kategori Support operasional.",
  "events": [
    {
      "date": "2026-10-15",
      "unit": "PT. MPS",
      "qty": 45.66,
      "direction": "OUT",
      "type": "SITE_TRANSFER",
      "note": "Refuel MPS"
    },
    {
      "date": "2026-10-18",
      "unit": "PT. MPS",
      "qty": 39.88,
      "direction": "OUT",
      "type": "SITE_TRANSFER",
      "note": "Refuel MPS"
    }
  ]
};
export const LOCATION_COLORS = [
  C.accent,
  C.gold,
  C.good,
  C.amber,
  C.muted,
  C.violet,
];
