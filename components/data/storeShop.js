import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { immer } from "zustand/middleware/immer";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
// sale_price_avg
import {
  fmtKM,
  calcCommission,
  calcPkgCards,
  searchSorts,
} from "../utils/utils";
const initRoi = {
  bid: null,
  bldgPrice: null,
  touches: 500,
  units: null,
  respRate: 2,
  convRate: 10,
  prospects: null,
  projSales: null,
  projComm: null,
  avgPrice: null,
  comPct: 3,
  agentSplit: 80,
  isAnnual: true,
  discountMoPct: 0,
  discountMo: 0,
  discountYr: 0,
  costMoSub: 0,
  costMoMkt: 0,
  costSub: 0,
  costMkt: 0,
  cardMo: 10,
  cardMoSub: 10,
  cardMoMkt: 0,
  cardPkg: "base",
  pkgCards: null,
  pkgPrices: null,
  projRoi: null,
  projIncome: null,
  bldgValue: null,
  bldgValueDig: null,
  loading: false,
  status: "",
  loaded: false,
  loadedDig_: 0,
};
const locMiami = {
  canonical_slug: "Miami-Metro-FL",
  containers: {
    state_id: 20,
    country_slug: "USA",
    main_container_slug: "FL",
    country_id: 9,
    parent_type: "state",
    state_label: "Florida",
    state_slug: "FL",
    parent_label: "Florida",
    country_label: "United States",
    parent_search: "FL",
    parent_slug: "FL",
    parent_id: 20,
  },
  location_type: "metro",
  _id: 1134,
  search: "Miami Metro",
  label: "Miami, FL (Metro Area)",
  listing_metrics: {
    avg_price_per_sqft: 180.57,
    total: 359309,
    med_rent: 1800,
    avg_rent_per_sqft: 2.18,
    avg_rent: 2583.24,
    med_price: 85697,
    for_rent: 20002,
    for_sale: 139307,
    avg_price: 340329.59,
  },
  centroid: {
    lon: -80.561548280776,
    lat: 25.61547596194,
  },
};
const intialQueryListings = {
  search_type: "location",
  location_id: "1134",
  result_from: 0,
  ids: "",
  req_pg: 1,
  result_size: 96,
  filter_is_sold: false,
  filter_is_avail: false,
  sort_id: 0,
  sort: [
    { erh_score_1: "desc" },
    { act_avg_sale_price: "desc" },
    { act_count_sale: "desc" },
  ],
  page: 1,
};
const listingsPerPage = 48;
const initListings = {
  listings: [],
  loadingListings: false,
  statusListings: "",
};
const initListingsGroups = [
  {
    ...initListings,
    name: "grpavg",
    label: "AVERAGE LISTING PRICE",
    sortId: 0,
    result_size: 5,
    filter_is_avail: true,
  },
  {
    ...initListings,
    name: "grp12sale",
    label: "12 MONTH SALES ACTIVITY BY UNITS",
    sortId: 6,
  },
  {
    ...initListings,
    name: "grp12saleamt",
    label: "12 MONTH SALES ACTIVITY BY AMOUNT",
    sortId: 7,
  },
  { ...initListings, name: "grpnu", label: "NUMBER OF UNITS", sortId: 3 },
];
const initialStateShopLocation = {
  currentLocation: null,
  currentLocationId: null,
  currentLocationSlug: null,
  currentLocationType: null,
  currentLocation_: 0,
  currentLocationSrc: null,
  nerbyCities: [],
  nerbyCities_: 0,
  nerbyCitiesLoading: false,
  nerbyCitiesStatus: "",
  nerbyCitiesLookupId: null,
};
const initialStateShopMain = {
  ethValue: 0,
  statusListings: "",
  loadingListings: false,
  listings: [],
  listingsCount: 0,
  listingsPage: 1,
  listingsMaxPages: 0,
  listings_: 0,
  listingsSortId: 0,
  currentListing: null,
  pgMode: "store",
  pgModeLast: "store",
  dispBldgDetails: false,
  dispBldgModal: false,
  dispResultsMap: false,
  totalROI: initRoi,
  listingsGroups: initListingsGroups,
  favorites: [],
  campainCodeSel: "",
  campainCodeId: null,
  campainCodeSrc: null,
};

