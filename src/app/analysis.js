// AUTO-GENERATED — Analisis Fuel Site BPSP
// Source: fuel.xlsx stock-out + stock-in (verified 2026-10-26)
// Base week (prev): 2026-10-12 → 2026-10-18 (12–18 Okt)
// Curr week (new):  2026-10-19 → 2026-10-25 (19–25 Okt)
//
// DEFINISI METRIK (konsisten di seluruh file):
//   GROSS  = semua transaksi stock-out (termasuk MPS / KFM)
//   FLEET  = konsumsi unit operasional (exclude MPS, KFM, BPSP, ALKON WT — HUB masuk Support)

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
export const WEEK_NEW = "19–25 Okt";
export const WEEK_PREV = "12–18 Okt";
export const PERIOD_START = "2026-10-19";
export const PERIOD_END = "2026-10-25";
export const PERIOD_PREV_START = "2026-10-12";
export const PERIOD_PREV_END = "2026-10-18";
export const PERIOD_CURR_START = "2026-10-19";
export const PERIOD_CURR_END = "2026-10-25";

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
  },
  {
    "isoDate": "2026-10-19",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-20",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-21",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-22",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-23",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-24",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-25",
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
  "PT. KFM",
  "ALKON WT"
];

export const KPI = {
  "totalWeekGross": 91437.83,
  "totalPrevWeekGross": 84433.14,
  "wowGross": 8.3,
  "totalWeekFleet": 89668.24,
  "totalPrevWeekFleet": 84347.6,
  "wowFleet": 6.31,
  "totalWeekNet": 89668.24,
  "totalPrevWeekNet": 84347.6,
  "wowNet": 6.31,
  "fleetRateGross": 13062.5,
  "fleetRatePrevGross": 12061.9,
  "fleetRateFleet": 12809.7,
  "fleetRatePrevFleet": 12049.7,
  "dtFrHm": 18.21,
  "dtFrKm": 1.07,
  "excFrHm": 20.76,
  "currentStock": 77185.71,
  "runwayDaysLow": 4.8,
  "runwayDaysHigh": 6.0,
  "fullOpsAvg": 12809.7,
  "activeDaysCurr": 7,
  "activeDaysPrev": 7,
  "activeUnitsCurr": 68,
  "activeUnitsPrev": 66,
  "recordsCurr": 460,
  "recordsPrev": 433,
  "estCostIdr": 0,
  "bpspNote": "BPSP loan CLOSED. Gross = as-recorded. Fleet = exclude interco (PT. MPS / PT. KFM). HUB masuk Support."
};
export const EXECUTIVE = {
  "headline": "Konsumsi fleet operasional naik ke 89.668 L (+6,3% WoW vs 84.348 L base week), rata-rata 12.810 L/hari pada 7 hari FULL-ops. Efisiensi Dump Truck membaik: Fuel Ratio turun ke 18,21 L/HM (dari 19,11 L/HM) dengan volume DT relatif stabil 57.615 L (−0,9%), sedangkan Excavator naik ke 20,76 L/HM (dari 19,74) seiring lonjakan volume +25,9% (24.677 L). Stok tetap sehat: suplai 105.000 L (Central Oil Nicon 75.000 L + Bumi Energi Sejati 30.000 L) mendorong stok ke puncak 111.664 L pada 22 Okt, lalu turun ke 77.186 L pada 25 Okt dengan runway ~6,0 hari.",
  "headlineGross": "Gross ledger tercatat 91.438 L (+8,3% WoW vs 84.433 L base week). Volume inter-company melonjak ke 1.770 L (PT. MPS 770 L dan PT. KFM 1.000 L pada 21–22 Okt) dari 86 L minggu lalu. Produksi menyerap 91,8% konsumsi fleet (DT 57.615 L dan EXC 24.677 L); HUB 210 L masuk Support.",
  "riskLevel": "MEDIUM",
  "keyPoints": [
    "✅ Fleet naik +6,3% WoW (89.668 L vs 84.348 L); FR DT membaik ke 18,21 L/HM (dari 19,11)",
    "⚠️ FR Excavator naik ke 20,76 L/HM (+5,2%), volume EXC +25,9%; EXC-029 dan EXC-028 perlu diperiksa",
    "⛽ Suplai 105.000 L (6 pengiriman); stok akhir 77.186 L, turun 34.478 L sejak puncak 22 Okt tanpa stock-in 23–25 Okt",
    "📈 Interco naik ke 1.770 L (PT. MPS 770 L + PT. KFM 1.000 L); HUB 210 L masuk Support"
  ],
  "dtEfficiency": {
    "avg": 18.21,
    "best": {
      "unit": "DT-029",
      "frHm": 16.44
    },
    "worst": {
      "unit": "DT-028",
      "frHm": 21.69
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
    "date": "12/10",
    "isoDate": "2026-10-12",
    "day": "Sen",
    "dayIdx": 0,
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
    "prod": 12330.3,
    "mhr": 684.4,
    "supp": 288.1,
    "interco": 39.9,
    "total": 13342.6,
    "fleet": 13302.8,
    "records": 68,
    "units": 46,
    "mode": "FULL"
  },
  {
    "date": "19/10",
    "isoDate": "2026-10-19",
    "day": "Sen",
    "dayIdx": 0,
    "week": "curr",
    "prod": 12910.0,
    "mhr": 920.5,
    "supp": 126.8,
    "interco": 0.0,
    "total": 13957.2,
    "fleet": 13957.3,
    "records": 74,
    "units": 46,
    "mode": "FULL"
  },
  {
    "date": "20/10",
    "isoDate": "2026-10-20",
    "day": "Sel",
    "dayIdx": 1,
    "week": "curr",
    "prod": 13562.3,
    "mhr": 988.9,
    "supp": 209.0,
    "interco": 0.0,
    "total": 14760.2,
    "fleet": 14760.2,
    "records": 78,
    "units": 51,
    "mode": "FULL"
  },
  {
    "date": "21/10",
    "isoDate": "2026-10-21",
    "day": "Rab",
    "dayIdx": 2,
    "week": "curr",
    "prod": 12676.8,
    "mhr": 666.1,
    "supp": 212.2,
    "interco": 255.3,
    "total": 13810.4,
    "fleet": 13555.1,
    "records": 68,
    "units": 48,
    "mode": "FULL"
  },
  {
    "date": "22/10",
    "isoDate": "2026-10-22",
    "day": "Kam",
    "dayIdx": 3,
    "week": "curr",
    "prod": 11798.3,
    "mhr": 927.1,
    "supp": 191.7,
    "interco": 1514.3,
    "total": 14431.4,
    "fleet": 12917.1,
    "records": 73,
    "units": 46,
    "mode": "FULL"
  },
  {
    "date": "23/10",
    "isoDate": "2026-10-23",
    "day": "Jum",
    "dayIdx": 4,
    "week": "curr",
    "prod": 6896.2,
    "mhr": 439.7,
    "supp": 213.9,
    "interco": 0.0,
    "total": 7549.8,
    "fleet": 7549.8,
    "records": 38,
    "units": 36,
    "mode": "FULL"
  },
  {
    "date": "24/10",
    "isoDate": "2026-10-24",
    "day": "Sab",
    "dayIdx": 5,
    "week": "curr",
    "prod": 9292.6,
    "mhr": 764.8,
    "supp": 306.8,
    "interco": 0.0,
    "total": 10364.2,
    "fleet": 10364.2,
    "records": 50,
    "units": 47,
    "mode": "FULL"
  },
  {
    "date": "25/10",
    "isoDate": "2026-10-25",
    "day": "Min",
    "dayIdx": 6,
    "week": "curr",
    "prod": 15155.7,
    "mhr": 914.1,
    "supp": 494.8,
    "interco": 0.0,
    "total": 16564.6,
    "fleet": 16564.6,
    "records": 79,
    "units": 50,
    "mode": "FULL"
  }
];
export const FORECAST = {
  "history": [
    {
      "date": "12/10",
      "isoDate": "2026-10-12",
      "day": "Sen",
      "week": "prev",
      "actual": 11164.5,
      "ma7": 11164.5
    },
    {
      "date": "13/10",
      "isoDate": "2026-10-13",
      "day": "Sel",
      "week": "prev",
      "actual": 11700.2,
      "ma7": 11432.4
    },
    {
      "date": "14/10",
      "isoDate": "2026-10-14",
      "day": "Rab",
      "week": "prev",
      "actual": 12903.6,
      "ma7": 11922.8
    },
    {
      "date": "15/10",
      "isoDate": "2026-10-15",
      "day": "Kam",
      "week": "prev",
      "actual": 13926.0,
      "ma7": 12423.6
    },
    {
      "date": "16/10",
      "isoDate": "2026-10-16",
      "day": "Jum",
      "week": "prev",
      "actual": 11807.6,
      "ma7": 12300.4
    },
    {
      "date": "17/10",
      "isoDate": "2026-10-17",
      "day": "Sab",
      "week": "prev",
      "actual": 9588.7,
      "ma7": 11848.4
    },
    {
      "date": "18/10",
      "isoDate": "2026-10-18",
      "day": "Min",
      "week": "prev",
      "actual": 13342.6,
      "ma7": 12061.9
    },
    {
      "date": "19/10",
      "isoDate": "2026-10-19",
      "day": "Sen",
      "week": "curr",
      "actual": 13957.2,
      "ma7": 12460.8
    },
    {
      "date": "20/10",
      "isoDate": "2026-10-20",
      "day": "Sel",
      "week": "curr",
      "actual": 14760.2,
      "ma7": 12898.0
    },
    {
      "date": "21/10",
      "isoDate": "2026-10-21",
      "day": "Rab",
      "week": "curr",
      "actual": 13810.4,
      "ma7": 13027.5
    },
    {
      "date": "22/10",
      "isoDate": "2026-10-22",
      "day": "Kam",
      "week": "curr",
      "actual": 14431.4,
      "ma7": 13099.7
    },
    {
      "date": "23/10",
      "isoDate": "2026-10-23",
      "day": "Jum",
      "week": "curr",
      "actual": 7549.8,
      "ma7": 12491.5
    },
    {
      "date": "24/10",
      "isoDate": "2026-10-24",
      "day": "Sab",
      "week": "curr",
      "actual": 10364.2,
      "ma7": 12602.3
    },
    {
      "date": "25/10",
      "isoDate": "2026-10-25",
      "day": "Min",
      "week": "curr",
      "actual": 16564.6,
      "ma7": 13062.5
    }
  ],
  "forecast": [
    {
      "date": "26/10",
      "isoDate": "2026-10-26",
      "projected": 13172.1
    },
    {
      "date": "27/10",
      "isoDate": "2026-10-27",
      "projected": 13253.5
    },
    {
      "date": "28/10",
      "isoDate": "2026-10-28",
      "projected": 13334.8
    },
    {
      "date": "29/10",
      "isoDate": "2026-10-29",
      "projected": 13416.1
    },
    {
      "date": "30/10",
      "isoDate": "2026-10-30",
      "projected": 13497.4
    },
    {
      "date": "31/10",
      "isoDate": "2026-10-31",
      "projected": 13578.8
    },
    {
      "date": "1/11",
      "isoDate": "2026-11-01",
      "projected": 13660.1
    }
  ]
};
export const WEEK_COMPARISON = {
  "prev": {
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
  "curr": {
    "label": "19–25 Okt",
    "total": 91437.83,
    "fleet": 89668.24,
    "avgDaily": 13062.5,
    "avgFleetDaily": 12809.7,
    "records": 460,
    "units": 68,
    "activeDays": 7,
    "prod": 82291.9,
    "mhr": 5621.3,
    "supp": 1755.1,
    "interco": 1769.6,
    "dtQty": 57615.2,
    "excQty": 24676.7,
    "dtFrHm": 18.21,
    "excFrHm": 20.76,
    "bpspRepay": 0
  },
  "deltas": {
    "total": 8.3,
    "fleet": 6.31,
    "avgDaily": 8.3,
    "records": 6.24,
    "units": 3.03,
    "prod": 5.88,
    "mhr": 7.07,
    "supp": 27.67,
    "dtQty": -0.86,
    "excQty": 25.85,
    "dtFrHm": -4.71,
    "excFrHm": 5.17
  }
};
export const DOW_COMPARISON = [
  {
    "day": "Sen",
    "dayIdx": 0,
    "prev": 11164.5,
    "curr": 13957.2,
    "delta": 25.0
  },
  {
    "day": "Sel",
    "dayIdx": 1,
    "prev": 11700.2,
    "curr": 14760.2,
    "delta": 26.2
  },
  {
    "day": "Rab",
    "dayIdx": 2,
    "prev": 12903.6,
    "curr": 13810.4,
    "delta": 7.0
  },
  {
    "day": "Kam",
    "dayIdx": 3,
    "prev": 13926.0,
    "curr": 14431.4,
    "delta": 3.6
  },
  {
    "day": "Jum",
    "dayIdx": 4,
    "prev": 11807.6,
    "curr": 7549.8,
    "delta": -36.1
  },
  {
    "day": "Sab",
    "dayIdx": 5,
    "prev": 9588.7,
    "curr": 10364.2,
    "delta": 8.1
  },
  {
    "day": "Min",
    "dayIdx": 6,
    "prev": 13342.6,
    "curr": 16564.6,
    "delta": 24.1
  }
];
export const DAILY_FLEET_TREND = [
  {
    "date": "12/10",
    "isoDate": "2026-10-12",
    "day": "Sen",
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
    "dtQty": 8768.3,
    "excQty": 3562.0,
    "dtUnits": 27,
    "excUnits": 11,
    "dtFrHm": 18.83,
    "excFrHm": 20.03
  },
  {
    "date": "19/10",
    "isoDate": "2026-10-19",
    "day": "Sen",
    "week": "curr",
    "dtQty": 9420.9,
    "excQty": 3489.0,
    "dtUnits": 27,
    "excUnits": 11,
    "dtFrHm": 19.03,
    "excFrHm": 21.14
  },
  {
    "date": "20/10",
    "isoDate": "2026-10-20",
    "day": "Sel",
    "week": "curr",
    "dtQty": 9153.0,
    "excQty": 4409.3,
    "dtUnits": 29,
    "excUnits": 12,
    "dtFrHm": 19.05,
    "excFrHm": 20.83
  },
  {
    "date": "21/10",
    "isoDate": "2026-10-21",
    "day": "Rab",
    "week": "curr",
    "dtQty": 9819.6,
    "excQty": 2857.1,
    "dtUnits": 31,
    "excUnits": 10,
    "dtFrHm": 18.06,
    "excFrHm": 22.02
  },
  {
    "date": "22/10",
    "isoDate": "2026-10-22",
    "day": "Kam",
    "week": "curr",
    "dtQty": 8643.7,
    "excQty": 3154.7,
    "dtUnits": 26,
    "excUnits": 9,
    "dtFrHm": 18.74,
    "excFrHm": 22.14
  },
  {
    "date": "23/10",
    "isoDate": "2026-10-23",
    "day": "Jum",
    "week": "curr",
    "dtQty": 4792.7,
    "excQty": 2103.5,
    "dtUnits": 22,
    "excUnits": 7,
    "dtFrHm": 18.36,
    "excFrHm": 28.45
  },
  {
    "date": "24/10",
    "isoDate": "2026-10-24",
    "day": "Sab",
    "week": "curr",
    "dtQty": 6615.6,
    "excQty": 2677.0,
    "dtUnits": 27,
    "excUnits": 11,
    "dtFrHm": 17.06,
    "excFrHm": 16.02
  },
  {
    "date": "25/10",
    "isoDate": "2026-10-25",
    "day": "Min",
    "week": "curr",
    "dtQty": 9169.7,
    "excQty": 5986.0,
    "dtUnits": 27,
    "excUnits": 13,
    "dtFrHm": 17.17,
    "excFrHm": 20.09
  }
];

export const DT_DAILY_MATRIX = {
  "units": [
    "DT-058",
    "DT-028",
    "DT-066",
    "DT-077",
    "DT-067",
    "DT-064",
    "DT-025",
    "DT-070",
    "DT-072",
    "DT-069",
    "DT-027",
    "DT-063",
    "DT-029",
    "DT-076",
    "DT-024"
  ],
  "dates": [
    "19/10",
    "20/10",
    "21/10",
    "22/10",
    "23/10",
    "24/10",
    "25/10"
  ],
  "rows": [
    {
      "unit": "DT-058",
      "total": 2639.0,
      "values": [
        {
          "date": "19/10",
          "qty": 413.3
        },
        {
          "date": "20/10",
          "qty": 437.5
        },
        {
          "date": "21/10",
          "qty": 433.1
        },
        {
          "date": "22/10",
          "qty": 380.0
        },
        {
          "date": "23/10",
          "qty": 213.4
        },
        {
          "date": "24/10",
          "qty": 292.6
        },
        {
          "date": "25/10",
          "qty": 468.5
        }
      ]
    },
    {
      "unit": "DT-028",
      "total": 2612.0,
      "values": [
        {
          "date": "19/10",
          "qty": 437.4
        },
        {
          "date": "20/10",
          "qty": 470.1
        },
        {
          "date": "21/10",
          "qty": 393.1
        },
        {
          "date": "22/10",
          "qty": 418.8
        },
        {
          "date": "23/10",
          "qty": 300.3
        },
        {
          "date": "24/10",
          "qty": 123.3
        },
        {
          "date": "25/10",
          "qty": 468.9
        }
      ]
    },
    {
      "unit": "DT-066",
      "total": 2409.0,
      "values": [
        {
          "date": "19/10",
          "qty": 454.7
        },
        {
          "date": "20/10",
          "qty": 279.9
        },
        {
          "date": "21/10",
          "qty": 424.0
        },
        {
          "date": "22/10",
          "qty": 374.4
        },
        {
          "date": "23/10",
          "qty": 0.0
        },
        {
          "date": "24/10",
          "qty": 434.5
        },
        {
          "date": "25/10",
          "qty": 442.1
        }
      ]
    },
    {
      "unit": "DT-077",
      "total": 2294.0,
      "values": [
        {
          "date": "19/10",
          "qty": 376.8
        },
        {
          "date": "20/10",
          "qty": 412.7
        },
        {
          "date": "21/10",
          "qty": 380.7
        },
        {
          "date": "22/10",
          "qty": 443.6
        },
        {
          "date": "23/10",
          "qty": 273.9
        },
        {
          "date": "24/10",
          "qty": 0.0
        },
        {
          "date": "25/10",
          "qty": 405.9
        }
      ]
    },
    {
      "unit": "DT-067",
      "total": 2266.0,
      "values": [
        {
          "date": "19/10",
          "qty": 436.5
        },
        {
          "date": "20/10",
          "qty": 348.7
        },
        {
          "date": "21/10",
          "qty": 281.9
        },
        {
          "date": "22/10",
          "qty": 258.2
        },
        {
          "date": "23/10",
          "qty": 235.8
        },
        {
          "date": "24/10",
          "qty": 259.0
        },
        {
          "date": "25/10",
          "qty": 446.1
        }
      ]
    },
    {
      "unit": "DT-064",
      "total": 2218.0,
      "values": [
        {
          "date": "19/10",
          "qty": 330.3
        },
        {
          "date": "20/10",
          "qty": 342.8
        },
        {
          "date": "21/10",
          "qty": 415.4
        },
        {
          "date": "22/10",
          "qty": 364.2
        },
        {
          "date": "23/10",
          "qty": 228.0
        },
        {
          "date": "24/10",
          "qty": 185.8
        },
        {
          "date": "25/10",
          "qty": 351.5
        }
      ]
    },
    {
      "unit": "DT-025",
      "total": 2202.0,
      "values": [
        {
          "date": "19/10",
          "qty": 462.2
        },
        {
          "date": "20/10",
          "qty": 405.2
        },
        {
          "date": "21/10",
          "qty": 292.0
        },
        {
          "date": "22/10",
          "qty": 276.1
        },
        {
          "date": "23/10",
          "qty": 149.2
        },
        {
          "date": "24/10",
          "qty": 235.9
        },
        {
          "date": "25/10",
          "qty": 381.1
        }
      ]
    },
    {
      "unit": "DT-070",
      "total": 2181.0,
      "values": [
        {
          "date": "19/10",
          "qty": 390.6
        },
        {
          "date": "20/10",
          "qty": 298.2
        },
        {
          "date": "21/10",
          "qty": 388.1
        },
        {
          "date": "22/10",
          "qty": 366.1
        },
        {
          "date": "23/10",
          "qty": 237.0
        },
        {
          "date": "24/10",
          "qty": 269.9
        },
        {
          "date": "25/10",
          "qty": 231.1
        }
      ]
    },
    {
      "unit": "DT-072",
      "total": 2181.0,
      "values": [
        {
          "date": "19/10",
          "qty": 237.8
        },
        {
          "date": "20/10",
          "qty": 356.9
        },
        {
          "date": "21/10",
          "qty": 366.4
        },
        {
          "date": "22/10",
          "qty": 396.0
        },
        {
          "date": "23/10",
          "qty": 225.8
        },
        {
          "date": "24/10",
          "qty": 241.0
        },
        {
          "date": "25/10",
          "qty": 356.8
        }
      ]
    },
    {
      "unit": "DT-069",
      "total": 2175.0,
      "values": [
        {
          "date": "19/10",
          "qty": 171.0
        },
        {
          "date": "20/10",
          "qty": 201.0
        },
        {
          "date": "21/10",
          "qty": 400.4
        },
        {
          "date": "22/10",
          "qty": 429.4
        },
        {
          "date": "23/10",
          "qty": 270.1
        },
        {
          "date": "24/10",
          "qty": 262.0
        },
        {
          "date": "25/10",
          "qty": 441.0
        }
      ]
    },
    {
      "unit": "DT-027",
      "total": 2172.0,
      "values": [
        {
          "date": "19/10",
          "qty": 374.5
        },
        {
          "date": "20/10",
          "qty": 366.2
        },
        {
          "date": "21/10",
          "qty": 332.8
        },
        {
          "date": "22/10",
          "qty": 365.4
        },
        {
          "date": "23/10",
          "qty": 0.0
        },
        {
          "date": "24/10",
          "qty": 268.5
        },
        {
          "date": "25/10",
          "qty": 465.0
        }
      ]
    },
    {
      "unit": "DT-063",
      "total": 2156.0,
      "values": [
        {
          "date": "19/10",
          "qty": 363.6
        },
        {
          "date": "20/10",
          "qty": 421.0
        },
        {
          "date": "21/10",
          "qty": 458.9
        },
        {
          "date": "22/10",
          "qty": 392.6
        },
        {
          "date": "23/10",
          "qty": 171.4
        },
        {
          "date": "24/10",
          "qty": 235.0
        },
        {
          "date": "25/10",
          "qty": 112.9
        }
      ]
    },
    {
      "unit": "DT-029",
      "total": 2147.0,
      "values": [
        {
          "date": "19/10",
          "qty": 346.0
        },
        {
          "date": "20/10",
          "qty": 300.0
        },
        {
          "date": "21/10",
          "qty": 306.9
        },
        {
          "date": "22/10",
          "qty": 328.5
        },
        {
          "date": "23/10",
          "qty": 204.1
        },
        {
          "date": "24/10",
          "qty": 255.0
        },
        {
          "date": "25/10",
          "qty": 406.2
        }
      ]
    },
    {
      "unit": "DT-076",
      "total": 2107.0,
      "values": [
        {
          "date": "19/10",
          "qty": 361.5
        },
        {
          "date": "20/10",
          "qty": 415.2
        },
        {
          "date": "21/10",
          "qty": 386.2
        },
        {
          "date": "22/10",
          "qty": 366.0
        },
        {
          "date": "23/10",
          "qty": 0.0
        },
        {
          "date": "24/10",
          "qty": 358.6
        },
        {
          "date": "25/10",
          "qty": 219.1
        }
      ]
    },
    {
      "unit": "DT-024",
      "total": 2070.0,
      "values": [
        {
          "date": "19/10",
          "qty": 302.1
        },
        {
          "date": "20/10",
          "qty": 349.4
        },
        {
          "date": "21/10",
          "qty": 241.4
        },
        {
          "date": "22/10",
          "qty": 355.4
        },
        {
          "date": "23/10",
          "qty": 203.0
        },
        {
          "date": "24/10",
          "qty": 297.0
        },
        {
          "date": "25/10",
          "qty": 321.8
        }
      ]
    }
  ],
  "maxQty": 470.0,
  "daysBack": 7
};
export const EXC_DAILY_MATRIX = {
  "units": [
    "EXC-026",
    "EXC-014",
    "EXC-029",
    "EXC-027",
    "EXC-025",
    "EXC-022",
    "EXC-012",
    "EXC-024",
    "EXC-031",
    "EXC-023",
    "EXC-028",
    "EXC-030",
    "EXC-020",
    "EXC-002",
    "EXC-001"
  ],
  "dates": [
    "19/10",
    "20/10",
    "21/10",
    "22/10",
    "23/10",
    "24/10",
    "25/10"
  ],
  "rows": [
    {
      "unit": "EXC-026",
      "total": 3858.0,
      "values": [
        {
          "date": "19/10",
          "qty": 678.0
        },
        {
          "date": "20/10",
          "qty": 595.0
        },
        {
          "date": "21/10",
          "qty": 522.0
        },
        {
          "date": "22/10",
          "qty": 577.0
        },
        {
          "date": "23/10",
          "qty": 401.0
        },
        {
          "date": "24/10",
          "qty": 375.0
        },
        {
          "date": "25/10",
          "qty": 710.0
        }
      ]
    },
    {
      "unit": "EXC-014",
      "total": 3627.0,
      "values": [
        {
          "date": "19/10",
          "qty": 606.0
        },
        {
          "date": "20/10",
          "qty": 560.0
        },
        {
          "date": "21/10",
          "qty": 487.0
        },
        {
          "date": "22/10",
          "qty": 540.0
        },
        {
          "date": "23/10",
          "qty": 382.0
        },
        {
          "date": "24/10",
          "qty": 356.0
        },
        {
          "date": "25/10",
          "qty": 696.0
        }
      ]
    },
    {
      "unit": "EXC-029",
      "total": 3061.0,
      "values": [
        {
          "date": "19/10",
          "qty": 460.0
        },
        {
          "date": "20/10",
          "qty": 579.3
        },
        {
          "date": "21/10",
          "qty": 423.0
        },
        {
          "date": "22/10",
          "qty": 0.0
        },
        {
          "date": "23/10",
          "qty": 667.5
        },
        {
          "date": "24/10",
          "qty": 278.0
        },
        {
          "date": "25/10",
          "qty": 653.0
        }
      ]
    },
    {
      "unit": "EXC-027",
      "total": 1968.0,
      "values": [
        {
          "date": "19/10",
          "qty": 293.0
        },
        {
          "date": "20/10",
          "qty": 462.0
        },
        {
          "date": "21/10",
          "qty": 276.0
        },
        {
          "date": "22/10",
          "qty": 0.0
        },
        {
          "date": "23/10",
          "qty": 0.0
        },
        {
          "date": "24/10",
          "qty": 352.0
        },
        {
          "date": "25/10",
          "qty": 585.0
        }
      ]
    },
    {
      "unit": "EXC-025",
      "total": 1913.0,
      "values": [
        {
          "date": "19/10",
          "qty": 208.0
        },
        {
          "date": "20/10",
          "qty": 333.0
        },
        {
          "date": "21/10",
          "qty": 249.1
        },
        {
          "date": "22/10",
          "qty": 380.2
        },
        {
          "date": "23/10",
          "qty": 211.0
        },
        {
          "date": "24/10",
          "qty": 114.0
        },
        {
          "date": "25/10",
          "qty": 418.0
        }
      ]
    },
    {
      "unit": "EXC-022",
      "total": 1882.0,
      "values": [
        {
          "date": "19/10",
          "qty": 165.0
        },
        {
          "date": "20/10",
          "qty": 255.0
        },
        {
          "date": "21/10",
          "qty": 296.0
        },
        {
          "date": "22/10",
          "qty": 340.0
        },
        {
          "date": "23/10",
          "qty": 206.0
        },
        {
          "date": "24/10",
          "qty": 190.0
        },
        {
          "date": "25/10",
          "qty": 430.0
        }
      ]
    },
    {
      "unit": "EXC-012",
      "total": 1847.0,
      "values": [
        {
          "date": "19/10",
          "qty": 133.0
        },
        {
          "date": "20/10",
          "qty": 372.0
        },
        {
          "date": "21/10",
          "qty": 166.0
        },
        {
          "date": "22/10",
          "qty": 438.0
        },
        {
          "date": "23/10",
          "qty": 47.0
        },
        {
          "date": "24/10",
          "qty": 213.0
        },
        {
          "date": "25/10",
          "qty": 478.0
        }
      ]
    },
    {
      "unit": "EXC-024",
      "total": 1568.0,
      "values": [
        {
          "date": "19/10",
          "qty": 287.0
        },
        {
          "date": "20/10",
          "qty": 229.0
        },
        {
          "date": "21/10",
          "qty": 163.0
        },
        {
          "date": "22/10",
          "qty": 244.0
        },
        {
          "date": "23/10",
          "qty": 0.0
        },
        {
          "date": "24/10",
          "qty": 246.0
        },
        {
          "date": "25/10",
          "qty": 399.0
        }
      ]
    },
    {
      "unit": "EXC-031",
      "total": 1415.0,
      "values": [
        {
          "date": "19/10",
          "qty": 188.0
        },
        {
          "date": "20/10",
          "qty": 377.0
        },
        {
          "date": "21/10",
          "qty": 116.0
        },
        {
          "date": "22/10",
          "qty": 153.0
        },
        {
          "date": "23/10",
          "qty": 0.0
        },
        {
          "date": "24/10",
          "qty": 194.0
        },
        {
          "date": "25/10",
          "qty": 387.0
        }
      ]
    },
    {
      "unit": "EXC-023",
      "total": 1373.0,
      "values": [
        {
          "date": "19/10",
          "qty": 233.0
        },
        {
          "date": "20/10",
          "qty": 294.0
        },
        {
          "date": "21/10",
          "qty": 159.0
        },
        {
          "date": "22/10",
          "qty": 243.4
        },
        {
          "date": "23/10",
          "qty": 0.0
        },
        {
          "date": "24/10",
          "qty": 182.0
        },
        {
          "date": "25/10",
          "qty": 262.0
        }
      ]
    },
    {
      "unit": "EXC-028",
      "total": 908.0,
      "values": [
        {
          "date": "19/10",
          "qty": 0.0
        },
        {
          "date": "20/10",
          "qty": 0.0
        },
        {
          "date": "21/10",
          "qty": 0.0
        },
        {
          "date": "22/10",
          "qty": 239.0
        },
        {
          "date": "23/10",
          "qty": 189.0
        },
        {
          "date": "24/10",
          "qty": 177.0
        },
        {
          "date": "25/10",
          "qty": 303.0
        }
      ]
    },
    {
      "unit": "EXC-030",
      "total": 490.0,
      "values": [
        {
          "date": "19/10",
          "qty": 238.0
        },
        {
          "date": "20/10",
          "qty": 252.0
        },
        {
          "date": "21/10",
          "qty": 0.0
        },
        {
          "date": "22/10",
          "qty": 0.0
        },
        {
          "date": "23/10",
          "qty": 0.0
        },
        {
          "date": "24/10",
          "qty": 0.0
        },
        {
          "date": "25/10",
          "qty": 0.0
        }
      ]
    },
    {
      "unit": "EXC-020",
      "total": 465.0,
      "values": [
        {
          "date": "19/10",
          "qty": 0.0
        },
        {
          "date": "20/10",
          "qty": 0.0
        },
        {
          "date": "21/10",
          "qty": 0.0
        },
        {
          "date": "22/10",
          "qty": 0.0
        },
        {
          "date": "23/10",
          "qty": 0.0
        },
        {
          "date": "24/10",
          "qty": 0.0
        },
        {
          "date": "25/10",
          "qty": 465.0
        }
      ]
    },
    {
      "unit": "EXC-002",
      "total": 200.0,
      "values": [
        {
          "date": "19/10",
          "qty": 0.0
        },
        {
          "date": "20/10",
          "qty": 0.0
        },
        {
          "date": "21/10",
          "qty": 0.0
        },
        {
          "date": "22/10",
          "qty": 0.0
        },
        {
          "date": "23/10",
          "qty": 0.0
        },
        {
          "date": "24/10",
          "qty": 0.0
        },
        {
          "date": "25/10",
          "qty": 200.0
        }
      ]
    },
    {
      "unit": "EXC-001",
      "total": 101.0,
      "values": [
        {
          "date": "19/10",
          "qty": 0.0
        },
        {
          "date": "20/10",
          "qty": 101.0
        },
        {
          "date": "21/10",
          "qty": 0.0
        },
        {
          "date": "22/10",
          "qty": 0.0
        },
        {
          "date": "23/10",
          "qty": 0.0
        },
        {
          "date": "24/10",
          "qty": 0.0
        },
        {
          "date": "25/10",
          "qty": 0.0
        }
      ]
    }
  ],
  "maxQty": 710.0,
  "daysBack": 7
};
export const DT_SCORECARD = [
  {
    "unit": "DT-058",
    "frHm": 20.84,
    "frKm": 0.99,
    "fuel": 2639.0,
    "records": 12,
    "hmTotal": 126.6,
    "kmTotal": 2660.0,
    "firstRefuel": false,
    "percentile": 94.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-028",
    "frHm": 21.69,
    "frKm": 1.09,
    "fuel": 2612.0,
    "records": 12,
    "hmTotal": 120.4,
    "kmTotal": 2404.0,
    "firstRefuel": false,
    "percentile": 100.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-066",
    "frHm": 20.25,
    "frKm": 1.16,
    "fuel": 2409.0,
    "records": 11,
    "hmTotal": 119.0,
    "kmTotal": 2076.0,
    "firstRefuel": false,
    "percentile": 82.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-077",
    "frHm": 18.74,
    "frKm": 0.95,
    "fuel": 2294.0,
    "records": 11,
    "hmTotal": 122.4,
    "kmTotal": 2403.0,
    "firstRefuel": false,
    "percentile": 47.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-067",
    "frHm": 19.55,
    "frKm": 1.01,
    "fuel": 2266.0,
    "records": 10,
    "hmTotal": 115.9,
    "kmTotal": 2252.0,
    "firstRefuel": false,
    "percentile": 59.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-064",
    "frHm": 20.22,
    "frKm": 1.15,
    "fuel": 2218.0,
    "records": 12,
    "hmTotal": 109.7,
    "kmTotal": 1925.0,
    "firstRefuel": false,
    "percentile": 79.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-025",
    "frHm": 20.03,
    "frKm": 1.13,
    "fuel": 2202.0,
    "records": 10,
    "hmTotal": 109.9,
    "kmTotal": 1955.0,
    "firstRefuel": false,
    "percentile": 74.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-070",
    "frHm": 18.42,
    "frKm": 1.08,
    "fuel": 2181.0,
    "records": 11,
    "hmTotal": 118.4,
    "kmTotal": 2022.0,
    "firstRefuel": false,
    "percentile": 41.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-072",
    "frHm": 17.86,
    "frKm": 1.01,
    "fuel": 2181.0,
    "records": 11,
    "hmTotal": 122.1,
    "kmTotal": 2154.0,
    "firstRefuel": false,
    "percentile": 32.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-069",
    "frHm": 19.45,
    "frKm": 0.97,
    "fuel": 2175.0,
    "records": 10,
    "hmTotal": 111.8,
    "kmTotal": 2238.0,
    "firstRefuel": false,
    "percentile": 56.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-027",
    "frHm": 19.64,
    "frKm": 1.08,
    "fuel": 2172.0,
    "records": 11,
    "hmTotal": 110.6,
    "kmTotal": 2010.0,
    "firstRefuel": false,
    "percentile": 65.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-063",
    "frHm": 20.39,
    "frKm": 1.07,
    "fuel": 2156.0,
    "records": 11,
    "hmTotal": 105.7,
    "kmTotal": 2012.0,
    "firstRefuel": false,
    "percentile": 88.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-029",
    "frHm": 16.44,
    "frKm": 1.1,
    "fuel": 2147.0,
    "records": 12,
    "hmTotal": 130.6,
    "kmTotal": 1953.0,
    "firstRefuel": false,
    "percentile": 21.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-076",
    "frHm": 20.01,
    "frKm": 1.01,
    "fuel": 2107.0,
    "records": 11,
    "hmTotal": 105.3,
    "kmTotal": 2080.0,
    "firstRefuel": false,
    "percentile": 71.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-024",
    "frHm": 20.06,
    "frKm": 1.04,
    "fuel": 2070.0,
    "records": 11,
    "hmTotal": 103.2,
    "kmTotal": 2000.0,
    "firstRefuel": false,
    "percentile": 76.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-065",
    "frHm": 18.59,
    "frKm": 1.02,
    "fuel": 2060.0,
    "records": 11,
    "hmTotal": 110.8,
    "kmTotal": 2022.0,
    "firstRefuel": false,
    "percentile": 44.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-030",
    "frHm": 17.62,
    "frKm": 0.96,
    "fuel": 2036.0,
    "records": 10,
    "hmTotal": 115.5,
    "kmTotal": 2118.0,
    "firstRefuel": false,
    "percentile": 24.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-062",
    "frHm": 19.14,
    "frKm": 1.08,
    "fuel": 2019.0,
    "records": 10,
    "hmTotal": 105.5,
    "kmTotal": 1871.0,
    "firstRefuel": false,
    "percentile": 53.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-073",
    "frHm": 17.92,
    "frKm": 1.03,
    "fuel": 2011.0,
    "records": 12,
    "hmTotal": 112.2,
    "kmTotal": 1949.0,
    "firstRefuel": false,
    "percentile": 35.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-078",
    "frHm": 18.34,
    "frKm": 1.08,
    "fuel": 1989.0,
    "records": 10,
    "hmTotal": 108.5,
    "kmTotal": 1850.0,
    "firstRefuel": false,
    "percentile": 38.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-023",
    "frHm": 21.59,
    "frKm": 1.08,
    "fuel": 1915.0,
    "records": 9,
    "hmTotal": 88.7,
    "kmTotal": 1777.0,
    "firstRefuel": false,
    "percentile": 97.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-071",
    "frHm": 17.7,
    "frKm": 1.08,
    "fuel": 1761.0,
    "records": 9,
    "hmTotal": 99.5,
    "kmTotal": 1627.0,
    "firstRefuel": false,
    "percentile": 26.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-074",
    "frHm": 20.73,
    "frKm": 1.11,
    "fuel": 1596.0,
    "records": 7,
    "hmTotal": 77.0,
    "kmTotal": 1441.0,
    "firstRefuel": false,
    "percentile": 91.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-020",
    "frHm": 20.34,
    "frKm": 1.19,
    "fuel": 1480.0,
    "records": 7,
    "hmTotal": 72.8,
    "kmTotal": 1240.0,
    "firstRefuel": false,
    "percentile": 85.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-068",
    "frHm": 18.97,
    "frKm": 1.14,
    "fuel": 1347.0,
    "records": 7,
    "hmTotal": 71.0,
    "kmTotal": 1186.0,
    "firstRefuel": false,
    "percentile": 50.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-075",
    "frHm": 19.62,
    "frKm": 1.04,
    "fuel": 1287.0,
    "records": 7,
    "hmTotal": 65.6,
    "kmTotal": 1234.0,
    "firstRefuel": false,
    "percentile": 62.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-019",
    "frHm": 19.74,
    "frKm": 1.04,
    "fuel": 1060.0,
    "records": 5,
    "hmTotal": 53.7,
    "kmTotal": 1023.0,
    "firstRefuel": false,
    "percentile": 68.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-007",
    "frHm": 8.74,
    "frKm": 1.11,
    "fuel": 851.0,
    "records": 5,
    "hmTotal": 97.4,
    "kmTotal": 765.0,
    "firstRefuel": false,
    "percentile": 6.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-008",
    "frHm": 6.95,
    "frKm": 1.78,
    "fuel": 664.0,
    "records": 3,
    "hmTotal": 95.5,
    "kmTotal": 372.0,
    "firstRefuel": false,
    "percentile": 3.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-011",
    "frHm": 10.18,
    "frKm": 1.35,
    "fuel": 459.0,
    "records": 3,
    "hmTotal": 45.1,
    "kmTotal": 340.0,
    "firstRefuel": false,
    "percentile": 15.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-010",
    "frHm": 9.09,
    "frKm": 1.36,
    "fuel": 421.0,
    "records": 4,
    "hmTotal": 46.3,
    "kmTotal": 309.0,
    "firstRefuel": false,
    "percentile": 9.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-015",
    "frHm": 12.95,
    "frKm": 1.67,
    "fuel": 416.0,
    "records": 2,
    "hmTotal": 32.1,
    "kmTotal": 249.0,
    "firstRefuel": false,
    "percentile": 18.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-004",
    "frHm": 9.75,
    "frKm": 1.42,
    "fuel": 236.0,
    "records": 1,
    "hmTotal": 24.2,
    "kmTotal": 166.0,
    "firstRefuel": false,
    "percentile": 12.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-021",
    "frHm": 17.73,
    "frKm": 0.98,
    "fuel": 179.0,
    "records": 1,
    "hmTotal": 10.1,
    "kmTotal": 183.0,
    "firstRefuel": false,
    "percentile": 29.0,
    "quartile": "Q2"
  }
];
export const EXC_SCORECARD = [
  {
    "unit": "EXC-026",
    "model": "SY365H",
    "frHm": 31.23,
    "frKm": 0,
    "fuel": 3858.0,
    "records": 10,
    "hmTotal": 123.5,
    "firstRefuel": false,
    "percentile": 100.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "EXC-014",
    "model": "SY365H",
    "frHm": 28.81,
    "frKm": 0,
    "fuel": 3627.0,
    "records": 10,
    "hmTotal": 125.9,
    "firstRefuel": false,
    "percentile": 93.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "EXC-029",
    "model": "SY365H",
    "frHm": 27.32,
    "frKm": 0,
    "fuel": 3061.0,
    "records": 8,
    "hmTotal": 112.0,
    "firstRefuel": false,
    "percentile": 80.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "EXC-027",
    "model": "SY365H",
    "frHm": 20.94,
    "frKm": 0,
    "fuel": 1968.0,
    "records": 6,
    "hmTotal": 94.0,
    "firstRefuel": false,
    "percentile": 73.0,
    "quartile": "Q3"
  },
  {
    "unit": "EXC-025",
    "model": "SY215C",
    "frHm": 18.01,
    "frKm": 0,
    "fuel": 1913.0,
    "records": 11,
    "hmTotal": 106.2,
    "firstRefuel": false,
    "percentile": 53.0,
    "quartile": "Q3"
  },
  {
    "unit": "EXC-022",
    "model": "SY215C",
    "frHm": 18.65,
    "frKm": 0,
    "fuel": 1882.0,
    "records": 9,
    "hmTotal": 100.9,
    "firstRefuel": false,
    "percentile": 60.0,
    "quartile": "Q3"
  },
  {
    "unit": "EXC-012",
    "model": "SY215C",
    "frHm": 19.32,
    "frKm": 0,
    "fuel": 1847.0,
    "records": 10,
    "hmTotal": 95.6,
    "firstRefuel": false,
    "percentile": 67.0,
    "quartile": "Q3"
  },
  {
    "unit": "EXC-024",
    "model": "SY215C",
    "frHm": 16.7,
    "frKm": 0,
    "fuel": 1568.0,
    "records": 9,
    "hmTotal": 93.9,
    "firstRefuel": false,
    "percentile": 40.0,
    "quartile": "Q2"
  },
  {
    "unit": "EXC-031",
    "model": "SY215C",
    "frHm": 11.7,
    "frKm": 0,
    "fuel": 1415.0,
    "records": 9,
    "hmTotal": 120.9,
    "firstRefuel": false,
    "percentile": 13.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "EXC-023",
    "model": "SY215C",
    "frHm": 17.3,
    "frKm": 0,
    "fuel": 1373.0,
    "records": 8,
    "hmTotal": 79.4,
    "firstRefuel": false,
    "percentile": 47.0,
    "quartile": "Q2"
  },
  {
    "unit": "EXC-028",
    "model": "SY215C",
    "frHm": 13.81,
    "frKm": 0,
    "fuel": 908.0,
    "records": 5,
    "hmTotal": 48.4,
    "firstRefuel": false,
    "percentile": 20.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "EXC-030",
    "model": "SY215C",
    "frHm": 14.57,
    "frKm": 0,
    "fuel": 490.0,
    "records": 2,
    "hmTotal": 33.6,
    "firstRefuel": false,
    "percentile": 33.0,
    "quartile": "Q2"
  },
  {
    "unit": "EXC-020",
    "model": "SY365H",
    "frHm": 28.2,
    "frKm": 0,
    "fuel": 465.0,
    "records": 1,
    "hmTotal": 16.5,
    "firstRefuel": false,
    "percentile": 87.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "EXC-002",
    "model": "XE215C",
    "frHm": 10.47,
    "frKm": 0,
    "fuel": 200.0,
    "records": 1,
    "hmTotal": 19.1,
    "firstRefuel": false,
    "percentile": 7.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "EXC-001",
    "model": "XE215C",
    "frHm": 14.03,
    "frKm": 0,
    "fuel": 101.0,
    "records": 1,
    "hmTotal": 7.2,
    "firstRefuel": false,
    "percentile": 27.0,
    "quartile": "Q2"
  }
];

export const CATEGORY_BREAKDOWN = [
  {
    "cat": "Production",
    "qty": 82291.9,
    "records": 389,
    "units": 49,
    "frHm": 18.9,
    "avgPerRec": 211.5,
    "subBreakdown": [
      {
        "jenis": "DUMP TRUCK",
        "qty": 57615.2,
        "units": 34
      },
      {
        "jenis": "EXCAVATOR",
        "qty": 24676.7,
        "units": 15
      }
    ]
  },
  {
    "cat": "MHR",
    "qty": 5621.3,
    "records": 33,
    "units": 7,
    "frHm": 10.3,
    "avgPerRec": 170.3,
    "subBreakdown": [
      {
        "jenis": "MOTOR GRADER",
        "qty": 2344.2,
        "units": 2
      },
      {
        "jenis": "WATER TRUCK",
        "qty": 1857.0,
        "units": 2
      },
      {
        "jenis": "COMPACTOR",
        "qty": 1111.3,
        "units": 2
      },
      {
        "jenis": "WHEEL LOADER",
        "qty": 308.8,
        "units": 1
      }
    ]
  },
  {
    "cat": "Support",
    "qty": 1755.1,
    "records": 28,
    "units": 12,
    "frHm": 4.1,
    "avgPerRec": 62.7,
    "subBreakdown": [
      {
        "jenis": "TOYOTA HILUX",
        "qty": 724.8,
        "units": 5
      },
      {
        "jenis": "FUEL TRUCK",
        "qty": 319.1,
        "units": 1
      },
      {
        "jenis": "GENSET",
        "qty": 239.0,
        "units": 1
      },
      {
        "jenis": "HUB",
        "qty": 210.0,
        "units": 1
      },
      {
        "jenis": "TOWER LAMP",
        "qty": 152.0,
        "units": 3
      },
      {
        "jenis": "MANHOUL",
        "qty": 110.1,
        "units": 1
      }
    ]
  }
];
export const LOCATION_BREAKDOWN = [
  {
    "location": "Fuel Station",
    "qty": 64990.5,
    "records": 341,
    "units": 52,
    "avgPerRec": 190.6,
    "catMix": {
      "Interco": 113.6,
      "MHR": 4523.9,
      "Production": 58989.0,
      "Support": 1364.1
    }
  },
  {
    "location": "EFO",
    "qty": 10840.3,
    "records": 47,
    "units": 12,
    "avgPerRec": 230.6,
    "catMix": {
      "MHR": 192.4,
      "Production": 10605.9,
      "Support": 42.0
    }
  },
  {
    "location": "ETO",
    "qty": 9036.0,
    "records": 33,
    "units": 10,
    "avgPerRec": 273.8,
    "catMix": {
      "Interco": 197.0,
      "MHR": 905.0,
      "Production": 7848.0,
      "Support": 86.0
    }
  },
  {
    "location": "Jetty",
    "qty": 4740.0,
    "records": 29,
    "units": 8,
    "avgPerRec": 163.4,
    "catMix": {
      "Production": 4716.0,
      "Support": 24.0
    }
  },
  {
    "location": "MPS",
    "qty": 1459.0,
    "records": 7,
    "units": 2,
    "avgPerRec": 208.4,
    "catMix": {
      "Interco": 1459.0
    }
  },
  {
    "location": "Mess TMI",
    "qty": 239.0,
    "records": 2,
    "units": 1,
    "avgPerRec": 119.5,
    "catMix": {
      "Support": 239.0
    }
  },
  {
    "location": "jetty",
    "qty": 133.0,
    "records": 1,
    "units": 1,
    "avgPerRec": 133.0,
    "catMix": {
      "Production": 133.0
    }
  }
];
export const SHIFT_ANALYSIS = [
  {
    "shift": "DS",
    "qty": 90469.4,
    "records": 455,
    "units": 70,
    "avgPerRec": 198.8
  },
  {
    "shift": "NS",
    "qty": 968.5,
    "records": 5,
    "units": 5,
    "avgPerRec": 193.7
  }
];
export const OPERATORS = [
  {
    "operator": "Rusdin",
    "refuels": 39,
    "qty": 7849.3,
    "avgPerRec": 201.3,
    "units": 16
  },
  {
    "operator": "Robi Menden",
    "refuels": 10,
    "qty": 3858.0,
    "avgPerRec": 385.8,
    "units": 1
  },
  {
    "operator": "Ardiyanto",
    "refuels": 17,
    "qty": 3496.0,
    "avgPerRec": 205.6,
    "units": 4
  },
  {
    "operator": "Yudin Sappogo",
    "refuels": 11,
    "qty": 3263.9,
    "avgPerRec": 296.7,
    "units": 3
  },
  {
    "operator": "Andri Paulo",
    "refuels": 13,
    "qty": 2629.9,
    "avgPerRec": 202.3,
    "units": 2
  },
  {
    "operator": "Hendrik",
    "refuels": 9,
    "qty": 2448.0,
    "avgPerRec": 272.0,
    "units": 2
  },
  {
    "operator": "Safril",
    "refuels": 12,
    "qty": 2354.4,
    "avgPerRec": 196.2,
    "units": 4
  },
  {
    "operator": "Yohanis Jojon",
    "refuels": 12,
    "qty": 2341.3,
    "avgPerRec": 195.1,
    "units": 2
  },
  {
    "operator": "Aswar",
    "refuels": 12,
    "qty": 2316.5,
    "avgPerRec": 193.0,
    "units": 2
  },
  {
    "operator": "Muh. Nampe Sabir",
    "refuels": 20,
    "qty": 2118.3,
    "avgPerRec": 105.9,
    "units": 7
  }
];
export const ANOMALIES = [
  {
    "id": "ANO-01",
    "type": "STOCK",
    "unit": "STOCK SITE BPSP",
    "date": "23–25 Okt",
    "issue": "Stok EOD turun tajam dari puncak 111.664 L (22 Okt) ke 77.186 L (25 Okt), −34.478 L dalam 3 hari tanpa stock-in. Runway masih ~6,0 hari, namun perlu jadwal pengiriman berikutnya.",
    "severity": "MEDIUM",
    "status": "OPEN"
  },
  {
    "id": "ANO-02",
    "type": "UNIT",
    "unit": "DT-023",
    "date": "25 Okt",
    "issue": "FR outlier 81,8 L/HM (Qty 310,9 L vs HM_diff 3,8 jam). Pada 19 Okt juga 41,7 L/HM (258,4 L / 6,2 jam). Periksa idling/standby tinggi atau pencatatan HM.",
    "severity": "MEDIUM",
    "status": "OPEN"
  },
  {
    "id": "ANO-03",
    "type": "UNIT",
    "unit": "EXC-029",
    "date": "23 Okt",
    "issue": "2 pengisian dalam sehari: 348,5 L (HM_diff 7,0 jam, 49,9 L/HM) dan 319,0 L (4,7 jam, 67,7 L/HM). Memicu lonjakan FR Excavator harian ke 28,45 L/HM.",
    "severity": "MEDIUM",
    "status": "OPEN"
  },
  {
    "id": "ANO-04",
    "type": "DATA",
    "unit": "EXC-028",
    "date": "22 Okt",
    "issue": "HM_diff = 276,9 jam untuk 239 L (kemungkinan salah input HM terakhir). Transaksi dikecualikan dari hitungan FR; mohon koreksi data HM.",
    "severity": "HIGH",
    "status": "OPEN"
  },
  {
    "id": "ANO-05",
    "type": "UNIT",
    "unit": "DT-078 / DT-064",
    "date": "19 Okt",
    "issue": "Short-interval top-up: DT-078 141,0 L / 2,4 jam (58,8 L/HM) dan DT-064 129,7 L / 2,7 jam (48,0 L/HM).",
    "severity": "LOW",
    "status": "OPEN"
  },
  {
    "id": "ANO-06",
    "type": "DATA",
    "unit": "DT-008",
    "date": "25 Okt",
    "issue": "HM interval panjang: HM_diff 39,5 jam dengan refuel hanya 160,0 L (4,1 L/HM). Indikasi refuel antara tidak tercatat; FR DT-008 tidak representatif.",
    "severity": "LOW",
    "status": "OPEN"
  },
  {
    "id": "ANO-07",
    "type": "INTERCO",
    "unit": "PT. MPS / PT. KFM",
    "date": "21–22 Okt",
    "issue": "Transfer inter-company naik tajam ke 1.769,6 L: PT. MPS 769,6 L (5 transaksi) dan PT. KFM 1.000 L (5 x 200 L, 22 Okt, lokasi MPS). Di-exclude dari metrik fleet.",
    "severity": "MEDIUM",
    "status": "OPEN"
  },
  {
    "id": "ANO-08",
    "type": "SUPPORT",
    "unit": "HUB",
    "date": "24 Okt",
    "issue": "1 transaksi pengisian HUB 210,0 L di Fuel Station diklasifikasikan ke kategori Support operasional.",
    "severity": "INFO",
    "status": "CLOSED"
  },
  {
    "id": "ANO-09",
    "type": "VENDOR",
    "unit": "CENTRAL OIL & BUMI ENERGI SEJATI",
    "date": "19–22 Okt",
    "issue": "Pasokan 105.000 L dalam 6 pengiriman: Central Oil Nicon 75.000 L (17.973; 33.000; 18.000; 6.027 L) dan Bumi Energi Sejati 30.000 L (10.000; 20.000 L). Kekurangan 27 L pada 19 Okt telah diganti 22 Okt.",
    "severity": "GOOD",
    "status": "CLOSED"
  },
  {
    "id": "ANO-10",
    "type": "DATA",
    "unit": "TOYOTA HILUX (LV)",
    "date": "19–25 Okt",
    "issue": "19 transaksi HM_diff <= 0 terutama kendaraan LV/Support yang menggunakan odometer (KM). Tidak ada isu integritas data.",
    "severity": "INFO",
    "status": "CLOSED"
  }
];
export const DATA_QUALITY = {
  "totalRecords": 460,
  "missingHM": 1,
  "missingKM": 0,
  "zeroOrNegHM": 19,
  "hmOver50": 1,
  "zeroOrNegKM": 141,
  "missingOperator": 0,
  "missingLocation": 0,
  "bulkRows": 0,
  "remarkFilled": 460,
  "completePct": 99.8
};
export const STOCK_SUMMARY = {
  "startStock": 63623.54,
  "endStock": 77185.71,
  "minStock": 67639.33,
  "minStockDate": "19/10",
  "totalInRecorded": 105000.0,
  "totalInCurrWeekRecorded": 105000.0,
  "totalOutGross": 91437.83,
  "bpspLoanIn": 0,
  "bpspRepayOutPrev": 0,
  "bpspRepayOutCurr": 0,
  "totalInVendorOnly": 105000.0,
  "totalInCurrWeekVendorOnly": 105000.0,
  "totalOutFleetNet": 89668.24,
  "netChange": 13562.17,
  "netChangeFleet": 15331.76,
  "stockInEvents": [
    {
      "date": "19/10",
      "qty": 17973.0,
      "type": "vendor",
      "vendor": "PT. CENTRAL OIL INDONESIA NICON",
      "remarks": "KURANG 27 LITER"
    },
    {
      "date": "20/10",
      "qty": 33000.0,
      "type": "vendor",
      "vendor": "PT. CENTRAL OIL INDONESIA NICON",
      "remarks": "DONE"
    },
    {
      "date": "21/10",
      "qty": 18000.0,
      "type": "vendor",
      "vendor": "PT. CENTRAL OIL INDONESIA NICON",
      "remarks": "DONE"
    },
    {
      "date": "21/10",
      "qty": 10000.0,
      "type": "vendor",
      "vendor": "PT. BUMI ENERGI SEJATI",
      "remarks": "DONE"
    },
    {
      "date": "22/10",
      "qty": 6027.0,
      "type": "vendor",
      "vendor": "PT. CENTRAL OIL INDONESIA NICON",
      "remarks": "GANTI 27 LITER"
    },
    {
      "date": "22/10",
      "qty": 20000.0,
      "type": "vendor",
      "vendor": "PT. BUMI ENERGI SEJATI",
      "remarks": "DONE"
    }
  ],
  "bpspEvents": []
};
export const STOCK_DATA = [
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
  },
  {
    "date": "19/10",
    "lastStock": 67639.33
  },
  {
    "date": "20/10",
    "lastStock": 85879.1
  },
  {
    "date": "21/10",
    "lastStock": 100068.67
  },
  {
    "date": "22/10",
    "lastStock": 111664.3
  },
  {
    "date": "23/10",
    "lastStock": 104114.52
  },
  {
    "date": "24/10",
    "lastStock": 93750.28
  },
  {
    "date": "25/10",
    "lastStock": 77185.71
  }
];
export const VENDORS = [
  {
    "vendor": "PT. CENTRAL OIL INDONESIA NICON",
    "deliveries": 4,
    "totalQty": 75000.0,
    "avgQty": 18750.0,
    "remarks": [
      "KURANG 27 LITER",
      "DONE",
      "GANTI 27 LITER"
    ]
  },
  {
    "vendor": "PT. BUMI ENERGI SEJATI",
    "deliveries": 2,
    "totalQty": 30000.0,
    "avgQty": 15000.0,
    "remarks": [
      "DONE"
    ]
  }
];
export const INTER_COMPANY = {
  "note": "Entry PT. MPS (769,59 L) dan PT. KFM (1.000 L) pada 21–22 Okt dicatat sebagai inter-company transfer dan di-exclude dari metrik fleet. Transaksi HUB (210 L, 24 Okt) tetap masuk kategori Support operasional.",
  "events": [
    {
      "date": "2026-10-21",
      "unit": "PT. MPS",
      "qty": 58.29,
      "direction": "OUT",
      "type": "SITE_TRANSFER",
      "note": "Refuel MPS"
    },
    {
      "date": "2026-10-21",
      "unit": "PT. MPS",
      "qty": 197.0,
      "direction": "OUT",
      "type": "SITE_TRANSFER",
      "note": "Refuel MPS"
    },
    {
      "date": "2026-10-22",
      "unit": "PT. MPS",
      "qty": 55.3,
      "direction": "OUT",
      "type": "SITE_TRANSFER",
      "note": "Refuel MPS"
    },
    {
      "date": "2026-10-22",
      "unit": "PT. MPS",
      "qty": 259.0,
      "direction": "OUT",
      "type": "SITE_TRANSFER",
      "note": "Refuel MPS"
    },
    {
      "date": "2026-10-22",
      "unit": "PT. KFM",
      "qty": 200.0,
      "direction": "OUT",
      "type": "SITE_TRANSFER",
      "note": "Refuel KFM"
    },
    {
      "date": "2026-10-22",
      "unit": "PT. KFM",
      "qty": 200.0,
      "direction": "OUT",
      "type": "SITE_TRANSFER",
      "note": "Refuel KFM"
    },
    {
      "date": "2026-10-22",
      "unit": "PT. KFM",
      "qty": 200.0,
      "direction": "OUT",
      "type": "SITE_TRANSFER",
      "note": "Refuel KFM"
    },
    {
      "date": "2026-10-22",
      "unit": "PT. KFM",
      "qty": 200.0,
      "direction": "OUT",
      "type": "SITE_TRANSFER",
      "note": "Refuel KFM"
    },
    {
      "date": "2026-10-22",
      "unit": "PT. KFM",
      "qty": 200.0,
      "direction": "OUT",
      "type": "SITE_TRANSFER",
      "note": "Refuel KFM"
    },
    {
      "date": "2026-10-22",
      "unit": "PT. MPS",
      "qty": 200.0,
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
