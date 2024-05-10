function randomNumberRange(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export const searchSorts = [
  {
    id: 0,
    name: "Average Listing Price",
    fields: [
      { f: "avg_price_calc", asc: false, nullsFirst: false },
      { f: "act_count_sale", asc: false, nullsFirst: false },
    ],
    q: [{ avg_price_calc: "desc" }, { act_count_sale: "desc" }],
  },
  {
    id: 3,
    name: "Total Units #",
    fields: [
      { f: "total_units", asc: false, nullsFirst: false },
      { f: "act_count_sale", asc: false, nullsFirst: false },
    ],
    q: [{ total_units: "desc" }, { act_count_sale: "desc" }],
  },
  {
    id: 6,
    name: "12-month sales #",
    fields: [
      { f: "sld_cnt_12m", asc: false, nullsFirst: false },
      { f: "bld_name", asc: true, nullsFirst: false },
    ],
    q: [{ sld_cnt_12m: "desc" }, { "bld_name.keyword": "asc" }],
  },
  {
    id: 7,
    name: "12-month sales $",
    fields: [
      { f: "sld_amount_12m", asc: false, nullsFirst: false },
      { f: "bld_name", asc: true, nullsFirst: false },
    ],
    q: [{ sld_amount_12m: "desc" }, { "bld_name.keyword": "asc" }],
  },
  {
    id: 4,
    name: "A - Z",
    fields: [
      { f: "bld_name", asc: true, nullsFirst: false },
      { f: "erh_score_1", asc: false, nullsFirst: false },
    ],
    q: [{ "bld_name.keyword": "asc" }, { erh_score_1: "desc" }],
  },
  {
    id: 5,
    name: "Z - A",
    fields: [
      { f: "bld_name", asc: false, nullsFirst: false },
      { f: "erh_score_1", asc: false, nullsFirst: false },
    ],
    q: [{ "bld_name.keyword": "desc" }, { erh_score_1: "desc" }],
  },

  {
    id: 1,
    name: "Subscription Price (Hi - Lo)",
    fields: [
      { f: "bld_product_cost", asc: false, nullsFirst: false },
      { f: "act_count_sale", asc: false, nullsFirst: false },
    ],
    q: [{ bld_product_cost: "desc" }, { act_count_sale: "desc" }],
  },
  {
    id: 2,
    name: "Subscription Price (Lo - Hi)",
    fields: [
      { f: "bld_product_cost", asc: true, nullsFirst: false },
      { f: "act_count_sale", asc: false, nullsFirst: false },
    ],
    q: [{ bld_product_cost: "asc" }, { act_count_sale: "desc" }],
  },
];
export const searchTypes = [
  {
    id: 0,
    name: "Average Listing Price",
    label_long: "average listing price",
    fields: [
      { f: "avg_price_calc", asc: false, nullsFirst: false },
      { f: "act_count_sale", asc: false, nullsFirst: false },
    ],
    q: [{ avg_price_calc: "desc" }, { act_count_sale: "desc" }],
  },
  {
    id: 3,
    name: "Total Units #",
    label_long: "number of units",
    fields: [
      { f: "total_units", asc: false, nullsFirst: false },
      { f: "act_count_sale", asc: false, nullsFirst: false },
    ],
    q: [{ total_units: "desc" }, { act_count_sale: "desc" }],
  },
  {
    id: 6,
    name: "12 MONTH SALES ACTIVITY BY UNITS",
    label_long: "12 month sales activity by units",
    fields: [
      { f: "sld_cnt_12m", asc: false, nullsFirst: false },
      { f: "bld_name", asc: true, nullsFirst: false },
    ],
    q: [{ sld_cnt_12m: "desc" }, { "bld_name.keyword": "asc" }],
  },
  {
    id: 7,
    name: "12-month sales $",
    label_long: "12 month sales activity by amount",
    fields: [
      { f: "sld_amount_12m", asc: false, nullsFirst: false },
      { f: "bld_name", asc: true, nullsFirst: false },
    ],
    q: [{ sld_amount_12m: "desc" }, { "bld_name.keyword": "asc" }],
  },
  {
    id: 4,
    name: "A - Z",
    label_long: "A - Z",
    fields: [
      { f: "bld_name", asc: true, nullsFirst: false },
      { f: "erh_score_1", asc: false, nullsFirst: false },
    ],
    q: [{ "bld_name.keyword": "asc" }, { erh_score_1: "desc" }],
  },
  {
    id: 5,
    name: "Z - A",
    label_long: "Z - A",
    fields: [
      { f: "bld_name", asc: false, nullsFirst: false },
      { f: "erh_score_1", asc: false, nullsFirst: false },
    ],
    q: [{ "bld_name.keyword": "desc" }, { erh_score_1: "desc" }],
  },

  {
    id: 1,
    name: "Subscription Price (Hi - Lo)",
    label_long: "Subscription price high to low",
    fields: [
      { f: "bld_product_cost", asc: false, nullsFirst: false },
      { f: "act_count_sale", asc: false, nullsFirst: false },
    ],
    q: [{ bld_product_cost: "desc" }, { act_count_sale: "desc" }],
  },
  {
    id: 2,
    name: "Subscription Price (Lo - Hi)",
    label_long: "Subscription price low to high",
    fields: [
      { f: "bld_product_cost", asc: true, nullsFirst: false },
      { f: "act_count_sale", asc: false, nullsFirst: false },
    ],
    q: [{ bld_product_cost: "asc" }, { act_count_sale: "desc" }],
  },
];
export const calcCommission = (avgPrice) => {
  return avgPrice * 0.03 * 0.8;
};
export const calcPkgCards = (pkg, units, cardMoSub) => {
  switch (pkg) {
    case "x1":
      return units - cardMoSub;
      break;
    case "x2":
      return units * 2 - cardMoSub;
      break;
    default:
      return cardMoSub;
  }
};
export const calcPkgPriceDiff = (pkg, curPkg, pkgPrices, emptyReturn) => {
  let rtn = 0;
  if (!pkgPrices) return emptyReturn || "";
  switch (pkg) {
    case "x1":
      if (curPkg === "x2") {
        rtn = pkgPrices["x1"] - pkgPrices[curPkg];
      }
      if (curPkg === "base") {
        rtn = pkgPrices["x1"];
      }
      break;
    case "x2":
      if (curPkg === "x1") {
        rtn = pkgPrices["x2"] - pkgPrices[curPkg];
      }
      if (curPkg === "base") {
        rtn = pkgPrices["x2"];
      }
      break;
    default:
      // base
      if (curPkg === "x1") {
        rtn = pkgPrices["x1"] * -1;
      }
      if (curPkg === "x2") {
        rtn = pkgPrices["x2"] * -1;
      }
  }
  // console.log("calcPkgPriceDiff", rtn, pkg, curPkg, pkgPrices);
  if (rtn < 0) {
    return "-  $" + Math.abs(rtn) + "";
  }
  if (rtn > 0) {
    return "  $" + rtn;
  }

  return emptyReturn || "";
};
export const calcPrice = (avgPrice, units) => {
  const priceMeta = {
    MktPrice: 500000,
    MktPriceUnit: 0.5,
    DelataApply: 5,
    MinPrice: 49,
  };
  const adjustedPriceUnitRaw =
    (avgPrice * priceMeta.MktPriceUnit) / priceMeta.MktPrice;
  const adjustedPriceUnit =
    adjustedPriceUnitRaw < priceMeta.MktPriceUnit
      ? priceMeta.MktPriceUnit
      : adjustedPriceUnitRaw;
  const adjustedPrice = adjustedPriceUnit * units;
  const regPrice = Math.round(priceMeta.MktPriceUnit * units * 100) / 100;
  const priceDelta = Math.round((adjustedPrice - regPrice) * 100) / 100;
  const finalPrice = Math.round(
    priceDelta * (priceMeta.DelataApply / 100) + regPrice
  );
  return (finalPrice || 0) < priceMeta.MinPrice
    ? priceMeta.MinPrice
    : finalPrice;
};
export const fmtKM = (num) => {
  const v = parseInt(num);
  if (v > 999999) {
    return parseFloat(v / 1000000).toFixed(1) + "M";
  }
  if (v > 999) {
    return parseInt(v / 1000) + "K";
  }
  return v;
};
export const fmtPriceStd = (num) => {
  const v = Math.round(num);
  if (v > 0) {
    return "$" + v.toLocaleString();
  }
  return "";
};
export const fmtPriceFreq = (num, isYrly) => {
  const v = Math.round(num);
  if (v > 0) {
    return "$" + v.toLocaleString() + "/" + (isYrly ? "yr" : "mo");
  }
  return "";
};
export const fmtPhone = (num) => {
  const v = num.toString().replace(/\D/g, "");
  if (v.length === 10) {
    return "(" + v.slice(0, 3) + ") " + v.slice(3, 6) + "-" + v.slice(6);
  }
  return v;
};
export const fmtIntials = (firstname, lastname, email) => {
  const l = lastname.split(" ");
  if (l.length > 1) {
    lastname = l[1];
  }
  if (firstname && lastname) {
    return firstname.charAt(0) + lastname.charAt(0);
  }
  if (!firstname && !lastname && email) {
    return email.charAt(0);
  }
  if (firstname && !lastname) {
    return firstname.charAt(0);
  }
  if (lastname) {
    return lastname.charAt(0);
  }
  return "";
};

export const leadSorts = [
  {
    name: "Last (A - Z)",
    value: 1,
    sobj: { field: "imp_last_name", forceNum: false },
  },
  {
    name: "Last (Z - A)",
    value: 2,
    sobj: { field: "-imp_last_name", forceNum: false },
  },
  {
    name: "Price (Hi - Lo)",
    value: 3,
    sobj: { field: "-imp_max_price", forceNum: true },
  },
  {
    name: "Price (Lo - Hi)",
    value: 4,
    sobj: { field: "imp_max_price", forceNum: true },
  },
  {
    name: "Date (New - Old)",
    value: 5,
    sobj: { field: "lead_date_", forceNum: true },
  },
  {
    name: "Date (Old - New)",
    value: 6,
    sobj: { field: "-lead_date_", forceNum: true },
  },
];
export const dynamicSort = (props) => {
  var sortOrder = 1;
  var property = props.field;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */ var result;
    if (props.forceNum) {
      result =
        parseInt(a[property]) < parseInt(b[property])
          ? -1
          : parseInt(a[property]) > parseInt(b[property])
          ? 1
          : 0;
    } else {
      result =
        (a[property] || "").toLowerCase() < (b[property] || "").toLowerCase()
          ? -1
          : (a[property] || "").toLowerCase() >
            (b[property] || "").toLowerCase()
          ? 1
          : 0;
    }
    return result * sortOrder;
  };
};

export const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