const discountForAnnualPercent = 0.18;
const initialStateShopRoi = {
  ethValue: 0,
  totalROI: initRoi,
  totalROI_: 0,
  videoROI: 0,
};
const intialCartItem = {
  bldg_id: null,
  bldg_name: "",
  bld_price: null,
  costMoSub: 0,
  costMoMkt: 0,
  costSub: 0,
  costMkt: 0,
  cardMo: 10,
  cardMoSub: 10,
  cardMoMkt: 0,
  cardPkg: "base",
};
const initialStateShopCart = {
  cartItems: [],
  setupFee: { basePrice: 99, discoutAmount: 0, discoutPercent: 0, price: 99 },
  cartTotals: {
    annual: 0,
    monthly: 0,
    oneTime: 0,
    annualDiscountTaken: 0,
    annualDiscountNotTaken: 0,
  },
  cartTotal: 0,
  cartTotal_: 0,
};
export const sliceShopLocation = (set, get) => ({
  ...initialStateShopLocation,
  pullGeoIp: async () => {
    const req = await axios.get(
      `https://dapi.buildingadvisor.ai/webhook/geoip.php`,
      {
        responseType: "json",
      }
    );
    const response = await req.data;
    console.log("pullGeoIp", response);
    if ((response?.data?.country?.iso_code || "") == "US") {
      return response?.data?.postal?.code || "";
    }
    return "";
  },
  pullLocationById: async (locationId) => {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase
      .from("location_docs")
      .select()
      .eq("loc_id", locationId)
      .limit(50);
    console.log("error pullLocationById", { error });
    console.log("data pullLocationById", { data });
    if (data) {
      return data[0]["doc"];
    }
    return null;
    const req = await axios.get(
      `https://lapi.condo.com/webhook/es.php?action=location_by_id&id=${locationId}`,
      { responseType: "json" }
    );
    const response = await req.data;
    if (parseInt(response?.hits?.total || 0) > 0) {
      return response?.hits?.hits[0]?._source;
    }
    return null;
  },
  pullTopCitiesByMetroId: async (metroId) => {
    const req = await axios.get(
      `https://track.condo.com/svc/es.php?action=top_cities_by_metro&id=${metroId}`,
      { responseType: "json" }
    );
    const response = await req.data;
    if (response?.hits?.hits) {
      let locs = [];
      response?.hits?.hits.forEach((hit, i) => {
        // console.log("pullTopCitiesByMetroId hit", hit);
        locs.push(hit._source);
      });
      return locs;
    }
    return null;
  },
  pullZipToMetroId: async (zipCode) => {
    const req = await axios.get(
      `https://track.condo.com/svc/es.php?action=zip_to_metro&id=${zipCode}`,
      { responseType: "json" }
    );
    const response = await req.data;
    if (response?.data?.metro_id) {
      return parseInt(response?.data?.metro_id);
    }
    return 0;
  },
  getMetroIdByZipcode: async (zipCode) => {
    const response = await get().pullZipToMetroId(zipCode);
    console.log("getMetroIdByZipcode response", response);
    return response;
  },
  doSetNerbyCities: async (metroId) => {
    set({
      nerbyCities: [],
      nerbyCitiesLoading: true,
      nerbyCitiesStatus: "",
      nerbyCitiesLookupId: null,
    });
    const r = await get().pullTopCitiesByMetroId(metroId);
    console.log("doSetNerbyCities", r);
    if (r) {
      set({
        nerbyCities: r,
        nerbyCitiesLoading: false,
        nerbyCitiesStatus: "error",
        nerbyCitiesLookupId: metroId,
      });
    } else {
      set({
        nerbyCities: [],
        nerbyCitiesLoading: false,
        nerbyCitiesStatus: "success",
        nerbyCitiesLookupId: null,
      });
    }
  },
  setLocation: async (objLocation, locSrc) => {
    set({
      currentLocation: objLocation,
      currentLocationType: objLocation.location_type,
      currentLocationId: objLocation._id,
      currentLocationSlug: objLocation.canonical_slug || "Current-Location",
      currentLocationSrc: locSrc,
      currentLocation_: parseInt(new Date().getTime()),
    });
    // const r = await get().doLoadListings();
    console.log("setLocation", objLocation);
    let metroId = 0;
    if (objLocation.location_type == "metro") {
      metroId = objLocation._id;
      // console.log("setLocation metro 1", metroId);
    } else if (objLocation.location_type == "zipcode") {
      // console.log("setLocation zipcode", objLocation.search);
      metroId = await get().getMetroIdByZipcode(objLocation.search);
      // console.log("setLocation zipcode metroId 2", metroId);
    } else if (objLocation.containers.parent_type == "metro") {
      metroId = objLocation.containers.parent_id;
      // console.log("setLocation metro 3", metroId);
    }
    if (metroId) {
      if (get().nerbyCitiesLookupId != metroId) {
        const n = await get().doSetNerbyCities(metroId);
        // console.log("setLocation metro 4", metroId, get().nerbyCitiesLookupId);
      }
    }
    return objLocation?._id;
  },
  doGeoIpLookup: async () => {
    const geoip_zip = await get().pullGeoIp();
    if (geoip_zip) {
      const location_id = await get().getMetroIdByZipcode(geoip_zip);
      if (location_id) {
        return await get().pullLocationById(location_id);
      }
    }
    return null;
  },
});
export const sliceShopCart = (set, get) => ({
  ...initialStateShopCart,
  clearCart: () => {
    set(initialStateShopCart);
  },
  changeSelCampaign: (selBrand, reCalc) => {
    set((state) => {
      state.campainCodeSel = selBrand;
    });
    if (reCalc) {
      const cartItems = get().cartItems || [];
      cartItems.forEach((item, idx) => {
        set((state) => {
          state.cartItems[idx].totalROI = get().calcTotalRoi(item.totalROI);
        });
      });
      get().calcCartTotals();
    }
  },
  // adjustSetupFee: (selBrand) => {
  // 	let campaign = get().campainCodeId || "";
  // 	let brand = selBrand || "";
  // 	if (brand == "bluesky") {
  // 		campaign = "bluesky_1";
  // 	}
  // 	let setupFee = {
  // 		basePrice: 99,
  // 		discoutAmount: 24,
  // 		discoutPercent: 25,
  // 		price: 75,
  // 	};
  // 	if (brand == "keyes" || brand == "illustrated" || brand == "platinum") {
  // 		setupFee = {
  // 			basePrice: 99,
  // 			discoutAmount: 49,
  // 			discoutPercent: 50,
  // 			price: 49,
  // 		};
  // 	} else {
  // 		if (campaign == "bluesky_1" && isAnnual) {
  // 			setupFee = {
  // 				basePrice: 99,
  // 				discoutAmount: 49,
  // 				discoutPercent: 50,
  // 				price: 49,
  // 			};
  // 		}
  // 	}
  // 	set((state) => {
  // 		state.setupFee = setupFee;
  // 	});
  // 	console.log("adjustSetupFee", isAnnual, selBrand, setupFee);
  // 	// get().calcCartTotals();
  // },
  importSetupFee: (setupFee) => {
    set((state) => {
      state.setupFee = setupFee;
    });
    get().calcCartTotals();
  },
  addListingToCart: (listing_roi) => {
    // get().doShowListingByListing(get().getListingById(id, srcCollection));
    // console.log("doShowListingById", id, srcCollection, listing_roi);
    console.log("doAddListingToCart", listing_roi);
    const l = get().cartItems.findIndex(
      (item) => item?.totalROI.bid === listing_roi?.totalROI.bid
    );
    if (l != -1) {
      set((state) => {
        state.cartItems.splice(l, 1);
      });
      // remove if already in cart
    }
    set((state) => {
      state.cartItems.push(listing_roi);
    });
    // const isInArray = get().cartItems.find(
    // 	(l) => l.bid == listing_roi?.totalROI.bid
    // );
    // if (!isInArray) {
    // 	set((state) => {
    // 		state.cartItems.push(listing_roi);
    // 	});
    // }
    console.log("addListingToCart", l, get().cartItems, listing_roi);
    get().calcCartTotals();
  },
  removeListingFromCart: (id) => {
    if (id) {
      set((state) => {
        state.cartItems.splice(
          state.cartItems.findIndex((item) => item?.totalROI.bid === id),
          1
        );
      });
    }
    console.log("removeListingFromCart", id, get().cartItems);
    get().calcCartTotals();
  },
  checkIsInCart: (id) => {
    return get().cartItems.some((f) => f?.totalROI?.bid === id);
  },
  setCartItemIsAnnual: (idx, b) => {
    let totalROI = { ...get().cartItems[idx].totalROI };
    console.log("setRoiIsAnnual => bool,totalROI", b, totalROI);
    totalROI.isAnnual = b;
    set((state) => {
      state.cartItems[idx].totalROI = get().calcTotalRoi(totalROI);
    });
    get().calcCartTotals();
  },
  setCartItemPkg: (idx, pkg) => {
    let totalROI = { ...get().cartItems[idx].totalROI };
    totalROI.cardPkg = pkg;
    set((state) => {
      state.cartItems[idx].totalROI = get().calcTotalRoi(totalROI);
    });
    get().calcCartTotals();
  },
  calcCartTotals: () => {
    const cartItems = get().cartItems || [];
    // const setupFee = get().setupFee;
    let totals = {
      annual: 0,
      monthly: 0,
      oneTime: 0,
      annualDiscountTaken: 0,
      annualDiscountNotTaken: 0,
    };
    cartItems.forEach((item) => {
      if (item.totalROI.isAnnual) {
        totals.annual +=
          item.totalROI.costMoSub * 12 + item.totalROI.costMoMkt * 12;
        totals.annualDiscountTaken += item.totalROI.discountMo * 12;
      } else {
        totals.monthly += item.totalROI.costMoSub + item.totalROI.costMoMkt;
        totals.annualDiscountNotTaken += item.totalROI.discountMoAvail * 12;
      }
    });
    let isAnnual = false;
    let checkoutMode = "monthly";
    if (totals.annual > 0 && totals.monthly > 0) {
      checkoutMode = "custom";
    } else if (totals.annual > 0) {
      checkoutMode = "annual";
      isAnnual = true;
    }
    const campainCodeSel = get().campainCodeSel;
    const campainCodeId = get().campainCodeId;
    let brand = campainCodeSel || campainCodeId || "";
    if (brand == "bluesky") {
      brand = "bluesky_1";
    }
    let setupFee = {
      basePrice: 120,
      discoutAmount: 71,
      discoutPercent: 60,
      price: 49,
    };
    if (isAnnual) {
      setupFee = {
        basePrice: 120,
        discoutAmount: 45,
        discoutPercent: 38,
        price: 75,
      };
    }
    if (brand == "keyes" || brand == "illustrated" || brand == "platinum") {
      setupFee = {
        basePrice: 120,
        discoutAmount: 120,
        discoutPercent: 100,
        price: 0,
      };
    } else {
      if (isAnnual) {
        setupFee = {
          basePrice: 120,
          discoutAmount: 71,
          discoutPercent: 60,
          price: 49,
        };
      }
    }
    totals.oneTime = setupFee.price;

    console.log("calcCartTotals-b a", { campainCodeSel });
    console.log("calcCartTotals-b 1", brand, campainCodeSel, campainCodeId);

    console.log("calcCartTotals-b 2", isAnnual, setupFee);
    set((state) => {
      state.setupFee = setupFee;
      state.cartTotals = totals;
      state.cartTotal = totals.annual + totals.monthly + totals.oneTime;
      state.cartTotal_ = Math.floor(Date.now());
      state.checkoutMode = checkoutMode;
    });
    console.log("calcCartTotals", cartItems, totals);
  },
});

