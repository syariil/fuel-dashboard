// AUTO-GENERATED — Analisis Fuel Site BPSP
// Source: fuel.xlsx stock-out + stock-in (verified 2026-11-02)
// Base week (prev): 2026-10-19 → 2026-10-25 (19–25 Okt)
// Curr week (new):  2026-10-26 → 2026-11-01 (26 Okt–1 Nov)
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
export const WEEK_NEW = "26 Okt–1 Nov";
export const WEEK_PREV = "19–25 Okt";
export const PERIOD_START = "2026-10-26";
export const PERIOD_END = "2026-11-01";
export const PERIOD_PREV_START = "2026-10-19";
export const PERIOD_PREV_END = "2026-10-25";
export const PERIOD_CURR_START = "2026-10-26";
export const PERIOD_CURR_END = "2026-11-01";

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
  },
  {
    "isoDate": "2026-10-26",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-27",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-28",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-29",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-30",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-10-31",
    "mode": "FULL",
    "note": ""
  },
  {
    "isoDate": "2026-11-01",
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
  "totalWeekGross": 88960.86,
  "totalPrevWeekGross": 91437.83,
  "wowGross": -2.71,
  "totalWeekFleet": 88846.49,
  "totalPrevWeekFleet": 89668.24,
  "wowFleet": -0.92,
  "totalWeekNet": 88846.49,
  "totalPrevWeekNet": 89668.24,
  "wowNet": -0.92,
  "fleetRateGross": 12708.7,
  "fleetRatePrevGross": 13062.5,
  "fleetRateFleet": 12692.4,
  "fleetRatePrevFleet": 12809.7,
  "dtFrHm": 18.53,
  "dtFrKm": 1.085,
  "excFrHm": 20.82,
  "currentStock": 41224.85,
  "runwayDaysLow": 2.6,
  "runwayDaysHigh": 3.2,
  "fullOpsAvg": 12692.4,
  "activeDaysCurr": 7,
  "activeDaysPrev": 7,
  "activeUnitsCurr": 64,
  "activeUnitsPrev": 68,
  "recordsCurr": 465,
  "recordsPrev": 460,
  "estCostIdr": 0,
  "bpspNote": "BPSP loan CLOSED. Gross = as-recorded. Fleet = exclude interco (PT. MPS / PT. KFM). HUB masuk Support."
};
export const EXECUTIVE = {
  "headline": "Gross ledger tercatat 88.961 L (−2,7% WoW vs 91.438 L base week) dan konsumsi fleet operasional 88.846 L (−0,9% WoW vs 89.668 L), rata-rata 12.692 L/hari pada 7 hari FULL-ops. Selisih gross–fleet hanya 114 L (inter-company PT. MPS, turun tajam dari 1.770 L minggu lalu). Produksi menyerap 92,5% konsumsi fleet: Dump Truck 56.422 L (−2,1%) dengan Fuel Ratio sedikit naik ke 18,53 L/HM (dari 18,21), dan Excavator 25.778 L (+4,5%) dengan FR 20,82 L/HM (dari 20,76). Namun stok memasuki zona waspada: stock-in hanya 53.000 L (Central Oil Nicon) vs konsumsi 88.961 L sehingga stok turun dari 77.186 L ke 41.225 L, titik terendah 37.051 L pada 31 Okt dan runway tinggal ~3,2 hari.",
  "riskLevel": "HIGH",
  "keyPoints": [
    "⚠️ Stok akhir 41.225 L (turun 35.961 L WoW), di bawah ROP 45.000 L sejak 29 Okt; runway ~3,2 hari",
    "⛽ Stock-in hanya 53.000 L (5 pengiriman Central Oil Nicon), tanpa pasokan 26–27 Okt dan tanpa Bumi Energi Sejati",
    "✅ Fleet stabil −0,9% WoW (88.846 L vs 89.668 L); FR DT 18,53 L/HM dan FR EXC 20,82 L/HM tetap dalam rentang normal",
    "📉 Interco turun ke 114 L (PT. MPS); tidak ada HUB dan PT. KFM minggu ini"
  ],
  "dtEfficiency": {
    "avg": 18.53,
    "best": {
      "unit": "DT-058",
      "frHm": 17.51
    },
    "worst": {
      "unit": "DT-069",
      "frHm": 21.66
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
    "date": "19/10",
    "isoDate": "2026-10-19",
    "day": "Sen",
    "dayIdx": 0,
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
    "prod": 15155.7,
    "mhr": 914.1,
    "supp": 494.8,
    "interco": 0.0,
    "total": 16564.6,
    "fleet": 16564.6,
    "records": 79,
    "units": 50,
    "mode": "FULL"
  },
  {
    "date": "26/10",
    "isoDate": "2026-10-26",
    "day": "Sen",
    "dayIdx": 0,
    "week": "curr",
    "prod": 13027.8,
    "mhr": 689.5,
    "supp": 211.4,
    "interco": 52.2,
    "total": 13981.0,
    "fleet": 13928.7,
    "records": 73,
    "units": 53,
    "mode": "FULL"
  },
  {
    "date": "27/10",
    "isoDate": "2026-10-27",
    "day": "Sel",
    "dayIdx": 1,
    "week": "curr",
    "prod": 11710.3,
    "mhr": 898.4,
    "supp": 51.1,
    "interco": 0.0,
    "total": 12659.8,
    "fleet": 12659.8,
    "records": 65,
    "units": 44,
    "mode": "FULL"
  },
  {
    "date": "28/10",
    "isoDate": "2026-10-28",
    "day": "Rab",
    "dayIdx": 2,
    "week": "curr",
    "prod": 13667.7,
    "mhr": 1076.3,
    "supp": 188.3,
    "interco": 0.0,
    "total": 14932.3,
    "fleet": 14932.3,
    "records": 79,
    "units": 52,
    "mode": "FULL"
  },
  {
    "date": "29/10",
    "isoDate": "2026-10-29",
    "day": "Kam",
    "dayIdx": 3,
    "week": "curr",
    "prod": 12372.7,
    "mhr": 676.9,
    "supp": 70.0,
    "interco": 0.0,
    "total": 13119.7,
    "fleet": 13119.6,
    "records": 67,
    "units": 45,
    "mode": "FULL"
  },
  {
    "date": "30/10",
    "isoDate": "2026-10-30",
    "day": "Jum",
    "dayIdx": 4,
    "week": "curr",
    "prod": 10483.2,
    "mhr": 842.0,
    "supp": 125.1,
    "interco": 0.0,
    "total": 11450.3,
    "fleet": 11450.3,
    "records": 57,
    "units": 44,
    "mode": "FULL"
  },
  {
    "date": "31/10",
    "isoDate": "2026-10-31",
    "day": "Sab",
    "dayIdx": 5,
    "week": "curr",
    "prod": 11092.3,
    "mhr": 660.0,
    "supp": 104.3,
    "interco": 62.1,
    "total": 11918.8,
    "fleet": 11856.6,
    "records": 67,
    "units": 47,
    "mode": "FULL"
  },
  {
    "date": "1/11",
    "isoDate": "2026-11-01",
    "day": "Min",
    "dayIdx": 6,
    "week": "curr",
    "prod": 9845.6,
    "mhr": 573.9,
    "supp": 479.4,
    "interco": 0.0,
    "total": 10899.0,
    "fleet": 10898.9,
    "records": 57,
    "units": 48,
    "mode": "FULL"
  }
];
export const FORECAST = {
  "history": [
    {
      "date": "19/10",
      "isoDate": "2026-10-19",
      "day": "Sen",
      "week": "prev",
      "actual": 13957.2,
      "ma7": 13957.2
    },
    {
      "date": "20/10",
      "isoDate": "2026-10-20",
      "day": "Sel",
      "week": "prev",
      "actual": 14760.2,
      "ma7": 14358.7
    },
    {
      "date": "21/10",
      "isoDate": "2026-10-21",
      "day": "Rab",
      "week": "prev",
      "actual": 13810.4,
      "ma7": 14175.9
    },
    {
      "date": "22/10",
      "isoDate": "2026-10-22",
      "day": "Kam",
      "week": "prev",
      "actual": 14431.4,
      "ma7": 14239.8
    },
    {
      "date": "23/10",
      "isoDate": "2026-10-23",
      "day": "Jum",
      "week": "prev",
      "actual": 7549.8,
      "ma7": 12901.8
    },
    {
      "date": "24/10",
      "isoDate": "2026-10-24",
      "day": "Sab",
      "week": "prev",
      "actual": 10364.2,
      "ma7": 12478.9
    },
    {
      "date": "25/10",
      "isoDate": "2026-10-25",
      "day": "Min",
      "week": "prev",
      "actual": 16564.6,
      "ma7": 13062.5
    },
    {
      "date": "26/10",
      "isoDate": "2026-10-26",
      "day": "Sen",
      "week": "curr",
      "actual": 13981.0,
      "ma7": 13065.9
    },
    {
      "date": "27/10",
      "isoDate": "2026-10-27",
      "day": "Sel",
      "week": "curr",
      "actual": 12659.8,
      "ma7": 12765.9
    },
    {
      "date": "28/10",
      "isoDate": "2026-10-28",
      "day": "Rab",
      "week": "curr",
      "actual": 14932.3,
      "ma7": 12926.2
    },
    {
      "date": "29/10",
      "isoDate": "2026-10-29",
      "day": "Kam",
      "week": "curr",
      "actual": 13119.7,
      "ma7": 12738.8
    },
    {
      "date": "30/10",
      "isoDate": "2026-10-30",
      "day": "Jum",
      "week": "curr",
      "actual": 11450.3,
      "ma7": 13296.0
    },
    {
      "date": "31/10",
      "isoDate": "2026-10-31",
      "day": "Sab",
      "week": "curr",
      "actual": 11918.8,
      "ma7": 13518.1
    },
    {
      "date": "1/11",
      "isoDate": "2026-11-01",
      "day": "Min",
      "week": "curr",
      "actual": 10899.0,
      "ma7": 12708.7
    }
  ],
  "forecast": [
    {
      "date": "2/11",
      "isoDate": "2026-11-02",
      "projected": 11893.0
    },
    {
      "date": "3/11",
      "isoDate": "2026-11-03",
      "projected": 11760.6
    },
    {
      "date": "4/11",
      "isoDate": "2026-11-04",
      "projected": 11628.3
    },
    {
      "date": "5/11",
      "isoDate": "2026-11-05",
      "projected": 11495.9
    },
    {
      "date": "6/11",
      "isoDate": "2026-11-06",
      "projected": 11363.6
    },
    {
      "date": "7/11",
      "isoDate": "2026-11-07",
      "projected": 11231.3
    },
    {
      "date": "8/11",
      "isoDate": "2026-11-08",
      "projected": 11098.9
    }
  ]
};
export const WEEK_COMPARISON = {
  "prev": {
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
  "curr": {
    "label": "26 Okt–1 Nov",
    "total": 88960.86,
    "fleet": 88846.49,
    "avgDaily": 12708.7,
    "avgFleetDaily": 12692.4,
    "records": 465,
    "units": 64,
    "activeDays": 7,
    "prod": 82199.7,
    "mhr": 5417.1,
    "supp": 1229.7,
    "interco": 114.4,
    "dtQty": 56421.6,
    "excQty": 25778.1,
    "dtFrHm": 18.53,
    "excFrHm": 20.82,
    "bpspRepay": 0
  },
  "deltas": {
    "total": -2.71,
    "fleet": -0.92,
    "avgDaily": -2.71,
    "records": 1.09,
    "units": -5.88,
    "prod": -0.11,
    "mhr": -3.63,
    "supp": -29.94,
    "dtQty": -2.07,
    "excQty": 4.46,
    "dtFrHm": 1.76,
    "excFrHm": 0.29
  }
};
export const DOW_COMPARISON = [
  {
    "day": "Sen",
    "dayIdx": 0,
    "prev": 13957.2,
    "curr": 13981.0,
    "delta": 0.2
  },
  {
    "day": "Sel",
    "dayIdx": 1,
    "prev": 14760.2,
    "curr": 12659.8,
    "delta": -14.2
  },
  {
    "day": "Rab",
    "dayIdx": 2,
    "prev": 13810.4,
    "curr": 14932.3,
    "delta": 8.1
  },
  {
    "day": "Kam",
    "dayIdx": 3,
    "prev": 14431.4,
    "curr": 13119.7,
    "delta": -9.1
  },
  {
    "day": "Jum",
    "dayIdx": 4,
    "prev": 7549.8,
    "curr": 11450.3,
    "delta": 51.7
  },
  {
    "day": "Sab",
    "dayIdx": 5,
    "prev": 10364.2,
    "curr": 11918.8,
    "delta": 15.0
  },
  {
    "day": "Min",
    "dayIdx": 6,
    "prev": 16564.6,
    "curr": 10899.0,
    "delta": -34.2
  }
];
export const DAILY_FLEET_TREND = [
  {
    "date": "19/10",
    "isoDate": "2026-10-19",
    "day": "Sen",
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
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
    "week": "prev",
    "dtQty": 9169.7,
    "excQty": 5986.0,
    "dtUnits": 27,
    "excUnits": 13,
    "dtFrHm": 17.17,
    "excFrHm": 20.09
  },
  {
    "date": "26/10",
    "isoDate": "2026-10-26",
    "day": "Sen",
    "week": "curr",
    "dtQty": 8999.8,
    "excQty": 4028.0,
    "dtUnits": 30,
    "excUnits": 13,
    "dtFrHm": 19.08,
    "excFrHm": 20.88
  },
  {
    "date": "27/10",
    "isoDate": "2026-10-27",
    "day": "Sel",
    "week": "curr",
    "dtQty": 8478.3,
    "excQty": 3232.0,
    "dtUnits": 25,
    "excUnits": 11,
    "dtFrHm": 19.06,
    "excFrHm": 20.23
  },
  {
    "date": "28/10",
    "isoDate": "2026-10-28",
    "day": "Rab",
    "week": "curr",
    "dtQty": 9108.7,
    "excQty": 4559.0,
    "dtUnits": 29,
    "excUnits": 13,
    "dtFrHm": 18.02,
    "excFrHm": 20.59
  },
  {
    "date": "29/10",
    "isoDate": "2026-10-29",
    "day": "Kam",
    "week": "curr",
    "dtQty": 9068.6,
    "excQty": 3304.1,
    "dtUnits": 26,
    "excUnits": 12,
    "dtFrHm": 20.55,
    "excFrHm": 20.97
  },
  {
    "date": "30/10",
    "isoDate": "2026-10-30",
    "day": "Jum",
    "week": "curr",
    "dtQty": 6268.2,
    "excQty": 4215.0,
    "dtUnits": 23,
    "excUnits": 13,
    "dtFrHm": 17.57,
    "excFrHm": 20.3
  },
  {
    "date": "31/10",
    "isoDate": "2026-10-31",
    "day": "Sab",
    "week": "curr",
    "dtQty": 8115.3,
    "excQty": 2977.0,
    "dtUnits": 26,
    "excUnits": 13,
    "dtFrHm": 18.15,
    "excFrHm": 21.36
  },
  {
    "date": "1/11",
    "isoDate": "2026-11-01",
    "day": "Min",
    "week": "curr",
    "dtQty": 6382.7,
    "excQty": 3463.0,
    "dtUnits": 27,
    "excUnits": 13,
    "dtFrHm": 16.84,
    "excFrHm": 21.71
  }
];

export const DT_DAILY_MATRIX = {
  "units": [
    "DT-077",
    "DT-029",
    "DT-078",
    "DT-071",
    "DT-069",
    "DT-076",
    "DT-064",
    "DT-028",
    "DT-070",
    "DT-067",
    "DT-063",
    "DT-062",
    "DT-065",
    "DT-066",
    "DT-073"
  ],
  "dates": [
    "26/10",
    "27/10",
    "28/10",
    "29/10",
    "30/10",
    "31/10",
    "1/11"
  ],
  "rows": [
    {
      "unit": "DT-077",
      "total": 2468.0,
      "values": [
        {
          "date": "26/10",
          "qty": 415.4
        },
        {
          "date": "27/10",
          "qty": 399.5
        },
        {
          "date": "28/10",
          "qty": 267.9
        },
        {
          "date": "29/10",
          "qty": 419.9
        },
        {
          "date": "30/10",
          "qty": 267.8
        },
        {
          "date": "31/10",
          "qty": 427.1
        },
        {
          "date": "1/11",
          "qty": 270.3
        }
      ]
    },
    {
      "unit": "DT-029",
      "total": 2466.0,
      "values": [
        {
          "date": "26/10",
          "qty": 305.2
        },
        {
          "date": "27/10",
          "qty": 419.3
        },
        {
          "date": "28/10",
          "qty": 345.6
        },
        {
          "date": "29/10",
          "qty": 389.5
        },
        {
          "date": "30/10",
          "qty": 356.0
        },
        {
          "date": "31/10",
          "qty": 329.2
        },
        {
          "date": "1/11",
          "qty": 321.6
        }
      ]
    },
    {
      "unit": "DT-078",
      "total": 2448.0,
      "values": [
        {
          "date": "26/10",
          "qty": 381.6
        },
        {
          "date": "27/10",
          "qty": 381.3
        },
        {
          "date": "28/10",
          "qty": 426.8
        },
        {
          "date": "29/10",
          "qty": 425.1
        },
        {
          "date": "30/10",
          "qty": 343.3
        },
        {
          "date": "31/10",
          "qty": 249.2
        },
        {
          "date": "1/11",
          "qty": 240.4
        }
      ]
    },
    {
      "unit": "DT-071",
      "total": 2440.0,
      "values": [
        {
          "date": "26/10",
          "qty": 428.3
        },
        {
          "date": "27/10",
          "qty": 403.9
        },
        {
          "date": "28/10",
          "qty": 411.0
        },
        {
          "date": "29/10",
          "qty": 370.3
        },
        {
          "date": "30/10",
          "qty": 359.9
        },
        {
          "date": "31/10",
          "qty": 205.1
        },
        {
          "date": "1/11",
          "qty": 262.0
        }
      ]
    },
    {
      "unit": "DT-069",
      "total": 2350.0,
      "values": [
        {
          "date": "26/10",
          "qty": 313.2
        },
        {
          "date": "27/10",
          "qty": 356.7
        },
        {
          "date": "28/10",
          "qty": 469.8
        },
        {
          "date": "29/10",
          "qty": 329.7
        },
        {
          "date": "30/10",
          "qty": 250.6
        },
        {
          "date": "31/10",
          "qty": 390.6
        },
        {
          "date": "1/11",
          "qty": 239.1
        }
      ]
    },
    {
      "unit": "DT-076",
      "total": 2243.0,
      "values": [
        {
          "date": "26/10",
          "qty": 189.6
        },
        {
          "date": "27/10",
          "qty": 391.5
        },
        {
          "date": "28/10",
          "qty": 378.5
        },
        {
          "date": "29/10",
          "qty": 407.0
        },
        {
          "date": "30/10",
          "qty": 274.9
        },
        {
          "date": "31/10",
          "qty": 323.4
        },
        {
          "date": "1/11",
          "qty": 278.2
        }
      ]
    },
    {
      "unit": "DT-064",
      "total": 2223.0,
      "values": [
        {
          "date": "26/10",
          "qty": 425.8
        },
        {
          "date": "27/10",
          "qty": 311.1
        },
        {
          "date": "28/10",
          "qty": 337.2
        },
        {
          "date": "29/10",
          "qty": 345.3
        },
        {
          "date": "30/10",
          "qty": 204.7
        },
        {
          "date": "31/10",
          "qty": 399.1
        },
        {
          "date": "1/11",
          "qty": 199.7
        }
      ]
    },
    {
      "unit": "DT-028",
      "total": 2220.0,
      "values": [
        {
          "date": "26/10",
          "qty": 188.5
        },
        {
          "date": "27/10",
          "qty": 459.3
        },
        {
          "date": "28/10",
          "qty": 304.0
        },
        {
          "date": "29/10",
          "qty": 478.2
        },
        {
          "date": "30/10",
          "qty": 383.6
        },
        {
          "date": "31/10",
          "qty": 232.0
        },
        {
          "date": "1/11",
          "qty": 174.8
        }
      ]
    },
    {
      "unit": "DT-070",
      "total": 2190.0,
      "values": [
        {
          "date": "26/10",
          "qty": 303.6
        },
        {
          "date": "27/10",
          "qty": 184.6
        },
        {
          "date": "28/10",
          "qty": 359.3
        },
        {
          "date": "29/10",
          "qty": 424.4
        },
        {
          "date": "30/10",
          "qty": 228.2
        },
        {
          "date": "31/10",
          "qty": 401.5
        },
        {
          "date": "1/11",
          "qty": 288.3
        }
      ]
    },
    {
      "unit": "DT-067",
      "total": 2161.0,
      "values": [
        {
          "date": "26/10",
          "qty": 412.4
        },
        {
          "date": "27/10",
          "qty": 401.0
        },
        {
          "date": "28/10",
          "qty": 331.7
        },
        {
          "date": "29/10",
          "qty": 176.7
        },
        {
          "date": "30/10",
          "qty": 247.4
        },
        {
          "date": "31/10",
          "qty": 390.9
        },
        {
          "date": "1/11",
          "qty": 200.6
        }
      ]
    },
    {
      "unit": "DT-063",
      "total": 2143.0,
      "values": [
        {
          "date": "26/10",
          "qty": 358.4
        },
        {
          "date": "27/10",
          "qty": 399.7
        },
        {
          "date": "28/10",
          "qty": 253.6
        },
        {
          "date": "29/10",
          "qty": 444.4
        },
        {
          "date": "30/10",
          "qty": 281.3
        },
        {
          "date": "31/10",
          "qty": 189.4
        },
        {
          "date": "1/11",
          "qty": 216.2
        }
      ]
    },
    {
      "unit": "DT-062",
      "total": 2128.0,
      "values": [
        {
          "date": "26/10",
          "qty": 401.5
        },
        {
          "date": "27/10",
          "qty": 251.7
        },
        {
          "date": "28/10",
          "qty": 378.7
        },
        {
          "date": "29/10",
          "qty": 335.6
        },
        {
          "date": "30/10",
          "qty": 264.1
        },
        {
          "date": "31/10",
          "qty": 200.5
        },
        {
          "date": "1/11",
          "qty": 295.5
        }
      ]
    },
    {
      "unit": "DT-065",
      "total": 2108.0,
      "values": [
        {
          "date": "26/10",
          "qty": 186.0
        },
        {
          "date": "27/10",
          "qty": 342.3
        },
        {
          "date": "28/10",
          "qty": 308.4
        },
        {
          "date": "29/10",
          "qty": 401.5
        },
        {
          "date": "30/10",
          "qty": 226.0
        },
        {
          "date": "31/10",
          "qty": 396.8
        },
        {
          "date": "1/11",
          "qty": 247.2
        }
      ]
    },
    {
      "unit": "DT-066",
      "total": 2061.0,
      "values": [
        {
          "date": "26/10",
          "qty": 381.2
        },
        {
          "date": "27/10",
          "qty": 360.1
        },
        {
          "date": "28/10",
          "qty": 254.1
        },
        {
          "date": "29/10",
          "qty": 427.8
        },
        {
          "date": "30/10",
          "qty": 0.0
        },
        {
          "date": "31/10",
          "qty": 437.5
        },
        {
          "date": "1/11",
          "qty": 200.3
        }
      ]
    },
    {
      "unit": "DT-073",
      "total": 2054.0,
      "values": [
        {
          "date": "26/10",
          "qty": 369.7
        },
        {
          "date": "27/10",
          "qty": 344.2
        },
        {
          "date": "28/10",
          "qty": 212.7
        },
        {
          "date": "29/10",
          "qty": 289.4
        },
        {
          "date": "30/10",
          "qty": 227.9
        },
        {
          "date": "31/10",
          "qty": 408.1
        },
        {
          "date": "1/11",
          "qty": 201.6
        }
      ]
    }
  ],
  "maxQty": 478.0,
  "daysBack": 7
};
export const EXC_DAILY_MATRIX = {
  "units": [
    "EXC-026",
    "EXC-014",
    "EXC-029",
    "EXC-027",
    "EXC-025",
    "EXC-028",
    "EXC-012",
    "EXC-023",
    "EXC-031",
    "EXC-022",
    "EXC-024",
    "EXC-032",
    "EXC-020",
    "EXC-030"
  ],
  "dates": [
    "26/10",
    "27/10",
    "28/10",
    "29/10",
    "30/10",
    "31/10",
    "1/11"
  ],
  "rows": [
    {
      "unit": "EXC-026",
      "total": 3728.0,
      "values": [
        {
          "date": "26/10",
          "qty": 448.0
        },
        {
          "date": "27/10",
          "qty": 569.0
        },
        {
          "date": "28/10",
          "qty": 666.0
        },
        {
          "date": "29/10",
          "qty": 500.0
        },
        {
          "date": "30/10",
          "qty": 628.0
        },
        {
          "date": "31/10",
          "qty": 395.0
        },
        {
          "date": "1/11",
          "qty": 522.0
        }
      ]
    },
    {
      "unit": "EXC-014",
      "total": 3524.0,
      "values": [
        {
          "date": "26/10",
          "qty": 436.0
        },
        {
          "date": "27/10",
          "qty": 582.0
        },
        {
          "date": "28/10",
          "qty": 619.0
        },
        {
          "date": "29/10",
          "qty": 510.0
        },
        {
          "date": "30/10",
          "qty": 630.0
        },
        {
          "date": "31/10",
          "qty": 263.0
        },
        {
          "date": "1/11",
          "qty": 484.0
        }
      ]
    },
    {
      "unit": "EXC-029",
      "total": 2526.0,
      "values": [
        {
          "date": "26/10",
          "qty": 422.0
        },
        {
          "date": "27/10",
          "qty": 269.0
        },
        {
          "date": "28/10",
          "qty": 549.0
        },
        {
          "date": "29/10",
          "qty": 265.0
        },
        {
          "date": "30/10",
          "qty": 324.0
        },
        {
          "date": "31/10",
          "qty": 512.0
        },
        {
          "date": "1/11",
          "qty": 185.0
        }
      ]
    },
    {
      "unit": "EXC-027",
      "total": 2457.0,
      "values": [
        {
          "date": "26/10",
          "qty": 507.0
        },
        {
          "date": "27/10",
          "qty": 0.0
        },
        {
          "date": "28/10",
          "qty": 632.0
        },
        {
          "date": "29/10",
          "qty": 339.0
        },
        {
          "date": "30/10",
          "qty": 446.0
        },
        {
          "date": "31/10",
          "qty": 256.0
        },
        {
          "date": "1/11",
          "qty": 277.0
        }
      ]
    },
    {
      "unit": "EXC-025",
      "total": 1764.0,
      "values": [
        {
          "date": "26/10",
          "qty": 293.0
        },
        {
          "date": "27/10",
          "qty": 344.0
        },
        {
          "date": "28/10",
          "qty": 313.0
        },
        {
          "date": "29/10",
          "qty": 263.0
        },
        {
          "date": "30/10",
          "qty": 249.0
        },
        {
          "date": "31/10",
          "qty": 145.0
        },
        {
          "date": "1/11",
          "qty": 157.0
        }
      ]
    },
    {
      "unit": "EXC-028",
      "total": 1717.0,
      "values": [
        {
          "date": "26/10",
          "qty": 216.0
        },
        {
          "date": "27/10",
          "qty": 251.0
        },
        {
          "date": "28/10",
          "qty": 295.0
        },
        {
          "date": "29/10",
          "qty": 250.0
        },
        {
          "date": "30/10",
          "qty": 326.0
        },
        {
          "date": "31/10",
          "qty": 135.0
        },
        {
          "date": "1/11",
          "qty": 244.0
        }
      ]
    },
    {
      "unit": "EXC-012",
      "total": 1715.0,
      "values": [
        {
          "date": "26/10",
          "qty": 296.0
        },
        {
          "date": "27/10",
          "qty": 319.0
        },
        {
          "date": "28/10",
          "qty": 301.0
        },
        {
          "date": "29/10",
          "qty": 213.0
        },
        {
          "date": "30/10",
          "qty": 190.0
        },
        {
          "date": "31/10",
          "qty": 176.0
        },
        {
          "date": "1/11",
          "qty": 220.0
        }
      ]
    },
    {
      "unit": "EXC-023",
      "total": 1539.0,
      "values": [
        {
          "date": "26/10",
          "qty": 273.0
        },
        {
          "date": "27/10",
          "qty": 209.0
        },
        {
          "date": "28/10",
          "qty": 176.0
        },
        {
          "date": "29/10",
          "qty": 149.0
        },
        {
          "date": "30/10",
          "qty": 356.0
        },
        {
          "date": "31/10",
          "qty": 189.0
        },
        {
          "date": "1/11",
          "qty": 187.0
        }
      ]
    },
    {
      "unit": "EXC-031",
      "total": 1464.0,
      "values": [
        {
          "date": "26/10",
          "qty": 268.0
        },
        {
          "date": "27/10",
          "qty": 171.0
        },
        {
          "date": "28/10",
          "qty": 136.0
        },
        {
          "date": "29/10",
          "qty": 182.0
        },
        {
          "date": "30/10",
          "qty": 250.0
        },
        {
          "date": "31/10",
          "qty": 267.0
        },
        {
          "date": "1/11",
          "qty": 190.0
        }
      ]
    },
    {
      "unit": "EXC-022",
      "total": 1438.0,
      "values": [
        {
          "date": "26/10",
          "qty": 242.0
        },
        {
          "date": "27/10",
          "qty": 182.0
        },
        {
          "date": "28/10",
          "qty": 335.0
        },
        {
          "date": "29/10",
          "qty": 244.1
        },
        {
          "date": "30/10",
          "qty": 63.0
        },
        {
          "date": "31/10",
          "qty": 215.0
        },
        {
          "date": "1/11",
          "qty": 157.0
        }
      ]
    },
    {
      "unit": "EXC-024",
      "total": 1335.0,
      "values": [
        {
          "date": "26/10",
          "qty": 207.0
        },
        {
          "date": "27/10",
          "qty": 181.0
        },
        {
          "date": "28/10",
          "qty": 156.0
        },
        {
          "date": "29/10",
          "qty": 209.0
        },
        {
          "date": "30/10",
          "qty": 252.0
        },
        {
          "date": "31/10",
          "qty": 100.0
        },
        {
          "date": "1/11",
          "qty": 230.0
        }
      ]
    },
    {
      "unit": "EXC-032",
      "total": 1219.0,
      "values": [
        {
          "date": "26/10",
          "qty": 217.0
        },
        {
          "date": "27/10",
          "qty": 155.0
        },
        {
          "date": "28/10",
          "qty": 191.0
        },
        {
          "date": "29/10",
          "qty": 180.0
        },
        {
          "date": "30/10",
          "qty": 287.0
        },
        {
          "date": "31/10",
          "qty": 189.0
        },
        {
          "date": "1/11",
          "qty": 0.0
        }
      ]
    },
    {
      "unit": "EXC-020",
      "total": 1099.0,
      "values": [
        {
          "date": "26/10",
          "qty": 203.0
        },
        {
          "date": "27/10",
          "qty": 0.0
        },
        {
          "date": "28/10",
          "qty": 190.0
        },
        {
          "date": "29/10",
          "qty": 0.0
        },
        {
          "date": "30/10",
          "qty": 214.0
        },
        {
          "date": "31/10",
          "qty": 135.0
        },
        {
          "date": "1/11",
          "qty": 357.0
        }
      ]
    },
    {
      "unit": "EXC-030",
      "total": 253.0,
      "values": [
        {
          "date": "26/10",
          "qty": 0.0
        },
        {
          "date": "27/10",
          "qty": 0.0
        },
        {
          "date": "28/10",
          "qty": 0.0
        },
        {
          "date": "29/10",
          "qty": 0.0
        },
        {
          "date": "30/10",
          "qty": 0.0
        },
        {
          "date": "31/10",
          "qty": 0.0
        },
        {
          "date": "1/11",
          "qty": 253.0
        }
      ]
    }
  ],
  "maxQty": 666.0,
  "daysBack": 7
};
export const DT_SCORECARD = [
  {
    "unit": "DT-077",
    "frHm": 19.56,
    "frKm": 1.07,
    "fuel": 2468.0,
    "records": 12,
    "hmTotal": 122.6,
    "kmTotal": 2244.0,
    "firstRefuel": false,
    "percentile": 50.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-029",
    "frHm": 19.84,
    "frKm": 1.1,
    "fuel": 2466.0,
    "records": 14,
    "hmTotal": 124.3,
    "kmTotal": 2237.0,
    "firstRefuel": false,
    "percentile": 62.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-078",
    "frHm": 20.01,
    "frKm": 1.07,
    "fuel": 2448.0,
    "records": 12,
    "hmTotal": 122.3,
    "kmTotal": 2285.0,
    "firstRefuel": false,
    "percentile": 68.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-071",
    "frHm": 20.73,
    "frKm": 1.27,
    "fuel": 2440.0,
    "records": 12,
    "hmTotal": 117.7,
    "kmTotal": 1920.0,
    "firstRefuel": false,
    "percentile": 82.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-069",
    "frHm": 21.66,
    "frKm": 1.11,
    "fuel": 2350.0,
    "records": 12,
    "hmTotal": 108.5,
    "kmTotal": 2123.0,
    "firstRefuel": false,
    "percentile": 97.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-076",
    "frHm": 19.68,
    "frKm": 1.0,
    "fuel": 2243.0,
    "records": 12,
    "hmTotal": 114.0,
    "kmTotal": 2254.0,
    "firstRefuel": false,
    "percentile": 56.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-064",
    "frHm": 20.51,
    "frKm": 1.06,
    "fuel": 2223.0,
    "records": 12,
    "hmTotal": 108.4,
    "kmTotal": 2102.0,
    "firstRefuel": false,
    "percentile": 76.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-028",
    "frHm": 21.45,
    "frKm": 1.05,
    "fuel": 2220.0,
    "records": 11,
    "hmTotal": 103.5,
    "kmTotal": 2118.0,
    "firstRefuel": false,
    "percentile": 94.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-070",
    "frHm": 19.06,
    "frKm": 1.04,
    "fuel": 2190.0,
    "records": 12,
    "hmTotal": 114.9,
    "kmTotal": 2099.0,
    "firstRefuel": false,
    "percentile": 38.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-067",
    "frHm": 19.29,
    "frKm": 0.97,
    "fuel": 2161.0,
    "records": 11,
    "hmTotal": 112.0,
    "kmTotal": 2227.0,
    "firstRefuel": false,
    "percentile": 47.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-063",
    "frHm": 20.63,
    "frKm": 1.1,
    "fuel": 2143.0,
    "records": 11,
    "hmTotal": 103.9,
    "kmTotal": 1948.0,
    "firstRefuel": false,
    "percentile": 79.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-062",
    "frHm": 19.98,
    "frKm": 1.1,
    "fuel": 2128.0,
    "records": 11,
    "hmTotal": 106.5,
    "kmTotal": 1936.0,
    "firstRefuel": false,
    "percentile": 65.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-065",
    "frHm": 18.05,
    "frKm": 1.04,
    "fuel": 2108.0,
    "records": 11,
    "hmTotal": 116.8,
    "kmTotal": 2027.0,
    "firstRefuel": false,
    "percentile": 29.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-066",
    "frHm": 19.76,
    "frKm": 1.09,
    "fuel": 2061.0,
    "records": 10,
    "hmTotal": 104.3,
    "kmTotal": 1899.0,
    "firstRefuel": false,
    "percentile": 59.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-073",
    "frHm": 18.0,
    "frKm": 1.05,
    "fuel": 2054.0,
    "records": 12,
    "hmTotal": 114.1,
    "kmTotal": 1956.0,
    "firstRefuel": false,
    "percentile": 26.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-072",
    "frHm": 18.49,
    "frKm": 0.97,
    "fuel": 2029.0,
    "records": 11,
    "hmTotal": 109.7,
    "kmTotal": 2100.0,
    "firstRefuel": false,
    "percentile": 32.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-075",
    "frHm": 19.25,
    "frKm": 1.05,
    "fuel": 2019.0,
    "records": 12,
    "hmTotal": 104.9,
    "kmTotal": 1914.0,
    "firstRefuel": false,
    "percentile": 44.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-068",
    "frHm": 19.19,
    "frKm": 1.14,
    "fuel": 1871.0,
    "records": 8,
    "hmTotal": 97.5,
    "kmTotal": 1645.0,
    "firstRefuel": false,
    "percentile": 41.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-058",
    "frHm": 17.51,
    "frKm": 0.86,
    "fuel": 1851.0,
    "records": 9,
    "hmTotal": 105.7,
    "kmTotal": 2157.0,
    "firstRefuel": false,
    "percentile": 24.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-027",
    "frHm": 20.13,
    "frKm": 1.07,
    "fuel": 1805.0,
    "records": 7,
    "hmTotal": 89.7,
    "kmTotal": 1681.0,
    "firstRefuel": false,
    "percentile": 74.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-019",
    "frHm": 19.68,
    "frKm": 1.17,
    "fuel": 1804.0,
    "records": 8,
    "hmTotal": 91.7,
    "kmTotal": 1543.0,
    "firstRefuel": false,
    "percentile": 56.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-025",
    "frHm": 18.66,
    "frKm": 1.05,
    "fuel": 1627.0,
    "records": 7,
    "hmTotal": 87.2,
    "kmTotal": 1547.0,
    "firstRefuel": false,
    "percentile": 35.0,
    "quartile": "Q2"
  },
  {
    "unit": "DT-023",
    "frHm": 21.18,
    "frKm": 1.07,
    "fuel": 1551.0,
    "records": 8,
    "hmTotal": 73.2,
    "kmTotal": 1452.0,
    "firstRefuel": false,
    "percentile": 91.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-024",
    "frHm": 20.04,
    "frKm": 1.11,
    "fuel": 1515.0,
    "records": 8,
    "hmTotal": 75.6,
    "kmTotal": 1370.0,
    "firstRefuel": false,
    "percentile": 71.0,
    "quartile": "Q3"
  },
  {
    "unit": "DT-074",
    "frHm": 20.78,
    "frKm": 1.18,
    "fuel": 1089.0,
    "records": 5,
    "hmTotal": 52.4,
    "kmTotal": 924.0,
    "firstRefuel": false,
    "percentile": 85.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-008",
    "frHm": 11.08,
    "frKm": 1.92,
    "fuel": 1067.0,
    "records": 5,
    "hmTotal": 96.3,
    "kmTotal": 556.0,
    "firstRefuel": false,
    "percentile": 12.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-004",
    "frHm": 10.46,
    "frKm": 1.41,
    "fuel": 920.0,
    "records": 5,
    "hmTotal": 88.0,
    "kmTotal": 652.0,
    "firstRefuel": false,
    "percentile": 9.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-007",
    "frHm": 9.88,
    "frKm": 1.16,
    "fuel": 888.0,
    "records": 4,
    "hmTotal": 89.9,
    "kmTotal": 764.0,
    "firstRefuel": false,
    "percentile": 3.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-020",
    "frHm": 22.13,
    "frKm": 1.18,
    "fuel": 679.0,
    "records": 3,
    "hmTotal": 30.7,
    "kmTotal": 577.0,
    "firstRefuel": false,
    "percentile": 100.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-011",
    "frHm": 10.15,
    "frKm": 1.36,
    "fuel": 666.0,
    "records": 4,
    "hmTotal": 65.6,
    "kmTotal": 488.0,
    "firstRefuel": false,
    "percentile": 6.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-015",
    "frHm": 11.35,
    "frKm": 1.1,
    "fuel": 581.0,
    "records": 2,
    "hmTotal": 24.5,
    "kmTotal": 529.0,
    "firstRefuel": false,
    "percentile": 15.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-030",
    "frHm": 20.85,
    "frKm": 1.09,
    "fuel": 402.0,
    "records": 2,
    "hmTotal": 19.3,
    "kmTotal": 368.0,
    "firstRefuel": false,
    "percentile": 88.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "DT-017",
    "frHm": 11.47,
    "frKm": 1.15,
    "fuel": 294.0,
    "records": 1,
    "hmTotal": 25.6,
    "kmTotal": 255.0,
    "firstRefuel": false,
    "percentile": 18.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "DT-021",
    "frHm": 14.29,
    "frKm": 1.62,
    "fuel": 60.0,
    "records": 1,
    "hmTotal": 4.2,
    "kmTotal": 37.0,
    "firstRefuel": false,
    "percentile": 21.0,
    "quartile": "Q1 (Efisien)"
  }
];
export const EXC_SCORECARD = [
  {
    "unit": "EXC-026",
    "model": "SY365H",
    "frHm": 30.81,
    "frKm": 0,
    "fuel": 3728.0,
    "records": 9,
    "hmTotal": 121.0,
    "firstRefuel": false,
    "percentile": 100.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "EXC-014",
    "model": "SY365H",
    "frHm": 29.33,
    "frKm": 0,
    "fuel": 3524.0,
    "records": 9,
    "hmTotal": 120.1,
    "firstRefuel": false,
    "percentile": 93.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "EXC-029",
    "model": "SY365H",
    "frHm": 27.18,
    "frKm": 0,
    "fuel": 2526.0,
    "records": 10,
    "hmTotal": 92.9,
    "firstRefuel": false,
    "percentile": 86.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "EXC-027",
    "model": "SY365H",
    "frHm": 25.81,
    "frKm": 0,
    "fuel": 2457.0,
    "records": 8,
    "hmTotal": 95.2,
    "firstRefuel": false,
    "percentile": 79.0,
    "quartile": "Q4 (Boros)"
  },
  {
    "unit": "EXC-025",
    "model": "SY215C",
    "frHm": 15.43,
    "frKm": 0,
    "fuel": 1764.0,
    "records": 13,
    "hmTotal": 114.3,
    "firstRefuel": false,
    "percentile": 14.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "EXC-028",
    "model": "SY215C",
    "frHm": 14.86,
    "frKm": 0,
    "fuel": 1717.0,
    "records": 9,
    "hmTotal": 115.5,
    "firstRefuel": false,
    "percentile": 7.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "EXC-012",
    "model": "SY215C",
    "frHm": 16.3,
    "frKm": 0,
    "fuel": 1715.0,
    "records": 11,
    "hmTotal": 105.2,
    "firstRefuel": false,
    "percentile": 29.0,
    "quartile": "Q2"
  },
  {
    "unit": "EXC-023",
    "model": "SY215C",
    "frHm": 16.71,
    "frKm": 0,
    "fuel": 1539.0,
    "records": 8,
    "hmTotal": 92.1,
    "firstRefuel": false,
    "percentile": 50.0,
    "quartile": "Q2"
  },
  {
    "unit": "EXC-031",
    "model": "SY215C",
    "frHm": 18.11,
    "frKm": 0,
    "fuel": 1464.0,
    "records": 8,
    "hmTotal": 80.8,
    "firstRefuel": false,
    "percentile": 64.0,
    "quartile": "Q3"
  },
  {
    "unit": "EXC-022",
    "model": "SY215C",
    "frHm": 16.61,
    "frKm": 0,
    "fuel": 1438.0,
    "records": 10,
    "hmTotal": 86.6,
    "firstRefuel": false,
    "percentile": 36.0,
    "quartile": "Q2"
  },
  {
    "unit": "EXC-024",
    "model": "SY215C",
    "frHm": 16.08,
    "frKm": 0,
    "fuel": 1335.0,
    "records": 8,
    "hmTotal": 83.0,
    "firstRefuel": false,
    "percentile": 21.0,
    "quartile": "Q1 (Efisien)"
  },
  {
    "unit": "EXC-032",
    "model": "SY215C",
    "frHm": 16.69,
    "frKm": 0,
    "fuel": 1219.0,
    "records": 8,
    "hmTotal": 73.0,
    "firstRefuel": false,
    "percentile": 43.0,
    "quartile": "Q2"
  },
  {
    "unit": "EXC-020",
    "model": "SY365H",
    "frHm": 24.93,
    "frKm": 0,
    "fuel": 1099.0,
    "records": 5,
    "hmTotal": 44.1,
    "firstRefuel": false,
    "percentile": 71.0,
    "quartile": "Q3"
  },
  {
    "unit": "EXC-030",
    "model": "SY215C",
    "frHm": 17.94,
    "frKm": 0,
    "fuel": 253.0,
    "records": 1,
    "hmTotal": 14.1,
    "firstRefuel": false,
    "percentile": 57.0,
    "quartile": "Q3"
  }
];

export const CATEGORY_BREAKDOWN = [
  {
    "cat": "Production",
    "qty": 82199.7,
    "records": 402,
    "units": 48,
    "frHm": 19.2,
    "avgPerRec": 204.5,
    "subBreakdown": [
      {
        "jenis": "DUMP TRUCK",
        "qty": 56421.6,
        "units": 34
      },
      {
        "jenis": "EXCAVATOR",
        "qty": 25778.1,
        "units": 14
      }
    ]
  },
  {
    "cat": "MHR",
    "qty": 5417.1,
    "records": 37,
    "units": 7,
    "frHm": 10.3,
    "avgPerRec": 146.4,
    "subBreakdown": [
      {
        "jenis": "MOTOR GRADER",
        "qty": 2167.6,
        "units": 2
      },
      {
        "jenis": "WATER TRUCK",
        "qty": 1774.9,
        "units": 2
      },
      {
        "jenis": "COMPACTOR",
        "qty": 1040.9,
        "units": 2
      },
      {
        "jenis": "WHEEL LOADER",
        "qty": 433.7,
        "units": 1
      }
    ]
  },
  {
    "cat": "Support",
    "qty": 1229.7,
    "records": 24,
    "units": 9,
    "frHm": 4.1,
    "avgPerRec": 51.2,
    "subBreakdown": [
      {
        "jenis": "TOYOTA HILUX",
        "qty": 722.0,
        "units": 4
      },
      {
        "jenis": "FUEL TRUCK",
        "qty": 300.6,
        "units": 1
      },
      {
        "jenis": "TOWER LAMP",
        "qty": 132.0,
        "units": 3
      },
      {
        "jenis": "MANHOUL",
        "qty": 75.1,
        "units": 1
      }
    ]
  }
];
export const LOCATION_BREAKDOWN = [
  {
    "location": "Fuel Station",
    "qty": 60785.8,
    "records": 324,
    "units": 47,
    "avgPerRec": 187.6,
    "catMix": {
      "Interco": 114.4,
      "MHR": 4352.1,
      "Production": 55221.6,
      "Support": 1097.7
    }
  },
  {
    "location": "ETO",
    "qty": 13897.0,
    "records": 58,
    "units": 18,
    "avgPerRec": 239.6,
    "catMix": {
      "MHR": 863.0,
      "Production": 12976.0,
      "Support": 58.0
    }
  },
  {
    "location": "EFO",
    "qty": 8379.1,
    "records": 46,
    "units": 9,
    "avgPerRec": 182.2,
    "catMix": {
      "MHR": 202.0,
      "Production": 8141.1,
      "Support": 36.0
    }
  },
  {
    "location": "Jetty",
    "qty": 5528.0,
    "records": 34,
    "units": 7,
    "avgPerRec": 162.6,
    "catMix": {
      "Production": 5490.0,
      "Support": 38.0
    }
  },
  {
    "location": "Mess TMI",
    "qty": 371.0,
    "records": 3,
    "units": 3,
    "avgPerRec": 123.7,
    "catMix": {
      "Production": 371.0
    }
  }
];
export const SHIFT_ANALYSIS = [
  {
    "shift": "DS",
    "qty": 86617.5,
    "records": 450,
    "units": 65,
    "avgPerRec": 192.5
  },
  {
    "shift": "NS",
    "qty": 2343.4,
    "records": 15,
    "units": 14,
    "avgPerRec": 156.2
  }
];
export const OPERATORS = [
  {
    "operator": "Rusdin",
    "refuels": 31,
    "qty": 6182.8,
    "avgPerRec": 199.4,
    "units": 18
  },
  {
    "operator": "Robi Menden",
    "refuels": 9,
    "qty": 3728.0,
    "avgPerRec": 414.2,
    "units": 1
  },
  {
    "operator": "Yudin Sappogo",
    "refuels": 11,
    "qty": 3308.8,
    "avgPerRec": 300.8,
    "units": 2
  },
  {
    "operator": "Hendrik",
    "refuels": 11,
    "qty": 2970.0,
    "avgPerRec": 270.0,
    "units": 3
  },
  {
    "operator": "Agus Wantoro",
    "refuels": 12,
    "qty": 2618.8,
    "avgPerRec": 218.2,
    "units": 3
  },
  {
    "operator": "Alfait Halim",
    "refuels": 13,
    "qty": 2500.9,
    "avgPerRec": 192.4,
    "units": 2
  },
  {
    "operator": "I Kadek Widi Ardana",
    "refuels": 12,
    "qty": 2133.3,
    "avgPerRec": 177.8,
    "units": 2
  },
  {
    "operator": "Edwin A. Oping",
    "refuels": 10,
    "qty": 2104.4,
    "avgPerRec": 210.4,
    "units": 1
  },
  {
    "operator": "Hasanudin",
    "refuels": 10,
    "qty": 2072.4,
    "avgPerRec": 207.2,
    "units": 2
  },
  {
    "operator": "Andri Paulo",
    "refuels": 10,
    "qty": 1969.1,
    "avgPerRec": 196.9,
    "units": 1
  }
];
export const ANOMALIES = [
  {
    "id": "ANO-01",
    "type": "STOCK",
    "unit": "STOCK SITE BPSP",
    "date": "26 Okt–1 Nov",
    "issue": "Stok EOD turun 35.961 L (77.186 → 41.225 L); titik terendah 37.051 L pada 31 Okt dan berada di bawah ROP 45.000 L sejak 29 Okt. Stock-in hanya 53.000 L vs konsumsi 88.961 L, tanpa pengiriman 26–27 Okt. Runway ~3,2 hari.",
    "severity": "HIGH",
    "status": "OPEN"
  },
  {
    "id": "ANO-02",
    "type": "VENDOR",
    "unit": "PT. CENTRAL OIL INDONESIA NICON",
    "date": "28 Okt–1 Nov",
    "issue": "5 pengiriman kecil/tidak teratur total 53.000 L (10.000; 7.927 [kurang 73 L]; 15.000; 5.000; 15.073 L [ganti kekurangan]). Tidak ada pasokan Bumi Energi Sejati minggu ini. Catatan 'GANTI KURANG TANGGAL 29 SEPT' kemungkinan salah ketik (29 Okt).",
    "severity": "MEDIUM",
    "status": "OPEN"
  },
  {
    "id": "ANO-03",
    "type": "UNIT",
    "unit": "DT-071 / DT-023 / DT-076 / DT-077",
    "date": "26 Okt–1 Nov",
    "issue": "Short-interval top-up: DT-071 277,0 L / 3,1 jam (89,4 L/HM, 26 Okt); DT-023 234,8 L / 3,0 jam (78,3 L/HM, 29 Okt) dan 150,9 L / 3,5 jam (43,1 L/HM, 1 Nov); DT-076 165,8 L / 2,5 jam (66,3 L/HM) dan DT-077 196,0 L / 3,5 jam (56,0 L/HM) pada 31 Okt.",
    "severity": "MEDIUM",
    "status": "OPEN"
  },
  {
    "id": "ANO-04",
    "type": "UNIT",
    "unit": "EXC-029 / EXC-026",
    "date": "26 & 31 Okt",
    "issue": "EXC-029 292,0 L / 5,8 jam (50,0 L/HM) pada 26 Okt dan EXC-026 395,0 L / 9,3 jam (42,3 L/HM) pada 31 Okt. Periksa idling/standby tinggi atau pencatatan HM.",
    "severity": "LOW",
    "status": "OPEN"
  },
  {
    "id": "ANO-05",
    "type": "DATA",
    "unit": "DT-015",
    "date": "28 Okt",
    "issue": "HM interval panjang: HM_diff 52,9 jam untuk 303,1 L. Transaksi dikecualikan dari FR; kemungkinan refuel antara tidak tercatat atau salah input HM.",
    "severity": "LOW",
    "status": "OPEN"
  },
  {
    "id": "ANO-06",
    "type": "UNIT",
    "unit": "DT-004 / DT-008",
    "date": "26 Okt–1 Nov",
    "issue": "FR sangat rendah (DT-004 10,5 L/HM; DT-008 11,1 L/HM) dengan HM_diff 21–27 jam per refuel. Indikasi refuel di luar Fuel Station atau HM akumulatif tidak akurat; dikeluarkan dari ranking terbaik.",
    "severity": "LOW",
    "status": "OPEN"
  },
  {
    "id": "ANO-07",
    "type": "INTERCO",
    "unit": "PT. MPS",
    "date": "26 & 31 Okt",
    "issue": "2 transaksi interco PT. MPS total 114,4 L (26 Okt: 52,2 L; 31 Okt: 62,2 L), turun tajam dari 1.769,6 L minggu lalu. Tidak ada transaksi PT. KFM dan HUB. Di-exclude dari metrik fleet.",
    "severity": "INFO",
    "status": "CLOSED"
  },
  {
    "id": "ANO-08",
    "type": "UNIT",
    "unit": "EXC-032 / DT-017 / DT-010",
    "date": "26 Okt–1 Nov",
    "issue": "EXC-032 aktif dengan 8 refuel (1.219 L; tidak ada transaksi base week) dan DT-017 kembali (293,6 L pada 31 Okt). Sebaliknya DT-010, EXC-001, dan EXC-002 tidak melakukan refuel.",
    "severity": "INFO",
    "status": "OPEN"
  },
  {
    "id": "ANO-09",
    "type": "DATA",
    "unit": "TOYOTA HILUX (LV)",
    "date": "26 Okt–1 Nov",
    "issue": "17 transaksi HM_diff <= 0 terutama kendaraan LV/Support yang menggunakan odometer (KM). Tidak ada isu integritas data.",
    "severity": "INFO",
    "status": "CLOSED"
  }
];
export const DATA_QUALITY = {
  "totalRecords": 465,
  "missingHM": 0,
  "missingKM": 0,
  "zeroOrNegHM": 17,
  "hmOver50": 1,
  "zeroOrNegKM": 152,
  "missingOperator": 0,
  "missingLocation": 0,
  "bulkRows": 0,
  "remarkFilled": 465,
  "completePct": 99.8
};
export const STOCK_SUMMARY = {
  "startStock": 77185.71,
  "endStock": 41224.85,
  "minStock": 37050.82,
  "minStockDate": "31/10",
  "totalInRecorded": 53000.0,
  "totalInCurrWeekRecorded": 53000.0,
  "totalOutGross": 88960.86,
  "bpspLoanIn": 0,
  "bpspRepayOutPrev": 0,
  "bpspRepayOutCurr": 0,
  "totalInVendorOnly": 53000.0,
  "totalInCurrWeekVendorOnly": 53000.0,
  "totalOutFleetNet": 88846.49,
  "netChange": -35960.86,
  "netChangeFleet": -35846.49,
  "stockInEvents": [
    {
      "date": "28/10",
      "qty": 10000.0,
      "type": "vendor",
      "vendor": "PT. CENTRAL OIL INDONESIA NICON",
      "remarks": "DONE"
    },
    {
      "date": "29/10",
      "qty": 7927.0,
      "type": "vendor",
      "vendor": "PT. CENTRAL OIL INDONESIA NICON",
      "remarks": "KURANG 73 LITER"
    },
    {
      "date": "30/10",
      "qty": 15000.0,
      "type": "vendor",
      "vendor": "PT. CENTRAL OIL INDONESIA NICON",
      "remarks": "DONE"
    },
    {
      "date": "31/10",
      "qty": 5000.0,
      "type": "vendor",
      "vendor": "PT. CENTRAL OIL INDONESIA NICON",
      "remarks": "DONE"
    },
    {
      "date": "1/11",
      "qty": 15073.0,
      "type": "vendor",
      "vendor": "PT. CENTRAL OIL INDONESIA NICON",
      "remarks": "DONE. GANTI KURANG TANGGAL 29 SEPT"
    }
  ],
  "bpspEvents": []
};
export const STOCK_DATA = [
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
  },
  {
    "date": "26/10",
    "lastStock": 63204.71
  },
  {
    "date": "27/10",
    "lastStock": 50544.88
  },
  {
    "date": "28/10",
    "lastStock": 45612.61
  },
  {
    "date": "29/10",
    "lastStock": 40419.93
  },
  {
    "date": "30/10",
    "lastStock": 43969.59
  },
  {
    "date": "31/10",
    "lastStock": 37050.82
  },
  {
    "date": "1/11",
    "lastStock": 41224.85
  }
];
export const VENDORS = [
  {
    "vendor": "PT. CENTRAL OIL INDONESIA NICON",
    "deliveries": 5,
    "totalQty": 53000.0,
    "avgQty": 10600.0,
    "remarks": [
      "DONE",
      "KURANG 73 LITER",
      "DONE. GANTI KURANG TANGGAL 29 SEPT"
    ]
  }
];
export const INTER_COMPANY = {
  "note": "Entry PT. MPS (114,37 L) pada 26 & 31 Okt dicatat sebagai inter-company transfer dan di-exclude dari metrik fleet. Tidak ada transaksi PT. KFM dan HUB minggu ini.",
  "events": [
    {
      "date": "2026-10-26",
      "unit": "PT. MPS",
      "qty": 52.22,
      "direction": "OUT",
      "type": "SITE_TRANSFER",
      "note": "Refuel MPS"
    },
    {
      "date": "2026-10-31",
      "unit": "PT. MPS",
      "qty": 62.15,
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