export const sliceShopRoi = (set, get) => ({
  ...initialStateShopRoi,
  pullEthValue: async () => {
    set({ loadingEth: true, statusEth: "" });
    const req = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`,
      { responseType: "json" }
    );
    const response = await req.data;
    console.log("response", response);
    const rtnVal = response?.ethereum?.usd || null;
    if (rtnVal) {
      set({
        ethValue: parseFloat(rtnVal),
        ethValue_: Math.floor(Date.now()),
      });
    }
  },
  loadEthValues: async () => {
    const ethValue = get().ethValue;
    const ethValue_ = get().ethValue_;
    if (ethValue && ethValue_ && Math.floor(Date.now()) - ethValue_ < 60000) {
      return;
    }
    return get().pullEthValue();
  },
  calcTotalRoi: (roi) => {
    const ethValue = get().ethValue;
    let r = {
      ...roi,
      cost: 0,
      costMo: 0,
      prospects: 0,
      projSales: 0.0,
      projComm: 0,
      projIncome: 0,
      bldgValue: 0,
      bldgValueDig: 0,
      discountMo: 0,
      discountYr: 0,
      discountMoAvail: 0,
      discountMoAvail: 0,
    };
    const pkg = r.cardPkg;
    r.cardMoMkt = r.pkgCards[pkg];
    r.costMoMkt = r.pkgPrices[pkg];
    // const discountAmount = Math.floor(r.bldgPrice * discountForAnnualPercent);
    let discountAmount = Math.floor(10);
    const campaign = get().campainCodeId || get().campainCodeSel || "";
    console.log("calcTotalRoi campaign ---->", campaign);
    // if (campaign == "bluesky_1" || campaign == "bluesky") {
    // 	discountAmount = Math.floor(30);
    // }
    console.log(
      "calcTotalRoi campaign,discountAmount",
      campaign,
      discountAmount
    );
    if (r.isAnnual) {
      r.discountMoPct = discountForAnnualPercent;
      r.discountMo = discountAmount;
      r.discountMoAvail = 0;
      r.costMoSub = r.bldgPrice - r.discountMo;
    } else {
      r.discountMoPct = 0;
      r.discountMo = 0;
      r.discountMoAvail = discountAmount;
      r.costMoSub = r.bldgPrice;
    }
    r.costMo = r.costMoSub + r.costMoMkt;
    r.costMo = (r.costMoSub || 0) + (r.costMoMkt || 0);
    r.cardMo = r.cardMoSub + r.cardMoMkt;
    r.touches = r.cardMo * 12;
    r.costSub = (r.costMoSub || 0) * 12;
    r.costMkt = (r.costMoMkt || 0) * 12;
    const cost = r.costSub + r.costMkt;
    const prospects = parseInt(r.touches * (r.respRate / 100));
    // const projSales = parseFloat(prospects * (r.convRate / 100));
    const projSales = 1;
    const projComm =
      projSales *
      (r.avgPrice || 317200) *
      (r.comPct / 100) *
      (r.agentSplit / 100);
    const projIncome = projComm - cost;
    const projRoi = Math.round((projIncome * 100) / cost);
    const bldgValue = parseInt(projIncome * 3);
    if (ethValue && bldgValue) {
      r.bldgValueDig = ethValue
        ? parseFloat(bldgValue / ethValue).toFixed(1)
        : 0;
    }
    const totalROI = {
      ...r,
      cost,
      prospects,
      projSales,
      projComm,
      projIncome,
      projRoi,
      respRate: r.respRate,
      convRate: r.convRate,
      comPct: r.comPct,
      agentSplit: r.agentSplit,
      totaled: true,
      bldgValue,
    };
    return totalROI;
  },
  setRoiUsr: (fld, val) => {
    let totalROI = { ...get().totalROI };
    totalROI[fld] = val;
    set((state) => {
      state.totalROI = get().calcTotalRoi(totalROI);
      state.modeRoi = "projected";
    });
  },
  setRoiFlds: (chngs) => {
    let totalROI = { ...get().totalROI };
    chngs.forEach((chng, i) => {
      totalROI[chng.fld] = chng.val;
    });
    set((state) => {
      state.totalROI = get().calcTotalRoi(totalROI);
    });
  },
  setVideoRoi: (chngs) => {
    set((state) => {
      state.videoROI = chngs;
    });
  },
  setRoiIsAnnual: (b) => {
    let totalROI = { ...get().totalROI };
    console.log("setRoiIsAnnual pkg,totalROI", b, totalROI);
    totalROI.isAnnual = b;
    set((state) => {
      state.totalROI = get().calcTotalRoi(totalROI);
      state.modeRoi = "projected";
    });
  },
  setRoiPkg: (pkg) => {
    let totalROI = { ...get().totalROI };
    // console.log("setRoiPkg pkg,totalROI", pkg, totalROI);
    // console.log(
    // 	"setRoiPkg subs",
    // 	totalROI.pkgCards[pkg],
    // 	totalROI.pkgPrices[pkg]
    // );
    totalROI.cardPkg = pkg;
    set((state) => {
      state.totalROI = get().calcTotalRoi(totalROI);
    });
  },
});

export const sliceShopMain = (set, get) => ({
  ...initialStateShopMain,
  startShop: async (locationId) => {
    console.log(
      ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  startShop  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
    );
    await get().loadEthValues();
    // intilizeShop();

    let campainCode = "";
    let campainCodeSrc = "";
    if (
      typeof window !== "undefined" &&
      typeof window?.document !== "undefined"
    ) {
      const cookies = (window?.document?.cookie || "").split(";");
      for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].trim().startsWith("campain_code=")) {
          const cookieCampainCode = cookies[i].trim().split("=")[1];
          if (cookieCampainCode) {
            campainCode = cookieCampainCode;
            campainCodeSrc = "cookie";
          }
          //.. Do what you want with connect.sid cookie
          console.log("startShop cookieCampainCode", cookieCampainCode);
          break;
        }
      }
    }

    set({ campainCodeId: campainCode, campainCodeSrc: campainCodeSrc });
    console.log("startShop campainCodeId", campainCode);
    console.log("startShop campainCodeSrc", campainCodeSrc);
    // get().adjustSetupFee("");
    const cid = get().currentLocationId || 0;
    console.log("startShop cid", cid);
    if (cid == 0) {
      const location = await get().doGeoIpLookup();
      if (location) {
        get().doSearchLocation(location, "start");
      } else {
        get().doSearchLocation(locMiami, "start");
      }
    }
  },
  setModalNewBuilding: (b) => set({ dispBldgModal: b }),
  setDispResultsMap: (b) => set({ dispResultsMap: b }),
  goToPage: (pg) => {
    const pgMode = get().pgMode;
    console.log("goToPage pgMode", pg, pgMode);

    if (pg == "store") {
      pg == "results";
    }

    if (pg == "store" || pg == "results") {
      set({ pgModeLast: pg });
    }
    if (pg == "last") {
      console.log("goToPage last", get().pgModeLast);
      set({ pgMode: get().pgModeLast });
    } else {
      set({ pgMode: pg });
    }
    if (pg == "store" || pg == "results") {
      const currentLocationSlug =
        get().currentLocationSlug || "Current-Location";
      const newLoc = `/buildings/${currentLocationSlug}`;
      if (pg == "store") {
        window.location.assign(newLoc);
      } else {
        window.history.replaceState(
          { pg, currentLocationSlug },
          "Search Results",
          newLoc
        );
      }
    }
  },
  setDispBldgModal: (b) => set({ dispBldgModal: b }),
  ccEncrypt: async (cc) => {
    const query = { cc };
    console.log("ccEncrypt query", query);
    const req = await axios.post(`https://track.condo.com/svc/cc.php`, query, {
      responseType: "json",
    });
    const response = await req.data;
    return response;
  },

  pushRmiLead: async (lead) => {
    const req = await axios.post(
      `https://dapi.buildingadvisor.ai/webhook/proxy-lead-pre-post-json.php`,
      lead,
      {
        responseType: "json",
      }
    );
    const response = await req.data;
    console.log("pushRmiLead", response);
    return response;
  },
  pushPlaceOrder: async (order) => {
    const req = await axios.post(
      `https://lapi.condo.com/webhook/form-post-tran6.php`,
      order,
      {
        responseType: "json",
      }
    );
    const response = await req.data;
    return response;
  },
  pushCheckOrder: async (order_key, pushCheckOrderAttempt = 1) => {
    // 30000
    try {
      const req = await axios.get(
        `https://lapi.condo.com/webhook/terms6?order=${order_key}&ver=0&usr=0&view=0&attempt=${pushCheckOrderAttempt}`,
        {
          responseType: "json",
          timeout: 30000,
        }
      );
      const response = await req.data;
      return response;
    } catch (err) {
      console.log("post call failed");
      return {
        status: "error",
        message: "post call failed",
        experts_created: false,
        err,
      };
    }
  },
  pullListingReviews: async (query) => {
    console.log("pullListingReviews  query", query);

    const supabase = createClient(supabaseUrl, supabaseKey);
    let q = supabase
      .from("tbl_building_reviews")
      .select("*", { count: "exact" })
      .eq("ref_property_id", query._id);
    const { data, error, count } = await q;
    console.log("error pullListingReviews", { error });
    console.log("data pullListingReviews", { data });
    console.log("count pullListingReviews", { count });

    if (data) {
      return { data: { rows: data || [], total: count } };
    }
    return null;
  },
  pullPagePhone: async (queryString) => {
    const req = await axios.get(
      `https://dapi.buildingadvisor.ai/webhook/SearchPhoneNumbersV2.php?${queryString}`,
      {
        responseType: "json",
        timeout: 30000,
      }
    );
    const response = await req.data;
    console.log("pullPagePhone", response);
    return response;
  },
  pullListing: async (query) => {
    // 30000
    try {
      const req = await axios.get(
        `https://lapi.condo.com/webhook/get_bldg?bid=${query._id}`,
        {
          responseType: "json",
        }
      );
      const response = await req.data;
      return response;
    } catch (err) {
      console.log("post call failed");
      return {
        status: "error",
        message: "post call failed",
        experts_created: false,
        err,
      };
    }
  },
  pullListing_sp: async (query) => {
    console.log("pullListing  query", query);

    const supabase = createClient(supabaseUrl, supabaseKey);
    let q = supabase
      .from("building_docs")
      .select("doc")
      .eq("property_id", query._id);
    const { data, error } = await q;
    console.log("error pullListing", { error });
    console.log("data pullListing", { data });
    if (data) {
      return data[0]["doc"];
    }
    return null;
  },
  pullListings: async (query) => {
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log("pullListings  query", query);
    const query_test = {
      search_type: "location",
      location_id: 459,
      result_from: 0,
      ids: "",
      req_pg: 1,
      result_size: 4,
      filter_is_sold: false,
      filter_is_avail: false,
      sort_id: 3,
      sort: [{ total_units: "desc" }, { act_count_sale: "desc" }],
      page: 1,
    };
    let ltyp = query.location_type;
    let lsuffix = "_id";
    switch (query.location_type) {
      case "place":
        ltyp = "city";
        break;
      case "zipcode":
        ltyp = "zip";
        break;
      case "building":
        ltyp = "pbid";
        lsuffix = "";
        break;
    }
    const locFilterLbl = `${ltyp}${lsuffix}`;
    let q = supabase
      .from("vw_tbl_bldg_metrics")
      .select("*", { count: "exact" })
      .eq(locFilterLbl, query.location_id);

    if (query.img_only) {
      q.neq("img", null);
    }

    const sortId = query.sort_id || 0;
    const sorts = searchSorts.find((s) => s.id === sortId);
    // console.log("pullListings sorts", sorts);
    sorts?.fields.map((s) => {
      q = q.order(s.f, { ascending: s.asc });
    });
    const result_from = parseInt(query?.result_from || 0);
    const result_size = parseInt(query?.result_size || 50);
    if (result_from > 0) {
      q = q.range(result_from, result_from + result_size);
      console.log("q range", { result_from, result_size });
    } else {
      q = q.limit(result_size);
      console.log("q limit", { result_size });
    }
    console.log({ result_from, result_size }, "q pullListings", { q });
    const { data, error, count } = await q;
    console.log("error pullListings", { error });
    console.log("data pullListings", { data });

    console.log("count pullListings", { count });
    console.log(
      "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!pullListings  query",
      result_from,
      result_size,
      query
    );
    if (data) {
      return { data: { rows: data || [], total: count } };
    }
    return null;

    const req = await axios.post(
      `https://track.condo.com/svc/es.php?action=metrics_building_search&povr=y`,
      query,
      { responseType: "json" }
    );
    const response = await req.data;
    return response;
  },
  pullListingsMain: async (query) => {
    const locType = get().currentLocation.location_type;
    console.log("pullListingsMain locType", locType);
    // console.log("pullListingsMain query", query);
    const response = await get().pullListings(query);
    const listingsCount = response?.data?.total || 0;
    const listingsMaxPages = Math.ceil(listingsCount / listingsPerPage);
    const rtnListings = response?.data?.rows || [];
    const clisting = get().currentListing;

    console.log(
      "pullListingsMain query ,response ********************************************************************",
      { query },
      { response },
      { listingsCount },
      { listingsMaxPages }
    );
    set({
      statusListings: response?.status || "error",
      listings: [...get().listings, ...rtnListings],
      listingsCount,
      listingsMaxPages,
      listings_: Math.floor(Date.now()),
      loadingListings: false,
      location_type: locType,
      currentListing:
        locType?.toLowerCase() === "building"
          ? response?.data?.rows[0]
          : clisting,
    });
    return true;
  },
  pullListingsGroups: async () => {
    const grps = get().listingsGroups;
    const location_id = get().currentLocation._id;
    const location_type = get().currentLocation.location_type;
    grps.forEach(async (grp, i) => {
      set((state) => {
        state.listingsGroups[i].loadingListings = true;
        state.listingsGroups[i].statusListings = "";
        state.listingsGroups[i].listings = [];
      });
      const s = searchSorts.find((s) => s.id === grp.sortId);
      const result_size = grp.result_size || 4;
      const filter_is_avail = grp.filter_is_avail || false;
      const query = {
        ...intialQueryListings,
        location_id,
        location_type,
        result_size,
        filter_is_avail,
        sort_id: s.id,
        sort: s.fields,
        img_only: true,
      };
      // console.log("pullListingsGroups query", query);
      const response = await get().pullListings(query);
      // console.log("pullListingsGroups query ,response", query, response);
      const rtnListings = response?.data?.rows || [];
      set((state) => {
        state.listingsGroups[i].loadingListings = false;
        state.listingsGroups[i].statusListings = response?.status || "error";
        state.listingsGroups[i].listings = rtnListings;
      });
    });
  },

  doLoadListings: async () => {
    const req_pg = 1;
    const result_from = 0;
    const location_id = get().currentLocation._id;
    const locType = get().currentLocation.location_type;
    const search_type = locType == "building" ? "building" : "location";
    const sortId = get().listingsSortId || 0;
    const s = searchSorts.find((s) => s.id === sortId);
    const query = {
      ...intialQueryListings,
      search_type,
      location_type: locType,
      location_id,
      result_size: listingsPerPage,
      req_pg,
      result_from,
      sort_id: s.id,
      sort: s.fields,
    };
    set({
      loadingListings: true,
      statusListings: "",
      listings: [],
      listingsCount: 0,
      listingsPage: req_pg,
    });
    get().pullListingsMain(query);
    // get().pullListingsGroups();
    return true;
  },

  doLoadMoreListings: async () => {
    const cur_pg = get().listingsPage;
    const req_pg = cur_pg + 1;
    const result_from = cur_pg * listingsPerPage + 1;
    const location_id = get().currentLocation._id;
    const locType = get().currentLocation.location_type;
    const search_type = locType == "building" ? "building" : "location";
    const sortId = get().listingsSortId || 0;
    const s = searchSorts.find((s) => s.id === sortId);
    const query = {
      ...intialQueryListings,
      search_type,
      location_type: locType,
      location_id,
      result_size: listingsPerPage,
      req_pg,
      result_from,
      sort_id: s.id,
      sort: s.fields,
    };
    set({
      loadingListings: true,
      statusListings: "",
      listingsCount: 0,
      listingsPage: req_pg,
    });
    const rtn = await get().pullListingsMain(query);
    return rtn;
  },
  doChangeListingsSort: async (sortId) => {
    set({
      listingsSortId: sortId,
    });
    const r = await get().doLoadListings();
    if (r) {
      get().goToPage("results");
    }
    return r;
  },
  doSearchLocationById: async (locationId, locSrc) => {
    const objLocation = await get().pullLocationById(locationId);
    console.log("doSearchLocationById", objLocation);
    if (objLocation) return await get().doSearchLocation(objLocation, locSrc);
  },
  doSearchLocation: async (objLocation, locSrc) => {
    const l = await get().setLocation(objLocation, locSrc);
    const r = await get().doLoadListings();
    if (r) {
      if ((locSrc || "") != "results") {
        get().goToPage("results");
      }
    }
  },

  doSearchBuilding: async (objLocation, locSrc) => {
    const location_type = objLocation.location_type;

    const req_pg = 1;
    const result_from = 0;
    const location_id = objLocation._id || objLocation.id;
    const search_type = location_type == "building" ? "building" : "location";
    const query = {
      ...intialQueryListings,
      search_type,
      location_type,
      location_id,
      result_size: listingsPerPage,
      req_pg,
      result_from,
    };
    set({
      loadingListings: true,
      statusListings: "",
    });
    console.log("doSearchBuilding query", query);
    const response = await get().pullListings(query);
    console.log("doSearchBuilding query ,response", query, response);

    const listingsCount = parseInt(response?.data?.total || 0);

    set({
      statusListings: response?.status || "error",
      loadingListings: false,
    });
    get().doShowListingByListing(response?.data?.rows[0]);
    return listingsCount;
  },
  getListingRoi: (listing) => {
    const avgPrice = listing?.avg_price_calc || 0;
    const units = parseInt(listing?.total_units) || 0;
    const costMoSub = parseInt(listing?.bld_product_cost || 0);

    const cardMoSub = 0;
    const cardPrice = 0.85;
    const pkgCards = {
      base: 0,
      x1: calcPkgCards("x1", units, cardMoSub),
      x2: calcPkgCards("x2", units, cardMoSub),
    };
    const pkgPrices = {
      base: 0,
      x1: Math.floor(pkgCards.x1 * cardPrice),
      x2: Math.floor(pkgCards.x2 * cardPrice),
    };
    const roi = {
      ...initRoi,
      costMoSub,
      cardMoSub,
      avgPrice,
      pkgPrices,
      pkgCards,
      units,
      bid: listing.pbid,
      bldgPrice: costMoSub,
    };
    // console.log("getListing", id, srcCollection, listing, roi);

    // set({ totalROI: roi });
    const totalROI = get().calcTotalRoi(roi);

    return { listing, totalROI };
  },
  getListingById: (id, srcCollection) => {
    const collection = srcCollection || "main";
    let listing = null;
    if (collection == "main") {
      listing = get().listings.find((l) => l.pbid == id);
    } else {
      listing = get()
        .listingsGroups.find((g) => g.name == srcCollection)
        .listings.find((l) => l.pbid == id);
    }
    return listing;
  },
  setCurrentListingRoi: (listing_roi) => {
    if (listing_roi.listing) {
      set((state) => {
        state.currentListing = listing_roi.listing;
        state.currentListing_ = parseInt(new Date().getTime());
        state.totalROI = listing_roi.totalROI;
      });
      return true;
    }
    return false;
  },
  getCurrentListingRoi: () => {
    return { listing: get().currentListing, totalROI: get().totalROI };
  },
  doShowListing: (listing_roi) => {
    const isSet = get().setCurrentListingRoi(listing_roi);
    console.log("doShowListingById", isSet, listing_roi);
    if (isSet) {
      get().goToPage("detail");
    }
  },
  doShowListingByListingAndRoi: (listing, roi) => {
    return get().doShowListing({ listing, totalROI: roi });
  },
  doShowListingByListing: (listing) => {
    const listing_roi = get().getListingRoi(listing);
    return get().doShowListing(listing_roi);
  },
  doShowListingById: (id, srcCollection) => {
    get().doShowListingByListing(get().getListingById(id, srcCollection));
    // console.log("doShowListingById", id, srcCollection, listing_roi);
  },
  doAddListingToCartById: (id, srcCollection) => {
    get().getListingRoi(get().getListingById(id, srcCollection));
    // console.log("doShowListingById", id, srcCollection, listing_roi);
  },
  doAddListingToCartByListinAndRoi: (listing, totalROI) => {
    get().addListingToCart({ listing, totalROI });
    // console.log("doShowListingById", id, srcCollection, listing_roi);
  },
  doAddListingToCartByListing: (listing) => {
    get().addListingToCart(get().getListingRoi(listing));
    // console.log("doShowListingById", id, srcCollection, listing_roi);
  },
  doAddListingToCart: (listing_roi) => {
    get().addListingToCart(listing_roi);
  },
  doAddListingToCartCurrent: () => {
    const listing_roi = get().getCurrentListingRoi();
    console.log("doAddListingToCartCurrent 1", listing_roi);
    get().addListingToCart(listing_roi);
    console.log("doAddListingToCartCurrent 2", listing_roi);
  },
  doDelListingFromCart: (id) => {
    return get().removeListingFromCart(id);
    // console.log("doShowListingById", id, srcCollection, listing_roi);
  },
  checkIsFavorite: (id) => {
    return get().favorites.some((f) => f?.pbid === id);
  },
  doDelListingFromFavorite: (id) => {
    if (id) {
      set((state) => {
        state.favorites.splice(
          state.favorites.findIndex((item) => item.pbid === id),
          1
        );
      });
    }
    console.log("doAddListingToFavorite", id, get().favorites);
    // console.log("doShowListingById", id, srcCollection, listing_roi);
  },
  doAddListingToFavorite: (listing) => {
    const isFav = get().favorites.find((l) => l.pbid == listing.pbid);
    if (!isFav) {
      set((state) => {
        state.favorites.push(listing);
      });
    }
    console.log("doAddListingToFavorite", isFav, get().favorites, listing);
    // console.log("doShowListingById", id, srcCollection, listing_roi);
  },
});

export const useShopStore = create(
  persist(
    immer((...a) => ({
      ...sliceShopMain(...a),
      ...sliceShopLocation(...a),
      ...sliceShopRoi(...a),
      ...sliceShopCart(...a),
    })),
    {
      //serialize: (state) => btoa(JSON.stringify(state)),
      //deserialize: (str) => JSON.parse(atob(str)),
      name: "shop-store", // name of item in the storage (must be unique)
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export default useShopStore;
